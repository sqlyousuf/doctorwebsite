#!/usr/bin/env node
/*
 * Generates the patient-center/ pages from tools/patient-center-content.js.
 *
 *     node tools/build-patient-center.js
 *
 * index.html stays the single source of truth for the chrome: the SVG sprite,
 * header and footer are lifted out of it at build time and re-pointed one
 * directory up, so a change to the brand mark or the footer address only has
 * to be made once. Re-run this after editing index.html or the content file.
 *
 * The Patient Center dropdown itself is shared markup — buildNav() below emits
 * it for these pages, and the same list is written into index.html by hand
 * (kept honest by the nav check at the bottom of this script).
 */

const fs = require('fs');
const path = require('path');
const { pages, PHONE, PHONE_HREF } = require('./patient-center-content.js');
const { ORIGIN, breadcrumbSchema } = require('./site.js');

const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'index.html');
const outDir = path.join(root, 'patient-center');

const src = fs.readFileSync(srcPath, 'utf8').replace(/\r\n/g, '\n');

/** Pull a block out of index.html, or fail loudly rather than ship a broken page. */
function extract(startMarker, endMarker, label) {
  const start = src.indexOf(startMarker);
  if (start === -1) throw new Error(`build-patient-center: could not find the ${label} start in index.html`);
  const end = src.indexOf(endMarker, start);
  if (end === -1) throw new Error(`build-patient-center: could not find the ${label} end in index.html`);
  return src.slice(start, end + endMarker.length);
}

const sprite = extract('<svg aria-hidden="true" style="position:absolute', '</svg>\n\n<!-- ======================= HEADER', 'SVG sprite')
  .replace(/\n\n<!-- =+ HEADER[\s\S]*$/, '');

