#!/usr/bin/env node
/*
 * Generates the Real Results page (before-and-after photos and stories), in
 * both languages:
 *
 *     results.html        English
 *     es/results.html     Spanish
 *
 *     node tools/build-results.js
 *
 * Content comes from tools/content/results.js. The page sits beside the home
 * page rather than in a folder, so it climbs no levels in English and one in
 * Spanish. Chrome is shared via tools/chrome.js like every other page, which
 * means build-es.js has to have run first.
 *
 * Every photo is a link to its full-size file, so the page works without
 * script; main.js turns those links into a full-screen viewer that steps
 * through one patient's photos at a time.
 */

const fs = require('fs');
const path = require('path');
const { patients, copy } = require('./content/results.js');
const { reviews, GOOGLE_REVIEWS_URL } = require('./content/reviews.js');
const { ORIGIN } = require('./site.js');
const { UI } = require('./i18n.js');
const { root, sprite, footerFor, apptModalFor, buildNav, header, tail, escapeAttr, plain } = require('./chrome.js');

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';
const HERO = 'u-1518611012118-696072aa579a.jpg';

const LANGS = {
  en: { file: 'results.html', up: '', url: `${ORIGIN}/results.html` },
  es: { file: 'es/results.html', up: '../', url: `${ORIGIN}/es/results.html` },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const paras = (list, lang) =>
  list.map((p) => `            <p${lang ? ` lang="${lang}"` : ''}>${esc(p)}</p>`).join('\n');

/*
 * A patient the practice sent without a name is shown without one: the photo
 * alt text says "Patient", and the viewer caption is just Before / After.
 */
const who = (p, c) => p.name || c.patient;
const captionFor = (p, label) => (p.name ? `${p.name} · ${label}` : label);

/** One photo link: the thumbnail, its Before/After tag, and the full-size target. */
function photoLink(p, file, when, up, c, { hidden = false } = {}) {
  const src = `${up}media/results/${file}.jpg`;
  const label = when === 'before' ? c.before : c.after;
  const alt = when === 'before' ? c.beforeAlt(who(p, c)) : c.afterAlt(who(p, c));
  if (hidden) {
    return `          <a class="ba-photo" href="${src}" data-gallery="${p.slug}" data-caption="${escapeAttr(captionFor(p, label))}" hidden><img src="${src}" alt="${escapeAttr(alt)}" loading="lazy"></a>`;
  }
  return `          <a class="ba-photo" href="${src}" data-gallery="${p.slug}" data-caption="${escapeAttr(captionFor(p, label))}">
            <img src="${src}" alt="${escapeAttr(alt)}" loading="lazy">
            <span class="ba-tag ba-tag-${when}">${label}</span>
          </a>`;
}

/** The first pair (or combined image) on show; every other photo hidden, for the viewer. */
function photoBlock(p, up, c) {
  const [first, ...rest] = p.photos;
  let shown;
  if (first.combined) {
    const src = `${up}media/results/${first.combined}.jpg`;
    // Corner tags assume before on the left and after on the right; a collage
    // laid out any other way (`untagged`) goes without them.
    const tags = first.untagged
      ? ''
      : `\n            <span class="ba-tag ba-tag-before">${c.before}</span>\n            <span class="ba-tag ba-tag-after">${c.after}</span>`;
    shown = `        <div class="ba-pair ba-combined">
          <a class="ba-photo" href="${src}" data-gallery="${p.slug}" data-caption="${escapeAttr(captionFor(p, `${c.before} / ${c.after}`))}">
            <img src="${src}" alt="${escapeAttr(`${c.beforeAlt(who(p, c))} / ${c.afterAlt(who(p, c))}`)}" loading="lazy">${tags}
          </a>
        </div>`;
  } else {
    shown = `        <div class="ba-pair">
${photoLink(p, first.before, 'before', up, c)}
${photoLink(p, first.after, 'after', up, c)}
        </div>`;
  }
  const hidden = [
    ...rest.flatMap((pr) => [
      photoLink(p, pr.before, 'before', up, c, { hidden: true }),
      photoLink(p, pr.after, 'after', up, c, { hidden: true }),
    ]),
    ...(p.extra || []).map((x) => photoLink(p, x.file, x.when, up, c, { hidden: true })),
  ];
  const more = hidden.length
    ? `\n        <button type="button" class="ba-more" data-gallery-open="${p.slug}">${c.morePhotos(hidden.length)}</button>`
    : '';
  return shown + (hidden.length ? `\n        <div hidden>\n${hidden.join('\n')}\n        </div>` : '') + more;
}

/** A patient with a story: photos on one side, their words on the other. */
function storyCard(p, lang, up, c) {
  const own = p.lang === lang;
  const text = own ? p.story : p.translation;
  const proc = p.procedure ? ` <span class="story-proc">${c.procedures[p.procedure]}</span>` : '';
  const result = p.result
    ? `\n          <p class="story-result"><strong>${p.result[lang][0]}</strong> ${p.result[lang][1]}</p>`
    : '';
  const original = own
    ? ''
    : `
          <details class="story-original">
            <summary>${c.original[p.lang]}</summary>
${paras(p.story, p.lang)}
          </details>`;
  return `      <article class="story-card" id="${p.slug}">
        <div class="story-photos">
${photoBlock(p, up, c)}
        </div>
        <div class="story-body">
          <h3 class="story-name">${p.name}${proc}</h3>${result}
          <blockquote class="story-headline">“${esc(p.headline[lang])}”</blockquote>
          <div class="story-text">
${paras(text)}
          </div>
          <button type="button" class="story-toggle" hidden>${c.readMore}</button>${original}
        </div>
      </article>`;
}

/** A photos-only patient, as a gallery tile. */
const galleryCard = (p, up, c) => `      <article class="result-card" id="${p.slug}">
${photoBlock(p, up, c)}
${p.name ? `        <h3 class="result-name">${p.name}</h3>` : ''}
      </article>`;

/** A Google review, in the language it was written in. */
const reviewCard = (r, c) => `      <figure class="review-card">
        <span class="stars" role="img" aria-label="${c.starsLabel}">${'<svg aria-hidden="true"><use href="#ic-star"/></svg>'.repeat(5)}</span>
        <blockquote lang="en">
${paras(r.text)}
        </blockquote>
        <figcaption><strong>${esc(r.name)}</strong> <span>${c.googleLabel}${r.procedure ? ` · ${c.procedures[r.procedure]}` : ''}</span></figcaption>
      </figure>`;

function renderPage(lang) {
  const c = copy[lang];
  const t = UI[lang];
  const { up, url } = LANGS[lang];
  const home = 'index.html';
  const twin = lang === 'en' ? 'es/results.html' : '../results.html';
  const stories = patients.filter((p) => p.story);
  const gallery = patients.filter((p) => !p.story);

  const nav = buildNav({ lang, up, home, pcPrefix: 'patient-center/', aboutPrefix: 'about/', active: { results: true } });
  const footer = footerFor({ lang, up, pcPrefix: 'patient-center/', home });

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: `${ORIGIN}/${lang === 'es' ? 'es/' : ''}` },
      { '@type': 'ListItem', position: 2, name: plain(c.title), item: url },
    ],
  };

  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${c.seoTitle}</title>
