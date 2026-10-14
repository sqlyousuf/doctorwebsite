/*
 * The Medical Weight Loss page, in both languages.
 *
 * Laid out after the practice's reference (bodybybariatrics.com/medical-weight-loss/)
 * as they asked: intro, how it works, what's included, the medications, a call
 * to action and an FAQ. At their request it leaves out the reference's
 * subscription step, its "PLUS" feature lists, and its group-therapy, meal-plan
 * and dietitian-office-hour cards.
 *
 * The copy is ours, not theirs, and the medication summaries are drawn from
 * each drug's FDA labeling. That is clinical content the practice has not yet
 * signed off, so the page ships as a draft (noindex, review banner) until
 * Dr. Wadiwala has read it — flip `draft` to false once he has.
 */

const draft = true;

const reviewNotes = [
  'Dr. Wadiwala to check every medication summary — dosing, side effects, who should not take it, warnings.',
];

/* Hero and card photos, all already in media/img. */
const images = {
  hero: 'u-1758691462878-6edc3d3da1be.jpg',
  intro: 'u-1490645935967-10de6ba17061.jpg',
  consult: 'u-1576091160550-2173dba999ef.jpg',
  prescription: 'u-1758691462814-485c3672e447.jpg',
  insurance: 'u-1454165804606-c3d57bc86b40.jpg',
};

