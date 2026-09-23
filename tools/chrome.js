/*
 * The shared page shell: the SVG sprite, the header nav and the footer, lifted
 * out of index.html at build time.
 *
 * index.html stays the single source of truth for all three, so a change to
 * the brand mark or the footer address is made once and every generated page
 * picks it up. tools/build-patient-center.js and tools/build-procedures.js
 * both build on this, in both languages.
 *
 * Directory depth: an English page sits one level down (patient-center/x.html),
 * a Spanish one sits two (es/patient-center/x.html). Everything here takes an
 * `up` prefix — '../' or '../../' — rather than assuming.
 */

const fs = require('fs');
const path = require('path');
const { pages: patientCenterPages } = require('./patient-center-content.js');
const { UI, NAV_ES, SUB_NAV_ES } = require('./i18n.js');

const root = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/\r\n/g, '\n');

/*
 * The Spanish footer comes from es/index.html rather than being translated a
 * second time here. It holds eight nav links, the address and the affiliate
 * line, all of which build-es.js already translates — so there is one Spanish
 * footer, not two that can drift. The cost is an ordering requirement:
 * build-es.js has to run first. This throws clearly if it has not.
 */
const esSrc = (() => {
  const f = path.join(root, 'es', 'index.html');
  if (!fs.existsSync(f)) throw new Error('chrome: es/index.html missing — run `node tools/build-es.js` first');
  return fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
})();

/** Pull a block out of index.html, or fail loudly rather than ship a broken page. */
/** Pull a block out of a source document, or fail loudly rather than ship a broken page. */
function extractFrom(doc, label, startMarker, endMarker, where) {
  const start = doc.indexOf(startMarker);
  if (start === -1) throw new Error(`chrome: could not find the ${label} start in ${where}`);
  const end = doc.indexOf(endMarker, start);
  if (end === -1) throw new Error(`chrome: could not find the ${label} end in ${where}`);
  return doc.slice(start, end + endMarker.length);
}
const extract = (a, b, label) => extractFrom(src, label, a, b, 'index.html');

const sprite = extract(
  '<svg aria-hidden="true" style="position:absolute',
  '</svg>\n\n<!-- ======================= HEADER',
  'SVG sprite'
).replace(/\n\n<!-- =+ HEADER[\s\S]*$/, '');

// The store is the one external menu item, and it appears twice — as its own
// tab and under Bariatric Vitamins. Take the URL from the page data so the two
// can never drift, and fail loudly if that entry is ever removed.
const VITAMIN_STORE = (() => {
  const store = patientCenterPages.flatMap((p) => p.sub || []).find((s) => s.nav === 'Vitamin E Store');
  if (!store) throw new Error('chrome: no Vitamin E Store entry in the page data');
  return store.href;
})();

/** A page's nav label in the requested language. */
const navLabel = (page, lang) => (lang === 'es' ? NAV_ES[page.slug] || page.nav : page.nav);
const subLabel = (sub, lang) => (lang === 'es' ? SUB_NAV_ES[sub.nav] || sub.nav : sub.nav);

/**
 * The footer.
 *
 * `up` is how this page climbs to the site root, `pcPrefix` how it reaches the
 * Patient Center directory for its own language.
 *
 * Three rewrites, and only three. Section anchors travel back to the home
 * page, but `<use href="#ic-…">` points at the sprite inlined in *this*
 * document and `href="#"` is a placeholder, so both must be left alone:
 * matching only `<a href="#word">` keeps them out of it.
 */
