#!/usr/bin/env node
/*
 * Generates the procedure pages, in both languages:
 *
 *     procedures/<slug>.html        English
 *     es/procedures/<slug>.html     Spanish
 *
 *     node tools/build-procedures.js
 *
 * Content comes from tools/content/procedures.js — imported verbatim from the
 * practice's own /services/ pages — and its Spanish twin procedures.es.js.
 * Chrome is shared with the Patient Center pages via tools/chrome.js, so the
 * header, footer and sprite stay in lockstep with index.html.
 *
 * A page marked `draft: true` gets a review banner, a noindex tag, and is kept
 * out of the sitemap, so it can be previewed live without being found.
 *
 * As with the Patient Center, every English page must have a Spanish twin of
 * the same shape; the parity check at the bottom fails the build otherwise.
 */

const fs = require('fs');
const path = require('path');
const { pages, PHONE, PHONE_HREF } = require('./content/procedures.js');
const { translations } = require('./content/procedures.es.js');
const { ORIGIN } = require('./site.js');
const { UI } = require('./i18n.js');
const { root, sprite, footerFor, apptModalFor, buildNav, header, tail, escapeAttr, plain } = require('./chrome.js');

/** Where each language's pages live, and how they climb back to the root. */
const LANGS = {
  en: { dir: 'procedures', up: '../', urlBase: '/procedures/' },
  es: { dir: 'es/procedures', up: '../../', urlBase: '/es/procedures/' },
};

/** The page's own fields in the requested language. */
function localised(page, lang) {
  if (lang === 'en') return page;
  const es = translations[page.slug];
  if (!es) throw new Error(`build-procedures: no Spanish translation for "${page.slug}"`);
  return { ...page, ...es };
}

const breadcrumb = (t, title, slug, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: t.home, item: `${ORIGIN}/${lang === 'es' ? 'es/' : ''}` },
    { '@type': 'ListItem', position: 2, name: t.procedures, item: `${ORIGIN}/${lang === 'es' ? 'es/' : ''}#services` },
    { '@type': 'ListItem', position: 3, name: title, item: `${ORIGIN}${LANGS[lang].urlBase}${slug}.html` },
  ],
});

/** Pull the FAQ pairs straight out of the rendered body, so the two cannot disagree. */
function faqSchema(body) {
  const items = [...body.matchAll(/<summary>(.*?)<span class="faq-icon"[\s\S]*?<\/summary>([\s\S]*?)<\/details>/g)].map(
    ([, q, a]) => ({
      '@type': 'Question',
      name: plain(q).trim(),
      acceptedAnswer: { '@type': 'Answer', text: plain(a).replace(/\s+/g, ' ').trim() },
    })
  );
  return items.length ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items } : null;
}

const draftBanner = (page) => `<aside class="draft-banner">
  <div class="container">
    <p class="draft-title"><svg aria-hidden="true"><use href="#ic-info"/></svg> Draft — not yet reviewed by Dr. Wadiwala</p>
    <p>This page is a working draft. It is served <code>noindex</code> and kept out of the sitemap until it is signed
    off.</p>
    <p class="draft-sub">Before publishing, please confirm:</p>
    <ol class="prose-steps">
${(page.reviewNotes || []).map((n) => `      <li>${n}</li>`).join('\n')}
    </ol>
  </div>
</aside>`;

