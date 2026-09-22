/*
 * Spanish strings for the shared chrome — the nav, the calls to action, the
 * breadcrumb, the bits of furniture that wrap every generated page.
 *
 * These used to live only as replacement rules inside tools/build-es.js, which
 * was fine while index.html was the only Spanish page. Now that the Patient
 * Center and the procedure pages each have a Spanish twin, the labels are data
 * that three builders share, so they belong in one place.
 *
 * Page *content* is not here — that lives beside its English original in
 * tools/content/*.es.js.
 */

const UI = {
  en: {
    htmlLang: 'en',
    primary: ['Procedures', 'Our Surgeon', 'How It Works', 'Stories', 'Insurance', 'FAQ'],
    patientCenter: 'Patient Center',
    vitaminStore: 'Vitamin E Store',
    vitaminStoreAria: 'Vitamin E Store — opens in a new tab',
    lanternAria: 'Lantern — employer-covered surgery',
    headerCta: "See If You're Covered",
    candidatePill: 'Do I Qualify?',
    toggleMenu: 'Toggle menu',
    langLabel: 'Language',
    home: 'Home',
    procedures: 'Procedures',
    breadcrumbLabel: 'Breadcrumb',
    moreInPatientCenter: 'More in the Patient Center',
    ctaHeading: "Questions? We're Here to Help",
    ctaBody:
      'Call the office and one of our team will walk you through it — no appointment needed to ask a question.',
    ctaButton: 'Request a Consultation',
    procCtaHeading: 'Find Out If You Qualify',
    procCtaBody:
      'Your first consultation is free, in person or virtual. We will check your insurance and talk you through your options — no obligation.',
  },
  es: {
    htmlLang: 'es',
    primary: ['Procedimientos', 'Nuestro Cirujano', 'Cómo Funciona', 'Testimonios', 'Seguro', 'Preguntas'],
    patientCenter: 'Centro del Paciente',
    vitaminStore: 'Tienda de Vitaminas',
    vitaminStoreAria: 'Tienda de Vitaminas — se abre en una pestaña nueva',
    lanternAria: 'Lantern — cirugía cubierta por su empleador',
    headerCta: 'Vea Si Tiene Cobertura',
    candidatePill: '¿Califico?',
    toggleMenu: 'Abrir menú',
    langLabel: 'Idioma',
    home: 'Inicio',
    procedures: 'Procedimientos',
    breadcrumbLabel: 'Ruta de navegación',
    moreInPatientCenter: 'Más en el Centro del Paciente',
    ctaHeading: '¿Tiene Preguntas? Estamos Para Ayudarle',
    ctaBody:
      'Llame a la oficina y alguien de nuestro equipo le explicará todo — no necesita cita para hacer una pregunta.',
    ctaButton: 'Solicite una Consulta',
    procCtaHeading: 'Descubra Si Califica',
    procCtaBody:
      'Su primera consulta es gratuita, presencial o virtual. Verificaremos su seguro y le explicaremos sus opciones — sin compromiso.',
  },
};

/** The Patient Center menu labels, which are also each page's nav label. */
const NAV_ES = {
  'self-pay': 'Pago Particular',
  'financing-payment': 'Financiamiento y Pagos',
  'patient-forms': 'Formularios del Paciente',
  'after-surgery': 'Después de la Cirugía',
  'vitamin-guide': 'Guía de Vitaminas',
  'bariatric-vitamins': 'Vitaminas Bariátricas',
  lantern: 'Lantern',
  'pre-op-and-post-op': 'Preoperatorio y Postoperatorio',
  'exercise-regimens': 'Rutinas de Ejercicio',
  'discharge-instructions': 'Instrucciones de Alta',
  'for-out-of-town-patients': 'Para Pacientes de Fuera',
};

/** Sub-items under a Patient Center entry (currently just the store). */
const SUB_NAV_ES = { 'Vitamin E Store': 'Tienda de Vitaminas' };

module.exports = { UI, NAV_ES, SUB_NAV_ES };
