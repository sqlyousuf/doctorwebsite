#!/usr/bin/env node
/*
 * Generates the Medical Weight Loss page, in both languages:
 *
 *     procedures/medical-weight-loss.html        English
 *     es/procedures/medical-weight-loss.html     Spanish
 *
 *     node tools/build-medical-weight-loss.js
 *
 * It sits beside the procedure pages but has its own builder, because its
 * layout — steps, photo cards, medication cards — is not the long-form prose
 * those pages share. Content is in tools/content/medical-weight-loss.js; the
 * header, footer, sprite and modal come from tools/chrome.js like every other
 * generated page, so build-es.js has to run first.
 */

const fs = require('fs');
const path = require('path');
const content = require('./content/medical-weight-loss.js');
const { PHONE, PHONE_HREF } = require('./content/procedures.js');
const { ORIGIN } = require('./site.js');
const { UI } = require('./i18n.js');
const { root, sprite, footerFor, apptModalFor, buildNav, header, tail, escapeAttr, plain } = require('./chrome.js');

const { slug, draft, reviewNotes, images } = content;

const LANGS = {
  en: { dir: 'procedures', up: '../', urlBase: '/procedures/' },
  es: { dir: 'es/procedures', up: '../../', urlBase: '/es/procedures/' },
};

const draftBanner = (t) => `<aside class="draft-banner">
  <div class="container">
    <p class="draft-title"><svg aria-hidden="true"><use href="#ic-info"/></svg> ${t.draftTitle}</p>
    <p>${t.draftBody}</p>
    <p class="draft-sub">${t.draftSub}</p>
    <ol class="prose-steps">
${reviewNotes.map((n) => `      <li>${n}</li>`).join('\n')}
    </ol>
  </div>
</aside>`;

const list = (items) => `<ul>\n${items.map((i) => `            <li>${i}</li>`).join('\n')}\n          </ul>`;

/** A step's call to action: the appointment modal, a home-page anchor, or the phone. */
const stepAction = (a) => {
  if (a.appt) return `<a class="step-action" href="../index.html#contact" data-appt-open>${a.label} <svg aria-hidden="true"><use href="#ic-arrow"/></svg></a>`;
  if (a.tel) return `<a class="step-action" href="${PHONE_HREF}">${a.label} <svg aria-hidden="true"><use href="#ic-arrow"/></svg></a>`;
  return `<a class="step-action" href="../index.html${a.href}">${a.label} <svg aria-hidden="true"><use href="#ic-arrow"/></svg></a>`;
};

/*
 * A medication's picture, if the practice has supplied one. Drop a file named
 * after the drug — media/img/meds/wegovy.png, ozempic.jpg and so on — and the
 * next build picks it up; until then the card simply has no picture.
 */
const MED_DIR = path.join(root, 'media', 'img', 'meds');
const medKey = (name) => name.toLowerCase().replace(/[^a-z]/g, '');
function medImage(i, up) {
  const name = content.en.meds[i].name;
  const file = ['png', 'jpg', 'jpeg', 'webp']
    .map((ext) => `${medKey(name)}.${ext}`)
    .find((f) => fs.existsSync(path.join(MED_DIR, f)));
  return file
    ? `        <img class="med-img" src="${up}media/img/meds/${file}" alt="${escapeAttr(name.replace('®', ''))}" loading="lazy">\n`
    : '';
}

/* The name set as a coloured wordmark, after the drug's own branding; the colours are in css/style.css. */
const medCard = (m, c, i, up) => `      <article class="card med-card med-card--${medKey(content.en.meds[i].name)} reveal" style="--delay:${(i % 3) * 80}ms">
${medImage(i, up)}        <h3 class="med-brand">${m.name.replace('®', '<sup>®</sup>')}</h3>
        <p class="med-generic">${m.generic}</p>
        <p>${m.about}</p>
        <p class="med-form"><strong>${c.howTaken}:</strong> ${m.form}</p>
        <details class="med-more">
          <summary>${c.moreDetails}<svg aria-hidden="true"><use href="#ic-caret"/></svg></summary>
          <p class="med-label">${c.labels.benefits}</p>
          ${list(m.benefits)}
          <p class="med-label">${c.labels.sideEffects}</p>
          ${list(m.sideEffects)}
          <p class="med-label">${c.labels.avoid}</p>
          ${list(m.avoid)}
          <p class="med-label">${c.labels.warnings}</p>
          ${list(m.warnings)}
        </details>
      </article>`;