<meta name="description" content="${escapeAttr(c.description)}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${LANGS.en.url}">
<link rel="alternate" hreflang="es" href="${LANGS.es.url}">
<link rel="alternate" hreflang="x-default" href="${LANGS.en.url}">
<link rel="icon" type="image/png" href="${up}media/favicon.png">
<link rel="apple-touch-icon" href="${up}media/favicon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Houston Surgical Weight Loss">
<meta property="og:locale" content="${lang === 'es' ? 'es_ES' : 'en_US'}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${escapeAttr(c.title)}">
<meta property="og:description" content="${escapeAttr(c.description)}">
<meta property="og:image" content="${ORIGIN}/media/img/${HERO}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeAttr(c.title)}">
<meta name="twitter:description" content="${escapeAttr(c.description)}">
<meta name="twitter:image" content="${ORIGIN}/media/img/${HERO}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}css/style.css">
<script type="application/ld+json">
${JSON.stringify(breadcrumb, null, 2)}
</script>
<!-- Generated by tools/build-results.js — do not edit by hand. -->
</head>
<body>

${sprite}

<!-- ======================= HEADER ======================= -->
${header({ nav, lang, up, home })}

<!-- ======================= PAGE HERO ======================= -->
<section class="page-hero" id="top">
  <img class="page-hero-img" src="${up}media/img/${HERO}" alt="" loading="eager" fetchpriority="high">
  <div class="page-hero-scrim" aria-hidden="true"></div>
  <div class="page-hero-inner container">
    <p class="page-hero-kicker">${c.kicker}</p>
    <h1 class="page-hero-title">${c.title}</h1>
    <p class="page-hero-tag">${c.tagline}</p>
  </div>
</section>

<nav class="crumbs" aria-label="${t.breadcrumbLabel}">
  <div class="container">
    <a href="${home}">${t.home}</a>
    <span aria-hidden="true">/</span>
    <span aria-current="page">${plain(c.title)}</span>
  </div>
</nav>

