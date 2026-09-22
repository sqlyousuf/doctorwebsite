/*
 * The Lantern page.
 *
 * It lives in its own module because it is far longer than the other Patient
 * Center pages and carries a ~200-name employer list. The old site buried that
 * list, the covered surgeries and the cost breakdown inside collapsed FAQ
 * accordions, so the one question every visitor arrives with — "does MY
 * employer pay for this?" — took three clicks and a lot of scrolling. Here the
 * employer list is a searchable section of its own, the cost is a single
 * figure up top, and the seven-step process is a numbered flow.
 *
 * Copy is the practice's own, from houstonsurgicalweightloss.com/lantern/.
 */

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';
const LANTERN_PHONE = '(855) 200-2099';

/** The published employer list, kept in the source's own A–Z grouping. */
const employers = [
  [
    'A',
    [
      '7-Eleven',
      '32BJ Health Fund Metropolitan',
      'Advanced Medical Pricing Solutions (TPA)',
      'Agiliti',
      'Alaska Railroad Corporation',
      'AMN Healthcare',
      'ArcBest',
      'Archdiocese of Miami',
      'AT&amp;T',
      'Atlas Aerospace LLC',
      'Auto Club Enterprises (AAA)',
      'AutoZone',
    ],
  ],
  [
    'B',
    [
      'Barrick Gold of North America',
      'Baymark HCRC',
      'Beatrice Community Hospital',
      "BJ's Wholesale Club",
      'BNSF Railway',
      "Boar's Head Brand",
      'BrandSafway',
      'Brown &amp; Root',
      'Bunzl Distribution',
    ],
  ],
  [
    'C',
    [
      'Carolina Dealerships',
      'Carolina Hurricanes',
      "Carter's",
      'Casella Waste',
      'Celestica',
      'Chromalloy Gas Turbine/Sequa',
      'CityCounty Insurance Services',
      'City of Fort Worth, Texas',
      'City of Grand Prairie, Texas',
      'City of Loveland, Colorado',
      'City of Sebring, Florida',
      'Clarivate Analytics',
      'Coast Aluminum, Inc.',
      'Compass Group North America',
      'Confie Insurance',
      'Continuum Global Solutions',
      "Cook Children's Health System",
      'Core &amp; Main',
      'Crane Worldwide Logistics',
    ],
  ],
  [
    'D',
    [
      'Dairy Farmers of America (DFA)',
      'DaVita',
      'Dental Care Alliance (DCA)',
      'Digital Realty',
      'DIRECTV',
      'Dollar General',
      'Drivetime',
      'Duraserv',
      'Dutch Maid Logistics',
      'Dycom Industries',
    ],
  ],
  [
    'E',
    [
      'E&amp;J Gallo Winery',
      'Edward Jones',
      'El Paso County, Colorado',
      'ELAN International',
      'Elko County',
      'Encompass Health',
      'Energy Transfer',
      'Enhabit Home Health and Hospice',
      'Enlyte',
      'Envision Healthcare Operating',
      'Envoy Air',
      'Equinox Holdings',
      'EZCorp',
    ],
  ],
  [
    'F',
    [
      'Flex-N-Gate',
      'Fortune Brands Home &amp; Security',
      'Freedom Mortgage',
      'Freeman',
      'Fresenius Medical Care',
    ],
  ],
  [
    'G',
    [
      'GFL Environmental Inc',
      'GKN Aerospace',
      'GKN Automotive',
      'GKN Powder Metals',
      'Global Medical Response',
      'Greystar',
    ],
  ],
  [
    'H',
    [
      'HD Supply',
      'Hillsborough County Public Schools',
      'Hilton Hotels (Cigna + Anthem)',
      'Husqvarna',
      'Hyatt Hotels',
    ],
  ],
  [
    'I',
    [
      'ICUBA (Florida College System)',
      'Insurance Office of America (IOA)',
      'Integer Holdings',
      'Integrity',
      'International Matex Tank Terminals',
      'ISAS Group Benefits Trust',
      'ISS Facility Services, Inc.',
    ],
  ],
  ['J', ['Jadex', 'JELD-WEN', 'Jiffy Lube', 'Johns Manville']],
  ['K', ['KBR', 'Kenan Advantage Group', 'Knitwell Group / Premium Brands Services']],
  ['L', ['Liberty Coca-Cola Beverages', 'Lincoln Financial Group', 'Linde', 'LSC Communications']],
  [
    'M',
    [
      'Manatee County School District',
      'Marriott International',
      'Matrix Service Company',
      'McKesson Corporation',
      'Medtronic',
      'Michaels Stores',
      'Moeller Manufacturing Co.',
    ],
  ],
  [
    'N',
    [
      'NAGRA',
      'NAPA Management',
      'NCR Atleos (Cardtronics USA)',
      'NCR Voyix (NCR Corporation)',
      'Nevada Gold Mines',
      'Newell Brands',
      'NextEra Energy',
      'North Carolina Health Insurance Pool',
      'North Carolina State Health Plan',
      'Northside Hospital',
    ],
  ],
  [
    'P',
    [
      'Parker Wellbore (Parker Drilling)',
      'Pasco School District',
      'Phillips 66',
      'PLZ Corp',
      'Plymouth Tube Co.',
      'PNC Bank',
      'POOLCORP',
      'Precoat Metals',
      'Primoris Services',
    ],
  ],
  [
    'Q–R',
    [
      'Qurate',
      'Radial',
      'Red Bull',
      'Regus / IWG',
      'Rivers Casino — Des Plaines, IL',
      'Rivers Casino — Philadelphia, PA',
      'Rivers Casino — Pittsburgh, PA',
      'Rivers Casino — Portsmouth, VA',
      'Rivers Casino and Resort — Schenectady, NY',
      'RS Group Americas',
    ],
  ],
  [
    'S',
    [
      'Schaeffler',
      'School Board of Highlands County (SBHC)',
      'Seacoast National Bank',
      'Service Corporation International (SCI)',
      'Silgan Holdings',
      'Sorenson Communications, LLC',
      'Southern Health Care',
      'Southwest Airlines',
      'Sovereign Healthcare',
      'State Farm Insurance',
      'State of Alaska',
      'State of Delaware',
      'State of Florida',
      'Steel Partners',
      'Surgery Partners',
      'Swift Transportation',
      'Sysco Corporation',
    ],
  ],
  [
    'T',
    [
      'TCU (Texas Christian University)',
      'Tetra',
      'The Home Depot',
      'The Wonderful Company',
      'Thomas Concrete',
      'Transdigm',
      'Trelleborg',
      'Trend Micro',
      'Trilon Group',
      'Trimble',
    ],
  ],
  ['U–V', ['UGN Auto', 'Unisys', 'Valicor Inc.', 'Varsity Brands', 'Ventra Greenwich', 'Vericast']],
  [
    'W–Y',
    [
      'Wasserstrom Holdings',
      'Waste Connections',
      'Westlake',
      'Westmoreland Mining',
      'WhiteCap',
      'Woodforest National Bank',
      'Yelloh',
    ],
  ],
];

