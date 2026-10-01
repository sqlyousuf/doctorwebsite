/*
 * Copy for the About Us section — the three pages the practice asked for
 * under a single dropdown:
 *
 *   our-office    location, hours, why patients choose HSWL
 *   dr-wadiwala   photograph, biography, education and training
 *   dietitian     the in-house dietitian
 *
 * The wording is carried over from the practice's own /about-us/ and
 * /dr-irfan-wadiwala-do/ pages, with one deliberate change applied
 * throughout, requested earlier: "over 18 years" and "18+ years" both
 * become "two decades".
 *
 * The dietitian page carries Flo's own biography and headshot.
 */

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';
const FAX = '281-807-9702';

/** Shorthand so the copy below stays readable. */
const ul = (items) => `<ul class="prose-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

/*
 * A slot for a photograph the practice still owes us. Their current site has
 * no exterior or interior shots of the building anywhere — every page was
 * checked — so there is nothing to carry over and nothing honest to put in
 * its place. A stock photograph of somebody else's clinic under a heading
 * reading "our building" would be a misrepresentation, so the slot stays
 * visible until a real photograph arrives.
 */
const photoSlot = (label) => `<div class="photo-slot"><p><strong>Photograph needed:</strong> ${label}</p></div>`;

const pages = [
  {
    slug: 'our-office',
    nav: 'Our Office',
    seoTitle: 'Our Office in Spring, TX | Houston Surgical Weight Loss',
    title: 'Our Office in Spring, Texas',
    tagline: 'One practice, one surgeon, and a team that knows your name.',
    description:
      'Houston Surgical Weight Loss is at 5220 FM 2920 Rd, Suite 120, Spring, TX 77388. Office hours, directions, and why patients choose us.',
    image: '../media/img/about-office.jpg',
    body: `
      <p class="intro">Houston Surgical Weight Loss offers the latest advances in weight loss surgery to help patients
      reach a healthy body weight. Dr. Wadiwala also performs a range of general surgery procedures, including
      gallbladder removal, appendectomies and hernia repairs. Most of our procedures are done as outpatients and do
      not require an overnight stay.</p>

      <h2 class="display bar">Where to Find Us</h2>

      <div class="office-grid">
        <div class="office-card">
          <h3>Address</h3>
          <p>5220 FM 2920 Rd.<br>Suite 120<br>Spring, TX 77388</p>
        </div>
        <div class="office-card">
          <h3>Hours</h3>
          <p>Monday – Friday<br>8:00 am – 5:00 pm<br><span class="office-closed">Saturday &amp; Sunday: closed</span></p>
        </div>
        <div class="office-card">
          <h3>Contact</h3>
          <p><a href="${PHONE_HREF}">${PHONE}</a><br>Fax ${FAX}</p>
        </div>
      </div>

      <div class="office-map">
        <iframe
          title="Map showing Houston Surgical Weight Loss at 5220 FM 2920 Rd, Suite 120, Spring, TX 77388"
          src="https://www.google.com/maps?q=5220+FM+2920+Rd+Suite+120+Spring+TX+77388&amp;output=embed"
          width="600" height="420" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <h2 class="display bar">Our Building</h2>
      ${photoSlot('the outside of the building, so patients can recognise it as they arrive')}
      ${photoSlot('the reception area and a consultation room')}

      <h2 class="display bar">Why Patients Choose Houston Surgical Weight Loss</h2>
      ${ul([
        'A fellowship-trained, board-certified surgeon with two decades of experience.',
        'Expertise in laparoscopic hernia repair, gallbladder surgery, colon surgery and bariatric procedures.',
        'A focus on minimally invasive techniques, for better results and a quicker recovery.',
        'Care plans built around each patient&rsquo;s own health and lifestyle.',
        'Telehealth consultations and thorough follow-up care.',
      ])}

      <h2 class="display bar">If You Live Out of Town</h2>
      <p>We see patients from well beyond Spring, and we offer video visits for anyone who lives far away. Your first
      video visit is complimentary, exactly as an in-person consultation would be. You will need to come in person at
      some point before surgery, but the early conversations do not require a drive.</p>

      <h2 class="display bar">Booking a Consultation</h2>
      <p>Your first consultation is free, in person or by video. Call the office on
      <a href="${PHONE_HREF}">${PHONE}</a> or request an appointment online, and we will check your insurance and talk
      you through the options with no obligation.</p>
    `,
  },

  {
    slug: 'dr-wadiwala',
    nav: 'Dr. Wadiwala',
    seoTitle: 'Dr. Irfan Wadiwala, DO | Bariatric Surgeon, Houston TX',
    title: 'Dr. Irfan Wadiwala, DO',
    tagline: 'Fellowship-trained bariatric surgeon and board-certified general surgeon.',
    description:
      'Dr. Irfan Wadiwala is a fellowship-trained bariatric surgeon and board-certified general surgeon in Spring, TX, with two decades of surgical experience.',
    image: '../media/img/about-surgeon.jpg',
    portrait: {
      src: 'media/dr-wadiwala.jpg',
      alt: 'Dr. Irfan Wadiwala, DO',
      width: 853,
      height: 1280,
    },
    body: `
      <p class="intro">Dr. Irfan Wadiwala is a fellowship-trained bariatric surgeon and board-certified general surgeon
      who provides advanced weight loss surgery and non-surgical weight loss care at Houston Surgical Weight Loss. He
      is committed to helping patients reach long-term health through safe, effective and compassionate care.</p>

      <h2 class="display bar">Experience</h2>
      <p>With two decades of surgical experience, Dr. Wadiwala has performed thousands of bariatric procedures with
      excellent outcomes. He previously served as Director of Bariatric Surgery at CyFair Medical Center, where he led
      and expanded minimally invasive bariatric services.</p>

      <h3>His expertise includes</h3>
      ${ul([
        'Gastric sleeve, gastric bypass and revision bariatric surgery',
        'Advanced laparoscopic and minimally invasive techniques',
        'Hernia repairs, gallbladder removal, appendectomies, cyst removals and other general surgery',
      ])}

      <h3>Hospital privileges</h3>
      ${ul([
        'HCA Houston Healthcare Northwest',
        'St. Luke&rsquo;s Health – The Vintage Hospital',
        'Houston Methodist Willowbrook Hospital',
      ])}

      <h2 class="display bar">Education &amp; Training</h2>
      ${ul([
        'Fellowship, Laparoscopic Bariatric Surgery – Penn State Milton Hershey Medical Center',
        'General Surgery Residency – Martin Luther King and Arrowhead Regional Medical Center, Los Angeles',
        'Doctor of Osteopathic Medicine, <em>summa cum laude</em> – Western University, Pomona, California',
        'Board-certified in General Surgery',
      ])}

      <h2 class="display bar">Professional Affiliations</h2>
      ${ul([
        'American Society for Metabolic and Bariatric Surgery (ASMBS)',
        'Society of American Gastrointestinal and Endoscopic Surgeons (SAGES)',
        'Harris County Medical Society',
        'Texas Medical Association',
      ])}
      <p>He keeps current with new techniques by attending national bariatric surgery conferences and continually
      refining his surgical practice.</p>

      <h2 class="display bar">Specialties</h2>
      ${ul([
        'Bariatric surgery for weight loss',
        'Hernia repair',
        'Gallbladder removal',
        'Appendectomy',
        'Cyst removal',
        'Complex general surgery',
      ])}

      <h2 class="display bar">Patient Care Philosophy</h2>
      <p>Dr. Wadiwala believes in treating the whole person rather than the condition alone, and guides patients
      through every stage of the journey, from preoperative education to long-term follow-up. Outside work he enjoys
      time outdoors with his family, basketball, horseback riding and travelling.</p>
    `,
  },

  {
    slug: 'dietitian',
    nav: 'Our Dietitian',
    seoTitle: 'Florencia Pillow, RDN | Dietitian, Houston Surgical Weight Loss',
    title: 'Florencia Pillow, RDN',
    tagline: 'Bilingual Registered Dietitian Nutritionist.',
    description:
      'Florencia Pillow, RDN, is the bilingual registered dietitian nutritionist at Houston Surgical Weight Loss in Spring, TX, supporting patients before and after weight loss surgery.',
    image: '../media/img/about-dietitian.jpg',
    portrait: {
      src: 'media/florencia-pillow.jpg',
      alt: 'Florencia Pillow, RDN',
      width: 1138,
      height: 1448,
    },
    body: `
      <p class="intro">Florencia is a bilingual Registered Dietitian Nutritionist with six years of experience
      helping patients build healthier habits, and with a passion for making a difference in the fight against
      obesity. At Houston Surgical Weight Loss she provides nutrition guidance in English and Spanish, to support
      patients before and after weight loss surgery.</p>

      <h2 class="display bar">How Florencia Works With Patients</h2>
      <p>Florencia helps patients understand each stage of their nutrition plan, from preparing for surgery to
      meeting protein and hydration goals and adjusting to long-term eating habits. With a practical, compassionate
      approach, she works with each patient to build a plan that fits their needs, their preferences and their
      cultural traditions.</p>

      ${ul([
        'Preparing for surgery',
        'Meeting protein and hydration goals',
        'Adjusting to long-term eating habits',
      ])}

      <h2 class="display bar">Nutrition in English and Spanish</h2>
      <p>Florencia sees patients in either language. Food is one of the most personal things a clinician can ask you
      to change, and it is far easier to talk it through — and to be understood about what you actually eat at home —
      in your own words.</p>

      <h2 class="display bar">Meeting Florencia</h2>
      <p>Nutrition visits are part of the programme rather than something you have to arrange elsewhere. Ask about
      seeing Florencia at your consultation, or call the office on <a href="${PHONE_HREF}">${PHONE}</a>.</p>
    `,
  },
];

module.exports = { pages, PHONE, PHONE_HREF, FAX };
