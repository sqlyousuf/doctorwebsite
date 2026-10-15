/*
 * Cloudflare Worker for the site.
 *
 * Static files are served straight from the assets upload; only /api/* reaches
 * this code (see run_worker_first in wrangler.jsonc).
 *
 * POST /api/appointment
 *   Takes the appointment dialog's fields as JSON, checks the Turnstile token,
 *   and emails the request to the practice through Microsoft 365 (Graph
 *   sendMail), so it stays inside the practice's own mail tenant.
 *
 * Configuration (Cloudflare dashboard → the Worker → Settings → Variables):
 *   vars     MAIL_TO            inbox that receives requests
 *            MAIL_FROM          M365 mailbox the app is allowed to send as
 *   secrets  TURNSTILE_SECRET   Turnstile widget secret key
 *            MS_TENANT_ID       Entra tenant (directory) ID
 *            MS_CLIENT_ID       Entra app registration (client) ID
 *            MS_CLIENT_SECRET   Entra app client secret
 *
 * Patient details are never logged: failures log only which step failed and
 * the upstream status code.
 */

const MAX_BODY_BYTES = 8 * 1024;
const MAX_FIELD = 120;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const VISIT_TYPES = ['In-Office Visit', 'Virtual Visit'];
const PATIENT_TYPES = ['New', 'Returning'];
const REQUIRED_CONFIG = ['MAIL_TO', 'MAIL_FROM', 'TURNSTILE_SECRET', 'MS_TENANT_ID', 'MS_CLIENT_ID', 'MS_CLIENT_SECRET'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/appointment') return handleAppointment(request, env, url);
    if (url.pathname.startsWith('/api/')) return json({ ok: false, error: 'not_found' }, 404);
    return env.ASSETS.fetch(request);
  },
};

async function handleAppointment(request, env, url) {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
  }

  // Only the site's own pages may post here.
  const origin = request.headers.get('Origin');
  if (!origin || new URL(origin).host !== url.host) {
    return json({ ok: false, error: 'forbidden' }, 403);
  }

  const missingConfig = REQUIRED_CONFIG.filter((k) => !env[k]);
  if (missingConfig.length) {
    console.error('appointment: missing configuration', missingConfig.join(','));
    return json({ ok: false, error: 'not_configured' }, 503);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: 'too_large' }, 413);

  let input;
  try {
    input = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  const field = (k) => String(input?.[k] ?? '').trim().slice(0, MAX_FIELD);
  const req = {
    visitType: field('visitType'),
    patientType: field('patientType'),
    firstName: field('firstName'),
    lastName: field('lastName'),
    email: field('email'),
    phone: field('phone'),
    dob: field('dob'),
    lang: field('lang') === 'es' ? 'es' : 'en',
  };

  if (
    !req.firstName ||
    !req.lastName ||
    !req.phone ||
    !EMAIL_RE.test(req.email) ||
    !VISIT_TYPES.includes(req.visitType) ||
    !PATIENT_TYPES.includes(req.patientType)
  ) {
    return json({ ok: false, error: 'invalid' }, 400);
  }

  const human = await verifyTurnstile(env, field('turnstileToken'), request.headers.get('CF-Connecting-IP'));
  if (!human) return json({ ok: false, error: 'verification_failed' }, 400);

  try {
    await sendMail(env, req);
  } catch (err) {
    console.error('appointment: send failed', err.message);
    return json({ ok: false, error: 'send_failed' }, 502);
  }

  return json({ ok: true });
}

async function verifyTurnstile(env, token, ip) {
  if (!token) return false;
  const form = new FormData();
  form.append('secret', env.TURNSTILE_SECRET);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  if (!res.ok) {
    console.error('appointment: turnstile status', res.status);
    return false;
  }
  const result = await res.json();
  return result.success === true;
}

// Client-credentials tokens last about an hour; reuse one while this isolate lives.
let cachedToken = null;

async function graphToken(env) {
  if (cachedToken && cachedToken.expires > Date.now() + 60_000) return cachedToken.value;
  const res = await fetch(`https://login.microsoftonline.com/${env.MS_TENANT_ID}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.MS_CLIENT_ID,
      client_secret: env.MS_CLIENT_SECRET,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });
  if (!res.ok) throw new Error(`token status ${res.status}`);
  const data = await res.json();
  cachedToken = { value: data.access_token, expires: Date.now() + data.expires_in * 1000 };
  return cachedToken.value;
}

async function sendMail(env, req) {
  const name = `${req.firstName} ${req.lastName}`;
  const content = [
    'New appointment request from the website.',
    '',
    `Visit type:     ${req.visitType}`,
    `Patient:        ${req.patientType}`,
    `Name:           ${name}`,
    `Email:          ${req.email}`,
    `Phone:          ${req.phone}`,
    `Date of birth:  ${req.dob || '(not given)'}`,
    `Language:       ${req.lang === 'es' ? 'Spanish' : 'English'}`,
    '',
    'Reply to this email to answer the patient directly.',
  ].join('\n');

  const token = await graphToken(env);
  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(env.MAIL_FROM)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: {
        subject: `Appointment Request — ${name}`,
        body: { contentType: 'Text', content },
        toRecipients: [{ emailAddress: { address: env.MAIL_TO } }],
        replyTo: [{ emailAddress: { address: req.email, name } }],
      },
      saveToSentItems: false,
    }),
  });
  if (res.status !== 202) throw new Error(`sendMail status ${res.status}`);
}

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
  });
}
