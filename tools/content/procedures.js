/*
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
    slug: 'gastric-balloon',
    nav: 'Gastric Balloon',
    title: 'Gastric Balloon Surgery Specialist in Houston, TX',
    seoTitle: 'Gastric Balloon Houston, TX | Non-Surgical Weight Loss',
    tagline: 'A non-surgical, temporary option placed without incisions.',
    description: 'Gastric balloon in Houston, TX — a non-surgical, temporary weight loss option placed and removed endoscopically.',
    image: '../media/img/u-1551190822-a9333d879b1f.jpg',
    stats: [
      ['30–40%', 'of excess body weight lost'],
      ['6–12 months', 'the balloon stays in place'],
      ['2–3 days', 'back to work and normal activity'],
    ],
    edits: { videoSlot: true },
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: 'Gastric Balloon Surgery',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    body: `
      <h2 class="display bar">What is Gastric Balloon Surgery?</h2>
      <p>Gastric balloon surgery is a <strong>non-surgical, minimally invasive, FDA-approved weight loss procedure</strong>. It involves placing a soft, expandable balloon inside your stomach, which reduces the amount of food you can eat at one time.</p>
      <p>This smaller stomach space:</p>
      <ul class="prose-list">
        <li>Helps you feel full faster</li>
        <li>Reduces hunger between meals</li>
        <li>Supports steady, sustainable weight loss</li>
      </ul>
      <p>Unlike traditional bariatric surgeries, gastric balloon:</p>
      <ul class="prose-list">
        <li>Requires <strong>no incisions, stapling, or rerouting of the digestive system</strong><strong></strong></li>
        <li>Is a <strong>temporary weight loss tool</strong>, usually removed after 6–12 months</li>
        <li>Provides a safe way to kick-start long-term lifestyle changes</li>
      </ul>
      <h2 class="display bar">Benefits of Gastric Balloon Surgery</h2>
      <p>Choosing gastric balloon surgery comes with unique advantages:</p>
      <ul class="prose-list">
        <li>Non-surgical and minimally invasive</li>
        <li>No permanent changes to your digestive tract</li>
        <li>Quick, outpatient procedure</li>
        <li>Short recovery time—most patients return to normal activities in 1–2 days</li>
        <li>Effective results with structured diet and lifestyle support</li>
        <li>Helps establish healthier eating habits for long-term success</li>
      </ul>
      <h2 class="display bar">What to Expect During the Gastric Balloon Procedure</h2>
      <p>At Houston Surgical Weight Loss, Dr. Wadiwala uses advanced, minimally invasive endoscopic techniques.</p>
      <p><strong>Step-by-step process:</strong><strong></strong></p>
      <ol class="prose-steps">
        <li>A deflated silicone balloon is gently placed into your stomach through your mouth using an endoscope.</li>
        <li>Once in place, the balloon is filled with a sterile saline solution.</li>
        <li>The balloon partially fills your stomach, leaving less room for food.</li>
      </ol>
      <p>Because this procedure is incision-free and performed under sedation:</p>
      <ul class="prose-list">
        <li>It typically takes <strong>20–30 minutes</strong><strong></strong></li>
        <li>Patients go home the same day</li>
        <li>Recovery is fast, with minimal discomfort</li>
      </ul>
      <h2 class="display bar">Recovery After Gastric Balloon Surgery</h2>
      <p>Recovery from gastric balloon surgery is generally easier compared to surgical weight loss options.</p>
      <p>What to expect:</p>
      <ul class="prose-list">
        <li>Mild nausea or stomach cramping for a few days as your body adjusts</li>
        <li>Gradual return to normal diet, starting with liquids</li>
        <li>Most patients resume work and daily activities within a few days</li>
        <li>Regular follow-ups to monitor weight loss progress and make lifestyle adjustments</li>
      </ul>
      <p>Since the balloon is temporary:</p>
      <ul class="prose-list">
        <li>It is usually removed after 6–12 months</li>
        <li>Healthy eating and lifestyle changes are key to maintaining long-term results</li>
        <li>Special dietary phases (liquid → pureed → soft → regular foods)</li>
      </ul>
      <h2 class="display bar">Managing Your Gastric Balloon</h2>
      <p>One of the main advantages of gastric balloon surgery is that it acts as a <strong>training tool</strong> for portion control and mindful eating.</p>
      <ul class="prose-list">
        <li>The balloon is removed after your treatment period (6–12 months)</li>
        <li>Patients continue with diet, exercise, and behavioral strategies learned during treatment</li>
        <li>Ongoing support from Dr. Wadiwala and his team ensures lasting weight management</li>
      </ul>
      <h2 class="display bar">Is Gastric Balloon Surgery Right for You?</h2>
      <p>You may be a good candidate if you:</p>
      <ul class="prose-list">
        <li>Have a BMI between <strong>30 and 40</strong><strong></strong></li>
        <li>Have struggled to lose weight through diet and exercise alone</li>
        <li>Prefer a non-surgical, temporary weight loss option</li>
        <li>Are committed to lifestyle changes that promote long-term health</li>
      </ul>
      <p>During your consultation, Dr. Wadiwala will review your medical history and goals to determine if gastric balloon surgery is the best option for you.</p>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'How does gastric balloon surgery help with weight loss?',
          '<p>The balloon reduces available stomach space, helping you feel full faster and encouraging smaller meal portions.</p>',
        ],
        [
          'Is gastric balloon surgery safe?',
          '<p>Yes. It’s FDA-approved, incision-free, and considered one of the safest weight loss procedures available.</p>',
        ],
        [
          'How long does the balloon stay in place?',
          '<p>Typically, the balloon is removed after <strong>6–12 months</strong>.</p>',
        ],
        [
          'Will I need time off work?',
          '<p>Most patients resume work and normal activities within <strong>2–3 days</strong>.</p>',
        ],
        [
          'What happens after the balloon is removed?',
          '<p>You’ll continue following your nutrition and lifestyle plan to maintain long-term weight loss.</p>',
        ],
      ])}
    `,
  },
  {
    slug: 'gastric-bypass',
    nav: 'Gastric Bypass',
    title: 'Gastric Bypass Surgery Specialist in Houston, TX',
    seoTitle: 'Gastric Bypass Surgery Houston, TX | Roux-en-Y',
    tagline: 'Roux-en-Y gastric bypass, performed laparoscopically.',
    description: 'Laparoscopic gastric bypass (Roux-en-Y) in Houston, TX with Dr. Irfan Wadiwala, a fellowship-trained bariatric surgeon.',
    image: '../media/img/u-1579684453423-f84349ef60b0.jpg',
    stats: [
      ['60–80%', 'of excess body weight lost'],
      ['12–18 months', 'to reach those results'],
      ['1–2 days', 'most patients go home'],
      ['2–4 weeks', 'back to normal routines'],
    ],
    edits: { videoSlot: true },
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: 'Gastric Bypass Surgery',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    body: `
      <h2 class="display bar">What is Gastric Bypass Surgery?</h2>
      <p><strong>Gastric bypass surgery</strong> (also known as <strong>Roux-en-Y gastric bypass</strong>) is an FDA-approved, minimally invasive weight loss procedure. During surgery:</p>
      <ul class="prose-list">
        <li>A small stomach pouch is created to limit how much you can eat.</li>
        <li>The small intestine is rerouted to bypass part of the digestive tract.</li>
      </ul>
      <p>This process not only reduces food intake but also changes how your body absorbs calories and nutrients—leading to faster, more sustainable weight loss.</p>
      <h3>Benefits of Gastric Bypass Surgery</h3>
      <p>Patients often choose gastric bypass because of its proven effectiveness. Key benefits include:</p>
      <ul class="prose-list">
        <li>Significant and long-lasting weight loss results</li>
        <li>Resolution or improvement of conditions like type 2 diabetes, sleep apnea, and high blood pressure</li>
        <li>Minimally invasive laparoscopic procedure</li>
        <li>Faster recovery compared to open surgery</li>
        <li>Long history of safety and success in bariatric care</li>
      </ul>
      <h2 class="display bar">What to Expect During the Gastric Bypass Procedure</h2>
      <p>At Houston Surgical Weight Loss, Dr. Wadiwala performs gastric bypass using <strong>laparoscopic techniques</strong>, requiring only small incisions.</p>
      <p>Step-by-step:</p>
      <ol class="prose-steps">
        <li>A small stomach pouch is created to hold less food.</li>
        <li>A section of the small intestine is connected to the pouch, bypassing part of the digestive tract.</li>
        <li>This rerouting reduces calorie absorption and helps you feel full sooner.</li>
      </ol>
      <p>Because it’s minimally invasive:</p>
      <ul class="prose-list">
        <li>Pain is reduced</li>
        <li>Recovery is quicker</li>
        <li>Scarring is minimal</li>
      </ul>
      <h2 class="display bar">Recovery After Gastric Bypass</h2>
      <p>Recovery is usually faster with laparoscopic techniques.</p>
      <p>What to expect:</p>
      <ul class="prose-list">
        <li>Many patients go home within 1–2 days</li>
        <li>Return to normal activities in 2–4 weeks</li>
        <li>Special dietary phases (liquid → pureed → soft → regular foods)</li>
        <li>Lifelong vitamin supplementation is required to avoid deficiencies</li>
      </ul>
      <p>Most patients notice significant weight loss within the first year, along with improvement in obesity-related health problems.</p>
      <h2 class="display bar">Is Gastric Bypass Surgery Right for You?</h2>
      <p>You may be a candidate if you:</p>
      <ul class="prose-list">
        <li>Have a <strong>BMI of 40+</strong>, or <strong>35+ with obesity-related health conditions</strong> (diabetes, sleep apnea, hypertension, etc.)</li>
        <li>Have not achieved sustained weight loss through diet, exercise, or medication</li>
        <li>Are committed to long-term lifestyle and nutritional changes</li>
        <li>Want a proven, long-term solution for obesity and related health risks</li>
      </ul>
      <p>During your consultation, Dr. Wadiwala will review your medical history, lifestyle, and goals to determine if gastric bypass is right for you.</p>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'How does gastric bypass help with weight loss?',
          '<p>It limits food intake by creating a small stomach pouch and reduces calorie absorption by bypassing part of the digestive tract.</p>',
        ],
        [
          'Is gastric bypass safe?',
          '<p>Yes. It’s one of the most common and well-studied bariatric surgeries with a long track record of safety and effectiveness.</p>',
        ],
        [
          'Will I need to take vitamins after surgery?',
          '<p>Yes. Because absorption is reduced, patients need to take daily supplements to prevent deficiencies.</p>',
        ],
        [
          'How long is the recovery period?',
          '<p>Most patients return to normal routines in 2–4 weeks, with lifelong follow-up care recommended.</p>',
        ],
        [
          'How soon will I see results?',
          '<p>Many patients lose <strong>60–80% of excess body weight within 12–18 months</strong>. Improvements in conditions like diabetes and high blood pressure often occur within weeks.</p>',
        ],
      ])}
    `,
  },
  {
    slug: 'general-surgery',
    nav: 'General Surgery',
    title: 'Comprehensive Surgical Care with Advanced Technology and Compassionate Support in Houston',
    seoTitle: 'General Surgery Houston, TX | Hernia & Gallbladder',
    tagline: 'Hernia repair, gallbladder, appendix and more.',
    description: 'General surgery in Houston, TX — hernia repair, gallbladder removal, appendectomy and more, with Dr. Irfan Wadiwala.',
    image: '../media/img/u-1758691462814-485c3672e447.jpg',
    stats: [
      ['1–3 weeks', 'recovery, laparoscopic'],
      ['4–6 weeks', 'recovery, open surgery'],
    ],
    edits: { videoSlot: true },
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: 'Comprehensive Surgical Care with Advanced Technology and Compassionate Support in Houston',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    body: `
      <h2 class="display bar">Our General Surgery Services</h2>
      <p>At Houston Surgical Weight Loss, our team is dedicated to providing comprehensive general, laparoscopic, and bariatric surgical care. We focus on the diagnosis, treatment, and management of both common and complex medical conditions, ensuring every patient receives safe, effective, and personalized care.</p>
      <p>Our surgeons collaborate closely with referring physicians and specialists to create customized treatment plans. By combining advanced surgical technology with compassionate care, we aim to minimize recovery time and maximize results.</p>
      <p>We provide a wide range of general surgeries, focusing on minimally invasive and laparoscopic techniques for faster healing and less discomfort. Our services include hernia repairs, gallbladder removals, and intestinal surgeries for conditions like colon cancer, IBD, and diverticulitis. We also perform stomach, liver, pancreas, and spleen surgeries, using advanced methods to improve recovery and outcomes. Laparoscopic procedures are emphasized for smaller incisions, quicker recovery, and reduced pain. Additionally, we offer skin and soft tissue surgeries, including biopsies, tumor removal, and reconstructive treatments. Below are some of our most common procedures.</p>
      <h3>Hernia Repair</h3>
      <p>A <strong>hernia</strong> occurs when an organ or tissue pushes through a weak spot in the surrounding muscle wall. Hernias most often occur in the:</p>
      <ul class="prose-list">
        <li>Navel (umbilical hernia)</li>
        <li>Groin (inguinal hernia)</li>
        <li>Around surgical incision sites (ventral/incisional hernia)</li>
      </ul>
      <p><strong>Common causes include:</strong></p>
      <ul class="prose-list">
        <li>Obesity</li>
        <li>Heavy lifting or strenuous activity</li>
        <li>Chronic constipation</li>
        <li>Persistent coughing or straining</li>
      </ul>
      <p><strong>Treatment:</strong><strong></strong> At Houston Surgical Weight Loss, Dr. Wadiwala performs <strong>minimally invasive laparoscopic hernia repairs</strong> using a specialized mesh system. Benefits of this approach:</p>
      <ul class="prose-list">
        <li>Smaller incisions</li>
        <li>Less suturing</li>
        <li>Faster recovery</li>
        <li>Reduced discomfort</li>
      </ul>
      <p>Most hernia repairs can be performed on an <strong>outpatient basis</strong> under local or general anesthesia.</p>
      <h3><strong>Gallbladder Surgery</strong></h3>
      <p>The <strong>gallbladder</strong> stores bile, which helps digest fats. When the bile chemistry becomes unbalanced, <strong>gallstones</strong> can form, causing:</p>
      <ul class="prose-list">
        <li>Sudden abdominal pain, often after meals</li>
        <li>Nausea or vomiting</li>
        <li>Indigestion or bloating</li>
      </ul>
      <p><strong>Gallstones can block bile ducts</strong>, leading to inflammation or infection. In severe cases, <strong>surgical removal of the gallbladder (cholecystectomy)</strong> may be necessary.</p>
      <p><strong>Our Approach:</strong></p>
      <ul class="prose-list">
        <li><strong>Laparoscopic gallbladder surgery:</strong> Minimally invasive, small incisions, faster recovery.</li>
        <li><strong>Traditional open surgery:</strong> Used for complex cases or when necessary.</li>
      </ul>
      <p>Laparoscopic surgery results in <strong>less scarring, quicker recovery, and reduced pain</strong>.</p>
      <h3><strong>Intestinal Surgery (Small Intestine &amp; Colon)</strong></h3>
      <p>Surgery on the intestines may be required for a variety of conditions, including:</p>
      <ul class="prose-list">
        <li>Colon or rectal cancer</li>
        <li>Inflammatory bowel disease (IBD)</li>
        <li>Precancerous polyps</li>
        <li>Diverticulitis (infected pouches in the colon wall)</li>
        <li>Rectal prolapse</li>
      </ul>
      <p><strong>Procedures We Offer:</strong></p>
      <ul class="prose-list">
        <li><strong>Small intestine:</strong> Removal of diseased segments and reconnection of healthy tissue.</li>
        <li><strong>Colon surgery:</strong> Removal of affected portions to restore proper function.</li>
      </ul>
      <p>Whenever possible, we use <strong>laparoscopic techniques</strong> to reduce recovery times and surgical risks.</p>
      <h3><strong>Stomach Surgery</strong></h3>
      <p>The <strong>stomach</strong> plays a crucial role in digestion. Some conditions that may require surgery include:</p>
      <ul class="prose-list">
        <li>Chronic ulcers or bleeding</li>
        <li>Stomach cancer</li>
        <li>Severe <strong>GERD (acid reflux)</strong></li>
      </ul>
      <p><strong>Common procedures:</strong></p>
      <ul class="prose-list">
        <li><strong>Gastrectomy:</strong> Partial or total removal of the stomach.</li>
        <li><strong>Nissen Fundoplication:</strong> A minimally invasive anti-reflux procedure.</li>
      </ul>
      <p>Our goal is to <strong>restore normal digestive function</strong> while prioritizing patient comfort and recovery.</p>
      <h3><strong>Liver Surgery</strong></h3>
      <p>The <strong>liver</strong> is vital for metabolism, detoxification, and nutrient storage. It also has a unique ability to <strong>regenerate itself</strong> after surgical removal of damaged tissue.</p>
      <p><strong>Common reasons for liver surgery:</strong></p>
      <ul class="prose-list">
        <li>Removal of malignant tumors</li>
        <li>Advanced cirrhosis</li>
        <li>Hepatitis complications</li>
        <li>End-stage liver disease</li>
        <li>Liver cancer</li>
      </ul>
      <p>Up to <strong>75% of the liver can be removed</strong>, with full regeneration typically occurring in <strong>five to six weeks</strong>.<strong></strong></p>
      <h3><strong>Spleen Surgery</strong></h3>
      <p>The <strong>spleen</strong> plays an important role in fighting infection and storing extra blood. However, it can be removed safely if necessary.</p>
      <p><strong>Reasons for spleen removal (splenectomy):</strong></p>
      <ul class="prose-list">
        <li>Trauma or injury</li>
        <li>Cancer</li>
        <li>Infections like malaria or mononucleosis</li>
        <li>Enlarged spleen causing complications</li>
      </ul>
      <p>We offer <strong>laparoscopic splenectomy</strong> for eligible patients, which involves smaller incisions and quicker recovery compared to traditional open surgery.</p>
      <h3><strong>Skin &amp; Soft Tissue Surgery</strong></h3>
      <p>Soft tissue includes muscles, ligaments, tendons, and fat, while skin surgeries address various external conditions.</p>
      <p><strong>Common procedures include:</strong></p>
      <ul class="prose-list">
        <li>Skin biopsies</li>
        <li>Removal of lesions or tumors</li>
      </ul>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'How do I know if I need surgery?',
          '<p>If you have ongoing symptoms such as pain, swelling, or digestive issues, schedule a consultation. Our surgeons will perform exams and tests to determine the best treatment.</p>',
        ],
        [
          'Are these surgeries minimally invasive?',
          '<p>Yes. Whenever possible, we use laparoscopic techniques, which provide:</p><ul class="prose-list">  <li>Smaller incisions</li>  <li>Less pain</li>  <li>Faster recovery</li>  <li>Reduced risk of complications</li></ul>',
        ],
        [
          'What is the typical recovery time?',
          '<p>Recovery varies by procedure and patient health.</p><ul class="prose-list">  <li><strong>Laparoscopic surgeries:</strong> 1–3 weeks for most patients.</li>  <li><strong>Traditional open surgeries:</strong> 4–6 weeks or longer.</li></ul>',
        ],
        [
          'Will my insurance cover surgery?',
          '<p>Most health insurance plans cover medically necessary procedures. Our staff will help verify your coverage and discuss financing if needed.</p>',
        ],
        [
          'How do I prepare for surgery?',
          '<p>Preparation may include:</p><ul class="prose-list">  <li>Pre-surgery lab tests</li>  <li>Dietary adjustments</li>  <li>Instructions on which medications to stop or continue</li></ul><p>You’ll receive a customized pre-surgery plan at your consultation.</p>',
        ],
      ])}
    `,
  },
  {
    slug: 'laparoscopic-surgery',
    nav: 'Laparoscopic Surgery',
    title: 'Laparoscopic Surgery – Minimally Invasive Surgery with Faster Recovery in Houston',
    seoTitle: 'Laparoscopic Surgery Houston, TX | Minimally Invasive',
    tagline: 'Smaller incisions, less pain, a faster way back.',
    description: 'Minimally invasive laparoscopic surgery in Houston, TX with Dr. Irfan Wadiwala — smaller incisions and faster recovery.',
    image: '../media/img/u-1576091160550-2173dba999ef.jpg',
    stats: [
      ['Same day', 'most patients go home'],
    ],
    edits: { videoSlot: true },
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: 'Laparoscopic Surgery – Minimally Invasive Surgery with Faster Recovery in Houston',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    body: `
      <h2 class="display bar">Why Laparoscopic Surgery is the Preferred Choice</h2>
      <p>Laparoscopic surgery, also known as <strong>minimally invasive surgery</strong>, uses <strong>small incisions</strong> and a <strong>laparoscope</strong> — a thin, flexible tube with a tiny camera on the end — to view and operate inside the body. This camera projects a magnified image of the abdominal organs onto a screen, allowing the surgeon to work with exceptional precision without the need for a large open incision.</p>
      <p><strong>Advantages of laparoscopic surgery include:</strong></p>
      <ul class="prose-list">
        <li>Smaller, less noticeable scars</li>
        <li>Less post-operative pain and discomfort</li>
        <li>Lower risk of complications such as infections</li>
        <li>Shorter hospital stays</li>
        <li>Faster return to daily activities and work</li>
        <li>Reduced overall recovery time</li>
      </ul>
      <p>This technique was initially developed for gynecological procedures and gallbladder surgeries but has now expanded to <strong>a wide variety of abdominal and weight loss surgeries</strong>.</p>
      <h2 class="display bar">Continuous Advancements in Laparoscopic Surgery</h2>
      <p>Today’s laparoscopic procedures are safer and more effective than ever before. The <strong>risk-to-benefit ratio</strong> has improved dramatically, making laparoscopic surgery the standard of care for many conditions.</p>
      <ul class="prose-list">
        <li><strong>Repeat Procedures:</strong> Laparoscopic surgery can now be safely performed on patients who have had previous open or laparoscopic surgeries.</li>
        <li><strong>Multiple Access Points:</strong> Typically, <strong>five small incisions</strong> are made, with one slightly larger incision to allow safe entry and prevent organ injury.</li>
        <li><strong>Advanced Techniques:</strong> Surgeons can now perform complex operations, such as bariatric procedures and anti-reflux surgeries, with less trauma to surrounding tissue.</li>
      </ul>
      <p>These advancements ensure better outcomes, less recovery time, and an overall safer experience for patients.</p>
      <h2 class="display bar">Common Laparoscopic Procedures We Perform in Houston</h2>
      <p>At Houston Surgical Weight Loss, we offer a full range of laparoscopic services tailored to meet each patient’s unique needs. Whether you need a simple procedure or a complex surgery, our minimally invasive approach is designed for safety and efficiency.</p>
      <h3>Laparoscopic Hernia Repair</h3>
      <p>Hernias occur when tissue pushes through a weak area in the muscle wall, often in the <strong>groin, navel, or near prior surgical incisions</strong>.</p>
      <p><strong>Common causes:</strong></p>
      <ul class="prose-list">
        <li>Obesity</li>
        <li>Heavy lifting or physical strain</li>
        <li>Chronic coughing or constipation</li>
        <li>Previous abdominal surgeries</li>
      </ul>
      <p><strong>Benefits of laparoscopic hernia repair:</strong></p>
      <ul class="prose-list">
        <li>Smaller incisions and minimal scarring</li>
        <li>Less suturing required</li>
        <li>Faster recovery and return to normal activity</li>
        <li>Reduced discomfort compared to traditional open hernia repair</li>
      </ul>
      <p>Most patients go home <strong>the same day</strong>, making this one of the most convenient and effective treatments available.</p>
      <h3>Laparoscopic Gallbladder Removal Procedure</h3>
      <p>The gallbladder stores bile that aids in digestion. When bile becomes imbalanced, <strong>gallstones</strong> can form, leading to:</p>
      <ul class="prose-list">
        <li>Sudden abdominal pain after meals</li>
        <li>Nausea and vomiting</li>
        <li>Indigestion and bloating</li>
      </ul>
      <p><strong>Laparoscopic gallbladder removal (cholecystectomy)</strong> is the gold standard for treating gallstone-related problems. It offers:</p>
      <ul class="prose-list">
        <li>Small, precise incisions for minimal scarring</li>
        <li>Faster, more comfortable recovery</li>
        <li>Lower infection risk</li>
        <li>Outpatient surgery in most cases</li>
      </ul>
      <p>If you are researching <strong>laparoscopic gallbladder removal costs</strong>, our team can provide clear estimates and help you navigate insurance coverage and financing options.</p>
      <h3>Laparoscopic Colon and Intestinal Surgery in Houston</h3>
      <p>Laparoscopic techniques are ideal for treating conditions of the <strong>small intestine and colon</strong>, including:</p>
      <ul class="prose-list">
        <li>Colon or rectal cancer</li>
        <li>Inflammatory bowel disease (IBD)</li>
        <li>Diverticulitis</li>
        <li>Precancerous polyps</li>
        <li>Rectal prolapse</li>
      </ul>
      <p><strong>Benefits:</strong></p>
      <ul class="prose-list">
        <li>Precise removal of affected tissue</li>
        <li>Preservation of healthy tissue</li>
        <li>Faster recovery compared to open surgery</li>
        <li>Smaller scars and lower complication rates</li>
      </ul>
      <p>This approach greatly improves patient comfort and long-term digestive health.</p>
      <h3>Laparoscopic Stomach (Gastric) Surgery</h3>
      <p>The stomach is essential for digestion and nutrient absorption. Certain conditions may require surgical intervention, such as:</p>
      <ul class="prose-list">
        <li>Severe <strong>GERD (acid reflux)</strong></li>
        <li>Chronic stomach ulcers</li>
        <li>Stomach cancer</li>
      </ul>
      <p><strong>Common procedures:</strong></p>
      <ul class="prose-list">
        <li><strong>Nissen Fundoplication:</strong> A minimally invasive treatment for GERD, allowing patients to <strong>resume normal eating faster</strong> and heal more comfortably.</li>
        <li><strong>Partial or Total Gastrectomy:</strong> Removal of part or all of the stomach when needed for complex conditions like cancer.</li>
      </ul>
      <h3>Laparoscopic Weight Loss Surgery</h3>
      <p>Laparoscopic surgery has completely transformed <strong>bariatric procedures</strong>, such as:</p>
      <ul class="prose-list">
        <li>Gastric sleeve surgery</li>
        <li>Gastric bypass</li>
      </ul>
      <p>These weight loss surgeries are now safer, less invasive, and more effective than ever, helping patients achieve lasting results while minimizing recovery time.</p>
      <h3>Other Laparoscopic Procedures</h3>
      <p>Our advanced skills also extend to:</p>
      <ul class="prose-list">
        <li><strong>Spleen removal (splenectomy)</strong> for trauma or certain medical conditions</li>
        <li><strong>Appendectomy (appendix removal)</strong></li>
        <li><strong>Liver tumor removal or tissue resection</strong></li>
        <li><strong>Pancreatic surgery</strong> for tumors or chronic pancreatitis</li>
      </ul>
      <p>Each procedure is carefully planned to deliver optimal outcomes with the least disruption to the body. Patients searching for <strong>laparoscopic weight loss surgery in Houston</strong> often choose minimally invasive options due to lower risk, faster recovery, and proven long-term success in managing obesity and related health conditions.</p>
      <h2 class="display bar">Benefits of Laparoscopic Surgery vs. Open Surgery</h2>
      <div class="table-wrap">
        <table class="prose-table">
          <thead><tr><th>Feature</th><th>Laparoscopic Surgery</th><th>Open Surgery</th></tr></thead>
          <tbody>
            <tr><td>Incision Size</td><td>Small incisions (½ inch or less)</td><td>Large incision</td></tr>
            <tr><td>Scarring</td><td>Minimal, less visible</td><td>Significant, more noticeable</td></tr>
            <tr><td>Recovery Time</td><td>1–3 weeks for most patients</td><td>4–6 weeks or longer</td></tr>
            <tr><td>Hospital Stay</td><td>Outpatient or 1 night</td><td>Several nights required</td></tr>
            <tr><td>Infection Risk</td><td>Lower risk</td><td>Higher risk</td></tr>
            <tr><td>Return to Activities</td><td>Faster</td><td>Slower</td></tr>
          </tbody>
        </table>
      </div>
      <h2 class="display bar">Laparoscopic Surgery Recovery Time</h2>
      <p>Recovery time depends on the procedure and patient health:</p>
      <ul class="prose-list">
        <li>Simple procedures (hernia, appendix): 1–2 weeks</li>
        <li>Gallbladder removal: 1 week or less</li>
        <li>Complex surgeries (colon, stomach): 3–4 weeks or more</li>
      </ul>
      <p>Most patients experience:</p>
      <ul class="prose-list">
        <li>Less pain after surgery</li>
        <li>Faster mobility</li>
        <li>Shorter downtime before returning to work and daily life</li>
      </ul>
      <h2 class="display bar">Minimally Invasive Surgery in Houston – Cost and Insurance</h2>
      <p>The <strong>cost of laparoscopic surgery</strong> varies based on the procedure, complexity, and insurance coverage. At Houston Surgical Weight Loss, we provide:</p>
      <ul class="prose-list">
        <li>Transparent cost estimates</li>
        <li>Insurance verification assistance</li>
        <li>Flexible financing plans for self-pay patients</li>
      </ul>
      <p>Many insurance plans cover laparoscopic surgeries when they are medically necessary. Our staff will guide you through every step, from cost planning to recovery.</p>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'What is laparoscopic surgery and why is it preferred?',
          '<p>It uses small incisions and a camera for precision, resulting in <strong>less pain, smaller scars, and faster recovery</strong> compared to open surgery.</p>',
        ],
        [
          'Can laparoscopic surgery be repeated if I had previous open surgery?',
          '<p>Yes. Modern techniques allow repeat laparoscopic surgeries, even after previous open operations, with safety measures to protect organs.</p>',
        ],
        [
          'How long is the laparoscopic surgery recovery time?',
          '<ul class="prose-list">  <li>Hernia or appendix surgery: 1–2 weeks</li>  <li>Gallbladder removal: About 1 week</li>  <li>Colon or stomach surgery: 3–4 weeks or more</li></ul>',
        ],
        [
          'What is the average cost of laparoscopic gallbladder removal?',
          '<p>Costs vary depending on insurance and complexity. We provide <strong>clear cost estimates</strong> and financing options for self-pay patients.</p>',
        ],
        [
          'Is laparoscopic surgery covered by insurance?',
          '<p>Yes, most insurance plans cover medically necessary laparoscopic surgeries. Our team helps verify coverage before your procedure.</p>',
        ],
        [
          'How do I know if I need laparoscopic general surgery near me?',
          '<p>If you are experiencing ongoing abdominal pain, digestive issues, or hernia symptoms, schedule a <strong>consultation</strong> to explore your options.</p>',
        ],
      ])}
    `,
  },
  {
    slug: 'revision-bariatric-surgery',
    nav: 'Revision Surgery',
    title: 'Revision Bariatric Surgery Specialist in Houston, TX',
    seoTitle: 'Revision Bariatric Surgery Houston, TX | Second Procedure',
    tagline: 'When an earlier procedure has not delivered what it should.',
    description: 'Revision bariatric surgery in Houston, TX for weight regain, inadequate loss, reflux or complications after an earlier procedure.',
    image: '../media/img/u-1758691462878-6edc3d3da1be.jpg',
    stats: [
      ['2–3 weeks', 'back to normal activities'],
    ],
    edits: { videoSlot: true },
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: 'Revision Bariatric Surgery',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    body: `
      <h2 class="display bar">What is Revision Bariatric Surgery?</h2>
      <p>If your initial weight loss surgery didn’t deliver the results you hoped for — or if you’re experiencing complications — revision bariatric surgery may be the solution. This corrective procedure can:</p>
      <ul class="prose-list">
        <li>Address weight regain after bariatric surgery</li>
        <li>Correct complications such as strictures or reflux</li>
        <li>Improve weight-related medical conditions like diabetes, high blood pressure, or sleep apnea</li>
        <li>Enhance or replace older procedures with more effective techniques</li>
      </ul>
      <p>Unlike primary bariatric surgery, revision surgery is tailored to your unique medical history and current needs, making it a highly personalized treatment.</p>
      <h2 class="display bar">Benefits of Revision Bariatric Surgery</h2>
      <p>Choosing revision surgery comes with several important advantages:</p>
      <ul class="prose-list">
        <li>Helps patients achieve renewed and sustainable weight loss</li>
        <li>Corrects problems caused by a previous procedure</li>
        <li>Improves quality of life and reduces obesity-related health risks</li>
        <li>Provides updated, advanced surgical techniques for better results</li>
        <li>Offers another opportunity for long-term weight management</li>
      </ul>
      <h2 class="display bar">Common Reasons for Bariatric Revision</h2>
      <p>Dr. Wadiwala may recommend revision surgery if you are experiencing:</p>
      <ul class="prose-list">
        <li><strong>Insufficient Weight Loss or Weight Regain</strong> – despite previous surgery, weight has returned.</li>
        <li><strong>Medical Complications</strong> – such as reflux or nutritional deficiencies.</li>
      </ul>
      <h2 class="display bar">What to Expect During the Procedure</h2>
      <p>Revision bariatric surgery is typically performed using <strong>minimally invasive laparoscopic techniques</strong>, which allow for smaller incisions, less pain, and quicker recovery. The approach will depend on your original surgery and your current needs. Options may include:</p>
      <ul class="prose-list">
        <li><strong>Sleeve to Bypass Conversion</strong> – for patients with reflux or poor weight loss results.</li>
        <li><strong>Gastric Bypass Revision</strong> – adjustments to improve restriction and absorption.</li>
      </ul>
      <p>During your consultation, Dr. Wadiwala will create a customized surgical plan that addresses your challenges and supports long-term success.</p>
      <h2 class="display bar">Recovery After Revision Bariatric Surgery</h2>
      <p>Because revision surgery is more complex than an initial bariatric procedure, recovery times may vary. However, with minimally invasive techniques, most patients experience:</p>
      <ul class="prose-list">
        <li>Shorter hospital stays (1–3 days on average)</li>
        <li>Reduced post-operative discomfort</li>
        <li>Gradual return to daily activities within 2–3 weeks</li>
        <li>Improved health outcomes with proper follow-up care</li>
      </ul>
      <h2 class="display bar">Long-Term Management and Support</h2>
      <p>Revision surgery is just one part of your journey. At Houston Surgical Weight Loss, we provide:</p>
      <ul class="prose-list">
        <li>Ongoing nutritional counseling</li>
        <li>Regular follow-up visits to monitor progress</li>
        <li>Support with lifestyle changes to maximize results</li>
        <li>Continued access to adjustments and personalized care</li>
      </ul>
      <p>This comprehensive approach helps ensure that your revision leads to lasting weight loss and improved well-being.</p>
      <h2 class="display bar">Is Revision Bariatric Surgery Right for You?</h2>
      <p>You may be a candidate if you:</p>
      <ul class="prose-list">
        <li>Previously had bariatric surgery but didn’t achieve lasting results</li>
        <li>Experienced complications such as reflux or ulcers</li>
        <li>Have regained weight after initial success</li>
        <li>Are motivated to make long-term lifestyle changes for better health</li>
      </ul>
      <p>Dr. Wadiwala will carefully review your surgical history, current health, and weight loss goals to determine if revision surgery is your best option. Patients searching for a <strong>revision bariatric surgeon near me in Houston, Spring, and Cypress</strong> trust our clinic for advanced revision procedures and personalized care. Our location makes it easy for patients across the Greater Houston area to access expert bariatric revision surgery.</p>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'What Is a Revision Bariatric Surgeon and When Do You Need One?',
          '<p>A <strong>revision bariatric surgeon</strong> is a specialist trained to correct or improve previous weight loss surgeries that did not achieve the desired results or led to complications. Patients who have experienced weight regain, ongoing symptoms such as reflux, or ineffective outcomes from prior bariatric procedures may be strong candidates for revision surgery. When performed by an experienced and fellowship-trained bariatric surgeon using advanced, minimally invasive techniques, revision bariatric surgery is considered safe and highly effective in restoring long-term weight loss and improving overall health. If you are searching for a <strong>revision bariatric surgeon near you</strong>, it is important to choose a provider with proven expertise in complex revision procedures and a personalized approach to patient care.</p>',
        ],
        [
          'Why would someone need revision bariatric surgery?',
          '<p>Revision may be necessary due to weight regain, complications, or outdated surgical techniques that are less effective today.</p>',
        ],
        [
          'Is revision surgery safe?',
          '<p>Yes. While more complex than the first procedure, revision surgery is safe when performed by an experienced, board-certified bariatric surgeon.</p>',
        ],
        [
          'What types of revisions are available?',
          '<p>Common options include revising a sleeve to bypass or modifying a gastric bypass for better results.</p>',
        ],
        [
          'How long is the recovery?',
          '<p>Recovery varies, but many patients return to normal activities within 2–3 weeks.</p>',
        ],
        [
          'Will I need to take supplements after revision surgery?',
          '<p>Yes. Most revision patients will need vitamins and supplements to support nutrition and prevent deficiencies.</p>',
        ],
        [
          'Will I lose weight again after revision?',
          '<p>Many patients achieve significant weight loss and improved health outcomes following revision surgery when combined with healthy habits.</p>',
        ],
      ])}
    `,
  },
  {
    slug: 'gastric-sleeve',
    nav: 'Gastric Sleeve',
    title: 'Sleeve Gastrectomy Specialist in Houston, TX',
    seoTitle: 'Gastric Sleeve Surgery Houston, TX | Sleeve Gastrectomy',
    tagline: 'Laparoscopic sleeve gastrectomy with Dr. Irfan Wadiwala.',
    description: 'Gastric sleeve surgery in Houston, TX with Dr. Irfan Wadiwala, a fellowship-trained bariatric surgeon. Most insurance accepted.',
    image: '../media/img/u-1775947933085-30050ddad6b3.jpg',
    stats: [
      ['Up to 70%', 'of excess body weight lost in the first year'],
      ['70–80%', 'of the stomach removed'],
      ['Same day', 'most patients go home'],
      ['2–4 weeks', 'back to normal routines'],
    ],
    edits: { videoSlot: false },
    video: {"src":"gastric-sleeve","seconds":18,"credit":"Animation: F1Digitals via Pixabay (Pixabay Content License)","caption":"How a sleeve gastrectomy is performed: about 75-80% of the stomach is removed, leaving a narrow, banana-shaped sleeve.","captionEs":"Cómo se realiza una gastrectomía en manga: se extrae cerca del 75-80% del estómago y queda una manga estrecha con forma de plátano."},
    procedureSchema: {
      '@type': 'MedicalProcedure',
      name: 'Sleeve Gastrectomy',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    body: `
      <h2 class="display bar">What is Sleeve Gastrectomy?</h2>
      <p>Sleeve gastrectomy, also called <strong>gastric sleeve surgery</strong>, is an FDA-approved, minimally invasive bariatric procedure. During this surgery, a large portion of the stomach is removed, leaving behind a smaller, sleeve-shaped stomach pouch.</p>
      <p>This new pouch:</p>
      <ul class="prose-list">
        <li>Significantly reduces food capacity</li>
        <li>Helps you feel full with smaller portions</li>
        <li>Decreases appetite by lowering hunger hormone (ghrelin) production</li>
        <li>Supports steady, long-term weight loss</li>
      </ul>
      <p>Unlike other weight loss procedures, sleeve gastrectomy does not involve rerouting the intestines, making it a simpler yet highly effective option for many patients.</p>
      <h2 class="display bar">Benefits of Sleeve Gastrectomy</h2>
      <p>Choosing sleeve gastrectomy comes with important advantages:</p>
      <ul class="prose-list">
        <li>Minimally invasive laparoscopic procedure</li>
        <li>High success rate with long-term weight loss</li>
        <li>Improves or resolves obesity-related conditions (diabetes, sleep apnea, hypertension)</li>
        <li>No implanted devices</li>
        <li>No rerouting of the intestines (unlike gastric bypass)</li>
        <li>Reduced hunger due to decreased ghrelin production</li>
      </ul>
      <p>For many patients, these benefits make sleeve gastrectomy a powerful tool for lasting weight management.</p>
      <h2 class="display bar">What to Expect During the Sleeve Gastrectomy Procedure</h2>
      <p>At Houston Surgical Weight Loss, Dr. Wadiwala uses advanced laparoscopic techniques to ensure minimal pain, faster healing, and reduced scarring.</p>
      <p>Step-by-step process:</p>
      <ul class="prose-list">
        <li>Small incisions are made in your abdomen.</li>
        <li>Surgical tools and a laparoscope are inserted.</li>
        <li>Approximately 70–80% of the stomach is removed.</li>
        <li>The remaining stomach is shaped into a narrow sleeve or tube.</li>
      </ul>
      <p>This smaller stomach pouch reduces food intake and naturally lowers appetite, helping you achieve weight loss without rerouting your digestive tract.</p>
      <h2 class="display bar">Recovery After Sleeve Gastrectomy</h2>
      <p>Because the surgery is minimally invasive, most patients recover quickly and safely.</p>
      <p>What to expect:</p>
      <ul class="prose-list">
        <li>Most patients go home on the same day.</li>
        <li>Small incisions heal faster, minimizing downtime</li>
        <li>Return to light activities within 1–2 weeks</li>
        <li>Resume normal routines in 2–4 weeks</li>
        <li>Long-term weight loss begins within the first few months</li>
        <li>Special dietary phases (liquid → pureed → soft → regular foods)</li>
        <li>Lifelong vitamin supplementation is required to avoid deficiencies</li>
      </ul>
      <p>Patients typically experience less pain, fewer complications, and a smoother recovery compared to more invasive procedures.</p>
      <h2 class="display bar">Is Sleeve Gastrectomy Right for You?</h2>
      <p>You may be a candidate for sleeve gastrectomy if you:</p>
      <ul class="prose-list">
        <li>Have a BMI of 35 or higher with comorbidities</li>
        <li>Have a BMI of 40 or higher without comorbidities</li>
        <li>Have not achieved significant weight loss with diet and exercise alone</li>
        <li>Are committed to long-term lifestyle changes</li>
        <li>Want a permanent solution without implants or intestinal rerouting</li>
      </ul>
      <p>During your consultation, Dr. Wadiwala will carefully review your medical history and weight loss goals to determine if sleeve gastrectomy is your best option.</p>

      <h2 class="display bar">Frequently Asked Questions</h2>
      ${faq([
        [
          'How does sleeve gastrectomy help with weight loss?',
          '<p>By reducing stomach size and lowering hunger hormone levels, sleeve gastrectomy helps you eat less, feel full sooner, and lose weight steadily.</p>',
        ],
        [
          'Is sleeve gastrectomy safe?',
          '<p>Yes. It’s one of the most commonly performed bariatric procedures worldwide, with proven safety and effectiveness.</p>',
        ],
        [
          'Is sleeve gastrectomy permanent?',
          '<p>Yes. This procedure is not reversible, since part of the stomach is removed.</p>',
        ],
        [
          'How long is the recovery period?',
          '<p>Most patients return to light activities in 1–2 weeks and normal routines in 2–4 weeks.</p>',
        ],
        [
          'Will I need vitamins or supplements after surgery?',
          '<p>Yes. Patients typically need a daily multivitamin, calcium, and vitamin B12 to support long-term health.</p>',
        ],
        [
          'How soon will I see results?',
          '<p>Many patients lose 60–70% of their excess body weight within the first year, especially when paired with healthy lifestyle changes.</p>',
        ],
      ])}
    `,
  },
];

module.exports = { pages, PHONE, PHONE_HREF };
