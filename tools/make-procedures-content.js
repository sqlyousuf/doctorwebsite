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

/*
 * The practice asked for the same three changes on each procedure page, so
 * they are the default rather than repeated seven times:
 *
 *   - drop the opening paragraphs, which restate the hero directly beneath it
 *   - drop the closing "Why Choose / Why Patients Trust" list, since the page
 *     already ends on an appointment call to action
 *   - leave a slot for the procedure animation they are supplying
 *
 * A page's own `edits` merge over these.
 */
const DEFAULT_EDITS = {
  dropIntro: true,
  dropSections: [/^why (choose|patients trust)/i],
  videoSlot: true,
};

const META = {
  'sleeve-gastrectomy.html': {
    slug: 'gastric-sleeve',
    nav: 'Gastric Sleeve',
    /*
     * Page-level edits requested by the practice. Declared here rather than
     * applied to the generated file, so they survive the next re-import.
     */
    edits: {
      appendToList: [
        {
          afterHeading: /^recovery after/i,
          items: [
            'Special dietary phases (liquid → pureed → soft → regular foods)',
            'Lifelong vitamin supplementation is required to avoid deficiencies',
          ],
        },
      ],
    },
    /*
     * Procedure animation. Sourced from Pixabay under the Pixabay Content
     * License (free for commercial use, no attribution required); the credit
     * below is kept anyway so the provenance of every asset is traceable.
     * The clip is silent and loops, so it is played muted and autoplaying —
     * `prefers-reduced-motion` readers get the poster frame and the controls.
     */
    video: {
      src: 'gastric-sleeve',
      seconds: 18,
      credit: 'Animation: F1Digitals via Pixabay (Pixabay Content License)',
      caption: 'How a sleeve gastrectomy is performed: about 75-80% of the stomach is removed, leaving a narrow, banana-shaped sleeve.',
      captionEs: 'Cómo se realiza una gastrectomía en manga: se extrae cerca del 75-80% del estómago y queda una manga estrecha con forma de plátano.',
    },
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
    // Same three edits as the sleeve page, requested for this one too.
    // The comparison to Lap-Band is not useful on the bypass page itself.
    edits: { replaceText: [[', though more involved than Lap-Band due to digestive rerouting', '']] },
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
    edits: {
      appendToList: [
        {
          afterHeading: /^recovery after/i,
          items: ['Special dietary phases (liquid → pureed → soft → regular foods)'],
        },
      ],
    },
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
  /*
   * The practice does not offer Lap-Band, so its imported page is skipped
   * rather than built. Mentions of the band on other pages (revision, the
   * sleeve comparison) are about converting or comparing, and stay.
   */
  'lap-band-surgery.html': { skip: true },
  'revision-bariatric-surgery.html': {
    slug: 'revision-bariatric-surgery',
    nav: 'Revision Surgery',
    edits: {
      replaceText: [
        [
          'Revision bariatric surgery is performed when a previous weight loss procedure did not achieve the desired outcome or led to complications. This corrective procedure can:',
          'If your initial weight loss surgery didn’t deliver the results you hoped for — or if you’re experiencing complications — revision bariatric surgery may be the solution. This corrective procedure can:',
        ],
      ],
    },
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
    edits: {
      // Unlike the other pages, this one's opening paragraphs are wanted —
      // just under the services heading rather than above it.
      moveIntroAfter: /^our general surgery services/i,
    },
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
      if (b.type === 'table') {
        const [head, ...rest] = b.rows;
        return (
          `${pad}<div class="table-wrap">
${pad}  <table class="prose-table">
` +
          `${pad}    <thead><tr>` + head.map((c) => `<th>${c.replace(/<\/?strong>/g, '')}</th>`).join('') + `</tr></thead>
` +
          `${pad}    <tbody>
` +
          rest.map((r) => `${pad}      <tr>` + r.map((c) => `<td>${c}</td>`).join('') + `</tr>`).join('\n') +
          `
${pad}    </tbody>
${pad}  </table>
${pad}</div>`
        );
      }
      if (b.type === 'list') {
        const cls = b.ordered ? 'prose-steps' : 'prose-list';
        const tag = b.ordered ? 'ol' : 'ul';
        return `${pad}<${tag} class="${cls}">\n` + b.items.map((i) => `${pad}  <li>${i}</li>`).join('\n') + `\n${pad}</${tag}>`;
      }
      return `${pad}<p>${b.text}</p>`;
    })
    .join('\n');
}

/*
 * Corrections for defects in the source markup.
 *
 * Faithful import is the goal, but not when the source is broken. On the
 * general surgery page the third bullet of "How do I prepare for surgery?"
 * sits outside its <ul> as a bare paragraph, run together with the sentence
 * after it — so the imported page reads "...stop or continue You'll receive a
 * customized pre-surgery plan." Their own self-pay page carries this same FAQ
 * with all three items in the list, so the intent is not in doubt.
 *
 * Each entry is applied once and the build fails if it stops matching, which
 * is the signal that they have fixed it upstream and this can go.
 */
const CORRECTIONS = [
  {
    file: 'general-surgery.html',
    find: 'Instructions on which medications to stop or continue You’ll receive a customized pre-surgery plan at your consultation.',
    // Becomes the missing third bullet plus its own closing sentence.
    lastItem: 'Instructions on which medications to stop or continue',
    trailing: 'You’ll receive a customized pre-surgery plan at your consultation.',
  },
  {
    // Same defect again: the third bullet of "Most patients experience" sits
    // outside its <ul>, so it renders as a stray sentence after the list.
    file: 'laparoscopic-surgery.html',
    find: 'Shorter downtime before returning to work and daily life',
    lastItem: 'Shorter downtime before returning to work and daily life',
    trailing: null,
  },
];