function renderPage(lang) {
  const c = content[lang];
  const t = UI[lang];
  const { up, urlBase } = LANGS[lang];
  const title = plain(c.title);
  const url = `${ORIGIN}${urlBase}${slug}.html`;
  const twin = lang === 'en' ? `../es/procedures/${slug}.html` : `../../procedures/${slug}.html`;
  const navLabel = t.primary[2];

  const nav = buildNav({ lang, up, home: '../index.html', pcPrefix: '../patient-center/', active: { medicalWeightLoss: true } });
  const footer = footerFor({ lang, up, pcPrefix: '../patient-center/', home: '../index.html' });

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.home, item: `${ORIGIN}/${lang === 'es' ? 'es/' : ''}` },
        { '@type': 'ListItem', position: 2, name: navLabel, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalTherapy',
      name: lang === 'es' ? 'Pérdida de Peso Médica' : 'Medical Weight Loss',
      url,
      provider: { '@id': `${ORIGIN}/#clinic` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    },
  ]
    .map((b) => `<script type="application/ld+json">\n${JSON.stringify(b, null, 2)}\n</script>`)
    .join('\n');

  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c.seoTitle}</title>
<meta name="description" content="${escapeAttr(c.description)}">
${draft ? '<meta name="robots" content="noindex, nofollow">\n' : ''}<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${ORIGIN}/procedures/${slug}.html">
<link rel="alternate" hreflang="es" href="${ORIGIN}/es/procedures/${slug}.html">
<link rel="alternate" hreflang="x-default" href="${ORIGIN}/procedures/${slug}.html">
<link rel="icon" type="image/png" href="${up}media/favicon.png">
<link rel="apple-touch-icon" href="${up}media/favicon.png">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Houston Surgical Weight Loss">
<meta property="og:locale" content="${lang === 'es' ? 'es_ES' : 'en_US'}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${escapeAttr(title)}">
<meta property="og:description" content="${escapeAttr(c.description)}">
<meta property="og:image" content="${ORIGIN}/media/img/${images.hero}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(title)}">
<meta name="twitter:description" content="${escapeAttr(c.description)}">
<meta name="twitter:image" content="${ORIGIN}/media/img/${images.hero}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}css/style.css">
${schema}
<!-- Generated by tools/build-medical-weight-loss.js — do not edit by hand. -->
</head>
<body>

${sprite}

<!-- ======================= HEADER ======================= -->
${header({ nav, lang, up, home: '../index.html' })}
${draft ? '\n' + draftBanner(t) + '\n' : ''}
<!-- ======================= PAGE HERO ======================= -->
<section class="page-hero" id="top">
  <img class="page-hero-img" src="${up}media/img/${images.hero}" alt="" loading="eager" fetchpriority="high">
  <div class="page-hero-scrim" aria-hidden="true"></div>
  <div class="page-hero-inner container">
    <p class="page-hero-kicker">${c.kicker}</p>
    <h1 class="page-hero-title">${c.title}</h1>
    <p class="page-hero-tag">${c.tagline}</p>
  </div>
</section>

<nav class="crumbs" aria-label="${t.breadcrumbLabel}">
  <div class="container">
    <a href="../index.html">${t.home}</a>
    <span aria-hidden="true">/</span>
    <span aria-current="page">${navLabel}</span>
  </div>
</nav>

<!-- ======================= INTRO ======================= -->
<section class="pad-lg">
  <div class="container split mwl-intro">
    <div class="reveal">
      <h2 class="display bar">${c.introHeading}</h2>
${c.intro.map((p) => `      <p>${p}</p>`).join('\n')}
      <div class="contact-actions mwl-actions">
        <a href="../index.html#contact" class="btn btn-solid" data-appt-open>${c.getStarted}</a>
        <a href="${PHONE_HREF}" class="btn btn-outline"><svg><use href="#ic-phone"/></svg> ${PHONE}</a>
      </div>
    </div>
    <figure class="mwl-intro-img reveal" style="--delay:120ms">
      <img src="${up}media/img/${images.intro}" alt="" width="1400" height="953" loading="lazy">
    </figure>
  </div>
</section>

