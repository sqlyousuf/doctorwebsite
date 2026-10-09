/*
 * Patient reviews from the practice's Google Business Profile, pasted in by
 * the practice. All are five stars.
 *
 * `text` is the review exactly as written, one string per paragraph, typos
 * included; it is shown in its own language on both the English and Spanish
 * pages. `name` is the reviewer's first name and last initial (or the name
 * Google shows, where that is a single word or a username). `line` is a short
 * phrase lifted from the review itself, for the card's subheading.
 *
 * Used twice: tools/build-reviews.js writes the home page strip, and
 * tools/build-results.js writes the full list on the Real Results page.
 */

const reviews = [
  {
    name: 'FI',
    line: 'Everything was explained clearly.',
    text: [
      'I had an excellent experience with Dr.Wadiwala and his entire team from consultation to post-op care. Everything was explained clearly, the surgery went smoothly, and the recovery has been going very well. I am happy and felt supported by Dr.Wadiwala and his team in this life-changing journey. I highly recommend Dr.Wadiwala to anyone who is considering this procedure.',
    ],
  },
  {
    name: 'Maria M.',
    line: 'I’ve already lost 98 pounds.',
    text: [
      'Amazing thank dr for everything, I haven’t even been a year post-op and I’ve already lost 98 pounds. I still have 17 pounds to go.',
    ],
  },
  {
    name: 'Diana',
    procedure: 'sleeve',
    line: 'Down 120 pounds.',
    text: ['Sleeved May 1st 2024. Recovery was good. No complications, everything went smoothly. Down 120 pounds. Thanks Dr'],
  },
  {
    name: 'Lainet P.',
    procedure: 'sleeve',
    line: 'I couldn’t be happier or more satisfied.',
    text: [
      'I had gastric sleeve surgery a week ago, and my recovery has been fantastic. I followed all of Dr. Wadiwala’s and the nutritionist’s instructions to the letter, and everything has been perfect—no reflux, no pain, no constipation, and no nausea. The day of my surgery went perfectly; they were super punctual, the hospital was spotless, and the staff was very friendly. I was discharged by 2:00 pm. I’ve already lost 13 pounds. The doctor and his team are kind, very professional, and provide follow-up before, during, and after surgery. They speak Spanish and English. I couldn’t be happier or more satisfied.',
    ],
  },
  {
    name: 'Patricia A.',
    line: 'The best decision.',
    text: ['It’s been 8 months since my surgery and it’s the best decision. Thank you, doctor!'],
  },
  {
    name: 'Jesmir V.',
    line: 'He attended to us immediately.',
    text: [
      'Dr. Wadiwala is excellent, as is his entire team. They were very attentive and kind even before my surgery.',
      'After my surgery, I had some concerns about feeling unwell on the first day, so we contacted the doctor. He attended to us immediately, and his team continued to monitor me the following day.',
      'All the instructions have been clear, and I’ve been doing very well.',
    ],
  },
  {
    name: 'Criselda E.',
    procedure: 'bariatricGeneral',
    line: 'The best decision of my life.',
    text: [
      'Dr. Irfan I Wadiwala is excellent and undoubtedly the best doctor in the world. The best decision of my life was made in January 2024. I truly love the results of my bariatric surgery. The doctor is very kind and explains everything well. The staff is super friendly and attentive to all our needs. Recently, I had another gallbladder surgery, and the whole process has been easy, painless, and with a quick recovery. I honestly couldn’t have chosen a better doctor. He and his team are 100% recommended. He can help with gallbladder issues, hernias, and bariatric surgery.',
    ],
  },
  {
    name: 'Katrina M.',
    line: 'Feeling better than I have in years!',
    text: [
      'Exceptional Drs and Staff. I am 4 weeks post op and feeling better than I have in years! Excited to set forth on this new journey.',
    ],
  },
  {
    name: 'Paulette M.',
    line: 'Very happy with the results!',
    text: ['Excellent doctor and very attentive staff. One year after my surgery and I’m very happy with the results! Thank you all!'],
  },
  {
    name: 'Geraldine O.',
    line: 'My recovery is progressing perfectly.',
    text: [
      'Everything is going very well, excellent condition, following all instructions to the letter. No pain beyond what is normal. My recovery is going well. My surgery was on Wednesday, April 15, 2026. I’ve been losing weight, and my recovery is progressing perfectly. Highly recommended.',
    ],
  },
  {
    name: 'Tina J.',
    line: 'They made me feel so at ease.',
    text: ['Everyone is so great here. I was so nervous and they made me feel so at ease. Highly recommend!'],
  },
  {
    name: 'Kerry W.',
    line: 'Healing is going well.',
    text: ['Surgery went well, healing is going well, I’ve ready lost 25 pounds in the first week, highly recommend'],
  },
  {
    name: 'KalynAshleigh',
    line: 'The service was absolutely wonderful.',
    text: [
      'For this being my first surgery, I am so thankful for Dr. Wadiwala and his team! The service was absolutely wonderful at the hospital and at the office. My recover has been wonderful! Thank you to Dr. Wadiwala and his team!',
    ],
  },
  {
    name: 'Paty B.',
    line: 'The absolute best doctor!',
    text: ['The absolute best doctor! Recommend him 100% Im 1 week post op and feel amazing.'],
  },
];

/** Where the "read them all" link points. Empty until the practice sends it. */
const GOOGLE_REVIEWS_URL = '';

module.exports = { reviews, GOOGLE_REVIEWS_URL };
