#!/usr/bin/env node
/*
 * Generates the About Us pages, in both languages:
 *
 *     about/<slug>.html        English
 *     es/about/<slug>.html     Spanish
 *
 *     node tools/build-about.js
 *
 * Content comes from tools/content/about.js and its Spanish twin about.es.js.
 * Chrome is shared with the Patient Center and procedure pages via
 * tools/chrome.js, so the header, footer and sprite stay in lockstep with
 * index.html.
 *
 * A page marked `draft: true` gets a review banner, a noindex tag, and is kept
 * out of the sitemap — so the dietitian page can sit in the live menu while we
 * wait on Flo's photograph and biography, without being found in search.
 *
 * Every English page must have a Spanish twin of the same shape; the parity
 * check at the bottom fails the build otherwise.
 */

const fs = require('fs');
const path = require('path');
const { pages, PHONE, PHONE_HREF } = require('./content/about.js');
const { translations } = require('./content/about.es.js');
const { ORIGIN, BUSINESS, PHYSICIAN } = require('./site.js');
const { UI } = require('./i18n.js');
const { root, sprite, footerFor, apptModalFor, buildNav, header, tail, escapeAttr, plain } = require('./chrome.js');

/** Where each language's pages live, and how they climb back to the root. */
const LANGS = {
  en: { dir: 'about', up: '../', urlBase: '/about/' },
  es: { dir: 'es/about', up: '../../', urlBase: '/es/about/' },
};

/** The page's own fields in the requested language. */
function localised(page, lang) {
  if (lang === 'en') return page;
  const es = translations[page.slug];
  if (!es) throw new Error(`build-about: no Spanish translation for "${page.slug}"`);
  return { ...page, ...es };
}

const breadcrumb = (t, title, slug, lang) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: t.home, item: `${ORIGIN}/${lang === 'es' ? 'es/' : ''}` },
    { '@type': 'ListItem', position: 2, name: t.aboutUs, item: `${ORIGIN}${LANGS[lang].urlBase}our-office.html` },
    { '@type': 'ListItem', position: 3, name: title, item: `${ORIGIN}${LANGS[lang].urlBase}${slug}.html` },
  ],
});

/*
 * Page-level schema.
 *
 * The office page describes the clinic itself, so it points at the same
 * MedicalClinic node the home page defines rather than declaring a second
 * one — two clinic records for one practice is how a knowledge panel ends up
 * confused. The surgeon page gets a Physician record, which is the one place
 * on the site where that is the subject of the page.
 */
function pageSchema(page, lang, url) {
  if (page.slug === 'our-office') {
    return {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url,
      mainEntity: { '@id': `${ORIGIN}/#clinic` },
    };
  }
  if (page.slug === 'dr-wadiwala') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      '@id': `${ORIGIN}/#physician`,
      name: PHYSICIAN.name,
      jobTitle: PHYSICIAN.jobTitle,
      description: PHYSICIAN.description,
      url,
      image: `${ORIGIN}/media/dr-wadiwala.jpg`,
      medicalSpecialty: 'Surgical',
      worksFor: { '@id': `${ORIGIN}/#clinic` },
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      telephone: BUSINESS.phone,
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Western University of Health Sciences' },
        { '@type': 'CollegeOrUniversity', name: 'Penn State Milton S. Hershey Medical Center' },
      ],
      memberOf: [
        { '@type': 'Organization', name: 'American Society for Metabolic and Bariatric Surgery' },
        { '@type': 'Organization', name: 'Society of American Gastrointestinal and Endoscopic Surgeons' },
        { '@type': 'Organization', name: 'Harris County Medical Society' },
        { '@type': 'Organization', name: 'Texas Medical Association' },
      ],
    };
  }
  if (page.slug === 'dietitian') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${ORIGIN}/#dietitian`,
      name: 'Florencia Pillow',
      honorificSuffix: 'RDN',
      jobTitle: 'Registered Dietitian Nutritionist',
      description:
        'Bilingual Registered Dietitian Nutritionist supporting patients before and after weight loss surgery, in English and Spanish.',
      url,
      worksFor: { '@id': `${ORIGIN}/#clinic` },
      knowsLanguage: ['en', 'es'],
      telephone: BUSINESS.phone,
    };
  }
  return { '@context': 'https://schema.org', '@type': 'AboutPage', url };
}

const draftBanner = (page, lang) => {
  const t = UI[lang];
  return `<aside class="draft-banner">
  <div class="container">
    <p class="draft-title"><svg aria-hidden="true"><use href="#ic-info"/></svg> ${t.draftTitle}</p>
    <p>${t.draftBody}</p>
    <p class="draft-sub">${t.draftSub}</p>
    <ol class="prose-steps">
${(page.reviewNotes || []).map((n) => `      <li>${n}</li>`).join('\n')}
    </ol>
  </div>
</aside>`;
};

