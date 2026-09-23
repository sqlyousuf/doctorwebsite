#!/usr/bin/env node
/*
 * Turns the imported /services/ content into tools/content/procedures.js.
 *
 *     node tools/import-procedures.js <saved-html-dir> > .imported.json
 *     node tools/make-procedures-content.js .imported.json
 *
 * Only the metadata below is ours — slug, nav label, search title, hero image,
 * and the headline figures. Every word of clinical copy comes through from the
 * practice's own pages untouched, which is the whole point: these descriptions
 * are theirs, and a rewrite is not ours to make.
 *
 * The figures in `stats` are quoted from each page's own text; nothing is
 * rounded, averaged or inferred. Where a page states no figure, it gets no
 * stat band rather than an invented one.
 */

const fs = require('fs');
const path = require('path');

const META = {
  'sleeve-gastrectomy.html': {
    slug: 'gastric-sleeve',
    nav: 'Gastric Sleeve',
    seoTitle: 'Gastric Sleeve Surgery Houston, TX | Sleeve Gastrectomy',
    description:
      'Gastric sleeve surgery in Houston, TX with Dr. Irfan Wadiwala, a fellowship-trained bariatric surgeon. Most insurance accepted.',
    tagline: 'Laparoscopic sleeve gastrectomy with Dr. Irfan Wadiwala.',
    image: 'u-1775947933085-30050ddad6b3.jpg',
    stats: [
      ['Up to 70%', 'of excess body weight lost in the first year'],
      ['70–80%', 'of the stomach removed'],
      ['Same day', 'most patients go home'],
      ['2–4 weeks', 'back to normal routines'],
    ],
  },
  'gastric-bypass-surgery.html': {
    slug: 'gastric-bypass',
    nav: 'Gastric Bypass',
    seoTitle: 'Gastric Bypass Surgery Houston, TX | Roux-en-Y',
    description:
      'Laparoscopic gastric bypass (Roux-en-Y) in Houston, TX with Dr. Irfan Wadiwala, a fellowship-trained bariatric surgeon.',
    tagline: 'Roux-en-Y gastric bypass, performed laparoscopically.',
    image: 'u-1579684453423-f84349ef60b0.jpg',
    stats: [
      ['60–80%', 'of excess body weight lost'],
      ['12–18 months', 'to reach those results'],
      ['1–2 days', 'most patients go home'],
      ['2–4 weeks', 'back to normal routines'],
    ],
  },
  'gastric-balloon-surgery.html': {
    slug: 'gastric-balloon',
    nav: 'Gastric Balloon',
    seoTitle: 'Gastric Balloon Houston, TX | Non-Surgical Weight Loss',
    description:
      'Gastric balloon in Houston, TX — a non-surgical, temporary weight loss option placed and removed endoscopically.',
    tagline: 'A non-surgical, temporary option placed without incisions.',
    image: 'u-1551190822-a9333d879b1f.jpg',
    stats: [
      ['30–40%', 'of excess body weight lost'],
      ['6–12 months', 'the balloon stays in place'],
      ['2–3 days', 'back to work and normal activity'],
    ],
  },
  'lap-band-surgery.html': {
    slug: 'lap-band',
    nav: 'Lap-Band',
    seoTitle: 'Lap-Band Surgery Houston, TX | Adjustable Gastric Band',
    description:
      'LAP-BAND® adjustable gastric band surgery in Houston, TX with Dr. Irfan Wadiwala. Reversible and adjustable.',
    tagline: 'An adjustable, reversible band — no stapling or rerouting.',
    image: 'u-1514416309827-bfb0cf433a2d.jpg',
    stats: [
      ['Up to 65%', 'of excess body weight lost'],
      ['1–2 weeks', 'back to normal activities'],
      ['Adjustable', 'and fully reversible'],
    ],
  },
  'revision-bariatric-surgery.html': {
    slug: 'revision-bariatric-surgery',
    nav: 'Revision Surgery',
    seoTitle: 'Revision Bariatric Surgery Houston, TX | Second Procedure',
    description:
      'Revision bariatric surgery in Houston, TX for weight regain, inadequate loss, reflux or complications after an earlier procedure.',
    tagline: 'When an earlier procedure has not delivered what it should.',
    image: 'u-1758691462878-6edc3d3da1be.jpg',
    stats: [['2–3 weeks', 'back to normal activities']],
  },
  'general-surgery.html': {
    slug: 'general-surgery',
    nav: 'General Surgery',
    seoTitle: 'General Surgery Houston, TX | Hernia & Gallbladder',
    description:
      'General surgery in Houston, TX — hernia repair, gallbladder removal, appendectomy and more, with Dr. Irfan Wadiwala.',
    tagline: 'Hernia repair, gallbladder, appendix and more.',
    image: 'u-1758691462814-485c3672e447.jpg',
    stats: [
      ['1–3 weeks', 'recovery, laparoscopic'],
      ['4–6 weeks', 'recovery, open surgery'],
    ],
  },
  'laparoscopic-surgery.html': {
    slug: 'laparoscopic-surgery',
    nav: 'Laparoscopic Surgery',
    seoTitle: 'Laparoscopic Surgery Houston, TX | Minimally Invasive',
    description:
      'Minimally invasive laparoscopic surgery in Houston, TX with Dr. Irfan Wadiwala — smaller incisions and faster recovery.',
    tagline: 'Smaller incisions, less pain, a faster way back.',
    image: 'u-1576091160550-2173dba999ef.jpg',
    stats: [['Same day', 'most patients go home']],
  },
};