const en = {
  seoTitle: 'Medical Weight Loss Houston, TX | Semaglutide & Tirzepatide',
  description:
    'Physician-supervised medical weight loss in Houston, TX with Dr. Irfan Wadiwala — GLP-1 medications such as Wegovy and Zepbound, in person or virtual.',
  kicker: 'Non-Surgical Weight Loss',
  title: 'Medical Weight Loss in Houston, TX',
  tagline: 'Physician-supervised weight loss with prescription medication — in person or virtual.',

  introHeading: 'Physician-Supervised Weight Loss',
  intro: [
    'Not everyone needs surgery to reach a healthy weight. At Houston Surgical Weight Loss, Dr. Irfan Wadiwala prescribes safe, effective, FDA-approved weight loss medications and supervises your progress every step of the way.',
    'Newer GLP-1 medications such as semaglutide (Wegovy®) and tirzepatide (Zepbound®) reduce appetite and help you feel full sooner, and many patients lose a significant amount of weight. Paired with nutrition guidance and regular follow-ups, they can be a powerful alternative to surgery — or a helpful addition after it.',
  ],
  getStarted: 'Get Started',

  stepsHeading: 'How It Works',
  stepsIntro: 'Three simple steps from your first visit to your first dose.',
  steps: [
    {
      title: 'Consultation',
      body: 'Meet with Dr. Wadiwala in person or virtually. Your medical history, current medications and goals are reviewed to decide whether medication is right for you.',
      action: { label: 'Request a Consultation', appt: true },
    },
    {
      title: 'Get Your Medication',
      body: 'Once you have a prescription, our team checks your insurance and helps with any prior authorization. If your plan does not cover it, we will walk you through self-pay options.',
      action: { label: "See If You're Covered", href: '#insurance' },
    },
    {
      title: 'Start Treatment & Follow Up',
      body: 'Begin your medication at a low dose. Regular follow-ups let Dr. Wadiwala track your progress, manage side effects and adjust your dose.',
      action: { label: 'Call 281-653-6544', tel: true },
    },
  ],

  includedHeading: "What's Included",
  included: [
    {
      img: 'consult',
      title: 'Virtual Consultation',
      body: 'In your virtual visit, Dr. Wadiwala reviews your medical history and weight loss goals, and guides you to the right medication and a personalized plan.',
    },
    {
      img: 'prescription',
      title: 'Prescription',
      body: 'We prescribe the medication best suited to you — brand-name or generic, injectable or oral — with your health, goals and budget in mind.',
    },
    {
      img: 'insurance',
      title: 'Insurance Support',
      body: 'Our team verifies your benefits and handles prior authorizations, so you can focus on reaching your weight loss goals.',
    },
  ],

  medsHeading: 'Weight Loss Medications',
  medsIntro:
    'Depending on your health, goals and coverage, Dr. Wadiwala may recommend one of these FDA-approved medications. Open any medication for the details.',
  medsNote:
    'This is a summary, not a substitute for the full prescribing information or medical advice. Dr. Wadiwala will go over the risks and benefits of any medication with you.',
  howTaken: 'How it is taken',
  moreDetails: 'Full details',
  labels: {
    benefits: 'Benefits',
    sideEffects: 'Common side effects',
    avoid: 'Who should not take it',
    warnings: 'Warnings & interactions',
  },
  meds: [
    {
      name: 'Wegovy®',
      generic: 'Semaglutide · weekly injection',
      about:
        'Wegovy mimics GLP-1, a natural hormone that signals fullness to the brain and slows how quickly the stomach empties, so smaller portions feel satisfying and cravings ease. It is FDA-approved for chronic weight management.',
      form: 'A once-weekly injection under the skin of the stomach, thigh or upper arm. The dose starts low and steps up every four weeks to a maintenance dose of 2.4 mg, giving your body time to adjust.',
      benefits: [
        'Average weight loss of about 15% of body weight over 68 weeks in clinical trials',
        'Lowers the risk of heart attack, stroke and cardiovascular death in adults with heart disease and excess weight',
        'Can improve blood sugar, blood pressure and cholesterol',
      ],
      sideEffects: [
        'Nausea, diarrhea, vomiting or constipation — usually strongest while the dose is increasing',
        'Stomach pain, bloating or heartburn',
        'Headache and tiredness',
      ],
      avoid: [
        'A personal or family history of medullary thyroid cancer, or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
        'Pregnancy, or planning a pregnancy',
        'A previous serious allergic reaction to semaglutide',
      ],
      warnings: [
        'Tell us about any history of pancreatitis, gallbladder disease, kidney disease or diabetic eye disease',
        'Low blood sugar is more likely if you also take insulin or a sulfonylurea',
        'Because it slows digestion, it can change how other medicines taken by mouth are absorbed',
      ],
    },
    {
      name: 'Ozempic®',
      generic: 'Semaglutide · weekly injection',
      about:
        'Ozempic contains the same medicine as Wegovy, semaglutide, at doses approved for adults with type 2 diabetes. As well as lowering blood sugar, it reduces appetite, and many patients lose weight on it.',
      form: 'A once-weekly injection from a pre-filled pen. The dose starts at 0.25 mg and increases gradually, up to a maximum of 2 mg.',
      benefits: [
        'Improves blood sugar control in type 2 diabetes',
        'Lowers the risk of heart attack, stroke and cardiovascular death in adults with type 2 diabetes and heart disease',
        'Helps slow kidney disease in adults with type 2 diabetes and chronic kidney disease',
      ],
      sideEffects: [
        'Nausea, diarrhea, vomiting or constipation — usually strongest while the dose is increasing',
        'Stomach pain, bloating or heartburn',
        'Headache and tiredness',
      ],
      avoid: [
        'A personal or family history of medullary thyroid cancer, or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
        'Pregnancy, or planning a pregnancy',
        'A previous serious allergic reaction to semaglutide',
      ],
      warnings: [
        'Insurance plans generally cover Ozempic for type 2 diabetes, not for weight loss alone',
        'Tell us about any history of pancreatitis, gallbladder disease, kidney disease or diabetic eye disease',
        'Low blood sugar is more likely if you also take insulin or a sulfonylurea',
      ],
    },
    {
      name: 'Mounjaro®',
      generic: 'Tirzepatide · weekly injection',
      about:
        'Mounjaro acts on two hormones that regulate appetite and blood sugar, GIP and GLP-1. It is FDA-approved for adults with type 2 diabetes, and patients taking it in clinical trials also lost substantial weight.',
      form: 'A once-weekly injection. Treatment starts at 2.5 mg and increases in 2.5 mg steps, no sooner than every four weeks, up to 15 mg.',
      benefits: [
        'Lowers A1C in type 2 diabetes',
        'Substantial weight loss for many patients',
        'Reduces appetite and cravings',
      ],
      sideEffects: [
        'Nausea, diarrhea, vomiting or constipation, most often as the dose increases',
        'Reduced appetite, indigestion and stomach pain',
      ],
      avoid: [
        'A personal or family history of medullary thyroid cancer, or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
        'Pregnancy, or planning a pregnancy',
        'A previous serious allergic reaction to tirzepatide',
      ],
      warnings: [
        'It can make birth control pills less effective — use a non-oral or backup method for 4 weeks after starting and after each dose increase',
        'Tell us about any history of pancreatitis, gallbladder disease or kidney disease',
        'Low blood sugar is more likely if you also take insulin or a sulfonylurea',
      ],
    },
    {
      name: 'Zepbound®',
      generic: 'Tirzepatide · weekly injection',
      about:
        'Zepbound is tirzepatide — the same medicine as Mounjaro — approved specifically for chronic weight management. It is also approved to treat moderate to severe obstructive sleep apnea in adults with obesity.',
      form: 'A once-weekly injection by pen or single-dose vial, starting at 2.5 mg and increasing every four weeks as tolerated, up to 15 mg.',
      benefits: [
        'Average weight loss of about 15–21% of body weight over 72 weeks in clinical trials, depending on dose',
        'Improves obstructive sleep apnea in adults with obesity',
        'Can improve blood pressure, cholesterol and blood sugar',
      ],
      sideEffects: [
        'Nausea, diarrhea, vomiting or constipation, most often as the dose increases',
        'Reduced appetite, indigestion and stomach pain',
      ],
      avoid: [
        'A personal or family history of medullary thyroid cancer, or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
        'Pregnancy, or planning a pregnancy',
        'A previous serious allergic reaction to tirzepatide',
      ],
      warnings: [
        'It can make birth control pills less effective — use a non-oral or backup method for 4 weeks after starting and after each dose increase',
        'Tell us about any history of pancreatitis, gallbladder disease or kidney disease',
        'Low blood sugar is more likely if you also take insulin or a sulfonylurea',
      ],
    },
    {
      name: 'Contrave®',
      generic: 'Naltrexone & bupropion · tablet',
      about:
        "Contrave combines two medicines that work on the brain's hunger and reward centers: bupropion, which reduces appetite, and naltrexone, which helps curb cravings. It is FDA-approved for chronic weight management.",
      form: 'An extended-release tablet taken by mouth. The dose builds up over four weeks to two tablets twice a day, and your progress is reviewed at 12 weeks.',
      benefits: [
        'A non-injectable option',
        'Helps with food cravings and emotional eating',
        'An alternative for patients who cannot take GLP-1 medications',
      ],
      sideEffects: [
        'Nausea, constipation, headache and vomiting',
        'Dizziness, trouble sleeping and dry mouth',
        'Higher blood pressure or heart rate',
      ],
      avoid: [
        'Uncontrolled high blood pressure',
        'A seizure disorder, or a history of anorexia or bulimia',
        'Current use of opioids or opioid-dependence treatment',
        'Suddenly stopping alcohol, benzodiazepines, barbiturates or seizure medicines',
        'An MAO inhibitor taken in the past 14 days, or another medicine containing bupropion',
        'Pregnancy',
      ],
      warnings: [
        'Bupropion carries a warning about suicidal thoughts and mood changes — tell us about any history of depression or other mental health conditions',
        'Interacts with many antidepressants and other medicines, so bring a full list of what you take',
        'Avoid or limit alcohol while taking it',
      ],
    },
    {
      name: 'Phentermine',
      generic: 'Appetite suppressant · capsule or tablet',
      about:
        'Phentermine is one of the longest-used weight loss medications. A stimulant that reduces appetite, it is approved for short-term use alongside diet, exercise and behavior change.',
      form: 'A capsule or tablet taken once a day, usually in the morning to avoid trouble sleeping. It is a controlled substance, prescribed for short periods with regular check-ins.',
      benefits: [
        'Fast-acting appetite control',
        'A low-cost medicine taken by mouth',
        'Can help jump-start weight loss',
      ],
      sideEffects: [
        'Dry mouth, trouble sleeping and constipation',
        'Faster heart rate or higher blood pressure',
        'Restlessness, nervousness or dizziness',
      ],
      avoid: [
        'Heart disease, including a history of heart attack, stroke, irregular heartbeat or uncontrolled high blood pressure',
        'An overactive thyroid, or glaucoma',
        'A history of drug misuse',
        'Pregnancy or breastfeeding',
        'An MAO inhibitor taken in the past 14 days',
      ],
      warnings: [
        'Do not combine it with other weight loss medicines unless Dr. Wadiwala prescribes them together',
        'It can be habit-forming — take it exactly as prescribed',
        'It may affect alertness, so see how it affects you before driving',
      ],
    },
  ],

  ctaHeading: 'Your Medical Weight Loss Journey Starts Now',
  ctaBody:
    'Your first consultation is free, in person or virtual. We will check your insurance and help you find the right medication — no obligation.',

  faqHeading: 'Medical Weight Loss FAQs',
  faq: [
    [
      'Who is a good candidate for medical weight loss?',
      'Generally, adults with a BMI of 30 or more, or 27 or more with a weight-related condition such as type 2 diabetes, high blood pressure or sleep apnea. Dr. Wadiwala will review your history to confirm the right fit.',
    ],
    [
      'Is there a minimum age requirement for this program?',
      'Yes, participants must be at least 16 years old to enroll in our medical weight loss program.',
    ],
    [
      'Do I have to commit to a long-term program?',
      'No long-term contract is required. Weight is a chronic condition, though, and many patients keep taking medication to maintain their results. Dr. Wadiwala will talk with you about how long treatment is likely to last.',
    ],
    [
      'Will my insurance cover the medication?',
      'Coverage varies by plan. Some plans cover weight loss medications, often with prior authorization; others do not. Our team will check your benefits and walk you through self-pay options if needed.',
    ],
    [
      'Can I use my HSA or FSA?',
      'Prescription medications used to treat a diagnosed medical condition, such as obesity, are generally eligible. Check with your plan administrator to confirm.',
    ],
    [
      'How is my medication chosen?',
      'Dr. Wadiwala weighs your health history, current medications, goals, preferences and coverage to recommend the option that fits you best.',
    ],
    [
      "What if I can't tolerate my medication?",
      'Side effects are most common while the dose is increasing and often ease with time. If they persist, Dr. Wadiwala can slow the increase, adjust your dose or switch you to a different medication.',
    ],
    [
      'What happens at my first consultation?',
      'Dr. Wadiwala reviews your medical history, current medications, past weight loss attempts and goals, and may order lab work. You will leave with a clear plan for your next steps. Visits are available in person or virtually.',
    ],
    [
      'What type of support can I expect during the program?',
      'You will receive continuous support from our medical team.',
    ],
    [
      'Are there any lifestyle changes I will need to make?',
      'Yes, while our program provides medication and support, successful weight loss often requires changes in mindset, diet, exercise, and overall lifestyle.',
    ],
    [
      'Can I take weight loss medication after bariatric surgery?',
      'Yes. Medication can help some patients who regain weight or reach a plateau after surgery. Dr. Wadiwala will advise whether it suits you.',
    ],
    [
      'What happens when I reach my goal weight?',
      'Dr. Wadiwala will work with you on a maintenance plan. That may mean continuing at a lower dose or tapering gradually, along with the habits that keep the weight off.',
    ],
    [
      'What makes your program different from others?',
      'Our program focuses exclusively on medical weight loss, providing expert guidance and a personalized approach. We offer a comprehensive range of services, including medications and dietary support.',
    ],
  ],
};

