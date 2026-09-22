#!/usr/bin/env node
/*
 * Generates the Patient Center pages, in both languages:
 *
 *     patient-center/<slug>.html        English
 *     es/patient-center/<slug>.html     Spanish
 *
 *     node tools/build-patient-center.js
 *
 * Content comes from tools/patient-center-content.js and its Spanish twin
 * tools/content/patient-center.es.js. The chrome — sprite, header, nav, footer
 * — is shared with the procedure pages via tools/chrome.js and lifted out of
 * index.html, so it cannot drift from the home page.
 *
 * Every English page must have a Spanish twin of the same shape. The parity
 * check at the bottom fails the build otherwise, so a new English section
 * cannot quietly ship as a half-translated Spanish page.
 */

const fs = require('fs');
const path = require('path');
const { pages, PHONE, PHONE_HREF } = require('./patient-center-content.js');
const { translations } = require('./content/patient-center.es.js');
const { ORIGIN } = require('./site.js');
const { UI } = require('./i18n.js');
const { root, sprite, footerFor, buildNav, header, tail, escapeAttr, plain, navLabel } = require('./chrome.js');

/** Where each language's pages live, and how they climb back to the root. */
const LANGS = {
  en: { dir: 'patient-center', up: '../', urlBase: '/patient-center/' },
  es: { dir: 'es/patient-center', up: '../../', urlBase: '/es/patient-center/' },
};

/** The page's own fields in the requested language. */
function localised(page, lang) {
  if (lang === 'en') return page;
  const es = translations[page.slug];
  if (!es) throw new Error(`build-patient-center: no Spanish translation for "${page.slug}"`);
  return { ...page, ...es };
}

const breadcrumb = (t, title, slug, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: t.home, item: `${ORIGIN}/${lang === 'es' ? 'es/' : ''}` },
    { '@type': 'ListItem', position: 2, name: t.patientCenter, item: `${ORIGIN}${LANGS[lang].urlBase}self-pay.html` },
    { '@type': 'ListItem', position: 3, name: title, item: `${ORIGIN}${LANGS[lang].urlBase}${slug}.html` },
  ],
});

/** The "explore the rest of the Patient Center" grid at the foot of each page. */
function relatedGrid(currentSlug, lang, t) {
  const cards = pages
    .filter((p) => p.slug !== currentSlug)
    .map(
      (p) => `      <a class="pc-link" href="${p.slug}.html">
        <span class="pc-link-label">${navLabel(p, lang)}</span>
        <svg aria-hidden="true"><use href="#ic-arrow"/></svg>
      </a>`
    )
    .join('\n');
  return `<section class="pad-lg pc-related">
  <div class="container">
    <h2 class="display center">${t.moreInPatientCenter}</h2>
    <div class="pc-link-grid">
${cards}
    </div>
  </div>
</section>`;
}

function renderPage(basePage, lang) {
  const page = localised(basePage, lang);
  const t = UI[lang];
  const { up, urlBase } = LANGS[lang];
  const title = plain(page.title);
  const url = `${ORIGIN}${urlBase}${page.slug}.html`;
  // The same page in the other language, so switching keeps the reader here.
  const twin = lang === 'en' ? `../es/patient-center/${page.slug}.html` : `../../patient-center/${page.slug}.html`;
  const img = path.basename(basePage.image);

  const nav = buildNav({ lang, up, home: '../index.html', pcPrefix: '', active: { patientCenter: page.slug } });
  const footer = footerFor({ lang, up, pcPrefix: '', home: '../index.html' });

  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${page.seoTitle || `${title} | Houston Surgical Weight Loss`}</title>
<meta name="description" content="${escapeAttr(page.description)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${ORIGIN}/patient-center/${page.slug}.html">
<link rel="alternate" hreflang="es" href="${ORIGIN}/es/patient-center/${page.slug}.html">
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/patient-center/${page.slug}.html">
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
<script type="application/ld+json">
${JSON.stringify(breadcrumb(t, title, page.slug, lang), null, 2)}
</script>
<!-- Generated by tools/build-patient-center.js — do not edit by hand. -->
</head>
<body>

${sprite}

<!-- ======================= HEADER ======================= -->
${header({ nav, lang, up, home: '../index.html' })}

<!-- ======================= PAGE HERO ======================= -->
<section class="page-hero" id="top">
  <img class="page-hero-img" src="${up}media/img/${img}" alt="" loading="eager" fetchpriority="high">
  <div class="page-hero-scrim" aria-hidden="true"></div>
  <div class="page-hero-inner container">
    <p class="page-hero-kicker">${t.patientCenter}</p>
    <h1 class="page-hero-title">${page.title}</h1>
    <p class="page-hero-tag">${page.tagline}</p>
  </div>
</section>

<nav class="crumbs" aria-label="${t.breadcrumbLabel}">
  <div class="container">
    <a href="../index.html">${t.home}</a>
    <span aria-hidden="true">/</span>
    <span>${t.patientCenter}</span>
    <span aria-hidden="true">/</span>
    <span aria-current="page">${title}</span>
  </div>
</nav>

<!-- ======================= CONTENT ======================= -->
<article class="pad-lg">
  <div class="container narrow prose">
${page.body.trim()}
  </div>
</article>

<!-- ======================= CTA ======================= -->
<section class="pc-cta">
  <div class="container center-block">
    <h2 class="display center">${t.ctaHeading}</h2>
    <p class="intro center">${t.ctaBody}</p>
    <div class="contact-actions">
      <a href="${PHONE_HREF}" class="btn btn-solid"><svg><use href="#ic-phone"/></svg> ${PHONE}</a>
      <a href="../index.html#contact" class="btn btn-outline-light">${t.ctaButton}</a>
    </div>
  </div>
</section>

${relatedGrid(page.slug, lang, t)}

${footer}

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

// index.html carries the same dropdown, written by hand.
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const p of pages) {
  if (!src.includes(`href="patient-center/${p.slug}.html"`)) {
    problems.push(`index.html is missing a dropdown link for ${p.nav}`);
  }
}

// Every English page needs a Spanish twin of the same shape. Counting the
// structural elements catches the realistic failure — a section added in
// English and forgotten in Spanish — without demanding a string-for-string map
// of seven thousand words.
const shape = (html) => ({
  h2: (html.match(/<h2/g) || []).length,
  h3: (html.match(/<h3/g) || []).length,
  li: (html.match(/<li/g) || []).length,
  details: (html.match(/<details/g) || []).length,
  table: (html.match(/<table/g) || []).length,
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
  for (const field of ['title', 'tagline', 'description']) {
    if (!es[field]) problems.push(`${p.slug}: Spanish ${field} is missing`);
  }
}

if (problems.length) {
  console.error(`build-patient-center: ${problems.length} problem(s):`);
  console.error(problems.map((p) => `  ${p}`).join('\n'));
  process.exit(1);
}

console.log(`build-patient-center: wrote ${pages.length} pages x 2 languages`);