const js = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

/** Their markup, in our classes. */
function renderBlocks(list, indent) {
  const pad = ' '.repeat(indent);
  return list
    .map((b) => {
      if (b.type === 'h2') return `${pad}<h2 class="display bar">${b.text}</h2>`;
      if (b.type === 'h3') return `${pad}<h3>${b.text}</h3>`;
      if (b.type === 'list') {
        const cls = b.ordered ? 'prose-steps' : 'prose-list';
        const tag = b.ordered ? 'ol' : 'ul';
        return `${pad}<${tag} class="${cls}">\n` + b.items.map((i) => `${pad}  <li>${i}</li>`).join('\n') + `\n${pad}</${tag}>`;
      }
      return `${pad}<p>${b.text}</p>`;
    })
    .join('\n');
}

const imported = JSON.parse(fs.readFileSync(process.argv[2] || '.imported.json', 'utf8'));
const out = [];

for (const page of imported) {
  const meta = META[page.file];
  if (!meta) {
    console.error(`make-procedures-content: no metadata for ${page.file}`);
    process.exit(1);
  }
  const body = renderBlocks(page.body, 6);
  const faq = page.faqs
    .map(
      (f) => `        [\n          ${js(f.q)},\n          ${js(renderBlocks(f.a, 0).replace(/\n/g, ''))},\n        ],`
    )
    .join('\n');

  out.push(`  {
    slug: ${js(meta.slug)},
    nav: ${js(meta.nav)},
    title: ${js(page.title)},
    seoTitle: ${js(meta.seoTitle)},
    tagline: ${js(meta.tagline)},
    description: ${js(meta.description)},
    image: '../media/img/${meta.image}',
    stats: [
${meta.stats.map(([f, l]) => `      [${js(f)}, ${js(l)}],`).join('\n')}
    ],
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: ${js(page.title.replace(/ Specialist in Houston, TX$/, ''))},
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    body: \`
${body}

      <h2 class="display bar">Frequently Asked Questions</h2>
      \${faq([
${faq}
      ])}
    \`,
  },`);
}

const header = `/*
 * Procedure pages.
 *
 * The clinical copy here is the practice's own, imported verbatim from the
 * pages they already publish at houstonsurgicalweightloss.com/services/. It
 * was parsed out of their markup rather than retyped, so the wording, the
 * figures and the structure are exactly theirs. Ours is only the surrounding
 * metadata: slug, nav label, search title, hero image, and the headline
 * figures — each of which is quoted from the page's own text.
 *
 * Regenerate with:
 *   node tools/import-procedures.js <saved-html-dir> > .imported.json
 *   node tools/make-procedures-content.js .imported.json
 *
 * Still missing, on their pages as much as ours: none of these pages publishes
 * a risks and complications section. That is the practice's to write, and it
 * is flagged rather than invented.
 */

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';

const faq = (pairs) =>
  \`<div class="faq-list">\${pairs
    .map(
      ([q, a]) => \`<details class="faq-item">
        <summary>\${q}<span class="faq-icon" aria-hidden="true"></span></summary>
        \${a}
      </details>\`
    )
    .join('')}</div>\`;

const pages = [
`;

fs.writeFileSync(
  path.join(__dirname, 'content', 'procedures.js'),
  header + out.join('\n') + '\n];\n\nmodule.exports = { pages, PHONE, PHONE_HREF };\n',
  'utf8'
);
console.log(`make-procedures-content: wrote ${out.length} procedure pages`);