function renderPage(basePage, lang) {
  const page = localised(basePage, lang);
  const t = UI[lang];
  const { up, urlBase } = LANGS[lang];
  const title = plain(page.title);
  const url = `${ORIGIN}${urlBase}${page.slug}.html`;
  // The same page in the other language, so switching keeps the reader here.
  const twin = lang === 'en' ? `../es/procedures/${page.slug}.html` : `../../procedures/${page.slug}.html`;
  const img = path.basename(basePage.image);

  const nav = buildNav({ lang, up, home: '../index.html', pcPrefix: '../patient-center/' });
  const footer = footerFor({ lang, up, pcPrefix: '../patient-center/', home: '../index.html' });

  const faq = faqSchema(page.body);
  const procedure = {
    '@context': 'https://schema.org',
    ...page.procedureSchema,
    url,
    provider: { '@id': `${ORIGIN}/#clinic` },
  };
  const blocks = [breadcrumb(t, title, page.slug, lang), procedure, faq]
    .filter(Boolean)
    .map((b) => `<script type="application/ld+json">\n${JSON.stringify(b, null, 2)}\n</script>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${page.seoTitle || `${title} | Houston Surgical Weight Loss`}</title>
<meta name="description" content="${escapeAttr(page.description)}">
${page.draft ? '<meta name="robots" content="noindex, nofollow">\n' : ''}<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${ORIGIN}/procedures/${page.slug}.html">
<link rel="alternate" hreflang="es" href="${ORIGIN}/es/procedures/${page.slug}.html">
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/procedures/${page.slug}.html">
<link rel="icon" type="image/png" href="${up}media/favicon.png">
<link rel="apple-touch-icon" href="${up}media/favicon.png">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Houston Surgical Weight Loss">
<meta property="og:locale" content="${lang === 'es' ? 'es_ES' : 'en_US'}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(page.description)}">
<meta property="og:image" content="${ORIGIN}/media/img/${img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(title)}">
<meta name="twitter:description" content="${escapeAttr(page.description)}">
<meta name="twitter:image" content="${ORIGIN}/media/img/${img}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}css/style.css">
${blocks}
<!-- Generated by tools/build-procedures.js — do not edit by hand. -->
</head>
<body>

${sprite}

<!-- ======================= HEADER ======================= -->
${header({ nav, lang, up, home: '../index.html' })}
${page.draft ? '\n' + draftBanner(page) + '\n' : ''}
<!-- ======================= PAGE HERO ======================= -->
<section class="page-hero" id="top">
  <img class="page-hero-img" src="${up}media/img/${img}" alt="" loading="eager" fetchpriority="high">
  <div class="page-hero-scrim" aria-hidden="true"></div>
  <div class="page-hero-inner container">
    <p class="page-hero-kicker">${t.procedures}</p>
    <h1 class="page-hero-title">${page.title}</h1>
    <p class="page-hero-tag">${page.tagline}</p>
  </div>
</section>

<nav class="crumbs" aria-label="${t.breadcrumbLabel}">
  <div class="container">
    <a href="../index.html">${t.home}</a>
    <span aria-hidden="true">/</span>
    <a href="../index.html#services">${t.procedures}</a>
    <span aria-hidden="true">/</span>
    <span aria-current="page">${title}</span>
  </div>
</nav>

<section class="proc-stats">
  <div class="container">
    <dl class="proc-stat-row">
${page.stats.map(([f, l]) => `      <div><dt>${f}</dt><dd>${l}</dd></div>`).join('\n')}
    </dl>
  </div>
</section>

<!-- ======================= CONTENT ======================= -->
<article class="pad-lg">
  <div class="container narrow prose">
${page.body.trim()}
  </div>
</article>

<!-- ======================= CTA ======================= -->
<section class="pc-cta">
  <div class="container center-block">
    <h2 class="display center">${t.procCtaHeading}</h2>
    <p class="intro center">${t.procCtaBody}</p>
    <div class="contact-actions">
      <a href="${PHONE_HREF}" class="btn btn-solid"><svg><use href="#ic-phone"/></svg> ${PHONE}</a>
      <a href="../index.html#contact" class="btn btn-outline-light" data-appt-open>${t.ctaButton}</a>
    </div>
  </div>
</section>

${footer}

${apptModalFor(lang)}

${tail({ lang, twin, home: '../index.html' })}

<script src="${up}js/main.js"></script>
</body>
</html>
`;
}

/* ---------- write ---------- */

for (const [lang, { dir }] of Object.entries(LANGS)) {
  const out = path.join(root, dir);
  fs.mkdirSync(out, { recursive: true });
  for (const page of pages) fs.writeFileSync(path.join(out, `${page.slug}.html`), renderPage(page, lang), 'utf8');
}

/* ---------- checks ---------- */

const problems = [];
const shape = (html) => ({
  h2: (html.match(/<h2/g) || []).length,
  h3: (html.match(/<h3/g) || []).length,
  li: (html.match(/<li/g) || []).length,
  details: (html.match(/<details/g) || []).length,
});
for (const p of pages) {
  const es = translations[p.slug];
  if (!es) {
    problems.push(`no Spanish translation for ${p.slug}`);
    continue;
  }
  const a = shape(p.body);
  const b = shape(es.body);
  for (const k of Object.keys(a)) {
    if (a[k] !== b[k]) problems.push(`${p.slug}: English has ${a[k]} <${k}>, Spanish has ${b[k]}`);
  }
  if ((p.stats || []).length !== (es.stats || []).length) {
    problems.push(`${p.slug}: ${p.stats.length} stats in English, ${(es.stats || []).length} in Spanish`);
  }
  for (const field of ['title', 'tagline', 'description']) {
    if (!es[field]) problems.push(`${p.slug}: Spanish ${field} is missing`);
  }
}

if (problems.length) {
  console.error(`build-procedures: ${problems.length} problem(s):`);
  console.error(problems.map((p) => `  ${p}`).join('\n'));
  process.exit(1);
}

const drafts = pages.filter((p) => p.draft).length;
console.log(
  `build-procedures: wrote ${pages.length} pages x 2 languages` + (drafts ? ` — ${drafts} still draft` : '')
);