const employerCount = employers.reduce((n, [, names]) => n + names.length, 0);

const employerGroups = employers
  .map(
    ([letter, names]) => `      <section class="employer-group">
        <h3 class="employer-letter">${letter}</h3>
        <ul class="employer-list">
${names.map((n) => `          <li>${n}</li>`).join('\n')}
        </ul>
      </section>`
  )
  .join('\n');

const steps = [
  [
    'Your employer enrols in Lantern',
    'This is separate from your regular health insurance. Many employees never find out they have it, because it does not show up on a standard insurance card.',
  ],
  [
    'You decide to pursue surgery',
    `You, or a covered dependent, contact Lantern directly at <a href="tel:+18552002099">${LANTERN_PHONE}</a>, or simply go through our program at Houston Surgical Weight Loss.`,
  ],
  [
    'Lantern assigns you a Care Advocate',
    'A real person who guides you through the whole process — explaining your coverage, booking your consultations, handling the paperwork and answering questions from start to finish.',
  ],
  [
    'You meet our surgeons',
    'Your consultation, evaluation and pre-operative workup are all covered, whether you come in person or meet us virtually.',
  ],
  [
    'Your surgery is approved and scheduled',
    'Lantern handles pre-authorisation with your employer. It is typically much faster than traditional insurance — most patients go from first consultation to surgery in under a month, or whenever suits you. It is on your timeline.',
  ],
  ['Everything is covered', 'Facility fees, surgeon fees, anesthesia and standard post-operative care.'],
  ['Your bill arrives', 'It says <strong>$0</strong>.'],
];

