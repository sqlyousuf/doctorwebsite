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
  // Pull tables out first and leave a marker, so the paragraph walker below
  // does not shred their cells into standalone blocks.
  const tables = [];
  region = region.replace(/<table\b[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => {
    const rows = [...inner.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((r) =>
      [...r[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((c) => inline(c[1]))
    );
    if (!rows.length) return '';
    tables.push(rows);
    return `<p>::table${tables.length - 1}::</p>`;
  });
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
      const marker = /^::table(\d+)::$/.exec(text);
      if (marker) {
        out.push({ tag: 'table', rows: tables[Number(marker[1])] });
        continue;
      }
      // Their CMS leaves empty headings behind as <h3><strong></strong></h3>.
      // inline() keeps <strong>, so the string is truthy while the heading is
      // blank — test the text content, not the markup.
      if (text.replace(/<[^>]+>/g, '').trim()) out.push({ tag, text });
    }
  }
  return out;
}

const FAQ_HEADING = /frequently asked questions/i;
const WHY_HEADING = /^why (choose|patients trust)/i;

/*
 * Sections to drop rather than import.
 *
 * Their pages repeat an "About / Contact Us Today" block in the body, which
 * duplicates our footer — and on three pages its email line comes through as
 * "[email protected]", the placeholder Cloudflare's email obfuscation leaves
 * behind for scrapers. Carrying that onto a live page would be worse than
 * carrying nothing, so the whole block goes and the footer does that job.
 */
const DROP_SECTION = /^(about houston surgical weight loss|contact us today)/i;
/** Standalone call-to-action lines that are buttons on their site, not copy. */
const DROP_BLOCK = /^(make an appointment|schedule today|schedule a consultation)$/i;

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
  let dropping = false;

  for (const b of bs.slice(1)) {
    if (b.tag === 'h2' || b.tag === 'h3' || b.tag === 'h4') {
      // A dropped section runs until the next heading.
      dropping = DROP_SECTION.test(b.text);
      if (dropping) continue;
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
    if (dropping) continue;
    const target = inFaq && pendingQ ? pendingQ.a : body;
    if (b.tag === 'table') target.push({ type: 'table', rows: b.rows });
    else if (b.tag === 'ul' || b.tag === 'ol') target.push({ type: 'list', ordered: b.tag === 'ol', items: b.items });
    else if (!DROP_BLOCK.test(b.text)) target.push({ type: 'p', text: b.text });
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