const footerFor = ({ lang = 'en', up = '../', pcPrefix = '../patient-center/', home = '../index.html' } = {}) => {
  const doc = lang === 'es' ? esSrc : src;
  const where = lang === 'es' ? 'es/index.html' : 'index.html';
  return extractFrom(doc, 'footer', '<footer class="site-footer">', '</footer>', where)
    .replace(/<a href="#([a-z][\w-]*)"/g, `<a href="${home}#$1"`)
    .replace(/href="patient-center\//g, `href="${pcPrefix}`)
    // English says src="media/…"; the Spanish footer already says "../media/…"
    // because it sits a level down. Normalise both to this page's depth.
    .replace(/src="(?:\.\.\/)?media\//g, `src="${up}media/`);
};

/**
 * The header nav.
 *
 * `lang` picks the labels, `home` is the path back to that language's home
 * page, `pcPrefix` how this page reaches its own language's Patient Center,
 * and `active` marks the current page as `{ patientCenter: slug }`.
 */
function buildNav({ lang = 'en', up = '../', home = '../index.html', pcPrefix = '../patient-center/', active = {} } = {}) {
  const t = UI[lang];
  const anchors = ['#services', '#about', '#process', '#testimonials', '#insurance', '#faq'];
  const primary = t.primary
    .map((label, i) => `        <li><a href="${home}${anchors[i]}">${label}</a></li>`)
    .join('\n');

  const items = [];
  for (const page of patientCenterPages) {
    const current = active.patientCenter === page.slug ? ' aria-current="page"' : '';
    items.push(`          <li><a href="${pcPrefix}${page.slug}.html"${current}>${navLabel(page, lang)}</a></li>`);
    for (const sub of page.sub || []) {
      const attrs = sub.external ? ' target="_blank" rel="noopener"' : '';
      items.push(`          <li class="nav-sub-child"><a href="${sub.href}"${attrs}>${subLabel(sub, lang)}</a></li>`);
    }
  }

  const lanternCurrent = active.patientCenter === 'lantern' ? ' aria-current="page"' : '';
  return `      <ul class="nav-links" id="navLinks">
${primary}
        <li class="has-sub">
          <a href="#" class="sub-toggle" aria-expanded="false" aria-haspopup="true">${t.patientCenter}<svg class="sub-caret" aria-hidden="true"><use href="#ic-caret"/></svg></a>
          <ul class="nav-sub">
${items.join('\n')}
          </ul>
        </li>
        <li class="nav-break" aria-hidden="true"></li>
        <li class="nav-shop-item">
          <a href="${VITAMIN_STORE}" class="nav-shop" target="_blank" rel="noopener"
            aria-label="${t.vitaminStoreAria}">
            <svg aria-hidden="true"><use href="#ic-cart"/></svg>
            <span>${t.vitaminStore}</span>
          </a>
        </li>
        <li class="nav-brand-item">
          <a href="${pcPrefix}lantern.html" class="nav-brand" aria-label="${t.lanternAria}"${lanternCurrent}>
            <img src="${up}media/lantern-logo.jpg" alt="Lantern" width="350" height="91" loading="lazy">
          </a>
        </li>
      </ul>`;
}

/**
 * The appointment modal, lifted per language from the home page it is written
 * in. `up` re-points nothing — the modal has no assets — but the phone links
 * inside it are absolute tel: URLs, so it travels as-is.
 */
const apptModalFor = (lang = 'en') => {
  const doc = lang === 'es' ? esSrc : src;
  const where = lang === 'es' ? 'es/index.html' : 'index.html';
  return extractFrom(doc, 'appointment modal', '<div class="appt-overlay"', '<!-- /appt -->', where);
};

/** The header, identical on every generated page bar the nav's active item. */
const header = ({ nav, lang = 'en', up = '../', home = '../index.html' }) => {
  const t = UI[lang];
  return `<header class="site-header" id="siteHeader">
  <div class="header-inner">
    <a href="${home}" class="brand">
      <img class="brand-mark" src="${up}media/logo-mark.png" alt="" width="405" height="583">
      <span class="brand-name">Houston Surgical</span>
      <span class="brand-name brand-name-lg">Weight Loss</span>
    </a>

    <button class="nav-toggle" id="navToggle" aria-label="${t.toggleMenu}" aria-expanded="false" aria-controls="navLinks">
      <span></span>
    </button>

    <nav class="nav-wrap">
${nav}
    </nav>

    <a href="${home}#insurance" class="btn btn-solid header-cta">${t.headerCta}</a>
  </div>
</header>`;
};

/**
 * The language switcher and the floating pill.
 *
 * `twin` is the *same page* in the other language, so switching language keeps
 * the reader where they are instead of dumping them on the home page.
 */
const tail = ({ lang = 'en', twin = '#', home = '../index.html' }) => {
  const t = UI[lang];
  const en = lang === 'en' ? { href: '#', cls: ' class="is-active" aria-current="true"' } : { href: twin, cls: '' };
  const es = lang === 'es' ? { href: '#', cls: ' class="is-active" aria-current="true"' } : { href: twin, cls: '' };
  return `<nav class="lang-switch" aria-label="${t.langLabel}">
  <a href="${en.href}" hreflang="en" lang="en"${en.cls}><svg class="flag" aria-hidden="true"><use href="#flag-us"/></svg>English</a>
  <a href="${es.href}" hreflang="es" lang="es"${es.cls}><svg class="flag" aria-hidden="true"><use href="#flag-es"/></svg>Español</a>
</nav>

<a href="${home}#contact" class="candidate-pill" id="candidatePill">${t.candidatePill}</a>`;
};

const escapeAttr = (s) => s.replace(/"/g, '&quot;');
/** Headings carry entities like &amp;; strip them back out for <title>. */
const plain = (s) => s.replace(/&amp;/g, '&').replace(/<[^>]+>/g, '');

module.exports = { root, src, sprite, footerFor, apptModalFor, buildNav, header, tail, escapeAttr, plain, VITAMIN_STORE, navLabel };