const surgeries = [
  {
    icon: 'ic-bypass',
    name: 'Gastric Bypass Surgery',
    sub: 'Roux-En-Y Gastric Bypass',
    body: `<p>The gold-standard bariatric procedure for patients with severe obesity, type 2 diabetes, or gastroesophageal
      reflux disease (GERD). We create a small stomach pouch and reroute the small intestine, which limits both the
      amount of food you can eat and the number of calories you absorb.</p>
      <p>The results are dramatic and durable — often before the patient has even left the surgery center.</p>`,
    stats: [
      ['70–80%', 'of excess body weight lost, on average'],
      ['98%+', 'of type 2 diabetes cases go into remission'],
      ['~1 week', 'typical recovery'],
    ],
  },
  {
    icon: 'ic-sleeve',
    name: 'Gastric Sleeve Surgery',
    sub: 'Sleeve Gastrectomy',
    body: `<p>During a laparoscopic sleeve gastrectomy we remove approximately 80% of the stomach, leaving a narrow,
      sleeve-shaped tube that holds significantly less food. The procedure also removes the part of the stomach that
      produces ghrelin, the primary hunger hormone — so patients not only eat less, they genuinely feel less hungry.</p>
      <p>Highly effective for type 2 diabetes, hypertension, sleep apnea and joint pain.</p>`,
    stats: [
      ['60–70%', 'of excess body weight lost, typically'],
      ['~80%', 'of the stomach removed'],
      ['~1 week', 'typical recovery'],
    ],
  },
  {
    icon: 'ic-revision',
    name: 'Revisional Bariatric Surgery',
    sub: 'After a previous procedure',
    body: `<p>For patients who have already had a bariatric or foregut procedure — a gastric band, sleeve, stomach
      stapling (vertical banded gastroplasty), Nissen fundoplication or gastric bypass — and who have since experienced
      inadequate weight loss, weight regain, acid reflux or surgical complications.</p>
      <p>Lantern covers revisional procedures for eligible patients in many plan configurations. Houston Surgical Weight
      Loss has particular expertise here and will evaluate your case at your consultation.</p>`,
    stats: [],
  },
];

const tick = (items) =>
  `<ul class="mark-list is-yes">${items
    .map((i) => `<li><svg aria-hidden="true"><use href="#ic-check"/></svg>${i}</li>`)
    .join('')}</ul>`;
const cross = (items) =>
  `<ul class="mark-list is-no">${items
    .map((i) => `<li><svg aria-hidden="true"><use href="#ic-x"/></svg>${i}</li>`)
    .join('')}</ul>`;

const faq = (pairs) =>
  `<div class="faq-list">${pairs
    .map(
      ([q, a]) => `<details class="faq-item">
        <summary>${q}<span class="faq-icon" aria-hidden="true"></span></summary>
        ${a}
      </details>`
    )
    .join('')}</div>`;