const es = {
  seoTitle: 'Pérdida de Peso Médica en Houston, TX | Semaglutida y Tirzepatida',
  description:
    'Pérdida de peso médica supervisada en Houston, TX con el Dr. Irfan Wadiwala — medicamentos GLP-1 como Wegovy y Zepbound, en persona o de forma virtual.',
  kicker: 'Pérdida de Peso Sin Cirugía',
  title: 'Pérdida de Peso Médica en Houston, TX',
  tagline: 'Pérdida de peso supervisada por un médico, con medicamentos recetados — en persona o virtual.',

  introHeading: 'Pérdida de Peso Supervisada por un Médico',
  intro: [
    'No todos necesitan cirugía para alcanzar un peso saludable. En Houston Surgical Weight Loss, el Dr. Irfan Wadiwala receta medicamentos para bajar de peso seguros, eficaces y aprobados por la FDA, y supervisa su progreso en cada paso.',
    'Los medicamentos GLP-1 más recientes, como la semaglutida (Wegovy®) y la tirzepatida (Zepbound®), reducen el apetito y le ayudan a sentirse satisfecho antes, y muchos pacientes bajan una cantidad importante de peso. Junto con orientación nutricional y consultas de seguimiento, pueden ser una gran alternativa a la cirugía — o un buen complemento después de ella.',
  ],
  getStarted: 'Comience Ahora',

  stepsHeading: 'Cómo Funciona',
  stepsIntro: 'Tres pasos sencillos, desde su primera consulta hasta su primera dosis.',
  steps: [
    {
      title: 'Consulta',
      body: 'Reúnase con el Dr. Wadiwala en persona o de forma virtual. Se revisan su historial médico, sus medicamentos actuales y sus metas para decidir si un medicamento es adecuado para usted.',
      action: { label: 'Solicite una Consulta', appt: true },
    },
    {
      title: 'Obtenga su Medicamento',
      body: 'Una vez que tenga su receta, nuestro equipo verifica su seguro y le ayuda con cualquier autorización previa. Si su plan no lo cubre, le explicaremos las opciones de pago particular.',
      action: { label: 'Vea Si Tiene Cobertura', href: '#insurance' },
    },
    {
      title: 'Comience el Tratamiento y el Seguimiento',
      body: 'Empiece su medicamento con una dosis baja. Las consultas de seguimiento permiten al Dr. Wadiwala revisar su progreso, controlar los efectos secundarios y ajustar su dosis.',
      action: { label: 'Llame al 281-653-6544', tel: true },
    },
  ],

  includedHeading: 'Qué Incluye',
  included: [
    {
      img: 'consult',
      title: 'Consulta Virtual',
      body: 'En su consulta virtual, el Dr. Wadiwala revisa su historial médico y sus metas de pérdida de peso, y le orienta hacia el medicamento adecuado y un plan personalizado.',
    },
    {
      img: 'prescription',
      title: 'Receta',
      body: 'Le recetamos el medicamento más adecuado para usted — de marca o genérico, inyectable u oral — teniendo en cuenta su salud, sus metas y su presupuesto.',
    },
    {
      img: 'insurance',
      title: 'Apoyo con el Seguro',
      body: 'Nuestro equipo verifica sus beneficios y se encarga de las autorizaciones previas, para que usted pueda concentrarse en alcanzar sus metas.',
    },
  ],

  medsHeading: 'Medicamentos para Bajar de Peso',
  medsIntro:
    'Según su salud, sus metas y su cobertura, el Dr. Wadiwala puede recomendarle uno de estos medicamentos aprobados por la FDA. Abra cualquiera para ver los detalles.',
  medsNote:
    'Esto es un resumen y no sustituye la información completa de prescripción ni el consejo médico. El Dr. Wadiwala revisará con usted los riesgos y beneficios de cualquier medicamento.',
  howTaken: 'Cómo se toma',
  moreDetails: 'Todos los detalles',
  labels: {
    benefits: 'Beneficios',
    sideEffects: 'Efectos secundarios comunes',
    avoid: 'Quién no debe tomarlo',
    warnings: 'Advertencias e interacciones',
  },
  meds: [
    {
      name: 'Wegovy®',
      generic: 'Semaglutida · inyección semanal',
      about:
        'Wegovy imita al GLP-1, una hormona natural que le indica al cerebro que está satisfecho y hace que el estómago se vacíe más despacio, de modo que las porciones pequeñas le llenan y los antojos disminuyen. Está aprobado por la FDA para el control del peso a largo plazo.',
      form: 'Una inyección semanal bajo la piel del abdomen, el muslo o la parte superior del brazo. La dosis empieza baja y aumenta cada cuatro semanas hasta una dosis de mantenimiento de 2.4 mg, para que su cuerpo se adapte.',
      benefits: [
        'Pérdida promedio de alrededor del 15% del peso corporal en 68 semanas en estudios clínicos',
        'Reduce el riesgo de infarto, derrame cerebral y muerte cardiovascular en adultos con enfermedad cardíaca y exceso de peso',
        'Puede mejorar el azúcar en la sangre, la presión arterial y el colesterol',
      ],
      sideEffects: [
        'Náuseas, diarrea, vómito o estreñimiento — por lo general más fuertes mientras aumenta la dosis',
        'Dolor de estómago, hinchazón o acidez',
        'Dolor de cabeza y cansancio',
      ],
      avoid: [
        'Antecedentes personales o familiares de cáncer medular de tiroides, o del síndrome de neoplasia endocrina múltiple tipo 2 (MEN 2)',
        'Embarazo, o planes de embarazo',
        'Una reacción alérgica grave previa a la semaglutida',
      ],
      warnings: [
        'Infórmenos de cualquier antecedente de pancreatitis, enfermedad de la vesícula, enfermedad renal o enfermedad ocular por diabetes',
        'El azúcar baja en la sangre es más probable si también usa insulina o una sulfonilurea',
        'Como hace más lenta la digestión, puede cambiar la absorción de otros medicamentos que se toman por boca',
      ],
    },
    {
      name: 'Ozempic®',
      generic: 'Semaglutida · inyección semanal',
      about:
        'Ozempic contiene el mismo medicamento que Wegovy, la semaglutida, en dosis aprobadas para adultos con diabetes tipo 2. Además de bajar el azúcar en la sangre, reduce el apetito, y muchos pacientes bajan de peso con él.',
      form: 'Una inyección semanal con una pluma precargada. La dosis empieza en 0.25 mg y aumenta poco a poco, hasta un máximo de 2 mg.',
      benefits: [
        'Mejora el control del azúcar en la sangre en la diabetes tipo 2',
        'Reduce el riesgo de infarto, derrame cerebral y muerte cardiovascular en adultos con diabetes tipo 2 y enfermedad cardíaca',
        'Ayuda a frenar la enfermedad renal en adultos con diabetes tipo 2 y enfermedad renal crónica',
      ],
      sideEffects: [
        'Náuseas, diarrea, vómito o estreñimiento — por lo general más fuertes mientras aumenta la dosis',
        'Dolor de estómago, hinchazón o acidez',
        'Dolor de cabeza y cansancio',
      ],
      avoid: [
        'Antecedentes personales o familiares de cáncer medular de tiroides, o del síndrome de neoplasia endocrina múltiple tipo 2 (MEN 2)',
        'Embarazo, o planes de embarazo',
        'Una reacción alérgica grave previa a la semaglutida',
      ],
      warnings: [
        'Los seguros por lo general cubren Ozempic para la diabetes tipo 2, no solo para bajar de peso',
        'Infórmenos de cualquier antecedente de pancreatitis, enfermedad de la vesícula, enfermedad renal o enfermedad ocular por diabetes',
        'El azúcar baja en la sangre es más probable si también usa insulina o una sulfonilurea',
      ],
    },
    {
      name: 'Mounjaro®',
      generic: 'Tirzepatida · inyección semanal',
      about:
        'Mounjaro actúa sobre dos hormonas que regulan el apetito y el azúcar en la sangre, el GIP y el GLP-1. Está aprobado por la FDA para adultos con diabetes tipo 2, y los pacientes que lo tomaron en estudios clínicos también bajaron mucho de peso.',
      form: 'Una inyección semanal. El tratamiento empieza en 2.5 mg y aumenta de 2.5 mg en 2.5 mg, no antes de cada cuatro semanas, hasta 15 mg.',
      benefits: [
        'Baja la A1C en la diabetes tipo 2',
        'Pérdida de peso importante para muchos pacientes',
        'Reduce el apetito y los antojos',
      ],
      sideEffects: [
        'Náuseas, diarrea, vómito o estreñimiento, sobre todo al aumentar la dosis',
        'Menos apetito, indigestión y dolor de estómago',
      ],
      avoid: [
        'Antecedentes personales o familiares de cáncer medular de tiroides, o del síndrome de neoplasia endocrina múltiple tipo 2 (MEN 2)',
        'Embarazo, o planes de embarazo',
        'Una reacción alérgica grave previa a la tirzepatida',
      ],
      warnings: [
        'Puede hacer que las pastillas anticonceptivas funcionen menos — use un método no oral o de respaldo durante 4 semanas después de empezar y después de cada aumento de dosis',
        'Infórmenos de cualquier antecedente de pancreatitis, enfermedad de la vesícula o enfermedad renal',
        'El azúcar baja en la sangre es más probable si también usa insulina o una sulfonilurea',
      ],
    },
    {
      name: 'Zepbound®',
      generic: 'Tirzepatida · inyección semanal',
      about:
        'Zepbound es tirzepatida — el mismo medicamento que Mounjaro — aprobada específicamente para el control del peso a largo plazo. También está aprobada para tratar la apnea obstructiva del sueño moderada a grave en adultos con obesidad.',
      form: 'Una inyección semanal con pluma o vial de una sola dosis, que empieza en 2.5 mg y aumenta cada cuatro semanas según la tolere, hasta 15 mg.',
      benefits: [
        'Pérdida promedio de alrededor del 15–21% del peso corporal en 72 semanas en estudios clínicos, según la dosis',
        'Mejora la apnea obstructiva del sueño en adultos con obesidad',
        'Puede mejorar la presión arterial, el colesterol y el azúcar en la sangre',
      ],
      sideEffects: [
        'Náuseas, diarrea, vómito o estreñimiento, sobre todo al aumentar la dosis',
        'Menos apetito, indigestión y dolor de estómago',
      ],
      avoid: [
        'Antecedentes personales o familiares de cáncer medular de tiroides, o del síndrome de neoplasia endocrina múltiple tipo 2 (MEN 2)',
        'Embarazo, o planes de embarazo',
        'Una reacción alérgica grave previa a la tirzepatida',
      ],
      warnings: [
        'Puede hacer que las pastillas anticonceptivas funcionen menos — use un método no oral o de respaldo durante 4 semanas después de empezar y después de cada aumento de dosis',
        'Infórmenos de cualquier antecedente de pancreatitis, enfermedad de la vesícula o enfermedad renal',
        'El azúcar baja en la sangre es más probable si también usa insulina o una sulfonilurea',
      ],
    },
    {
      name: 'Contrave®',
      generic: 'Naltrexona y bupropión · tableta',
      about:
        'Contrave combina dos medicamentos que actúan sobre los centros del hambre y de la recompensa del cerebro: el bupropión, que reduce el apetito, y la naltrexona, que ayuda a controlar los antojos. Está aprobado por la FDA para el control del peso a largo plazo.',
      form: 'Una tableta de liberación prolongada que se toma por boca. La dosis aumenta durante cuatro semanas hasta dos tabletas dos veces al día, y su progreso se revisa a las 12 semanas.',
      benefits: [
        'Una opción sin inyecciones',
        'Ayuda con los antojos y con comer por emociones',
        'Una alternativa para pacientes que no pueden tomar medicamentos GLP-1',
      ],
      sideEffects: [
        'Náuseas, estreñimiento, dolor de cabeza y vómito',
        'Mareo, dificultad para dormir y boca seca',
        'Aumento de la presión arterial o del ritmo cardíaco',
      ],
      avoid: [
        'Presión arterial alta no controlada',
        'Un trastorno convulsivo, o antecedentes de anorexia o bulimia',
        'Uso actual de opioides o de tratamiento para la dependencia de opioides',
        'Dejar de golpe el alcohol, las benzodiazepinas, los barbitúricos o los medicamentos anticonvulsivos',
        'Haber tomado un inhibidor de la MAO en los últimos 14 días, u otro medicamento que contenga bupropión',
        'Embarazo',
      ],
      warnings: [
        'El bupropión tiene una advertencia sobre pensamientos suicidas y cambios de ánimo — infórmenos de cualquier antecedente de depresión u otra condición de salud mental',
        'Interactúa con muchos antidepresivos y otros medicamentos, así que traiga una lista completa de lo que toma',
        'Evite o limite el alcohol mientras lo toma',
      ],
    },
    {
      name: 'Fentermina',
      generic: 'Supresor del apetito · cápsula o tableta',
      about:
        'La fentermina es uno de los medicamentos para bajar de peso con más años de uso. Es un estimulante que reduce el apetito y está aprobado para uso a corto plazo junto con dieta, ejercicio y cambios de hábitos.',
      form: 'Una cápsula o tableta que se toma una vez al día, por lo general en la mañana para evitar problemas para dormir. Es una sustancia controlada que se receta por periodos cortos con revisiones frecuentes.',
      benefits: [
        'Control del apetito de acción rápida',
        'Un medicamento oral de bajo costo',
        'Puede ayudar a arrancar la pérdida de peso',
      ],
      sideEffects: [
        'Boca seca, dificultad para dormir y estreñimiento',
        'Ritmo cardíaco más rápido o presión arterial más alta',
        'Inquietud, nerviosismo o mareo',
      ],
      avoid: [
        'Enfermedad cardíaca, incluidos antecedentes de infarto, derrame cerebral, ritmo cardíaco irregular o presión arterial alta no controlada',
        'Tiroides hiperactiva, o glaucoma',
        'Antecedentes de abuso de drogas',
        'Embarazo o lactancia',
        'Haber tomado un inhibidor de la MAO en los últimos 14 días',
      ],
      warnings: [
        'No la combine con otros medicamentos para bajar de peso, a menos que el Dr. Wadiwala los recete juntos',
        'Puede crear hábito — tómela exactamente como se la recetaron',
        'Puede afectar su estado de alerta, así que vea cómo le afecta antes de manejar',
      ],
    },
  ],

  ctaHeading: 'Su Camino de Pérdida de Peso Médica Empieza Hoy',
  ctaBody:
    'Su primera consulta es gratuita, presencial o virtual. Verificaremos su seguro y le ayudaremos a encontrar el medicamento adecuado — sin compromiso.',

  faqHeading: 'Preguntas Frecuentes sobre la Pérdida de Peso Médica',
  faq: [
    [
      '¿Quién es buen candidato para la pérdida de peso médica?',
      'Por lo general, adultos con un IMC de 30 o más, o de 27 o más con una condición relacionada con el peso, como diabetes tipo 2, presión arterial alta o apnea del sueño. El Dr. Wadiwala revisará su historial para confirmar si es adecuado para usted.',
    ],
    [
      '¿Hay una edad mínima para este programa?',
      'Sí, los participantes deben tener al menos 16 años para inscribirse en nuestro programa de pérdida de peso médica.',
    ],
    [
      '¿Tengo que comprometerme con un programa a largo plazo?',
      'No se requiere un contrato a largo plazo. Sin embargo, el peso es una condición crónica, y muchos pacientes siguen tomando el medicamento para mantener sus resultados. El Dr. Wadiwala hablará con usted sobre cuánto tiempo podría durar el tratamiento.',
    ],
    [
      '¿Mi seguro cubrirá el medicamento?',
      'La cobertura varía según el plan. Algunos planes cubren los medicamentos para bajar de peso, a menudo con autorización previa; otros no. Nuestro equipo verificará sus beneficios y, si hace falta, le explicará las opciones de pago particular.',
    ],
    [
      '¿Puedo usar mi cuenta HSA o FSA?',
      'Los medicamentos recetados para tratar una condición médica diagnosticada, como la obesidad, por lo general son elegibles. Confírmelo con el administrador de su plan.',
    ],
    [
      '¿Cómo se elige mi medicamento?',
      'El Dr. Wadiwala toma en cuenta su historial de salud, sus medicamentos actuales, sus metas, sus preferencias y su cobertura para recomendarle la opción que mejor le convenga.',
    ],
    [
      '¿Y si no tolero mi medicamento?',
      'Los efectos secundarios son más comunes mientras aumenta la dosis y a menudo mejoran con el tiempo. Si continúan, el Dr. Wadiwala puede hacer más lento el aumento, ajustar su dosis o cambiarle a otro medicamento.',
    ],
    [
      '¿Qué pasa en mi primera consulta?',
      'El Dr. Wadiwala revisa su historial médico, sus medicamentos actuales, sus intentos anteriores de bajar de peso y sus metas, y puede pedir análisis de laboratorio. Saldrá con un plan claro para sus próximos pasos. Las consultas pueden ser en persona o virtuales.',
    ],
    [
      '¿Qué tipo de apoyo puedo esperar durante el programa?',
      'Recibirá apoyo continuo de nuestro equipo médico.',
    ],
    [
      '¿Tendré que hacer cambios en mi estilo de vida?',
      'Sí. Aunque nuestro programa ofrece medicamentos y apoyo, una pérdida de peso exitosa a menudo requiere cambios de mentalidad, alimentación, ejercicio y estilo de vida en general.',
    ],
    [
      '¿Puedo tomar medicamentos para bajar de peso después de una cirugía bariátrica?',
      'Sí. El medicamento puede ayudar a algunos pacientes que recuperan peso o se estancan después de la cirugía. El Dr. Wadiwala le dirá si es adecuado para usted.',
    ],
    [
      '¿Qué pasa cuando alcanzo mi peso meta?',
      'El Dr. Wadiwala trabajará con usted en un plan de mantenimiento. Puede significar continuar con una dosis más baja o reducirla poco a poco, junto con los hábitos que le ayudan a no recuperar el peso.',
    ],
    [
      '¿Qué hace diferente a su programa?',
      'Nuestro programa se enfoca exclusivamente en la pérdida de peso médica, con orientación experta y un enfoque personalizado. Ofrecemos una amplia gama de servicios, incluidos medicamentos y apoyo nutricional.',
    ],
  ],
};

module.exports = { slug: 'medical-weight-loss', draft, reviewNotes, images, en, es };
