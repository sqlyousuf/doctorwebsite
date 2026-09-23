#!/usr/bin/env node
/*
 * One-off importer: turns the practice's existing /services/ pages into the
 * content module that tools/build-procedures.js consumes.
 *
 *     node tools/import-procedures.js <dir-of-saved-html> > tools/content/procedures.generated.js
 *
 * Why parse the HTML rather than retype it: these are the practice's own
 * clinical descriptions, and every one of them must survive the move word for
 * word. Their pages use plain <h2>/<p>/<ul> markup, so walking that is both
 * more faithful and more auditable than transcribing 6,000 words by hand.
 *
 * The FAQ section is recognised by its heading and its <h3>-per-question
 * shape, and converted into the accordion the rest of our site uses.
 */

const fs = require('fs');
const path = require('path');

const srcDir = process.argv[2];
if (!srcDir) {
  console.error('usage: node tools/import-procedures.js <dir-of-saved-html>');
  process.exit(1);
}

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

/** Keep <strong> and <em>, drop everything else, re-escape stray ampersands. */
const inline = (s) =>
  s
    .replace(/<(?!\/?(strong|em|b|i)\b)[^>]*>/g, '')
    .replace(/<b\b[^>]*>/g, '<strong>')
    .replace(/<\/b>/g, '</strong>')
    .replace(/<i\b[^>]*>/g, '<em>')
    .replace(/<\/i>/g, '</em>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8212;|&mdash;/g, '—')
    .replace(/&quot;/g, '"')
    .replace(/&/g, '&amp;')
    .replace(/&amp;(amp|lt|gt|quot|#\d+);/g, '&$1;')
    .replace(/\s+/g, ' ')
    .trim();

/** Everything between the page's own H1-ish heading and the footer. */
function contentRegion(html) {
  const start = html.search(/<h[12][^>]*>[^<]*(Specialist in Houston|Comprehensive Surgical Care|Minimally Invasive Surgery with Faster Recovery)/i);
  if (start === -1) return null;
  const tail = html.indexOf('About Us', start);
  return html.slice(start, tail === -1 ? html.length : tail);
}

/** Walk the block elements in order. */
function blocks(region) {
  const out = [];
  const re = /<(h1|h2|h3|h4|p|ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(region))) {
    const tag = m[1].toLowerCase();
    const raw = m[2];
    if (tag === 'ul' || tag === 'ol') {
      const items = [...raw.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((x) => inline(x[1])).filter(Boolean);
      if (items.length) out.push({ tag, items });
    } else {
      const text = inline(raw);
      if (text) out.push({ tag, text });
    }
  }
  return out;
}

const FAQ_HEADING = /frequently asked questions/i;
const WHY_HEADING = /^why choose/i;

function convert(file) {
  const html = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const region = contentRegion(html);
  if (!region) return { file, error: 'content region not found' };

  const bs = blocks(region);
  const title = decode(bs[0].text || '');
  const body = [];
  const faqs = [];
  let inFaq = false;
  let pendingQ = null;

  for (const b of bs.slice(1)) {
    if (b.tag === 'h2' || b.tag === 'h3' || b.tag === 'h4') {
      if (FAQ_HEADING.test(b.text)) {
        inFaq = true;
        continue;
      }
      if (inFaq && WHY_HEADING.test(b.text)) inFaq = false;
      if (inFaq) {
        pendingQ = { q: b.text, a: [] };
        faqs.push(pendingQ);
        continue;
      }
      body.push({ type: b.tag === 'h2' ? 'h2' : 'h3', text: b.text });
      continue;
    }
    const target = inFaq && pendingQ ? pendingQ.a : body;
    if (b.tag === 'ul' || b.tag === 'ol') target.push({ type: 'list', ordered: b.tag === 'ol', items: b.items });
    else if (!/^make an appointment$/i.test(b.text)) target.push({ type: 'p', text: b.text });
  }

  return { file, title, body, faqs };
}

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.html'));
const pages = files.map(convert);

const bad = pages.filter((p) => p.error);
if (bad.length) {
  console.error('import-procedures: could not parse ' + bad.map((b) => b.file).join(', '));
  process.exit(1);
}

console.log(JSON.stringify(pages, null, 2));