<!-- ======================= INTRO ======================= -->
<section class="results-intro">
  <div class="container narrow">
    <p class="intro">${c.intro}</p>
    <p class="results-disclaimer"><svg aria-hidden="true"><use href="#ic-info"/></svg> <span>${c.disclaimer}</span></p>
    <nav class="results-jump" aria-label="${c.kicker}">
      <a href="#stories">${c.jumpStories} <span>${stories.length}</span></a>
      <a href="#gallery">${c.jumpGallery} <span>${gallery.length}</span></a>
      <a href="#reviews">${c.jumpReviews} <span>${reviews.length}</span></a>
    </nav>
  </div>
</section>

<!-- ======================= STORIES ======================= -->
<section class="pad-lg results-stories" id="stories">
  <div class="container">
    <h2 class="display bar">${c.storiesHeading}</h2>
    <div class="story-list">
${stories.map((p) => storyCard(p, lang, up, c)).join('\n')}
    </div>
  </div>
</section>

<!-- ======================= GALLERY ======================= -->
<section class="pad-lg results-gallery" id="gallery">
  <div class="container">
    <h2 class="display bar">${c.galleryHeading}</h2>
    <p>${c.galleryIntro}</p>
    <div class="result-grid">
${gallery.map((p) => galleryCard(p, up, c)).join('\n')}
    </div>
  </div>
</section>

<!-- ======================= GOOGLE REVIEWS ======================= -->
<section class="pad-lg results-reviews" id="reviews">
  <div class="container">
    <h2 class="display bar">${c.reviewsHeading}</h2>
    <p>${c.reviewsIntro}</p>
    <div class="review-grid">
${reviews.map((r) => reviewCard(r, c)).join('\n')}
    </div>${
      GOOGLE_REVIEWS_URL
        ? `\n    <div class="center-cta"><a href="${GOOGLE_REVIEWS_URL}" class="btn btn-outline" target="_blank" rel="noopener">${c.readAll}</a></div>`
        : ''
    }
  </div>
</section>

<!-- ======================= CTA ======================= -->
<section class="pc-cta">
  <div class="container center-block">
    <h2 class="display center">${c.ctaHeading}</h2>
    <p class="intro center">${c.ctaBody}</p>
    <div class="contact-actions">
      <a href="${PHONE_HREF}" class="btn btn-solid"><svg><use href="#ic-phone"/></svg> ${PHONE}</a>
      <a href="${home}#contact" class="btn btn-outline-light" data-appt-open>${t.ctaButton}</a>
    </div>
  </div>
</section>

${footer}

<!-- ======================= PHOTO VIEWER ======================= -->
<dialog class="photo-viewer" id="photoViewer" aria-label="${c.viewer.label}" data-of="${c.viewer.of}">
  <figure class="viewer-frame">
    <img class="viewer-img" src="" alt="">
    <figcaption><span class="viewer-caption"></span> <span class="viewer-count"></span></figcaption>
  </figure>
  <button type="button" class="viewer-btn viewer-prev" aria-label="${c.viewer.prev}"><svg aria-hidden="true"><use href="#ic-arrow"/></svg></button>
  <button type="button" class="viewer-btn viewer-next" aria-label="${c.viewer.next}"><svg aria-hidden="true"><use href="#ic-arrow"/></svg></button>
  <button type="button" class="viewer-close" aria-label="${c.viewer.close}">&times;</button>
</dialog>

${apptModalFor(lang)}

${tail({ lang, twin, home })}

<script src="${up}js/main.js"></script>
</body>
</html>
`;
}

/* ---------- write ---------- */

for (const lang of Object.keys(LANGS)) {
  fs.writeFileSync(path.join(root, LANGS[lang].file), renderPage(lang), 'utf8');
}

/* ---------- checks ---------- */

const problems = [];
for (const p of patients) {
  const files = [
    ...p.photos.flatMap((x) => (x.combined ? [x.combined] : [x.before, x.after])),
    ...(p.extra || []).map((x) => x.file),
  ];
  for (const f of files) {
    if (!fs.existsSync(path.join(root, 'media', 'results', `${f}.jpg`))) problems.push(`${p.slug}: missing media/results/${f}.jpg`);
  }
  if (p.story && (!p.translation || !p.headline || !p.headline.en || !p.headline.es)) {
    problems.push(`${p.slug}: a story needs its translation and a headline in both languages`);
  }
}
if (problems.length) {
  console.error(`build-results: ${problems.length} problem(s):`);
  console.error(problems.map((p) => `  ${p}`).join('\n'));
  process.exit(1);
}
console.log(`build-results: wrote ${Object.keys(LANGS).length} pages, ${patients.length} patients`);