const footer = extract('<footer class="site-footer">', '</footer>', 'footer')
  // The pages sit one level down, so the footer needs three rewrites — and
  // only three. Section anchors have to travel back to the home page, but
  // `<use href="#ic-…">` points at the inlined sprite in *this* document and
  // `href="#"` is a placeholder, so both must be left alone: matching only
  // `<a href="#word">` keeps them out of it.
  .replace(/<a href="#([a-z][\w-]*)"/g, '<a href="../index.html#$1"')
  .replace(/href="patient-center\//g, 'href="')
  .replace(/src="media\//g, 'src="../media/');

/* ---------- nav ---------- */

const PRIMARY = [
  ['../index.html#services', 'Procedures'],
  ['../index.html#about', 'Our Surgeon'],
  ['../index.html#process', 'How It Works'],
  ['../index.html#testimonials', 'Stories'],
  ['../index.html#insurance', 'Insurance'],
  ['../index.html#faq', 'FAQ'],
];

// The store is the one external item in the menu, and it now appears twice:
// as its own tab and as the child entry under Bariatric Vitamins. Take the URL
// from the page data so the two can never drift apart, and fail loudly if that
// entry is ever removed.
const VITAMIN_STORE = (() => {
  const store = pages.flatMap((p) => p.sub || []).find((s) => s.nav === 'Vitamin E Store');
  if (!store) throw new Error('build-patient-center: no Vitamin E Store entry in the page data');
  return store.href;
})();

/**
 * The Patient Center dropdown. `prefix` is '' on the home page and '' here too
 * (these pages are siblings inside patient-center/), `activeSlug` marks the
 * page you are on.
 */
function buildSubmenu(prefix, activeSlug) {
  const items = [];
  for (const page of pages) {
    const current = page.slug === activeSlug ? ' aria-current="page"' : '';
    items.push(`          <li><a href="${prefix}${page.slug}.html"${current}>${page.nav}</a></li>`);
    for (const sub of page.sub || []) {
      const attrs = sub.external ? ' target="_blank" rel="noopener"' : '';
      items.push(`          <li class="nav-sub-child"><a href="${sub.href}"${attrs}>${sub.nav}</a></li>`);
    }
  }
  return items.join('\n');
}

function buildNav(activeSlug) {
  const primary = PRIMARY.map(([href, label]) => `        <li><a href="${href}">${label}</a></li>`).join('\n');
  // Lantern gets a tab of its own, badged with its own mark, as well as its
  // place in the dropdown — the benefit is the reason a lot of these visitors
  // are here at all, and a logo is what they are scanning for.
  const current = activeSlug === 'lantern' ? ' aria-current="page"' : '';
  return `      <ul class="nav-links" id="navLinks">
${primary}
        <li class="has-sub">
          <a href="#" class="sub-toggle" aria-expanded="false" aria-haspopup="true">Patient Center<svg class="sub-caret" aria-hidden="true"><use href="#ic-caret"/></svg></a>
          <ul class="nav-sub">
${buildSubmenu('', activeSlug)}
          </ul>
        </li>
        <li class="nav-shop-item">
          <a href="${VITAMIN_STORE}" class="nav-shop" target="_blank" rel="noopener"
            aria-label="Vitamin E Store — opens in a new tab">
            <svg aria-hidden="true"><use href="#ic-cart"/></svg>
            <span>Vitamin E Store</span>
          </a>
        </li>
        <li class="nav-brand-item">
          <a href="lantern.html" class="nav-brand" aria-label="Lantern — employer-covered surgery"${current}>
            <img src="../media/lantern-logo.jpg" alt="Lantern" width="350" height="91" loading="lazy">
          </a>
        </li>
      </ul>`;
}

/* ---------- page template ---------- */

const escapeAttr = (s) => s.replace(/"/g, '&quot;');
/** Headings carry entities like &amp;; strip them back out for <title>. */
const plain = (s) => s.replace(/&amp;/g, '&').replace(/<[^>]+>/g, '');

/** The "explore the rest of the Patient Center" grid at the foot of each page. */
function relatedGrid(currentSlug) {
  const cards = pages
    .filter((p) => p.slug !== currentSlug)
    .map(
      (p) => `      <a class="pc-link" href="${p.slug}.html">
        <span class="pc-link-label">${p.nav}</span>
        <svg aria-hidden="true"><use href="#ic-arrow"/></svg>
      </a>`
    )
    .join('\n');
  return `<section class="pad-lg pc-related">
  <div class="container">
    <h2 class="display center">More in the Patient Center</h2>
    <div class="pc-link-grid">
${cards}
    </div>
  </div>
</section>`;
}

function renderPage(page) {
  const title = plain(page.title);
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${page.seoTitle || `${title} | Houston Surgical Weight Loss`}</title>
<meta name="description" content="${escapeAttr(page.description)}">
<link rel="canonical" href="${ORIGIN}/patient-center/${page.slug}.html">
<link rel="icon" type="image/png" href="../media/favicon.png">
<link rel="apple-touch-icon" href="../media/favicon.png">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Houston Surgical Weight Loss">
<meta property="og:url" content="${ORIGIN}/patient-center/${page.slug}.html">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(page.description)}">
<meta property="og:image" content="${page.image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(title)}">
<meta name="twitter:description" content="${escapeAttr(page.description)}">
<meta name="twitter:image" content="${page.image}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../css/style.css">
<script type="application/ld+json">
${JSON.stringify(breadcrumbSchema(title, `/patient-center/${page.slug}.html`), null, 2)}
</script>
<!-- Generated by tools/build-patient-center.js — do not edit by hand. -->
</head>
<body>

${sprite}

<!-- ======================= HEADER ======================= -->
<header class="site-header" id="siteHeader">
  <div class="header-inner">
    <a href="../index.html" class="brand">
      <img class="brand-mark" src="../media/logo-mark.png" alt="" width="405" height="583">
      <span class="brand-name">Houston Surgical</span>
      <span class="brand-name brand-name-lg">Weight Loss</span>
    </a>

    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
      <span></span>
    </button>

    <nav class="nav-wrap">
${buildNav(page.slug)}
    </nav>

    <a href="../index.html#insurance" class="btn btn-solid header-cta">See If You're Covered</a>
  </div>
</header>

<!-- ======================= PAGE HERO ======================= -->
<section class="page-hero" id="top">
  <img class="page-hero-img" src="${page.image}" alt="" loading="eager" fetchpriority="high">
  <div class="page-hero-scrim" aria-hidden="true"></div>
  <div class="page-hero-inner container">
    <p class="page-hero-kicker">Patient Center</p>
    <h1 class="page-hero-title">${page.title}</h1>
    <p class="page-hero-tag">${page.tagline}</p>
  </div>
</section>

<nav class="crumbs" aria-label="Breadcrumb">
  <div class="container">
    <a href="../index.html">Home</a>
    <span aria-hidden="true">/</span>
    <span>Patient Center</span>
    <span aria-hidden="true">/</span>
    <span aria-current="page">${plain(page.title)}</span>
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
    <h2 class="display center">Questions? We're Here to Help</h2>
    <p class="intro center">Call the office and one of our team will walk you through it — no appointment needed to
    ask a question.</p>
    <div class="contact-actions">
      <a href="${PHONE_HREF}" class="btn btn-solid"><svg><use href="#ic-phone"/></svg> ${PHONE}</a>
      <a href="../index.html#contact" class="btn btn-outline-light">Request a Consultation</a>
    </div>
  </div>
</section>

${relatedGrid(page.slug)}

${footer}

<nav class="lang-switch" aria-label="Language">
  <a href="#" hreflang="en" lang="en" class="is-active" aria-current="true"><svg class="flag" aria-hidden="true"><use href="#flag-us"/></svg>English</a>
  <a href="../es/index.html" hreflang="es" lang="es"><svg class="flag" aria-hidden="true"><use href="#flag-es"/></svg>Español</a>
</nav>

<a href="../index.html#contact" class="candidate-pill" id="candidatePill">Do I Qualify?</a>

<script src="../js/main.js"></script>${page.script ? `\n<script>${page.script.trim()}\n</script>` : ''}
</body>
</html>
`;
}

/* ---------- write ---------- */

fs.mkdirSync(outDir, { recursive: true });
for (const page of pages) {
  fs.writeFileSync(path.join(outDir, `${page.slug}.html`), renderPage(page), 'utf8');
}

// index.html carries the same dropdown, written by hand. If a menu item is
// added here and not there, the two menus silently disagree — so check.
const missing = pages
  .filter((p) => !src.includes(`href="patient-center/${p.slug}.html"`))
  .map((p) => p.nav);
if (missing.length) {
  console.error(`build-patient-center: index.html is missing dropdown link(s) for: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`build-patient-center: wrote ${pages.length} pages to ${path.relative(root, outDir)}/`);
