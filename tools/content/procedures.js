/*
 * Procedure pages.
 *
 * These exist because the six procedures were only cards on the home page, so
 * nothing on the site could rank for "gastric sleeve Houston" — the search
 * that actually books surgery. One page per procedure, each targeting its own
 * term and linking into the Patient Center pages that answer what comes next.
 *
 * IMPORTANT — where the words come from. Every clinical statement below is the
 * practice's own, lifted from pages they already publish (the Lantern page's
 * procedure descriptions, the self-pay page's eligibility and pricing, the
 * pre-op/post-op diet stages, the discharge instructions). Nothing here is a
 * medical claim written from scratch, because that is not ours to write. Where
 * a page needs something the practice has not published, it is listed in
 * `reviewNotes` for the surgeon to supply rather than invented.
 *
 * A page marked `draft: true` renders a review banner, is served noindex, and
 * is kept out of the sitemap. Clear the flag once the surgeon signs it off.
 */

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';

const ul = (items) => `<ul class="prose-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const faq = (pairs) =>
  `<div class="faq-list">${pairs
    .map(
      ([q, a]) => `<details class="faq-item">
        <summary>${q}<span class="faq-icon" aria-hidden="true"></span></summary>
        ${a}
      </details>`
    )
    .join('')}</div>`;

const pages = [
  {
    slug: 'gastric-sleeve',
    draft: true,
    nav: 'Gastric Sleeve',
    title: 'Gastric Sleeve Surgery in Houston, TX',
    seoTitle: 'Gastric Sleeve Surgery Houston, TX | Sleeve Gastrectomy',
    tagline:
      'Laparoscopic sleeve gastrectomy with Dr. Irfan Wadiwala — self-pay from $6,999, most insurance accepted.',
    description:
      'Gastric sleeve surgery in Houston, TX with Dr. Irfan Wadiwala, a fellowship-trained bariatric surgeon. Self-pay from $6,999. Most insurance accepted.',
    image: '../media/img/u-1775947933085-30050ddad6b3.jpg',

    /** Questions only the surgeon can answer. Shown in the draft banner. */
    reviewNotes: [
      'Confirm the outcome figures carried over from the Lantern page: 60–70% excess body weight loss, approximately 80% of the stomach removed, recovery around one week.',
      'Confirm the BMI thresholds as written: insurance generally requires 35+, self-pay accepted from 30+.',
      'Risks and complications are deliberately left as a placeholder — please supply the wording you want, or confirm you would rather link to ASMBS patient material.',
      'Confirm whether the $6,999 self-pay price applies to sleeve gastrectomy specifically, and whether it is still current.',
      'Add anything required by Texas Medical Board advertising rules that is missing.',
    ],

    /** MedicalProcedure schema for this page. */
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: 'Laparoscopic Sleeve Gastrectomy',
      alternateName: ['Gastric Sleeve', 'Vertical Sleeve Gastrectomy'],
      procedureType: 'https://schema.org/SurgicalProcedure',
      bodyLocation: 'Stomach',
      howPerformed:
        'A laparoscopic procedure in which approximately 80% of the stomach is removed, leaving a narrow sleeve-shaped tube.',
      preparation: 'Two-week pre-operative protein liquid fast.',
      followup: 'Staged post-operative diet and scheduled follow-up visits during the first year.',
    },

    stats: [
      ['60–70%', 'of excess body weight lost, typically'],
      ['~80%', 'of the stomach removed'],
      ['~1 week', 'typical recovery'],
      ['From $6,999', 'all-inclusive self-pay price'],
    ],

    body: `
      <p class="intro">During a laparoscopic sleeve gastrectomy we remove approximately 80% of the stomach, leaving a
      narrow, sleeve-shaped tube that holds significantly less food. The procedure also removes the part of the stomach
      that produces ghrelin, the primary hunger hormone — so patients not only eat less, they genuinely feel less
      hungry.</p>

      <p>Patients typically lose 60–70% of their excess body weight following a gastric sleeve. The procedure is highly
      effective for type 2 diabetes, hypertension, sleep apnea and joint pain, and recovery is typically around one
      week.</p>

      <p>Your surgery is performed by <a href="../index.html#about">Dr. Irfan Wadiwala</a>, a fellowship-trained,
      board-certified bariatric surgeon with over 18 years of experience.</p>

      <h2 class="display bar">Is a Gastric Sleeve Right for Me?</h2>
      <p>Eligibility depends mainly on your BMI and how you intend to pay.</p>
      ${ul([
        '<strong>Through insurance:</strong> insurance does not pay for weight-loss surgery if your BMI is under 35, and most plans add their own requirements on top — Blue Cross Blue Shield of Texas, for example, requires a six-month diet program, a sleep apnea test, psychological clearance and a five-year history of obesity.',
        '<strong>Self-pay:</strong> you can have a sleeve gastrectomy with a BMI as low as 30, with none of the waiting.',
        '<strong>Through your employer:</strong> hundreds of large employers cover bariatric surgery in full through <a href="../patient-center/lantern.html">Lantern</a>, often at no cost to you at all.',
      ])}
      <p>The only way to know for certain is a consultation. It is free, and it can be virtual.</p>

      <h2 class="display bar">What the Sleeve Helps With</h2>
      <p>Beyond weight loss, patients commonly see improvement in:</p>
      ${ul(['Type 2 diabetes', 'Hypertension', 'Sleep apnea', 'Joint pain'])}

      <h2 class="display bar">Before Surgery</h2>
      <p>You begin a protein liquid fast two weeks before your surgery date. It shrinks the liver so the procedure can
      be performed safely, reduces the risk of complications, and starts your weight loss — the average patient loses
      10–15 pounds during those two weeks.</p>
      <p>You will also meet our bariatric dietitian, in person or virtually, and receive written materials so there is
      no confusion about what to eat before or after.</p>
      <p><a href="../patient-center/pre-op-and-post-op.html">Read the full pre-op and post-op diet &rarr;</a></p>

      <h2 class="display bar">Recovery</h2>
      <p>Most patients are back to work within a week, depending on the nature of their job. In the first two weeks it
      is normal to feel nausea, soreness and some shoulder or chest pressure from the surgical gas.</p>
      ${ul([
        'Hydration is the priority — at least 48 oz a day for women, 64 oz for men, sipped slowly',
        'Walk a few laps around the house every hour to relieve gas and reduce the risk of blood clots',
        'No lifting over 10 pounds for the first two weeks',
        'Light walking from about week one, building up as your surgeon clears you',
      ])}
      <p><a href="../patient-center/discharge-instructions.html">Full discharge instructions &rarr;</a> &nbsp;·&nbsp;
      <a href="../patient-center/exercise-regimens.html">Exercise after surgery &rarr;</a></p>

      <h2 class="display bar">Eating After a Sleeve</h2>
      <p>Your diet advances through four stages, from clear liquids in the first three days to regular food from week
      six onward. Moving too quickly or skipping a stage can cause complications and slow your recovery.</p>
      <p>Because the sleeve changes how your body absorbs nutrients, daily bariatric vitamins are a lifelong
      commitment.</p>
      <p><a href="../patient-center/pre-op-and-post-op.html">The four diet stages &rarr;</a> &nbsp;·&nbsp;
      <a href="../patient-center/vitamin-guide.html">Vitamin guide &rarr;</a></p>

      <h2 class="display bar">Risks and Complications</h2>
      <div class="review-placeholder">
        <p><strong>To be supplied by Dr. Wadiwala.</strong> Every procedure carries risk, and a page that sells a
        surgery without naming them is both a clinical and a regulatory problem. The practice's current site does not
        publish a risks section for the sleeve, so there was nothing to carry across and nothing here was invented.</p>
        <p>Either supply the wording you want, or tell us to link out to the ASMBS patient guidance instead.</p>
      </div>

      <h2 class="display bar">Cost and Coverage</h2>
      <p>There are three ways patients pay for a sleeve with us:</p>
      ${ul([
        '<strong>Self-pay from $6,999</strong>, all-inclusive — surgeon, assistant surgeon, anesthesia, facility, nutrition class and lifetime follow-up. <a href="../patient-center/self-pay.html">See what is included &rarr;</a>',
        '<strong>Insurance.</strong> Most major plans are accepted, and we will verify your coverage for you.',
        '<strong>Your employer, through Lantern</strong>, often at zero out-of-pocket cost. <a href="../patient-center/lantern.html">Check the employer list &rarr;</a>',
      ])}
      <p>Financing is also available. <a href="../patient-center/financing-payment.html">Payment options &rarr;</a></p>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'How long does recovery take?',
          '<p>Recovery from a laparoscopic sleeve is typically around one week. Most patients return to work within that time, depending on their job — if it involves physical labour, your surgeon may recommend longer and put light-duty restrictions in place.</p>',
        ],
        [
          'Will I need to take vitamins for life?',
          '<p>Yes. Weight loss surgery changes how your body absorbs nutrients, so lifelong vitamin and mineral supplementation is necessary. Our dietitian builds a personalised plan around your procedure.</p>',
        ],
        [
          'Is the surgery minimally invasive?',
          `<p>Yes. Whenever possible we use laparoscopic techniques, which mean:</p>${ul([
            'Smaller incisions',
            'Less pain',
            'Faster recovery',
            'Reduced risk of complications',
          ])}`,
        ],
        [
          'Will my insurance cover it?',
          '<p>Most health insurance plans cover medically necessary procedures. Our staff will verify your coverage and discuss financing if you need it.</p>',
        ],
        [
          'What if I live outside Houston?',
          '<p>Patients travel to us from across the nation and from overseas. Your consultation can be virtual, and you only need to be in Houston for a few days. <a href="../patient-center/for-out-of-town-patients.html">Travel information &rarr;</a></p>',
        ],
      ])}
    `,
  },
];

module.exports = { pages, PHONE, PHONE_HREF };
