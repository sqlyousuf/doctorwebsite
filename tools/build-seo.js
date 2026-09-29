#!/usr/bin/env node
/*
 * Generates robots.txt and sitemap.xml from tools/site.js.
 *
 *     node tools/build-seo.js
 *
 * The page list lives in site.js so the sitemap cannot quietly fall behind the
 * pages that actually exist — this script fails if a listed page is missing
 * from disk, or if a built page is missing from the list.
 */

const fs = require('fs');
const path = require('path');
const { ORIGIN, PAGES: ALL_PAGES } = require('./site.js');
const { pages: procedurePages } = require('./content/procedures.js');
const { pages: aboutPages } = require('./content/about.js');

/*
 * A draft page is noindex and must stay out of the sitemap — listing a page
 * you have told crawlers to ignore is a contradictory signal. site.js lists
 * every procedure path, so the draft slugs are filtered out here rather than
 * maintained in two places.
 */
const DRAFT_SLUGS = new Set(
  [...procedurePages, ...aboutPages].filter((p) => p.draft).map((p) => p.slug)
);
const isDraft = (p) => [...DRAFT_SLUGS].some((slug) => p.endsWith(`/${slug}.html`));
const PAGES = ALL_PAGES.filter((x) => !isDraft(x.path));

const root = path.join(__dirname, '..');

/** Map a sitemap path to the file that serves it. */
const fileFor = (p) => (p.endsWith('/') ? path.join(root, p, 'index.html') : path.join(root, p));

const problems = [];
for (const { path: p, es } of PAGES) {
  if (!fs.existsSync(fileFor(p))) problems.push(`listed in site.js but not on disk: ${p}`);
  if (es && !fs.existsSync(fileFor(es))) problems.push(`listed in site.js but not on disk: ${es}`);
}

// And the reverse: every built patient-center page must be in the list.
const listed = new Set(PAGES.map((x) => x.path));
for (const dir of ['patient-center', 'procedures']) {
  for (const f of fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith('.html'))) {
    const rel = `/${dir}/${f}`;
    if (!listed.has(rel) && !isDraft(rel)) problems.push(`on disk but missing from site.js PAGES: ${rel}`);
  }
}

if (problems.length) {
  console.error('build-seo: sitemap and site are out of sync:');
  console.error(problems.map((p) => `  ${p}`).join('\n'));
  process.exit(1);
}

// Use each file's own last-modified date rather than today's, so re-running the
// build does not tell search engines every page changed.
const lastmod = (p) => fs.statSync(fileFor(p)).mtime.toISOString().slice(0, 10);

const urls = PAGES.map(({ path: p, priority, es }) => {
  const alts = es
    ? `\n    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${p}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="es" href="${ORIGIN}${es}"/>` +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${p}"/>`
    : '';
  return `  <url>
    <loc>${ORIGIN}${p}</loc>
    <lastmod>${lastmod(p)}</lastmod>
    <priority>${priority}</priority>${alts}
  </url>`;
}).join('\n');

// Each Spanish page is its own URL and belongs in the sitemap too.
const esUrl = PAGES.filter((x) => x.es)
  .map(
    (x) => `  <url>
    <loc>${ORIGIN}${x.es}</loc>
    <lastmod>${lastmod(x.es)}</lastmod>
    <priority>${x.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${x.path}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${ORIGIN}${x.es}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${x.path}"/>
  </url>`
  )
  .join(String.fromCharCode(10));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
${esUrl}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(root, 'robots.txt'), robots, 'utf8');
console.log(`build-seo: wrote sitemap.xml (${PAGES.length + PAGES.filter((x) => x.es).length} urls) and robots.txt`);