<!-- ======================= HOW IT WORKS ======================= -->
<section class="pad-lg mwl-band">
  <div class="container">
    <h2 class="display center reveal">${c.stepsHeading}</h2>
    <p class="intro center reveal">${c.stepsIntro}</p>
    <div class="process-steps steps-three">
${c.steps
  .map(
    (s, i) =>
      `      <div class="step reveal"${i ? ` style="--delay:${i * 90}ms"` : ''}><div class="step-num">${i + 1}</div><h3>${s.title}</h3><p>${s.body}</p>${stepAction(s.action)}</div>`
  )
  .join('\n')}
    </div>
  </div>
</section>

<!-- ======================= WHAT'S INCLUDED ======================= -->
<section class="pad-lg">
  <div class="container">
    <h2 class="display center reveal">${c.includedHeading}</h2>
    <div class="card-grid card-grid-three">
${c.included
  .map(
    (card, i) => `      <article class="card photo-card reveal"${i ? ` style="--delay:${i * 80}ms"` : ''}>
        <img src="${up}media/img/${images[card.img]}" alt="" width="600" height="400" loading="lazy">
        <div class="photo-card-body">
          <h3>${card.title}</h3>
          <p>${card.body}</p>
        </div>
      </article>`
  )
  .join('\n')}
    </div>
  </div>
  <div class="rule"></div>
</section>

<!-- ======================= MEDICATIONS ======================= -->
<section class="pad-lg mwl-band" id="medications">
  <div class="container">
    <h2 class="display center reveal">${c.medsHeading}</h2>
    <p class="intro center reveal">${c.medsIntro}</p>
    <div class="card-grid med-grid">
${c.meds.map((m, i) => medCard(m, c, i, up)).join('\n')}
    </div>
    <p class="med-note">${c.medsNote}</p>
  </div>
</section>

<!-- ======================= CTA ======================= -->
<section class="pc-cta">
  <div class="container center-block">
    <h2 class="display center">${c.ctaHeading}</h2>
    <p class="intro center">${c.ctaBody}</p>
    <div class="contact-actions">
      <a href="${PHONE_HREF}" class="btn btn-solid"><svg><use href="#ic-phone"/></svg> ${PHONE}</a>
      <a href="../index.html#contact" class="btn btn-outline-light" data-appt-open>${t.ctaButton}</a>
    </div>
  </div>
</section>

<!-- ======================= FAQ ======================= -->
<article class="pad-lg">
  <div class="container narrow prose prose-proc">
    <h2 class="display bar">${c.faqHeading}</h2>
    <div class="faq-list">${c.faq
      .map(
        ([q, a]) => `<details class="faq-item">
        <summary>${q}<span class="faq-icon" aria-hidden="true"></span></summary>
        <p>${a}</p>
      </details>`
      )
      .join('')}</div>
  </div>
</article>

${footer}

${apptModalFor(lang)}

${tail({ lang, twin, home: '../index.html' })}

<script src="${up}js/main.js"></script>
</body>
</html>
`;
}

/* ---------- checks ---------- */

// The Spanish page must match the English one item for item.
const problems = [];
for (const key of ['intro', 'steps', 'included', 'meds', 'faq']) {
  if (content.en[key].length !== content.es[key].length) {
    problems.push(`${key}: ${content.en[key].length} in English, ${content.es[key].length} in Spanish`);
  }
}
content.en.meds.forEach((m, i) => {
  const e = content.es.meds[i];
  if (!e) return;
  for (const k of ['benefits', 'sideEffects', 'avoid', 'warnings']) {
    if (m[k].length !== e[k].length) problems.push(`${m.name} ${k}: ${m[k].length} in English, ${e[k].length} in Spanish`);
  }
});
if (problems.length) {
  console.error(`build-medical-weight-loss: ${problems.length} problem(s):`);
  console.error(problems.map((p) => `  ${p}`).join('\n'));
  process.exit(1);
}

/* ---------- write ---------- */

for (const [lang, { dir }] of Object.entries(LANGS)) {
  fs.mkdirSync(path.join(root, dir), { recursive: true });
  fs.writeFileSync(path.join(root, dir, `${slug}.html`), renderPage(lang), 'utf8');
}
console.log(`build-medical-weight-loss: wrote 1 page x 2 languages${draft ? ' — still draft' : ''}`);
