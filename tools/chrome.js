/*
 * The shared page shell: the SVG sprite, the header nav and the footer, lifted
 * out of index.html at build time.
 *
 * index.html stays the single source of truth for all three, so a change to
 * the brand mark or the footer address is made once and every generated page
 * picks it up. Both tools/build-patient-center.js and tools/build-procedures.js
 * build on this.
 *
 * Everything here assumes the generated page sits exactly one directory below
 * the root, which is true of patient-center/ and procedures/.
 */

const fs = require('fs');
const path = require('path');
const { pages: patientCenterPages } = require('./patient-center-content.js');

const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/\r\n/g, '\n');

/** Pull a block out of index.html, or fail loudly rather than ship a broken page. */
function extract(startMarker, endMarker, label) {
  const start = src.indexOf(startMarker);
  if (start === -1) throw new Error(`chrome: could not find the ${label} start in index.html`);
  const end = src.indexOf(endMarker, start);
  if (end === -1) throw new Error(`chrome: could not find the ${label} end in index.html`);
  return src.slice(start, end + endMarker.length);
}

const sprite = extract(
  '<svg aria-hidden="true" style="position:absolute',
  '</svg>\n\n<!-- ======================= HEADER',
  'SVG sprite'
).replace(/\n\n<!-- =+ HEADER[\s\S]*$/, '');

/**
 * The footer. `pcPrefix` is how this page reaches patient-center/, so the
 * footer's Patient Center link resolves from whichever directory it lands in.
 *
 * Three rewrites, and only three. Section anchors travel back to the home
 * page, but `<use href="#ic-…">` points at the sprite inlined in *this*
 * document and `href="#"` is a placeholder, so both must be left alone:
 * matching only `<a href="#word">` keeps them out of it.
 */
const footerFor = (pcPrefix = '../patient-center/') =>
  extract('<footer class="site-footer">', '</footer>', 'footer')
    .replace(/<a href="#([a-z][\w-]*)"/g, '<a href="../index.html#$1"')
    .replace(/href="patient-center\//g, `href="${pcPrefix}`)
    .replace(/src="media\//g, 'src="../media/');

const PRIMARY = [
  ['../index.html#services', 'Procedures'],
  ['../index.html#about', 'Our Surgeon'],
  ['../index.html#process', 'How It Works'],
  ['../index.html#testimonials', 'Stories'],
  ['../index.html#insurance', 'Insurance'],
  ['../index.html#faq', 'FAQ'],
];

// The store is the one external menu item, and it appears twice — as its own
// tab and under Bariatric Vitamins. Take the URL from the page data so the two
// can never drift, and fail loudly if that entry is ever removed.
const VITAMIN_STORE = (() => {
  const store = patientCenterPages.flatMap((p) => p.sub || []).find((s) => s.nav === 'Vitamin E Store');
  if (!store) throw new Error('chrome: no Vitamin E Store entry in the page data');
  return store.href;
})();

/**
 * The header nav.
 *
 * `active` marks the current page: `{ patientCenter: slug }` for a Patient
 * Center page, or `{ lantern: true }` when the Lantern tab is current.
 * `pcPrefix` is how this page reaches patient-center/ — '' from inside it,
 * '../patient-center/' from a sibling directory.
 */
function buildNav({ pcPrefix = '../patient-center/', active = {} } = {}) {
  const primary = PRIMARY.map(([href, label]) => `        <li><a href="${href}">${label}</a></li>`).join('\n');

  const items = [];
  for (const page of patientCenterPages) {
    const current = active.patientCenter === page.slug ? ' aria-current="page"' : '';
    items.push(`          <li><a href="${pcPrefix}${page.slug}.html"${current}>${page.nav}</a></li>`);
    for (const sub of page.sub || []) {
      const attrs = sub.external ? ' target="_blank" rel="noopener"' : '';
      items.push(`          <li class="nav-sub-child"><a href="${sub.href}"${attrs}>${sub.nav}</a></li>`);
    }
  }

  const lanternCurrent = active.patientCenter === 'lantern' ? ' aria-current="page"' : '';
  return `      <ul class="nav-links" id="navLinks">
${primary}
        <li class="has-sub">
          <a href="#" class="sub-toggle" aria-expanded="false" aria-haspopup="true">Patient Center<svg class="sub-caret" aria-hidden="true"><use href="#ic-caret"/></svg></a>
          <ul class="nav-sub">
${items.join('\n')}
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
          <a href="${pcPrefix}lantern.html" class="nav-brand" aria-label="Lantern — employer-covered surgery"${lanternCurrent}>
            <img src="../media/lantern-logo.jpg" alt="Lantern" width="350" height="91" loading="lazy">
          </a>
        </li>
      </ul>`;
}

/** The header, identical on every generated page bar the nav's active item. */
const header = (nav) => `<header class="site-header" id="siteHeader">
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
${nav}
    </nav>

    <a href="../index.html#insurance" class="btn btn-solid header-cta">See If You're Covered</a>
  </div>
</header>`;

/** The language switcher and the floating pill, which close every page. */
const tail = (selfHref = '#') => `<nav class="lang-switch" aria-label="Language">
  <a href="${selfHref}" hreflang="en" lang="en" class="is-active" aria-current="true"><svg class="flag" aria-hidden="true"><use href="#flag-us"/></svg>English</a>
  <a href="../es/index.html" hreflang="es" lang="es"><svg class="flag" aria-hidden="true"><use href="#flag-es"/></svg>Español</a>
</nav>

<a href="../index.html#contact" class="candidate-pill" id="candidatePill">Do I Qualify?</a>`;

const escapeAttr = (s) => s.replace(/"/g, '&quot;');
/** Headings carry entities like &amp;; strip them back out for <title>. */
const plain = (s) => s.replace(/&amp;/g, '&').replace(/<[^>]+>/g, '');

module.exports = { root, src, sprite, footerFor, buildNav, header, tail, escapeAttr, plain, VITAMIN_STORE };
