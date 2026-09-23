/*
 * The practice's canonical facts, in one place.
 *
 * Both build scripts and the sitemap generator read from here, so the address
 * in the schema, the URLs in the sitemap and the domain in every canonical tag
 * cannot drift apart. index.html is hand-maintained and repeats some of this;
 * tools/check-seo.js verifies the two agree.
 */

const ORIGIN = 'https://houstonsurgicalweightloss.com';

const BUSINESS = {
  name: 'Houston Surgical Weight Loss',
  phone: '+1-281-653-6544',
  fax: '+1-281-807-9702',
  email: 'info@houstonsurgicalweightloss.com',
  street: '5220 FM 2920 Rd. Suite 120',
  city: 'Spring',
  region: 'TX',
  postalCode: '77388',
  country: 'US',
  // Published on the practice's own site.
  hours: 'Mo-Fr 08:00-17:00',
};

const PHYSICIAN = {
  name: 'Irfan Wadiwala, DO',
  jobTitle: 'Bariatric and General Surgeon',
  description:
    'Fellowship-trained bariatric surgeon and board-certified general surgeon with two decades of surgical experience.',
};

/**
 * Deliberately NOT in the schema: aggregateRating.
 *
 * The site states "4.8 average rating, 3,000+ patients treated", but that is a
 * self-reported figure, not a count of reviews shown on the page. Marking it up
 * as an aggregateRating is exactly what Google's reviews-snippet guidelines
 * call self-serving, and it risks a manual action. If the practice wires up
 * real, displayed reviews — Google Business Profile or otherwise — the rating
 * can be marked up from those, sourced properly.
 */

/** Every indexable page: path, priority, and whether it has a Spanish twin. */
const PAGES = [
  { path: '/', priority: '1.0', es: '/es/' },
  { path: '/patient-center/self-pay.html', priority: '0.9', es: '/es/patient-center/self-pay.html' },
  { path: '/patient-center/lantern.html', priority: '0.9', es: '/es/patient-center/lantern.html' },
  { path: '/patient-center/financing-payment.html', priority: '0.8', es: '/es/patient-center/financing-payment.html' },
  { path: '/patient-center/bariatric-vitamins.html', priority: '0.7', es: '/es/patient-center/bariatric-vitamins.html' },
  { path: '/patient-center/after-surgery.html', priority: '0.7', es: '/es/patient-center/after-surgery.html' },
  { path: '/patient-center/pre-op-and-post-op.html', priority: '0.7', es: '/es/patient-center/pre-op-and-post-op.html' },
  { path: '/patient-center/exercise-regimens.html', priority: '0.6', es: '/es/patient-center/exercise-regimens.html' },
  { path: '/patient-center/discharge-instructions.html', priority: '0.6', es: '/es/patient-center/discharge-instructions.html' },
  { path: '/patient-center/vitamin-guide.html', priority: '0.6', es: '/es/patient-center/vitamin-guide.html' },
  { path: '/patient-center/patient-forms.html', priority: '0.6', es: '/es/patient-center/patient-forms.html' },
  { path: '/patient-center/for-out-of-town-patients.html', priority: '0.5', es: '/es/patient-center/for-out-of-town-patients.html' },
];

/** The LocalBusiness graph, emitted once on the home page. */
const businessSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      '@id': `${ORIGIN}/#clinic`,
      name: BUSINESS.name,
      url: `${ORIGIN}/`,
      telephone: BUSINESS.phone,
      faxNumber: BUSINESS.fax,
      email: BUSINESS.email,
      image: `${ORIGIN}/media/logo.png`,
      logo: `${ORIGIN}/media/logo.png`,
      medicalSpecialty: 'Surgical',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
      openingHours: BUSINESS.hours,
      availableService: [
        'Gastric Sleeve',
        'Gastric Bypass',
        'Gastric Balloon',
        'Lap-Band',
        'Revision Bariatric Surgery',
        'Medical Weight Loss',
      ].map((s) => ({ '@type': 'MedicalProcedure', name: s })),
      employee: { '@id': `${ORIGIN}/#physician` },
    },
    {
      '@type': 'Physician',
      '@id': `${ORIGIN}/#physician`,
      name: PHYSICIAN.name,
      jobTitle: PHYSICIAN.jobTitle,
      description: PHYSICIAN.description,
      image: `${ORIGIN}/media/Dr-Irfan-Wadiwala-DO-62235-zoom.jpg`,
      medicalSpecialty: 'Surgical',
      worksFor: { '@id': `${ORIGIN}/#clinic` },
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.region,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.country,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${ORIGIN}/#website`,
      url: `${ORIGIN}/`,
      name: BUSINESS.name,
      inLanguage: 'en-US',
      publisher: { '@id': `${ORIGIN}/#clinic` },
    },
  ],
});

/** Breadcrumbs for an interior page. */
const breadcrumbSchema = (title, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
    { '@type': 'ListItem', position: 2, name: 'Patient Center', item: `${ORIGIN}/patient-center/self-pay.html` },
    { '@type': 'ListItem', position: 3, name: title, item: `${ORIGIN}${path}` },
  ],
});

module.exports = { ORIGIN, BUSINESS, PHYSICIAN, PAGES, businessSchema, breadcrumbSchema };
