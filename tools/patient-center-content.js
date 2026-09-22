/*
 * Copy for the Patient Center section, carried over from the practice's
 * previous site (houstonsurgicalweightloss.com/patient-center/*). The wording
 * is the client's own; only the imagery is new.
 *
 * Each entry drives one generated page and one item in the Patient Center
 * dropdown. `nav` is the menu label and must stay exactly as the old site had
 * it — the client asked for the same menu items under the same names.
 *
 * `image` is the page-hero photograph. These are the only deliberately new
 * assets: the brief was "same text, different pics".
 */

// Lantern is long enough — and its employer list interactive enough — to keep
// in its own module.
const { page: lantern } = require('./content/lantern.js');

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';

/** Shorthand so the copy below stays readable. */
const ul = (items) => `<ul class="prose-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ol = (items) => `<ol class="prose-steps">${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
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
    slug: 'self-pay',
    nav: 'Self-Pay',
    seoTitle: 'Self-Pay Gastric Sleeve $6,999 | Houston, TX',
    title: 'Self-Pay Sleeve Gastrectomy',
    tagline: 'Sleeve gastrectomy starting at $6,999 — all-inclusive, with lifetime follow-up.',
    description:
      'Self-pay sleeve gastrectomy in Houston starting at $6,999, all-inclusive with lifetime follow-up from a board-certified, fellowship-trained bariatric surgeon.',
    image: '../media/img/u-1775947933085-30050ddad6b3.jpg',
    body: `
      <div class="price-block">
        <p class="price-label">Self-Pay Price</p>
        <p class="price-figure"><span class="price-starting">Starting at</span> $6,999</p>
        <p class="price-fine">All-inclusive price includes life-time follow-up.</p>
      </div>

      <p class="intro">Sleeve gastrectomy starting at <strong>$6,999</strong>. We offer the best price in the nation for
      an outpatient procedure with the best surgeons and the best program. Our surgeons have been performing this
      procedure since 2008 and have completed over 10,000 procedures with great outcomes and a complication rate lower
      than the national average. There is no need to take the risk of travelling to Mexico for inferior outcomes.</p>

      <h2 class="display bar">Expert Bariatric Surgery &amp; Personalized Care</h2>
      <p>Your surgery will be performed by Dr. Wadiwala — a US trained, board-certified, Center of Excellence surgeon.
      Procedures are performed at the Townsen Hospital System or a comparable facility, all of which are fully
      accredited and fully equipped for bariatric surgery. Our board-certified nursing and anesthesia teams specialize
      in bariatric surgery and have decades of experience.</p>
      <p>Your initial consultation is free, in person or virtual. Patients travel to us from all over the nation and
      from overseas. Your surgeon will listen to your concerns and those of your family and answer every question in
      everyday language and not in medical jargon. You will meet your surgeon face to face the day before surgery for
      final instructions and the famous "before" picture, and you will only need to stay a few days in Houston before
      returning home.</p>

      <h2 class="display bar">Lifelong Weight-Loss Support &amp; Follow-Up</h2>
      <p>Long-term weight loss success depends on knowledge of proper nutrition and follow-up care. Before surgery you
      will meet with our bariatric dietitian, in person or virtually, and you will be given written materials so there
      will be no confusion concerning your preoperative or postoperative diet. Our staff dietitian is always available
      to our pre-op and post-op patients.</p>
      <p>Complications are rare. When you have your surgery with us, you may choose an option that protects against any
      costs that may arise from diagnosing and treating complications. If after your research you decide to have surgery
      elsewhere, make sure you choose, at a minimum, a surgeon with good reviews, excellent outcomes, extensive
      experience and a comprehensive follow-up program.</p>
      <p>Although your surgery is a one-day outpatient procedure, we will be your weight-loss partner forever.</p>
      <p><strong>Don't trust your health to inferior surgeons. You can afford the best.</strong> Call
      <a href="${PHONE_HREF}">${PHONE}</a> today to begin your weight-loss journey.</p>

      <h2 class="display bar">The Cash Price Includes</h2>
      ${ul([
        'Surgeon Fee',
        'Assistant Surgeon Fee',
        'Anesthesia Fee',
        'Surgery Center Facility Charges',
        'Nutrition Class',
        'Lifetime follow up with Houston Surgical Weight Loss',
      ])}

      <h2 class="display bar">Benefits of Self-Pay</h2>
      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Lower BMI Eligibility</h3>
          <p>You can have the surgery with a lower BMI. Insurance never pays for weight-loss surgery if the BMI is less
          than 35. With self-pay, you can have sleeve gastrectomy with a BMI as low as 30.</p>
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>No Insurance Delays</h3>
          <p>Insurance companies collect your monthly premiums but do not want to pay for your healthcare, so they
          establish numerous burdensome requirements. Blue Cross Blue Shield of Texas, for example, requires you to
          complete a six-month diet program, a sleep apnea test, psychological clearance and a 5 year history of
          obesity before they will pay.</p>
        </article>
        <article class="card">
          <span class="card-index">03</span>
          <h3>No Minimum Age</h3>
          <p>Almost no insurance will pay for weight-loss surgery for patients under the age of 18. This is unfortunate
          because the surgery is safe for adolescents and it works. We have operated on dozens of such patients, and we
          can help you too.</p>
        </article>
      </div>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'How do I know if I need surgery?',
          '<p>If you have ongoing symptoms such as pain, swelling, or digestive issues, schedule a consultation. Our surgeons will perform exams and tests to determine the best treatment.</p>',
        ],
        [
          'Are these surgeries minimally invasive?',
          `<p>Yes. Whenever possible, we use laparoscopic techniques, which provide:</p>${ul([
            'Smaller incisions',
            'Less pain',
            'Faster recovery',
            'Reduced risk of complications',
          ])}`,
        ],
        [
          'What is the typical recovery time?',
          `<p>Recovery varies by procedure and patient health.</p>${ul([
            '<strong>Laparoscopic surgeries:</strong> 1–3 weeks for most patients.',
            '<strong>Traditional open surgeries:</strong> 4–6 weeks or longer.',
          ])}`,
        ],
        [
          'Will my insurance cover surgery?',
          '<p>Most health insurance plans cover medically necessary procedures. Our staff will help verify your coverage and discuss financing if needed.</p>',
        ],
        [
          'How do I prepare for surgery?',
          `<p>Preparation may include:</p>${ul([
            'Pre-surgery lab tests',
            'Dietary adjustments',
            'Instructions on which medications to stop or continue',
          ])}<p>You'll receive a customized pre-surgery plan at your consultation.</p>`,
        ],
      ])}
    `,
  },

  {
    slug: 'financing-payment',
    nav: 'Financing Payment',
    seoTitle: 'Weight Loss Surgery Financing | Houston, TX',
    title: 'Financing &amp; Payment Options',
    tagline: 'Financing options for weight loss surgery — vertical sleeve gastrectomy starting at $6,999.',
    description:
      'Financing and payment options for weight loss surgery at Houston Surgical Weight Loss, including an all-inclusive self-pay price, Cherry and CareCredit.',
    image: '../media/img/u-1563013544-824ae1b704d3.jpg',
    body: `
      <p class="intro">Vertical Sleeve Gastrectomy starting at <strong>$6,999</strong>.</p>

      <div class="price-block">
        <p class="price-label">Special Offer</p>
        <p class="price-figure">$6,999<span class="price-starting">*</span></p>
        <p class="price-fine">All-Inclusive. Payable by cashier's check or money order to WIFUMAM PA.</p>
      </div>

      <h2 class="display bar">Includes</h2>
      ${ul([
        "Surgeon's fees",
        'Hospital fees',
        'Anesthesia',
        'Labs and diagnostics',
        'Dietitian services',
        'Follow-up appointments for 1 year',
        '$1,000 hospital rebate',
      ])}

      <h2 class="display bar">Financing Option</h2>
      <p>Pay for your procedure over time with convenient financing options.</p>

      <h3>Accepted Payment Methods</h3>
      ${ul(['Visa', 'MasterCard', 'Discover', 'American Express'])}

      <div class="card-grid">
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-card"/></svg></span>
          <h3>Cherry</h3>
          <p>Ask our team about applying for a Cherry payment plan for your procedure.</p>
        </article>
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-card"/></svg></span>
          <h3>CareCredit</h3>
          <p>CareCredit financing is accepted for bariatric and general surgery procedures.</p>
        </article>
      </div>

      <h2 class="display bar">Important Information</h2>
      ${ul([
        'Prices are subject to change and will be confirmed at the time of scheduling.',
        `The costs listed do NOT include:${ul([
          'Medications',
          'Vitamin supplements',
          'Psychological consultation required for bariatric surgery clearance',
        ])}`,
      ])}
    `,
  },

  {
    slug: 'patient-forms',
    nav: 'Patient Forms',
    seoTitle: 'New Patient Forms | Houston Surgical Weight Loss',
    title: 'Patient Forms',
    tagline: 'Complete your new patient paperwork before your first visit.',
    description:
      'Download and complete your new patient forms for Houston Surgical Weight Loss before your first visit, in English or Spanish.',
    image: '../media/img/u-1758691462814-485c3672e447.jpg',
    body: `
      <p class="intro">We ask all new patients to complete the forms below before their first visit. You may choose to
      fill them out directly or print and complete them by hand. Once finished, you can either bring the forms with you
      to your appointment or email them to our office.</p>

      <h2 class="display bar">Available Forms</h2>
      <div class="card-grid">
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-clipboard"/></svg></span>
          <h3>New Patient Form — English (PDF Format)</h3>
          <p><a href="#">Click here to download</a></p>
        </article>
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-clipboard"/></svg></span>
          <h3>Formulario para Nuevos Pacientes — Español (Formato PDF)</h3>
          <p><a href="#">Haga clic aquí para descargar</a></p>
        </article>
      </div>

      <p class="fine">The form PDFs are supplied by the practice and linked here once they are uploaded.</p>

      <p>If you have any questions while filling out the forms, please feel free to contact us at
      <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a> — we're happy to help.</p>

      <hr class="mini-rule">

      <p>If you have any inquiries regarding patient forms or other documentation, please call us at
      <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a>. We're here to assist you with anything you need.</p>
    `,
  },

  {
    slug: 'after-surgery',
    nav: 'After Surgery',
    seoTitle: 'Life After Bariatric Surgery | Houston, TX',
    title: 'Life After Weight Loss Surgery',
    tagline: 'Recovery, follow-up, diet and exercise — the habits that make the results last.',
    description:
      'Recovery, follow-up visits, diet and exercise after bariatric surgery with Dr. Irfan Wadiwala in Spring, TX.',
    image: '../media/img/u-1758691462878-6edc3d3da1be.jpg',
    body: `
      <h2 class="display bar">A New Beginning After Surgery</h2>
      <p class="intro">Weight loss surgery serves as a powerful tool for achieving long-term health and well-being, with
      true success beginning after the procedure. This requires new habits, dedication, and regular follow-up to ensure
      safe and sustainable weight loss.</p>
      <p>Houston Surgical Weight Loss provides comprehensive support including routine follow-up appointments,
      personalized dietary guidance, gastric band adjustments when needed, and ongoing access to our care team for
      questions or concerns. A team of professionals helps patients adjust to their new lifestyle and guides them
      toward their goals throughout the process.</p>

      <h2 class="display bar">Recovery After Weight Loss Surgery</h2>
      <p>Every patient's recovery experience is unique, depending on the procedure type and how the body responds.</p>
      ${ul([
        'Same-day discharge applies to LAP-BAND® surgery patients',
        'Some mild pain and discomfort are expected for a few days but can be controlled with prescribed medication',
        'Patients must bring someone to drive them home on surgery day',
        'Do not operate a vehicle until the surgeon officially releases clearance',
      ])}
      <p>Detailed post-operative instructions cover wound care, dietary restrictions, and physical activity
      guidelines.</p>

      <h2 class="display bar">Follow-Up and Ongoing Aftercare</h2>
      <p>Consistent follow-up is essential for long-term success and safety.</p>
      ${ul([
        'Several appointments occur within the first year to monitor progress and healing',
        'Gastric band adjustments can be made anytime to increase or decrease food intake as needed',
        'A dedicated team is available 24/7 to answer questions or address concerns between visits',
      ])}
      <p>Regular follow-up visits track weight loss, address challenges early, and ensure patients stay on the path to
      success.</p>

      <h2 class="display bar">Your New Diet After Surgery</h2>
      <p>Weight loss surgery changes how the body digests and absorbs food, requiring changes to eating habits. Since
      smaller amounts are consumed, every bite counts toward nutrition.</p>
      <p>Core dietary recommendations include:</p>
      ${ul([
        'High-protein meals to preserve muscle mass',
        'Limited carbohydrates and fats to promote fat loss',
        'Plenty of water and non-carbonated, low-calorie beverages',
        'Daily vitamin and nutrient supplements to prevent deficiencies',
      ])}
      <p>Alcohol and smoking should be avoided, as they interfere with healing and long-term progress. A registered
      dietitian creates a customized dietary plan designed specifically for individual needs and weight loss goals.</p>

      <h2 class="display bar">The Role of Exercise in Your Success</h2>
      <p>A consistent exercise regimen is just as important as a healthy diet for long-term results.</p>
      <p>After surgery, the body consumes fewer calories, which can cause it to burn muscle instead of fat. Exercise
      helps build and maintain muscle mass, boosting metabolism and supporting sustainable weight loss.</p>
      <p>Recommended routine:</p>
      ${ul([
        'Aim for 30 minutes of moderate exercise, four days per week',
        'Focus on a mix of cardio and strength training for best results',
      ])}
      <p>Exercise improves mood, energy levels, and overall health beyond calorie burning.</p>

      <h2 class="display bar">Three Most Common Questions About Life After Surgery</h2>
      ${faq([
        [
          'When can I return to work after surgery?',
          '<p>Most patients return to work within one week, depending on the type of surgery and their job responsibilities. If the job involves physical labor, the surgeon may recommend a longer recovery period and light-duty restrictions such as no lifting, pushing, or pulling more than 10 lbs, and avoiding excessive twisting or bending. Always follow personalized surgeon instructions for a safe return to work.</p>',
        ],
        [
          'How often will I need follow-up appointments?',
          `<p>Follow-up care is vital to success.</p>${ul([
            '<strong>First year:</strong> Visits typically occur at 1 week, 1 month, 3 months, 6 months, and 12 months post-surgery',
            '<strong>After the first year:</strong> Appointments may be scheduled annually or as needed to ensure long-term success',
          ])}<p>These visits allow the surgeon to monitor weight loss progress, make adjustments to diet or gastric band, and address any questions or concerns.</p>`,
        ],
        [
          'Will I need to take vitamins and supplements after surgery?',
          '<p>Yes. Because weight loss surgery changes how the body absorbs nutrients, lifelong vitamin and mineral supplementation is necessary. Common supplements include multivitamins, Vitamin B12, calcium, iron, and protein supplements. A dietitian creates a personalized supplement plan to prevent deficiencies and keep patients healthy.</p>',
        ],
      ])}

      <h2 class="display bar">Why Choose Houston Surgical Weight Loss for Post-Surgical Care</h2>
      ${ul([
        'Led by Dr. Irfan Wadiwala, a fellowship-trained, board-certified bariatric surgeon with over 18 years of experience',
        'A comprehensive care team, including registered dietitians and dedicated support staff',
        'Personalized aftercare plans designed to fit unique needs',
        '24/7 access for urgent questions or concerns',
        'A proven track record of helping patients achieve long-term weight loss success',
      ])}

      <h2 class="display bar">Summary</h2>
      <p>Life after bariatric surgery involves commitment to new habits around diet and exercise, routine follow-up care
      to ensure safe and steady progress, and support from a dedicated team guiding every step of the way. By working
      closely with the Houston Surgical Weight Loss team, patients will have the tools, knowledge, and ongoing support
      needed to achieve health and weight loss goals.</p>
    `,
  },

  {
    slug: 'vitamin-guide',
    nav: 'Vitamin Guide',
    seoTitle: 'Bariatric Vitamin Guide | Houston, TX',
    title: 'Vitamin Guide',
    tagline: 'Daily supplementation that protects your health after weight-loss surgery.',
    description:
      'Bariatric vitamin guide: package options and daily supplementation advice for patients of Houston Surgical Weight Loss.',
    image: '../media/img/u-1664956618021-73c47736845e.jpg',
    body: `
      <p class="intro">Bariatric surgery changes how your body absorbs nutrients, so specialized vitamins are necessary
      to prevent deficiencies and protect your overall health.</p>
      <p>Consistent daily supplementation supports healing, boosts energy, strengthens bones, and ensures long-term
      success after your weight-loss procedure.</p>

      <h2 class="display bar">Bariatric Vitamin Package Options</h2>
      <p>It's important to ensure that the vitamins you are taking meet all bariatric requirements. If you are unsure,
      please reach out to our office to consult with our in-house dietitian for guidance.</p>

      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Option 1</h3>
          ${ul(['Take 2 quick melt multivitamins', 'Take 3 soft chew calcium'])}
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>Option 2</h3>
          ${ul(['Take 2 soft chew multivitamins', 'Take 1 soft chew iron', 'Take 3 soft chew calcium'])}
        </article>
      </div>

      <p>Explore trusted bariatric vitamin options designed to support your nutrition and recovery after weight loss
      surgery.</p>

      <p class="fine"><strong>Disclaimer:</strong> Please follow the instructions given by your Surgeon/Dietician.</p>

      <div class="center-cta">
        <a href="https://www.bariatricfusion.com/?rfsn=9005858.d32c16" class="btn btn-solid" target="_blank" rel="noopener">
          Visit the Vitamin Store <svg><use href="#ic-arrow"/></svg>
        </a>
      </div>
      <p class="affiliate-note">
        <svg aria-hidden="true"><use href="#ic-info"/></svg>
        <span><strong>Disclosure:</strong> Houston Surgical Weight Loss earns a commission on purchases made through
        this link. Your supplement plan is set by your surgeon and dietitian based on your procedure, and you are free
        to buy equivalent bariatric vitamins anywhere.</span>
      </p>
    `,
  },

  {
    slug: 'bariatric-vitamins',
    nav: 'Bariatric Vitamins',
    seoTitle: 'Bariatric Vitamins in Houston, TX | Bariatric Fusion',
    title: 'Bariatric Vitamins Specialist in Houston, TX',
    tagline: 'Bariatric Fusion® supplements and a personalised plan for life after surgery.',
    description:
      'Bariatric vitamins specialist in Houston, TX. Bariatric Fusion® supplements and personalised post-surgery supplement plans from Dr. Irfan Wadiwala.',
    image: '../media/img/u-1707129785947-ddc627a8bab9.jpg',
    sub: [
      {
        nav: 'Vitamin E Store',
        href: 'https://www.bariatricfusion.com/?rfsn=9005858.d32c16',
        external: true,
      },
    ],
    body: `
      <p class="intro">At Houston Surgical Weight Loss, we know that your journey to a healthier, happier life doesn't
      end after surgery. Following a gastric bypass, sleeve gastrectomy, or any other type of weight loss surgery, your
      body requires essential vitamins and minerals to support healing, maintain energy, and ensure long-term
      success.</p>
      <p>That's why our practice offers a full selection of Bariatric Fusion® vitamins at affordable prices. These
      specially formulated supplements are designed to meet the unique nutritional needs of patients who have undergone
      bariatric surgery.</p>
      <p>Our team, led by Dr. Irfan Wadiwala, provides expert guidance on which vitamins and supplements are right for
      you, based on your health history, lifestyle, and the type of procedure you've had.</p>
      <p>Call us today at <a href="${PHONE_HREF}">${PHONE}</a> or schedule an appointment online to learn more about our
      post-surgery supplement program and how we can help you stay on track toward lifelong health.</p>

      <h2 class="display bar">Why Bariatric Vitamins Are Essential After Weight Loss Surgery</h2>
      <p>Bariatric surgery changes how your body digests and absorbs food. While this helps with weight loss, it also
      means your body may not get enough nutrients from your diet alone. Without supplementation, you may experience
      micronutrient deficiencies that can affect your health and recovery.</p>
      <p>Bariatric vitamins:</p>
      ${ul([
        "Replace essential nutrients your body can't absorb from food alone",
        'Support healing and recovery after surgery',
        'Promote healthy weight loss and metabolism',
        'Help maintain strong bones, immunity, and overall energy levels',
        'Prevent long-term complications related to vitamin and mineral deficiencies',
      ])}
      <p>Taking the right vitamins every day is a lifelong commitment and a vital part of your weight loss success.</p>

      <h2 class="display bar">Bariatric Fusion® Vitamins Available in Houston</h2>
      <p>At Houston Surgical Weight Loss, we proudly offer Bariatric Fusion® vitamins, one of the most trusted brands
      for bariatric patients. These products are scientifically formulated to meet your body's needs after surgery and
      are available on-site at our Spring, TX office or through our online store.</p>
      <p>Our supplement options include:</p>
      ${ul([
        'Multivitamins for overall daily nutrition',
        'Iron to support healthy blood and prevent anemia',
        'Zinc to aid healing and immune function',
        'Copper to assist with energy production and collagen formation',
        'Vitamin C to boost immunity and tissue repair',
        'Calcium Citrate to strengthen bones and teeth',
      ])}
      <p>Each supplement is available in liquid, chewable, or capsule form, making it easy to fit into your daily
      routine.</p>

      <h2 class="display bar">How to Take Your Bariatric Vitamins</h2>
      <p>Most patients will take supplements for the rest of their lives after bariatric surgery to ensure lasting
      health and prevent deficiencies. Dr. Wadiwala and our team will create a personalized supplement plan based on
      your surgery type and individual needs. These supplements are affordable, great-tasting, and easy to incorporate
      into your lifestyle.</p>
      <p>Explore trusted bariatric vitamin options designed to support your nutrition and recovery after weight loss
      surgery.</p>
      <p class="fine"><strong>Disclaimer:</strong> Please follow the instructions given by your Surgeon/Dietician.</p>

      <div class="center-cta">
        <a href="https://www.bariatricfusion.com/?rfsn=9005858.d32c16" class="btn btn-solid" target="_blank" rel="noopener">
          Vitamin E Store <svg><use href="#ic-arrow"/></svg>
        </a>
      </div>
      <p class="affiliate-note">
        <svg aria-hidden="true"><use href="#ic-info"/></svg>
        <span><strong>Disclosure:</strong> Houston Surgical Weight Loss earns a commission on purchases made through
        this link. Your supplement plan is set by your surgeon and dietitian based on your procedure, and you are free
        to buy equivalent bariatric vitamins anywhere.</span>
      </p>

      <h2 class="display bar">Your Complete Post-Surgery Health Plan</h2>
      <p>Vitamins alone aren't enough to maintain your health after bariatric surgery. Our team at Houston Surgical
      Weight Loss provides a comprehensive plan that includes:</p>
      ${ul([
        'A nutrient-rich, balanced diet',
        'Daily physical activity to boost metabolism and energy',
        'Regular follow-up appointments to monitor progress and adjust your supplement plan',
        'Education on healthy lifestyle habits to ensure long-term success',
      ])}
      <p>By combining proper supplementation with healthy living, you'll maximize the benefits of your weight loss
      surgery and maintain your results for years to come. Work with a trusted Bariatric Vitamin Specialist in Houston
      to protect your health after weight loss surgery.</p>

      <h2 class="display bar">How Bariatric Vitamins Work After Weight Loss Surgery</h2>
      <p>Bariatric vitamins are specially formulated supplements designed to support patients who have undergone weight
      loss procedures such as gastric bypass, sleeve gastrectomy, or gastric balloon surgery.</p>
      <p>After bariatric surgery, the digestive system changes significantly. The stomach becomes smaller and, in some
      procedures, parts of the small intestine are bypassed. While these changes help patients lose weight effectively,
      they also reduce the body's ability to absorb essential nutrients from food.</p>
      <p>Bariatric vitamins work by replacing and restoring these missing nutrients in highly absorbable forms that the
      body can easily use.</p>

      <h3>Improved Nutrient Absorption</h3>
      <p>Standard vitamins are designed for people with normal digestion. Bariatric vitamins are different because they
      contain higher concentrations of essential nutrients and are made in forms that are easier for the body to absorb
      after surgery.</p>

      <h3>Preventing Vitamin Deficiencies</h3>
      <p>Patients who do not take supplements after surgery may develop deficiencies in key nutrients such as:</p>
      ${ul(['Vitamin B12', 'Iron', 'Calcium', 'Vitamin D', 'Folate', 'Zinc'])}
      <p>These deficiencies can lead to problems such as fatigue, anemia, bone loss, and weakened immunity. Bariatric
      vitamins help prevent these long-term complications.</p>

      <h3>Supporting Healing and Recovery</h3>
      <p>After surgery, the body requires extra nutrients to heal properly. Vitamins such as Vitamin C, zinc, and
      protein-supporting nutrients help repair tissues and support recovery during the first months after surgery.</p>

      <h3>Maintaining Energy and Metabolism</h3>
      <p>Bariatric vitamins also support healthy metabolism and energy production, helping patients stay active and
      maintain their weight loss results.</p>

      <h3>Long-Term Health Protection</h3>
      <p>Because bariatric surgery permanently changes how the body processes nutrients, most patients need to take
      bariatric vitamins for life. Taking the correct supplements daily helps maintain:</p>
      ${ul(['Healthy bones', 'Strong immune system', 'Balanced metabolism', 'Stable energy levels'])}
      <p class="fine"><strong>Important Note:</strong> Always follow the supplement instructions provided by Dr. Irfan
      Wadiwala or your bariatric care team, as vitamin needs may vary depending on the type of surgery and individual
      health conditions.</p>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'What are bariatric vitamins?',
          '<p>Bariatric vitamins are specially designed supplements formulated for patients who have had weight loss surgery. They replace essential nutrients that your body can no longer absorb effectively after procedures like gastric bypass or sleeve gastrectomy.</p>',
        ],
        [
          'Why do I need to take vitamins after surgery?',
          "<p>Because bariatric surgery alters your digestive system, it reduces your body's ability to absorb key nutrients from food. Taking vitamins helps prevent deficiencies, supports healing, and maintains long-term health.</p>",
        ],
        [
          'How long will I need to take bariatric vitamins?',
          '<p>These supplements are typically taken for life. Consistent use is essential for preventing long-term complications and maintaining optimal health.</p>',
        ],
        [
          'What forms do bariatric vitamins come in?',
          '<p>Our Bariatric Fusion® supplements are available in liquid, chewable, and capsule forms, allowing you to choose what works best for your comfort and lifestyle.</p>',
        ],
        [
          'Can I buy bariatric vitamins online?',
          '<p>Yes! You can purchase Bariatric Fusion® vitamins directly through our website or pick them up at our Spring, TX office.</p>',
        ],
      ])}

      <h2 class="display bar">Why Choose Houston Surgical Weight Loss for Your Post-Surgery Supplements</h2>
      ${ul([
        'Expert guidance from Dr. Wadiwala and our experienced bariatric team',
        'Trusted brands like Bariatric Fusion® for proven results',
        'Affordable pricing and convenient on-site purchasing',
        'Personalized recommendations based on your surgery and health needs',
        'Ongoing support for your weight loss journey',
      ])}
    `,
  },

  lantern,

  {
    slug: 'pre-op-and-post-op',
    nav: 'Pre-Op and Post-Op',
    seoTitle: 'Pre-Op &amp; Post-Op Bariatric Diet | Houston, TX',
    title: 'Pre-Op and Post-Op Diet',
    tagline: 'The two-week liquid fast before surgery, and the four diet stages after it.',
    description:
      'The pre-op protein liquid fast and the four post-op diet stages for bariatric surgery patients at Houston Surgical Weight Loss.',
    image: '../media/img/u-1490645935967-10de6ba17061.jpg',
    body: `
      <h2 class="display bar">Pre-Op Protein Liquid Fast</h2>
      <h3>When Does the Pre-Op Diet Start?</h3>
      ${ul([
        'Begins 2 weeks prior to your scheduled surgery date.',
        'No "cheat days" or "weekends off." Consistency is key to success.',
      ])}

      <h3>Why Is the Pre-Op Diet Important?</h3>
      <p>The pre-operative diet serves three essential purposes:</p>
      ${ol([
        '<strong>Shrink the liver</strong> — A smaller liver creates more space in the stomach for the surgeon to safely maneuver the laparoscopic camera. If your liver is too large, surgery may be postponed for your safety.',
        '<strong>Improve surgical safety</strong> — Reduced liver size decreases the risk of complications during surgery.',
        '<strong>Jumpstart weight loss</strong> — The average patient loses 10–15 pounds during this two-week period, helping to prepare the body for long-term changes.',
      ])}

      <h3>What You Can Eat and Drink</h3>
      <p>During the pre-op liquid fast, focus on high-protein, low-sugar, and clear liquids. Allowed items include:</p>
      ${ul([
        '<strong>Water:</strong> Aim for at least 8 cups per day.',
        '<strong>Low-sugar protein shakes:</strong> Premier Protein, Fairlife Protein, Ensure Max, Atkins Advantage, etc.',
        '<strong>Clear broths:</strong> Chicken, beef, or vegetable broth.',
        '1% or skim milk',
        'Sugar-free gelatin (Jell-O)',
        'Sugar-free popsicles',
        'Low-sugar yogurt or Greek yogurt',
        'Decaffeinated tea',
        '<strong>Electrolyte drinks:</strong> Gatorade Zero or Crystal Light',
      ])}

      <hr class="mini-rule">

      <h2 class="display bar">Post-Op Diet Stages</h2>
      <p>After surgery, your stomach will need time to heal and adjust. Your diet will progress in four stages, starting
      with clear liquids and gradually transitioning to solid foods.</p>
      <p>Advancing too quickly or skipping stages can cause complications and slow down your recovery.</p>

      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Stage 1: Clear Liquids (Days 1–3)</h3>
          <p><strong>Purpose:</strong> Hydrate your body and promote healing immediately after surgery.</p>
          <p>Allowed liquids:</p>
          ${ul([
            'Water',
            'Ice chips',
            'Sugar-free popsicles',
            'Diluted, clear fruit juices (no sugar added)',
            'Gatorade Zero or Crystal Light',
          ])}
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>Stage 2: Full Liquids (Days 4–14)</h3>
          <p><strong>Purpose:</strong> Provide essential nutrients while your stomach continues to heal.</p>
          <p>Allowed liquids and soft foods:</p>
          ${ul([
            'Low-sugar protein shakes (Premier Protein, Fairlife, Ensure Max, etc.)',
            'Low-sugar yogurt or Greek yogurt',
            'Clear broths or smooth, blended soups',
            '1% or skim milk',
            'Sugar-free pudding',
            'Baby food (smooth consistency)',
            'No sugar added fruit juice',
          ])}
        </article>
        <article class="card">
          <span class="card-index">03</span>
          <h3>Stage 3: Pureed / Soft Foods (Weeks 3–5)</h3>
          <p><strong>Purpose:</strong> Begin reintroducing soft, nutrient-dense foods as your stomach adapts.</p>
          <p>Allowed foods:</p>
          ${ul([
            'Tender poultry and fish (pulse in a food processor if needed)',
            'Soft tofu',
            'Scrambled eggs',
            'Hot cereals like oatmeal or cream of wheat',
            'Soft or mashed fruits and vegetables',
            'Mashed beans and legumes',
            'Low-fat dairy: cottage cheese, yogurt, skim milk',
          ])}
        </article>
        <article class="card">
          <span class="card-index">04</span>
          <h3>Stage 4: Regular / Solid Foods (Week 6 and Beyond)</h3>
          <p><strong>Purpose:</strong> Transition to a balanced, sustainable long-term diet.</p>
          <p>Allowed foods:</p>
          ${ul([
            'Lean proteins (chicken, fish, turkey, tofu)',
            'Fresh fruits and vegetables',
            'Whole grains in moderation',
            'Healthy fats, focusing on unsaturated fats (avocado, olive oil, nuts)',
            'Low-fat dairy products',
          ])}
        </article>
      </div>

      <h2 class="display bar">Sample Meal Progression Timeline</h2>
      <div class="table-wrap">
        <table class="prose-table">
          <thead><tr><th>Stage</th><th>Timeline</th><th>Focus</th></tr></thead>
          <tbody>
            <tr><td>Stage 1: Clear Liquids</td><td>Days 1–3</td><td>Hydration &amp; healing</td></tr>
            <tr><td>Stage 2: Full Liquids</td><td>Days 4–14</td><td>Protein &amp; essential nutrients</td></tr>
            <tr><td>Stage 3: Pureed/Soft Foods</td><td>Weeks 3–5</td><td>Introduce soft, nutrient-rich foods</td></tr>
            <tr><td>Stage 4: Regular Foods</td><td>Week 6 – Lifetime</td><td>Long-term, balanced eating</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'Why do I need to follow the two-week pre-op diet so strictly?',
          '<p>The pre-op diet shrinks your liver, allowing your surgeon to safely and efficiently perform the laparoscopic procedure. If your liver is too large, surgery may need to be postponed for your safety. Additionally, this diet jumpstarts weight loss and prepares your body for the changes to come.</p>',
        ],
        [
          'How much protein should I consume after surgery?',
          '<p>During the early recovery stages, aim for at least 60g of protein per day. Protein supports healing and tissue repair, muscle preservation, and healthy metabolism. As you progress, your dietitian will provide a personalized protein target based on your needs.</p>',
        ],
        [
          'When can I return to a normal diet after surgery?',
          "<p>Most patients transition to a regular diet by Week 6. However, it's essential to follow each stage carefully, introduce foods slowly and in small amounts, and avoid foods that may cause discomfort or dumping syndrome. Your surgical team and dietitian will monitor your progress and guide you on when to safely advance to each stage.</p>",
        ],
      ])}

      <p class="fine"><strong>Follow-up care:</strong> Regular check-ins with your surgeon and dietitian are vital for
      success.</p>
    `,
  },

  {
    slug: 'exercise-regimens',
    nav: 'Exercise Regimens',
    seoTitle: 'Exercise After Bariatric Surgery | Houston, TX',
    title: 'Exercise Regimens',
    tagline: 'Physical activity before and after weight loss surgery — safe, gradual, consistent.',
    description:
      'Exercise regimens before and after bariatric surgery: when to start, what to do, and how to progress safely.',
    image: '../media/img/u-1487956382158-bb926046304a.jpg',
    body: `
      <h2 class="display bar">Physical Activity Before and After Weight Loss Surgery</h2>
      <p class="intro">Regular physical activity plays a vital role in the weight loss journey. Combined with healthy
      eating, it helps you achieve lasting results while improving your overall well-being.</p>
      <p>Whether you are preparing for surgery or recovering afterward, exercise should be safe, gradual, and
      consistent. Always consult your primary care physician (PCP) and bariatric surgeon before starting or changing
      your activity routine, especially if you have underlying health conditions.</p>

      <h2 class="display bar">Why Physical Activity Is Important</h2>
      <p>Exercising offers many physical and emotional benefits, including:</p>
      ${ul([
        'Stress relief and mood improvement',
        'Boosted self-esteem and cognitive function',
        'Better cardiovascular health and stamina',
        'Preservation of lean body mass (preventing muscle loss during weight loss)',
        'Improved functional health and mobility',
      ])}

      <h2 class="display bar">Getting Started Before Surgery</h2>
      <p>Before your procedure:</p>
      ${ul([
        "Build a routine of daily physical activity, even if it's just a 20–30 minute walk.",
        'Focus on low-impact exercises that are safe and sustainable.',
        'Use this time to develop healthy habits that will help with recovery and long-term success.',
        'Talk with your primary care doctor to ensure your chosen exercises are safe for your current health status.',
      ])}

      <h2 class="display bar">Physical Activity After Surgery</h2>
      <p>Once you've had your weight loss surgery, your activity plan will change. Always wait for clearance from your
      surgeon before resuming exercise.</p>
      <h3>General Timeline</h3>
      ${ul([
        '<strong>First Week Post-Surgery:</strong> Most patients can start with light walking outdoors about one week after surgery.',
        '<strong>After Two Weeks:</strong> Gradually increase the pace and duration of your walking or light exercise sessions.',
        '<strong>Adding Weights or Intense Activity:</strong> Wait until your surgeon has completely cleared you before adding weights or resistance training. Incorporating weights too soon may cause injury or slow recovery. Listen to your body — if you feel pain or discomfort, stop immediately and contact your doctor.',
      ])}

      <h2 class="display bar">Types of Physical Activity</h2>
      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Moderate Physical Activity</h3>
          ${ul([
            'Walking (20 minutes per mile pace)',
            'Ballroom dancing',
            'Doubles tennis',
            'Casual biking (10 MPH)',
            'General gardening',
          ])}
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>Intermediate Physical Activity</h3>
          ${ul(['Power walking (35–40 minutes)', 'Brisk-paced workouts that slightly elevate your heart rate'])}
        </article>
        <article class="card">
          <span class="card-index">03</span>
          <h3>Vigorous Physical Activity</h3>
          ${ul([
            'Race walking or jogging',
            'Singles tennis',
            'Aerobic dancing or step classes',
            'Biking faster than 10 MPH',
            'Heavy gardening or yard work',
          ])}
        </article>
      </div>

      <h2 class="display bar">Tips for Safe Exercise</h2>
      ${ul([
        'Start slowly and gradually increase intensity over time.',
        'Track your workouts using a fitness app on your phone or a printable calendar or notebook.',
        'Always listen to your body — discomfort or sharp pain is a signal to stop and seek advice.',
        'Stay hydrated and maintain proper nutrition to support recovery and energy levels.',
      ])}

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'When can I start exercising after weight loss surgery?',
          "<p>Most patients can begin light walking about one week after surgery, but timing may vary based on your procedure and healing process. Your surgeon will evaluate your progress and give you the green light to start or advance your activity level. Never begin vigorous or strength-based exercises until you've been fully cleared.</p>",
        ],
        [
          'Why is it important to start exercising before my surgery?',
          '<p>Starting an exercise routine before surgery helps strengthen your body and muscles, making recovery easier; improve heart and lung health for safer surgery; and establish habits that support long-term weight loss success. Even simple daily walks can make a big difference in your readiness for surgery.</p>',
        ],
        [
          'What types of exercise are best for me after surgery?',
          '<p>In the beginning, focus on low-impact, moderate activities such as walking, casual biking, and swimming (once cleared by your surgeon). As you progress, gradually include strength training and more vigorous cardio, such as jogging or aerobic dance. Avoid lifting heavy weights or high-intensity workouts until your surgeon confirms it is safe. Your care team will help you create a plan tailored to your fitness level and weight loss goals.</p>',
        ],
      ])}

      <h2 class="display bar">Summary</h2>
      ${ul([
        '<strong>Before surgery:</strong> Build a routine with safe, low-impact exercises like walking.',
        '<strong>After surgery:</strong> Begin slowly, starting with walking, and progress as your surgeon advises.',
        'Exercise improves mood, preserves muscle mass, and supports sustainable weight loss.',
        'Always listen to your body and prioritize safety over speed.',
      ])}
    `,
  },

  {
    slug: 'discharge-instructions',
    nav: 'Discharge Instructions',
    seoTitle: 'Bariatric Discharge Instructions | Houston, TX',
    title: 'Discharge Instructions',
    tagline: 'What is normal, what is not, and how to care for yourself in the first weeks home.',
    description:
      'Bariatric discharge instructions: normal symptoms, when to call the office, hydration, incision care, binder use, medications and activity.',
    image: '../media/img/u-1576091160550-2173dba999ef.jpg',
    body: `
      <h2 class="display bar">Normal Symptoms (First 1–2 Weeks After Surgery)</h2>
      <p>It is common to experience:</p>
      ${ul([
        'Nausea',
        'Soreness',
        'Vomiting or spitting up',
        'Diarrhea',
        'Constipation during the first week',
        'Pressure in the chest or shoulder pain (from surgical gas)',
        'Sore throat (from the breathing tube during surgery)',
      ])}

      <div class="alert-block">
        <h2 class="display bar">When to Call the Office Immediately</h2>
        <p>Contact us right away at <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a> if you notice:</p>
        ${ul([
          'Fever above 100.1°F with chills or shaking',
          'Severe abdominal pain not relieved by pain medication',
          'Sudden, severe chest pain or shortness of breath',
          'No bowel movement for more than 7 days',
          'Persistent vomiting or diarrhea',
          'Significant drainage, swelling, or redness at incision sites',
          'Bleeding from incisions that does not stop',
          'Pain, swelling, redness, or tightness in the leg or foot',
          'Inability to urinate 6–8 hours after surgery',
          'Lightheadedness, dizziness, or fainting',
        ])}
      </div>

      <h2 class="display bar">Hydration — Your #1 Priority</h2>
      ${ul([
        '<strong>Women:</strong> at least 48 oz fluids/day',
        '<strong>Men:</strong> at least 64 oz fluids/day',
        'Sip slowly and take small amounts at a time',
        'Avoid straws and large gulps',
        'Cold liquids are usually easier to tolerate',
      ])}
      <p>Get up every hour, walk a few laps around the house, and use your incentive spirometer for 3 deep-breathing
      exercises. This will:</p>
      ${ul(['Relieve surgical gas (burping and passing gas is normal)', 'Reduce the risk of blood clots'])}

      <h2 class="display bar">Incision Care</h2>
      ${ul([
        'After 48 hours, remove the surgical garment and wash your abdomen with <strong>antibacterial soap</strong> and a sponge',
        'A small amount of blood on the garment is normal; if it becomes soaked, call the office',
        'Only shower until cleared for baths, swimming, or hot tubs',
        'Wash gently in <strong>small circular motions</strong> to protect incision sites',
      ])}

      <h2 class="display bar">Binder Use</h2>
      ${ul([
        'Wear your binder for <strong>1 month after surgery</strong>',
        'Helps reduce abdominal discomfort and supports healing',
        'You do <strong>not</strong> need to wear it while sleeping',
      ])}

      <h2 class="display bar">Medications &amp; Home Care</h2>
      ${ul([
        'Take pain and nausea medications as prescribed for the first 3 days, then as needed',
        'Medications larger than a pinhead must be <strong>crushed or in liquid form</strong> for the first month',
        'If you take diabetes or blood pressure medication: check your blood glucose or pressure before each dose',
        'Continue using your <strong>CPAP or BiPAP</strong> unless instructed otherwise by your doctor',
      ])}

      <h2 class="display bar">Activity</h2>
      ${ul([
        'No lifting more than <strong>10 pounds</strong> for the first 2 weeks',
        'Avoid abdominal exercises until cleared by your provider',
        'First month: begin with daily walking, then progress to power walking or light jogging',
      ])}
    `,
  },

  {
    slug: 'for-out-of-town-patients',
    nav: 'For Out of Town Patients',
    seoTitle: 'Out-of-Town Bariatric Patients | Houston, TX',
    title: 'For Out of Town Patients',
    tagline: 'Travelling to Houston for surgery — where to stay, eat and land.',
    description:
      'Travelling to Houston for weight loss surgery: nearby hotels, restaurants, airports and shopping centres close to our Spring, TX office.',
    image: '../media/img/u-1436491865332-7a61a109cc05.jpg',
    body: `
      <h2 class="display bar">Traveling to Houston for Weight Loss Surgery</h2>
      <p class="intro">At Houston Surgical Weight Loss, the practice offers advanced general, laparoscopic, and
      bariatric surgeries with emphasis on safety, precision, and faster recovery. Led by Dr. Irfan Wadiwala, the team
      provides personalized care to help patients achieve better health and lasting results.</p>

      <h2 class="display bar">Hotels</h2>
      ${ul([
        '<strong>Holiday Inn Express &amp; Suites Spring – Woodlands Area by IHG</strong><br>21606 Spring Plaza Dr, Spring, TX 77388 <em>(4.1 miles from office)</em>',
        '<strong>Courtyard by Marriott Houston City Place</strong><br>22742 Holzwarth Rd, Spring, TX 77389 <em>(4.3 miles from office)</em>',
        '<strong>Residence Inn by Marriott Houston City Place</strong><br>22814 Holzwarth Rd, Spring, TX 77389 <em>(4.3 miles from office)</em>',
      ])}

      <h2 class="display bar">Restaurants</h2>
      ${ul([
        '<strong>The Toasted Yolk Cafe</strong><br>6705 Grand Pkwy, Spring, TX 77389 <em>(2.3 miles from office)</em>',
        "<strong>Uncle Julio's</strong><br>6835 Grand Pkwy, Spring, TX 77389 <em>(2.2 miles from office)</em>",
        '<strong>Salata</strong><br>6630 Spring Stuebner Rd Suite No. 500, Spring, TX 77389 <em>(2.0 miles from office)</em>',
      ])}

      <h2 class="display bar">Airport</h2>
      ${ul([
        '<strong>George Bush Intercontinental Airport</strong><br>2800 N Terminal Rd, Houston, TX 77032 <em>(19.4 miles from office)</em>',
        '<strong>William P. Hobby Airport</strong><br>7800 Airport Blvd, Houston, TX 77061 <em>(36.9 miles from office)</em>',
      ])}

      <h2 class="display bar">Shopping Centers</h2>
      ${ul([
        '<strong>The Woodlands Mall</strong><br>1201 Lake Woodlands Dr Suite 700, The Woodlands, TX 77380 <em>(16 miles from office)</em>',
        '<strong>Grand Parkway Marketplace</strong><br>6635 Spring Stuebner Rd, Spring, TX 77389 <em>(1.8 miles from office)</em>',
        '<strong>Market Street</strong><br>9595 Six Pines Dr, The Woodlands, TX 77380 <em>(12.6 miles from office)</em>',
      ])}
    `,
  },
];

module.exports = { pages, PHONE, PHONE_HREF };