/** Dr. Wadiwala's portrait, which only his page carries. */
const portraitBlock = (portrait, up) => `      <figure class="about-portrait">
        <img src="${up}${portrait.src}" alt="${escapeAttr(portrait.alt)}"
          width="${portrait.width}" height="${portrait.height}" loading="lazy">
      </figure>`;

function renderPage(basePage, lang) {
  const page = localised(basePage, lang);
  const t = UI[lang];
  const { up, urlBase } = LANGS[lang];
  const title = plain(page.title);
  const url = `${ORIGIN}${urlBase}${page.slug}.html`;
  // The same page in the other language, so switching keeps the reader here.
  const twin = lang === 'en' ? `../es/about/${page.slug}.html` : `../../about/${page.slug}.html`;
  const img = path.basename(basePage.image);

  const nav = buildNav({ lang, up, home: '../index.html', pcPrefix: '../patient-center/', active: { about: page.slug } });
  const footer = footerFor({ lang, up, pcPrefix: '../patient-center/', home: '../index.html' });

  const blocks = [breadcrumb(t, title, page.slug, lang), pageSchema(page, lang, url)]
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
<link rel="alternate" hreflang="en" href="${ORIGIN}/about/${page.slug}.html">
<link rel="alternate" hreflang="es" href="${ORIGIN}/es/about/${page.slug}.html">
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/about/${page.slug}.html">
<link rel="icon" type="image/png" href="${up}media/favicon.png">
<link rel="apple-touch-icon" href="${up}media/favicon.png">
<meta property="og:type" content="profile">
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
<!-- Generated by tools/build-about.js — do not edit by hand. -->
</head>
<body>

${sprite}

<!-- ======================= HEADER ======================= -->
${header({ nav, lang, up, home: '../index.html' })}
${page.draft ? '\n' + draftBanner(page, lang) + '\n' : ''}
<!-- ======================= PAGE HERO ======================= -->
<section class="page-hero" id="top">
  <img class="page-hero-img" src="${up}media/img/${img}" alt="" loading="eager" fetchpriority="high">
  <div class="page-hero-scrim" aria-hidden="true"></div>
  <div class="page-hero-inner container">
    <p class="page-hero-kicker">${t.aboutUs}</p>
    <h1 class="page-hero-title">${page.title}</h1>
    <p class="page-hero-tag">${page.tagline}</p>
  </div>
</section>

<nav class="crumbs" aria-label="${t.breadcrumbLabel}">
  <div class="container">
    <a href="../index.html">${t.home}</a>
    <span aria-hidden="true">/</span>
    <a href="our-office.html">${t.aboutUs}</a>
    <span aria-hidden="true">/</span>
    <span aria-current="page">${title}</span>
  </div>
</nav>

<!-- ======================= CONTENT ======================= -->
<article class="pad-lg">
  <div class="container narrow prose prose-proc">
${basePage.portrait ? portraitBlock(basePage.portrait, up) + '\n' : ''}${page.body.trim()}
  </div>
</article>

<!-- ======================= MORE ABOUT US ======================= -->
<section class="pad-lg pc-related">
  <div class="container">
    <h2 class="display center">${t.moreAboutUs}</h2>
    <div class="pc-link-grid">
${pages
  .filter((p) => p.slug !== page.slug)
  .map(
    (p) => `      <a class="pc-link" href="${p.slug}.html">
        <span class="pc-link-label">${lang === 'es' ? translations[p.slug].title : p.nav}</span>
        <svg aria-hidden="true"><use href="#ic-arrow"/></svg>
      </a>`
  )
  .join('\n')}
    </div>
  </div>
</section>

<!-- ======================= CTA ======================= -->
<section class="pc-cta">
  <div class="container center-block">
    <h2 class="display center">${t.ctaHeading}</h2>
    <p class="intro center">${t.ctaBody}</p>
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
  'photo-slot': (html.match(/class="photo-slot"/g) || []).length,
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
  // A draft page shows its review notes, so the Spanish twin needs them too.
  if (p.draft && (es.reviewNotes || []).length !== (p.reviewNotes || []).length) {
    problems.push(`${p.slug}: ${(p.reviewNotes || []).length} review notes in English, ${(es.reviewNotes || []).length} in Spanish`);
  }
}

if (problems.length) {
  console.error(`build-about: ${problems.length} problem(s):`);
  console.error(problems.map((p) => `  ${p}`).join('\n'));
  process.exit(1);
}

const drafts = pages.filter((p) => p.draft).length;
console.log(`build-about: wrote ${pages.length} pages x 2 languages` + (drafts ? ` — ${drafts} still draft` : ''));