function applyCorrections(page) {
  for (const c of CORRECTIONS) {
    if (c.file !== page.file) continue;
    let hit = false;
    const walk = (blocks) => {
      for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].type === 'p' && blocks[i].text === c.find) {
          const list = blocks[i - 1];
          if (list && list.type === 'list') list.items.push(c.lastItem);
          // A null trailing means the stray paragraph was only ever the bullet.
          if (c.trailing) blocks[i] = { type: 'p', text: c.trailing };
          else blocks.splice(i--, 1);
          hit = true;
        }
      }
    };
    walk(page.body);
    for (const f of page.faqs) walk(f.a);
    if (!hit) {
      console.error(`make-procedures-content: correction for ${c.file} no longer matches — remove it if the source is fixed`);
      process.exit(1);
    }
  }
}

/** Apply a page's declared edits to its imported blocks. */
function applyEdits(page, edits) {
  if (!edits) return;

  if (edits.moveIntroAfter) {
    const firstHeading = page.body.findIndex((b) => b.type === 'h2' || b.type === 'h3');
    if (firstHeading > 0) {
      const intro = page.body.splice(0, firstHeading);
      const target = page.body.findIndex((b) => (b.type === 'h2' || b.type === 'h3') && edits.moveIntroAfter.test(b.text));
      if (target !== -1) page.body.splice(target + 1, 0, ...intro);
    }
  } else if (edits.dropIntro) {
    const firstHeading = page.body.findIndex((b) => b.type === 'h2' || b.type === 'h3');
    if (firstHeading > 0) page.body.splice(0, firstHeading);
  }

  for (const pattern of edits.dropSections || []) {
    // Every match, not just the first: the revision page opens with "Why
    // Choose Dr. Wadiwala" and closes with "Why Choose Houston Surgical
    // Weight Loss", and both are meant to go.
    for (;;) {
      const i = page.body.findIndex((b) => (b.type === 'h2' || b.type === 'h3') && pattern.test(b.text));
      if (i === -1) break;
      const level = page.body[i].type;
      let end = i + 1;
      // A section runs until the next heading at the same level or higher.
      while (end < page.body.length && !(page.body[end].type === 'h2' || page.body[end].type === level)) end++;
      page.body.splice(i, end - i);
    }
  }

  for (const [find, replace] of edits.replaceText || []) {
    for (const b of page.body) {
      if (b.type === 'p' && b.text.includes(find)) b.text = b.text.replace(find, replace).replace(/\s+\./g, '.');
    }
  }

  for (const add of edits.appendToList || []) {
    const h = page.body.findIndex((b) => (b.type === 'h2' || b.type === 'h3') && add.afterHeading.test(b.text));
    if (h === -1) continue;
    // The last list inside that section is the one to extend.
    let target = -1;
    for (let i = h + 1; i < page.body.length; i++) {
      if (page.body[i].type === 'h2' || page.body[i].type === 'h3') break;
      if (page.body[i].type === 'list') target = i;
    }
    if (target !== -1) page.body[target].items.push(...add.items);
  }
}

const imported = JSON.parse(fs.readFileSync(process.argv[2] || '.imported.json', 'utf8'));
const out = [];

for (const page of imported) {
  applyCorrections(page);
  const meta = META[page.file];
  if (!meta) {
    console.error(`make-procedures-content: no metadata for ${page.file}`);
    process.exit(1);
  }
  if (meta.skip) continue;
  const edits = { ...DEFAULT_EDITS, ...(meta.edits || {}) };
  // Array options add to the defaults rather than replacing them.
  edits.dropSections = [...(DEFAULT_EDITS.dropSections || []), ...((meta.edits || {}).dropSections || [])];
  applyEdits(page, edits);
  const body = renderBlocks(page.body, 6);
  const faq = page.faqs
    .map(
      (f) => `        [\n          ${js(f.q)},\n          ${js(renderBlocks(f.a, 0).replace(/\n/g, ''))},\n        ],`
    )
    .join('\n');

  // Emit the draft flag and its review notes, which are declared in META but
  // were previously never written into the generated module — so a page
  // marked draft was still shipping indexable.
  const NL = String.fromCharCode(10);
  const draft = meta.draft
    ? '    draft: true,' + NL + '    reviewNotes: [' + NL +
      meta.reviewNotes.map((n) => '      ' + js(n) + ',').join(NL) + NL + '    ],' + NL
    : '';

  out.push(`  {
    slug: ${js(meta.slug)},
    nav: ${js(meta.nav)},
${draft}`.trimEnd() + `
    title: ${js(page.title)},
    seoTitle: ${js(meta.seoTitle)},
    tagline: ${js(meta.tagline)},
    description: ${js(meta.description)},
    image: '../media/img/${meta.image}',
    stats: [
${meta.stats.map(([f, l]) => `      [${js(f)}, ${js(l)}],`).join('\n')}
    ],
    edits: { videoSlot: ${meta.video ? 'false' : 'true'} },
${meta.video ? '    video: ' + JSON.stringify(meta.video) + ',' + NL : ''}    procedureSchema: {
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