const page = {
  slug: 'lantern',
  nav: 'Lantern',
  title: 'Lantern Bariatric Surgery Coverage',
  tagline: 'Hundreds of major U.S. employers now cover weight loss surgery in full. Yours may be one of them.',
  description:
    'Houston Surgical Weight Loss is a designated Lantern (formerly SurgeryPlus) network provider. Search the employer list and see whether your bariatric surgery is covered at no out-of-pocket cost.',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=70',

  // Drives the employer search box at the foot of the generated page.
  script: `
(function () {
  var input = document.getElementById('employerSearch');
  if (!input) return;
  var groups = Array.prototype.slice.call(document.querySelectorAll('.employer-group'));
  var items = Array.prototype.slice.call(document.querySelectorAll('.employer-list li'));
  var status = document.getElementById('employerCount');
  var empty = document.getElementById('employerEmpty');
  var total = items.length;

  // Match on letters and digits only, so "at&t", "AT & T" and "att" all hit.
  var norm = function (s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, ''); };
  items.forEach(function (li) { li.dataset.key = norm(li.textContent); });

  var apply = function () {
    var raw = input.value.trim();
    var q = norm(raw);
    var shown = 0;
    items.forEach(function (li) {
      var hit = !q || li.dataset.key.indexOf(q) !== -1;
      li.hidden = !hit;
      if (hit) shown++;
    });
    groups.forEach(function (g) {
      g.hidden = !Array.prototype.some.call(g.querySelectorAll('li'), function (li) { return !li.hidden; });
    });
    empty.hidden = shown > 0;
    status.textContent = !q
      ? 'Showing all ' + total + ' participating employers'
      : shown + ' of ' + total + ' match \\u201c' + raw + '\\u201d';
  };

  input.addEventListener('input', apply);
  apply();
})();`,

  body: `
      <p class="intro">If you've been told that weight loss surgery is too expensive, that your insurance won't cover
      it, or that you'll spend years saving up to afford it — we have news that could change everything.</p>

      <p>Hundreds of the largest employers in the United States now offer bariatric surgery as a fully covered,
      zero-cost benefit through a program called <strong>Lantern</strong> (formerly known as SurgeryPlus). That means
      millions of American workers, and their covered family members, may be sitting on a benefit they never knew they
      had: the ability to have life-changing weight loss surgery with no deductibles, no co-pays, and no out-of-pocket
      expenses whatsoever.</p>

      <p>At Houston Surgical Weight Loss we are a designated <strong>Lantern Network Provider in Houston, TX</strong>,
      and we help eligible patients use this benefit every single day. This page explains everything you need to know:
      what Lantern is, how it works, which employers participate, what procedures are covered, and how to get
      started.</p>

      <div class="cost-callout">
        <p class="cost-kicker">Your employer will pay for your weight loss surgery</p>
        <div class="cost-compare">
          <div class="cost-cell">
            <span class="cost-label">Typical cost of surgery</span>
            <span class="cost-figure is-was">$15,000–$25,000</span>
          </div>
          <svg class="cost-arrow" aria-hidden="true"><use href="#ic-arrow"/></svg>
          <div class="cost-cell">
            <span class="cost-label">Your cost, if eligible</span>
            <span class="cost-figure is-now">$0</span>
          </div>
        </div>
        <p class="cost-note">Members also get help paying for travel, hotel stays and other related expenses.</p>
        <p class="fine">*Deductible may apply. Houston Surgical Weight Loss will discuss this with you at your initial
        consult.</p>
      </div>

      <div class="center-cta">
        <a href="${PHONE_HREF}" class="btn btn-solid"><svg><use href="#ic-phone"/></svg> Check My Eligibility</a>
      </div>

      <h2 class="display bar">What Is Lantern?</h2>
      <p>Lantern is a national employer-sponsored healthcare platform that specialises in connecting employees with
      high-quality, credentialed surgical providers at dramatically reduced — or completely eliminated — costs to the
      patient.</p>
      <p>It has grown into one of the most comprehensive employer surgery benefit programs in the country. Employers
      partner with Lantern to give their workforce access to a vetted network of top-tier surgical centers and
      board-certified surgeons, including Dr. Irfan Wadiwala. In exchange for routing elective and planned surgeries
      through this network, employers dramatically reduce their healthcare costs — and they pass those savings directly
      on to their employees in the form of zero out-of-pocket costs.</p>
      <p>For bariatric surgery specifically, Lantern has become a game-changer. The program covers gastric sleeve
      surgery, gastric bypass surgery, revisional bariatric procedures and related care, often with no patient cost
      whatsoever. <strong>This is not a catch.</strong> It is a legitimate, fully funded employer benefit.</p>

      <h2 class="display bar">How Does Lantern Work for Bariatric Surgery?</h2>
      <p>Here's the simple version: your employer has pre-negotiated a deal with Lantern. As part of that deal, Lantern
      has assembled a network of credentialed, highly rated surgical centers and surgeons — like your team here at
      Houston Surgical Weight Loss. When you use a Lantern Network provider for your covered procedure, the full cost of
      surgery is paid by your employer's plan.</p>

      <ol class="steps-flow">
${steps
  .map(
    ([h, p]) => `        <li>
          <div class="steps-body">
            <h3>${h}</h3>
            <p>${p}</p>
          </div>
        </li>`
  )
  .join('\n')}
      </ol>

      <h2 class="display bar">What Does "No Out-of-Pocket" Actually Mean?</h2>
      <p>We understand the scepticism. In healthcare, "no cost" almost always comes with an asterisk. So let's be
      specific about what Lantern covers for eligible bariatric surgery patients.</p>

      <div class="covered-grid">
        <div class="covered-col is-yes">
          <h3>Covered in full</h3>
          ${tick([
            'Surgeon fees',
            'Surgical facility fees',
            'Anesthesia',
            'Pre-operative testing and lab work',
            'Post-operative follow-up visits',
          ])}
        </div>
        <div class="covered-col is-no">
          <h3>Does not apply</h3>
          ${cross(['Your deductible*', 'Your co-pay', 'Your co-insurance'])}
        </div>
      </div>

      <p>For the vast majority of eligible Lantern bariatric patients, the total cost for a gastric sleeve or gastric
      bypass — procedures that would normally cost $15,000 to $25,000 or more — is exactly zero dollars.</p>
      <p class="fine">*Deductible may apply. Houston Surgical Weight Loss will discuss this with you at your initial
      consult.</p>

      <h2 class="display bar">Which Employers Offer Lantern Bariatric Benefits?</h2>
      <p>This is the question most people ask first, and the list is remarkably long. Lantern currently works with
      hundreds of employers across virtually every industry — from major retailers and energy companies to government
      entities, healthcare systems and educational institutions. Many offer bariatric surgery either as a fully included
      benefit or through what Lantern calls a <em>"Carve-Out"</em>: a dedicated bariatric benefit that sits alongside
      the employer's main health plan.</p>
      <p>If you or a covered family member works for any of the organisations below, contact us today and we will verify
      your eligibility.</p>

      <div class="employer-finder">
        <label class="employer-search" for="employerSearch">
          <svg aria-hidden="true"><use href="#ic-search"/></svg>
          <input type="search" id="employerSearch" placeholder="Start typing your employer's name…" autocomplete="off"
            spellcheck="false">
        </label>
        <p class="employer-status" id="employerCount" role="status">Showing all ${employerCount} participating
        employers</p>

        <div class="employer-groups">
${employerGroups}
        </div>

        <p class="employer-empty" id="employerEmpty" hidden>No match in the published list — but that does not
        necessarily mean you are not covered. Employer benefit offerings change every year, so call us on
        <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a> and we will check for you.</p>
      </div>

      <p class="fine">This list is current as of 2025–2026, and employer benefit offerings change annually. If your
      employer is not listed it may still participate, or may be adding Lantern benefits in the next plan year — call
      <a href="${PHONE_HREF}">${PHONE}</a> and we will find out for you.</p>

      <h2 class="display bar">What Surgeries Are Covered?</h2>
      <div class="surgery-stack">
${surgeries
  .map(
    (s) => `        <article class="surgery-card">
          <div class="surgery-head">
            <span class="card-icon"><svg><use href="#${s.icon}"/></svg></span>
            <div>
              <h3>${s.name}</h3>
              <p class="surgery-sub">${s.sub}</p>
            </div>
          </div>
          <div class="surgery-body">
            ${s.body.trim()}
          </div>${
            s.stats.length
              ? `
          <dl class="surgery-stats">
${s.stats
  .map(([figure, label]) => `            <div><dt>${figure}</dt><dd>${label}</dd></div>`)
  .join('\n')}
          </dl>`
              : ''
          }
        </article>`
  )
  .join('\n')}
      </div>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'Does Lantern cover my spouse or children?',
          '<p>In most plans, yes. Covered dependents on your employer’s health plan are typically eligible for the same Lantern bariatric benefit. This means your spouse — and in some plans your adult children — can also receive free weight loss surgery.</p>',
        ],
        [
          'What is the BMI requirement for Lantern bariatric surgery?',
          '<p>Your surgeon will review your specific case during your consultation.</p>',
        ],
        [
          'Will my employer know I had bariatric surgery?',
          '<p>No. Your medical information is protected by HIPAA and is not shared with your employer. Your benefits are administered through Lantern, and your specific procedure is kept private.</p>',
        ],
        [
          'What happens if my surgery has complications?',
          '<p>Lantern-covered procedures include standard post-operative care and follow-up. In the event of complications, your care team coordinates with Lantern to ensure continued coverage for medically necessary treatment.</p>',
        ],
        [
          "Can I use my Lantern benefit if I'm a part-time employee?",
          "<p>Eligibility for part-time employees depends on whether you are enrolled in your employer's sponsored health plan. If you are enrolled in employer-sponsored health coverage, you are likely eligible. Contact us to verify.</p>",
        ],
        [
          'Is there a waiting period?',
          "<p>Usually not. We'll let you know what your specific plan requires during your eligibility verification.</p>",
        ],
      ])}

      <h2 class="display bar">Dr. Irfan Wadiwala</h2>
      <p class="surgery-sub">Fellowship-Trained Bariatric &amp; Board-Certified General Surgeon</p>
      <p>Dr. Irfan Wadiwala is a fellowship-trained bariatric surgeon and board-certified general surgeon who provides
      advanced weight loss surgery and nonsurgical weight loss solutions at Houston Surgical Weight Loss in Houston,
      Texas. He is committed to helping patients achieve long-term health through safe, effective and compassionate
      care.</p>

      <h3>Experience</h3>
      <p>With over 18 years of surgical experience, Dr. Wadiwala has performed thousands of successful bariatric
      procedures with excellent outcomes. He previously served as the Director of Bariatric Surgery at CyFair Medical
      Center, where he led and expanded minimally invasive bariatric services.</p>
      <p>His expertise includes:</p>
      <ul class="prose-list">
        <li>Gastric sleeve, gastric bypass, and revision bariatric surgery</li>
        <li>Advanced laparoscopic and minimally invasive techniques</li>
        <li>Hernia repairs, gallbladder removal, appendectomies, cyst removals, and other general surgeries</li>
      </ul>
      <p>Dr. Wadiwala maintains privileges at multiple Houston hospitals, including:</p>
      <ul class="prose-list">
        <li>HCA Houston Healthcare Northwest</li>
        <li>St. Luke's Health – The Vintage Hospital</li>
        <li>Houston Methodist Willowbrook Hospital</li>
      </ul>
      <p>He is also an active member of major professional organizations, such as ASMBS, SAGES, Harris County Medical
      Society, and the Texas Medical Association, and continues to enhance his skills by attending national bariatric
      surgery conferences and staying up to date with the latest technologies.</p>

      <h3>Education &amp; Training</h3>
      <ul class="prose-list">
        <li>Fellowship, Laparoscopic Bariatric Surgery – Penn State Milton Hershey Medical Center</li>
        <li>General Surgery Residency – Martin Luther King and Arrowhead Regional Medical Center, Los Angeles</li>
        <li>Doctor of Osteopathic Medicine, Summa Cum Laude – Western University, Pomona, CA</li>
        <li>Board-Certified in General Surgery and Bariatric Surgery</li>
      </ul>

      <h3>Personal &amp; Patient Care Philosophy</h3>
      <p>Dr. Wadiwala believes in treating the whole person — not just the condition — and guides patients through every
      step of their weight loss journey, from preoperative education to long-term follow-up. Outside of work he enjoys
      spending time outdoors with his family, playing basketball, horseback riding and traveling.</p>

      <h2 class="display bar">Why Choose Houston Surgical Weight Loss</h2>
      <ul class="prose-list">
        <li>Fellowship-trained, board-certified bariatric surgeon with 18+ years of experience</li>
        <li>Expertise in minimally invasive laparoscopic weight loss surgery</li>
        <li>Personalized care plans tailored to your goals</li>
        <li>Comprehensive support before, during, and after surgery</li>
        <li>Telehealth and in-office consultation options</li>
      </ul>
      <p>Our mission is to help you achieve safe, lasting weight loss with the support you deserve.</p>
    `,
};

module.exports = { page, employerCount };
