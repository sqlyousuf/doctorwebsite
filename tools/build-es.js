#!/usr/bin/env node
/*
 * Generates es/index.html from index.html.
 *
 * index.html is the single source of truth for structure and layout; this
 * script only swaps copy and rewrites the relative asset paths for the extra
 * directory level. Run it after any content edit to the English page:
 *
 *     node tools/build-es.js
 *
 * Every entry below declares how many times its English string must appear.
 * If a string is missing, or appears a different number of times than
 * expected, the build throws instead of quietly shipping a half-translated
 * page — which is how these files normally drift out of sync.
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const srcPath = path.join(root, 'index.html');
const outDir = path.join(root, 'es');
const outPath = path.join(outDir, 'index.html');

/** [english, spanish, expectedOccurrences] */
const copy = [
  // ---- head ----
  ['<html lang="en">', '<html lang="es">', 1],
  [
    '<title>Houston Surgical Weight Loss | Bariatric Surgery &amp; Medical Weight Loss</title>',
    '<title>Houston Surgical Weight Loss | Cirugía Bariátrica y Pérdida de Peso Médica</title>',
    1,
  ],
  [
    'Houston Surgical Weight Loss, led by Dr. Irfan Wadiwala, offers bariatric surgery and medically supervised weight loss with a focus on long-term health and personalized care.',
    'Houston Surgical Weight Loss, dirigido por el Dr. Irfan Wadiwala, ofrece cirugía bariátrica y pérdida de peso con supervisión médica, con un enfoque en la salud a largo plazo y la atención personalizada.',
    1,
  ],

  // ---- primary nav (must run before the bare footer links below) ----
  ['<li><a href="#services">Procedures</a></li>', '<li><a href="#services">Procedimientos</a></li>', 1],
  ['<li><a href="#about">Our Surgeon</a></li>', '<li><a href="#about">Nuestro Cirujano</a></li>', 1],
  ['<li><a href="#process">How It Works</a></li>', '<li><a href="#process">Cómo Funciona</a></li>', 1],
  ['<li><a href="#resources">Resources</a></li>', '<li><a href="#resources">Recursos</a></li>', 1],
  ['<li><a href="#testimonials">Stories</a></li>', '<li><a href="#testimonials">Testimonios</a></li>', 1],
  ['<li><a href="#insurance">Insurance</a></li>', '<li><a href="#insurance">Seguro</a></li>', 1],
  ['<li><a href="#faq">FAQ</a></li>', '<li><a href="#faq">Preguntas</a></li>', 1],

  // ---- Patient Center dropdown ----
  // The destination pages themselves only exist in English so far, so the
  // Spanish menu keeps the same structure and labels its items in Spanish
  // while still linking across to ../patient-center/. When Spanish versions
  // of those pages are written, point these at es/patient-center/ instead.
  ['>Patient Center<svg class="sub-caret"', '>Centro del Paciente<svg class="sub-caret"', 1],
  ['>Self-Pay</a>', '>Pago Particular</a>', 1],
  ['>Financing Payment</a>', '>Financiamiento y Pagos</a>', 1],
  ['>Patient Forms</a>', '>Formularios del Paciente</a>', 1],
  ['>After Surgery</a>', '>Después de la Cirugía</a>', 1],
  ['>Vitamin Guide</a>', '>Guía de Vitaminas</a>', 1],
  ['>Bariatric Vitamins</a>', '>Vitaminas Bariátricas</a>', 1],
  ['>Vitamin E Store</a>', '>Tienda de Vitaminas</a>', 1],
  ['>Lantern</a>', '>Lantern</a>', 1],
  ['>Pre-Op and Post-Op</a>', '>Preoperatorio y Postoperatorio</a>', 1],
  ['>Exercise Regimens</a>', '>Rutinas de Ejercicio</a>', 1],
  ['>Discharge Instructions</a>', '>Instrucciones de Alta</a>', 1],
  ['>For Out of Town Patients</a>', '>Para Pacientes de Fuera</a>', 1],

  ['aria-label="Toggle menu"', 'aria-label="Abrir menú"', 1],
  ['>Request a Free Insurance Check</a>', '>Verificación de Seguro Gratuita</a>', 1],

  // ---- hero ----
  ['>Bariatric Surgery &amp; Medical Weight Loss</p>', '>Cirugía Bariátrica y Pérdida de Peso Médica</p>', 1],
  ['>Get Started Now</a>', '>Comience Ahora</a>', 1],
  ['<strong>4.9</strong> | 3,000+ patients treated', '<strong>4.9</strong> | más de 3,000 pacientes atendidos', 1],
  ['aria-label="Scroll to content"', 'aria-label="Desplazarse al contenido"', 1],

  // ---- why us ----
  ['Bariatric Surgery and<br>Medical Weight Loss', 'Cirugía Bariátrica y<br>Pérdida de Peso Médica', 1],
  ['Board-Certified, Fellowship-Trained Bariatric Surgeon', 'Cirujano bariátrico certificado y con subespecialidad', 1],
  ['Houston Location with In-Person &amp; Virtual Consultations', 'Consultas presenciales y virtuales en Houston', 1],
  ['Rated 4.9 / 5 Across 3,000+ Patients Treated', 'Calificación de 4.9 / 5 con más de 3,000 pacientes atendidos', 1],
  ['Most Major Insurance Plans Accepted', 'Aceptamos la mayoría de los seguros médicos', 1],
  ['18+ Years of Surgical Experience', 'Más de 18 años de experiencia quirúrgica', 2],
  ['Surgical and Medical Weight Loss with Proven Results', 'Pérdida de peso quirúrgica y médica con resultados comprobados', 1],

  // ---- lifestyle strip ----
  ['<figcaption>Powerful.</figcaption>', '<figcaption>Poderosa.</figcaption>', 1],
  ['<figcaption>Thriving.</figcaption>', '<figcaption>Plena.</figcaption>', 1],
  ['<figcaption>Confident.</figcaption>', '<figcaption>Segura.</figcaption>', 1],

  // ---- split intro ----
  ['Bariatric Surgical<br>Weight Loss', 'Pérdida de Peso<br>Quirúrgica', 1],
  [
    'Houston Surgical Weight Loss, with Dr. Irfan Wadiwala, offers a full range of <a href="#services">minimally invasive bariatric procedures</a> — including gastric sleeve, gastric bypass, gastric balloon, lap-band, and revision surgery — so you can choose the option that best fits your health history and your goals.',
    'Houston Surgical Weight Loss, con el Dr. Irfan Wadiwala, ofrece una gama completa de <a href="#services">procedimientos bariátricos mínimamente invasivos</a> — incluyendo manga gástrica, bypass gástrico, balón gástrico, banda gástrica y cirugía de revisión — para que usted elija la opción que mejor se adapte a su historial médico y a sus metas.',
    1,
  ],
  ['>Explore Procedures</a>', '>Ver Procedimientos</a>', 1],
  ['Medical<br>Weight Loss', 'Pérdida de Peso<br>Médica', 1],
  [
    'Not everyone needs surgery. Dr. Wadiwala and our nutrition team work closely with you to assess your medical history and weight-loss goals, then build a physician-supervised plan using nutrition planning, behavioral coaching, and medication support tailored to you.',
    'No todos necesitan cirugía. El Dr. Wadiwala y nuestro equipo de nutrición trabajan de cerca con usted para evaluar su historial médico y sus metas, y luego crean un plan supervisado por un médico con planificación nutricional, acompañamiento conductual y apoyo con medicamentos adaptado a usted.',
    1,
  ],
  ['>See How It Works</a>', '>Vea Cómo Funciona</a>', 1],

  // ---- procedures ----
  ['>Bariatric Surgical Options</h2>', '>Opciones de Cirugía Bariátrica</h2>', 1],
  ['<h3>Gastric Sleeve</h3>', '<h3>Manga Gástrica</h3>', 1],
  [
    'A laparoscopic procedure that reduces stomach size to limit food intake and reduce hunger hormones — one of the most commonly performed weight-loss surgeries today.',
    'Un procedimiento laparoscópico que reduce el tamaño del estómago para limitar la cantidad de alimento y disminuir las hormonas del hambre — una de las cirugías de pérdida de peso más realizadas hoy en día.',
    1,
  ],
  ['<h3>Gastric Bypass</h3>', '<h3>Bypass Gástrico</h3>', 1],
  [
    'Reroutes part of the digestive tract to reduce both the amount you can eat and the calories your body absorbs, often recommended for higher BMI or reflux-related cases.',
    'Redirige parte del tracto digestivo para reducir tanto la cantidad que puede comer como las calorías que su cuerpo absorbe; suele recomendarse en casos de IMC más alto o de reflujo.',
    1,
  ],
  ['<h3>Gastric Balloon</h3>', '<h3>Balón Gástrico</h3>', 1],
  [
    "A temporary, non-surgical balloon placed in the stomach to encourage portion control and jump-start weight loss for patients who aren't ready for surgery.",
    'Un balón temporal y no quirúrgico que se coloca en el estómago para favorecer el control de las porciones e impulsar la pérdida de peso en pacientes que aún no están listos para una cirugía.',
    1,
  ],
  ['<h3>Lap-Band</h3>', '<h3>Banda Gástrica</h3>', 1],
  [
    'An adjustable band placed around the upper stomach to control food intake, offering a reversible option with a shorter initial recovery.',
    'Una banda ajustable que se coloca alrededor de la parte superior del estómago para controlar la ingesta de alimentos; es una opción reversible con una recuperación inicial más corta.',
    1,
  ],
  ['<h3>Revision Surgery</h3>', '<h3>Cirugía de Revisión</h3>', 1],
  [
    'For patients who need adjustments or a second procedure after a prior weight-loss surgery, to help regain progress toward their goals.',
    'Para pacientes que necesitan ajustes o un segundo procedimiento después de una cirugía de pérdida de peso previa, para retomar el progreso hacia sus metas.',
    1,
  ],
  ['<h3>General Surgery</h3>', '<h3>Cirugía General</h3>', 1],
  [
    'Gallbladder removal, hernia repair, and appendectomy performed with the same minimally invasive, patient-first approach.',
    'Extirpación de vesícula biliar, reparación de hernias y apendicectomía, realizadas con el mismo enfoque mínimamente invasivo y centrado en el paciente.',
    1,
  ],
  ['>Learn More</a>', '>Más Información</a>', 1],

  // ---- about ----
  ['>Meet Your Surgeon</h2>', '>Conozca a Su Cirujano</h2>', 1],
  ['alt="Dr. Irfan Wadiwala, bariatric and general surgeon"', 'alt="Dr. Irfan Wadiwala, cirujano bariátrico y general"', 1],
  [
    'Dr. Wadiwala is a fellowship-trained bariatric and general surgeon with over 18 years of experience helping patients achieve meaningful, lasting weight loss. He founded Houston Surgical Weight Loss to give patients a practice that treats the whole person — not just the procedure — with honest guidance and steady support at every step, from the first consultation through long-term follow-up.',
    'El Dr. Wadiwala es cirujano bariátrico y general con subespecialidad y más de 18 años de experiencia ayudando a sus pacientes a lograr una pérdida de peso significativa y duradera. Fundó Houston Surgical Weight Loss para ofrecer una práctica que trata a la persona completa — no solo el procedimiento — con orientación honesta y apoyo constante en cada paso, desde la primera consulta hasta el seguimiento a largo plazo.',
    1,
  ],
  ['Board-Certified in General &amp; Bariatric Surgery', 'Certificado en Cirugía General y Bariátrica', 1],
  ['Fellowship-Trained in Minimally Invasive &amp; Bariatric Surgery', 'Subespecialidad en Cirugía Mínimamente Invasiva y Bariátrica', 1],
  ['Member, American Society for Metabolic &amp; Bariatric Surgery', 'Miembro de la American Society for Metabolic and Bariatric Surgery', 1],
  ['>Request a Consultation</a>', '>Solicite una Consulta</a>', 1],

  // ---- process ----
  ['>Your Path, In Four Steps</h2>', '>Su Camino, En Cuatro Pasos</h2>', 1],
  [
    "Every patient starts with a conversation. Here's what to expect from your first call to your first follow-up.",
    'Cada paciente comienza con una conversación. Esto es lo que puede esperar desde su primera llamada hasta su primera cita de seguimiento.',
    1,
  ],
  ['<h3>Free Consultation</h3>', '<h3>Consulta Gratuita</h3>', 1],
  [
    'Discuss your health history, goals, and options with our care team, in person or virtually.',
    'Converse sobre su historial médico, sus metas y sus opciones con nuestro equipo, en persona o de forma virtual.',
    1,
  ],
  ['<h3>Insurance Review</h3>', '<h3>Revisión del Seguro</h3>', 1],
  [
    'We verify your coverage and walk you through costs, financing, or self-pay options.',
    'Verificamos su cobertura y le explicamos los costos, el financiamiento y las opciones de pago particular.',
    1,
  ],
  ['<h3>Personalized Plan</h3>', '<h3>Plan Personalizado</h3>', 1],
  [
    'Dr. Wadiwala builds a surgical or medical weight-loss plan tailored to your goals.',
    'El Dr. Wadiwala crea un plan de pérdida de peso quirúrgico o médico adaptado a sus metas.',
    1,
  ],
  ['<h3>Ongoing Support</h3>', '<h3>Apoyo Continuo</h3>', 1],
  [
    'Regular follow-ups with our surgical, nutrition, and coaching team keep you on track.',
    'Las citas de seguimiento periódicas con nuestro equipo quirúrgico, de nutrición y de acompañamiento lo mantienen en el camino correcto.',
    1,
  ],

  // ---- testimonials ----
  ['>What Our Patients Are Saying</h2>', '>Lo Que Dicen Nuestros Pacientes</h2>', 1],
  ['<p class="t-sub">I finally feel comfortable in my own skin.</p>', '<p class="t-sub">Por fin me siento cómoda conmigo misma.</p>', 1],
  [
    "The whole team made me feel supported from day one. Eighteen months later I'm active, off my blood pressure medication, and finally comfortable in my own skin.",
    'Todo el equipo me hizo sentir apoyada desde el primer día. Dieciocho meses después estoy activa, ya no tomo medicamento para la presión y por fin me siento cómoda conmigo misma.',
    1,
  ],
  ['<span>Gastric Sleeve Patient</span>', '<span>Paciente de Manga Gástrica</span>', 1],
  ['<p class="t-sub">A plan I could actually stick to.</p>', '<p class="t-sub">Un plan que de verdad pude seguir.</p>', 1],
  [
    'I tried every diet before coming here. The medical weight loss program finally gave me a plan I could actually stick to, with real accountability.',
    'Probé todas las dietas antes de venir aquí. El programa de pérdida de peso médica por fin me dio un plan que pude seguir de verdad, con un acompañamiento real.',
    1,
  ],
  ['<span>Medical Weight Loss Patient</span>', '<span>Paciente de Pérdida de Peso Médica</span>', 1],
  ["<p class=\"t-sub\">I've never felt more informed about a decision.</p>", '<p class="t-sub">Nunca me había sentido tan informada al tomar una decisión.</p>', 1],
  [
    "Dr. Wadiwala took the time to answer every question, even the ones I was embarrassed to ask. I've never felt more informed about a decision.",
    'El Dr. Wadiwala se tomó el tiempo de responder cada pregunta, incluso las que me daba pena hacer. Nunca me había sentido tan informada al tomar una decisión.',
    1,
  ],
  ['<span>Gastric Bypass Patient</span>', '<span>Paciente de Bypass Gástrico</span>', 1],

  // ---- insurance ----
  ['>Insurance</h2>', '>Seguro Médico</h2>', 1],
  [
    'At Houston Surgical Weight Loss, we make it easy to check your insurance coverage for bariatric surgery. Our team offers a free insurance verification to see if your plan covers weight loss surgery and to review your estimated out-of-pocket costs.',
    'En Houston Surgical Weight Loss le facilitamos verificar la cobertura de su seguro para la cirugía bariátrica. Nuestro equipo ofrece una verificación gratuita para saber si su plan cubre la cirugía de pérdida de peso y para revisar sus costos estimados.',
    1,
  ],
  [
    'We accept most major commercial insurance, Medicare, and Medicaid plans to help more patients get the care they need. Our goal is to make the bariatric surgery process simple, clear, and stress-free.',
    'Aceptamos la mayoría de los seguros comerciales, Medicare y Medicaid para que más pacientes reciban la atención que necesitan. Nuestra meta es que el proceso de la cirugía bariátrica sea sencillo, claro y sin estrés.',
    1,
  ],
  ['Initial consultation &amp; evaluation', 'Consulta y evaluación inicial', 1],
  ['Pre-operative nutrition &amp; psych clearance', 'Autorización nutricional y psicológica preoperatoria', 1],
  ['Surgical procedure &amp; hospital stay', 'Procedimiento quirúrgico y estancia hospitalaria', 1],
  ['Post-op follow-up visits (12 months)', 'Citas de seguimiento postoperatorio (12 meses)', 1],
  ['>Insurance Check</a>', '>Verificar Mi Seguro</a>', 1],

  // ---- self-pay ----
  ['>Self-Pay</h2>', '>Pago Particular</h2>', 1],
  [
    'With self-pay bariatric surgery starting at just $6,999, Houston Surgical Weight Loss offers one of the most affordable gastric sleeve and gastric bypass programs in the region.',
    'Con cirugía bariátrica de pago particular desde $6,999, Houston Surgical Weight Loss ofrece uno de los programas de manga gástrica y bypass gástrico más accesibles de la región.',
    1,
  ],
  [
    "We accept cash, cashier's checks, debit cards, credit cards, and financing to help make weight loss surgery possible. Flexible monthly plans and reduced-cost programs are available for qualifying patients.",
    'Aceptamos efectivo, cheques de caja, tarjetas de débito, tarjetas de crédito y financiamiento para hacer posible su cirugía. Hay planes mensuales flexibles y programas de costo reducido disponibles para pacientes que califiquen.',
    1,
  ],
  ['<span class="price-label">Self-Pay Rates</span>', '<span class="price-label">Precios de Pago Particular</span>', 1],
  ['<span class="price-starting">Starting at</span>', '<span class="price-starting">Desde</span>', 1],
  ['alt="Operating room at Houston Surgical Weight Loss"', 'alt="Sala de operaciones de Houston Surgical Weight Loss"', 1],
  [
    '*Additional program fee applies to all surgeries, and includes your initial and final consultations with your surgeon, educational materials, nutrition guidance, and access to our support programs.',
    '*Se aplica una tarifa adicional de programa a todas las cirugías, que incluye sus consultas inicial y final con el cirujano, materiales educativos, orientación nutricional y acceso a nuestros programas de apoyo.',
    1,
  ],

  // ---- resources ----
  ['>Patient Resources</h2>', '>Recursos para Pacientes</h2>', 1],
  [
    'Weight-loss surgery is a lifelong journey. Our team stays with you at every stage, not just the day of surgery.',
    'La cirugía de pérdida de peso es un camino de por vida. Nuestro equipo lo acompaña en cada etapa, no solo el día de la cirugía.',
    1,
  ],
  ['<h3>Pre- &amp; Post-Op Guidance</h3>', '<h3>Guía Pre y Postoperatoria</h3>', 1],
  [
    'Step-by-step instructions before your procedure and clear discharge guidance to support a smooth recovery.',
    'Instrucciones paso a paso antes de su procedimiento e indicaciones claras de alta para una recuperación sin complicaciones.',
    1,
  ],
  ['<h3>Nutrition &amp; Exercise Coaching</h3>', '<h3>Acompañamiento en Nutrición y Ejercicio</h3>', 1],
  [
    'Personalized eating plans, vitamin and supplement guidance, and activity coaching to help your results last.',
    'Planes de alimentación personalizados, orientación sobre vitaminas y suplementos, y acompañamiento en actividad física para que sus resultados duren.',
    1,
  ],
  ['<h3>Out-of-Town Patients</h3>', '<h3>Pacientes de Fuera de la Ciudad</h3>', 1],
  [
    'Travel and lodging guidance for patients coming from outside the area, plus virtual visits before and after surgery.',
    'Orientación sobre viaje y hospedaje para pacientes que vienen de fuera del área, además de consultas virtuales antes y después de la cirugía.',
    1,
  ],

  // ---- virtual ----
  ['>See You (Virtually) Soon!</h2>', '>¡Nos Vemos (Virtualmente) Pronto!</h2>', 1],
  [
    'Houston Surgical Weight Loss welcomes patients from across Texas and beyond. With the click of a button you can start your weight loss journey virtually with Dr. Wadiwala and our care team, then stay engaged with a program that takes you from your initial consultation through to your final visit and long-term follow-up.',
    'Houston Surgical Weight Loss recibe pacientes de todo Texas y de más allá. Con un solo clic puede comenzar su camino de pérdida de peso de forma virtual con el Dr. Wadiwala y nuestro equipo, y continuar con un programa que lo acompaña desde su consulta inicial hasta su última cita y el seguimiento a largo plazo.',
    1,
  ],
  ['Board-Certified Bariatric Surgeon', 'Cirujano Bariátrico Certificado', 1],
  ['Fellowship-Trained Specialist', 'Especialista con Subespecialidad', 1],
  ['Most Major Insurance Accepted', 'Aceptamos la Mayoría de Seguros', 1],
  ['In-Person &amp; Virtual Consults', 'Consultas Presenciales y Virtuales', 1],

  // ---- guide ----
  ['>Download Your Weight Loss Success Guide Now!</h2>', '>¡Descargue Ahora Su Guía de Éxito para la Pérdida de Peso!</h2>', 1],
  [
    'Our free guide is packed with practical insights for pre- and post-surgery success, with nutrition and lifestyle guidance for lasting results — plus how to talk to your insurance provider about coverage.',
    'Nuestra guía gratuita está llena de consejos prácticos para tener éxito antes y después de la cirugía, con orientación sobre nutrición y estilo de vida para resultados duraderos — además de cómo hablar con su seguro sobre la cobertura.',
    1,
  ],
  [
    "We'd love to stay in touch and assist you further. We respect your privacy and will only send you relevant, valuable information to support your weight loss journey.",
    'Nos encantaría mantenernos en contacto y seguir ayudándole. Respetamos su privacidad y solo le enviaremos información relevante y útil para apoyar su camino de pérdida de peso.',
    1,
  ],
  [
    'By downloading this guide, you are opting in for email updates. You can unsubscribe at any time.',
    'Al descargar esta guía, usted acepta recibir novedades por correo electrónico. Puede darse de baja en cualquier momento.',
    1,
  ],
  ['placeholder="Name" aria-label="Name"', 'placeholder="Nombre" aria-label="Nombre"', 1],
  ['placeholder="Email" aria-label="Email address"', 'placeholder="Correo electrónico" aria-label="Correo electrónico"', 1],
  ['placeholder="Phone Number" aria-label="Phone number"', 'placeholder="Número de teléfono" aria-label="Número de teléfono"', 1],
  ['>Submit</button>', '>Enviar</button>', 1],

  // ---- faq ----
  ['>Frequently Asked Questions</h2>', '>Preguntas Frecuentes</h2>', 1],
  ['<summary>Am I a candidate for bariatric surgery?', '<summary>¿Soy candidato para la cirugía bariátrica?', 1],
  [
    'Candidates typically have a BMI of 35+ (or 30+ with related health conditions like type 2 diabetes or hypertension). A consultation with Dr. Wadiwala will confirm eligibility based on your full health history.',
    'Por lo general, los candidatos tienen un IMC de 35 o más (o de 30 o más con enfermedades relacionadas como diabetes tipo 2 o hipertensión). Una consulta con el Dr. Wadiwala confirmará si califica según su historial médico completo.',
    1,
  ],
  ['<summary>How much weight can I expect to lose?', '<summary>¿Cuánto peso puedo esperar perder?', 1],
  [
    'Results vary by procedure and individual factors, but many surgical patients lose 60-80% of their excess weight within the first 12-18 months with consistent follow-up care.',
    'Los resultados varían según el procedimiento y factores individuales, pero muchos pacientes quirúrgicos pierden entre el 60 % y el 80 % de su exceso de peso en los primeros 12 a 18 meses con un seguimiento constante.',
    1,
  ],
  ['<summary>Will my insurance cover the procedure?', '<summary>¿Mi seguro cubrirá el procedimiento?', 1],
  [
    'Many insurance plans cover bariatric surgery when medical necessity criteria are met. Our team verifies your specific benefits before you commit to any next steps.',
    'Muchos planes de seguro cubren la cirugía bariátrica cuando se cumplen los criterios de necesidad médica. Nuestro equipo verifica sus beneficios específicos antes de que usted se comprometa con ningún paso.',
    1,
  ],
  ["<summary>What if surgery isn't right for me?", '<summary>¿Y si la cirugía no es adecuada para mí?', 1],
  [
    'Our medical weight loss program offers a structured, physician-supervised alternative using nutrition planning, behavioral coaching, and medication support.',
    'Nuestro programa de pérdida de peso médica ofrece una alternativa estructurada y supervisada por un médico, con planificación nutricional, acompañamiento conductual y apoyo con medicamentos.',
    1,
  ],
  ['<summary>How do I know which procedure is right for me?', '<summary>¿Cómo sé cuál procedimiento es el adecuado para mí?', 1],
  [
    "Dr. Wadiwala reviews your health history, weight-loss goals, and any prior procedures during your consultation to recommend the option best suited to your situation — whether that's gastric sleeve, bypass, balloon, or another approach.",
    'Durante su consulta, el Dr. Wadiwala revisa su historial médico, sus metas de pérdida de peso y cualquier procedimiento previo para recomendarle la opción que mejor se adapte a su situación — ya sea manga gástrica, bypass, balón u otro enfoque.',
    1,
  ],
  ['<summary>What does recovery look like?', '<summary>¿Cómo es la recuperación?', 1],
  [
    'Most patients stay one to two nights in the hospital and return to light daily activity within one to two weeks, with a gradual return to normal activity over the following month. Your care team will walk you through a personalized recovery timeline.',
    'La mayoría de los pacientes permanece de una a dos noches en el hospital y retoma actividades ligeras en una o dos semanas, con un regreso gradual a la actividad normal durante el mes siguiente. Su equipo le explicará un plan de recuperación personalizado.',
    1,
  ],
  ['<summary>Do you see out-of-town or international patients?', '<summary>¿Atienden a pacientes de fuera de la ciudad o del extranjero?', 1],
  [
    'Yes. We offer virtual consultations and can coordinate travel and lodging guidance for patients traveling from outside the area for surgery.',
    'Sí. Ofrecemos consultas virtuales y podemos coordinar orientación sobre viaje y hospedaje para pacientes que vienen de fuera del área para su cirugía.',
    1,
  ],

  // ---- contact ----
  ['>Ready To Take The First Step?</h2>', '>¿Listo Para Dar El Primer Paso?</h2>', 1],
  [
    'Schedule a free, no-obligation consultation with our team to discuss your options and find out exactly what your insurance covers.',
    'Agende una consulta gratuita y sin compromiso con nuestro equipo para conversar sobre sus opciones y saber exactamente qué cubre su seguro.',
    1,
  ],
  ['Call (555) 210-4488</a>', 'Llame al (555) 210-4488</a>', 1],
  ['Email Our Team</a>', 'Escríbanos por Correo</a>', 1],

  // ---- footer ----
  ['<h4>Houston Surgical Weight Loss</h4>', '<h4>Houston Surgical Weight Loss</h4>', 1],
  ['4.9 of 5 &middot; 3,000+ patients treated', '4.9 de 5 &middot; más de 3,000 pacientes atendidos', 1],
  ['<a href="#services">Procedures</a>', '<a href="#services">Procedimientos</a>', 1],
  ['<a href="#about">Our Surgeon</a>', '<a href="#about">Nuestro Cirujano</a>', 1],
  ['<a href="#process">How It Works</a>', '<a href="#process">Cómo Funciona</a>', 1],
  ['<a href="#resources">Resources</a>', '<a href="#resources">Recursos</a>', 1],
  ['<a href="#insurance">Insurance</a>', '<a href="#insurance">Seguro</a>', 1],
  [
    '<a href="patient-center/self-pay.html">Patient Center</a>',
    '<a href="patient-center/self-pay.html">Centro del Paciente</a>',
    1,
  ],
  ['<a href="#faq">FAQ</a>', '<a href="#faq">Preguntas</a>', 1],
  ['&copy; 2026 Houston Surgical Weight Loss. All rights reserved.', '&copy; 2026 Houston Surgical Weight Loss. Todos los derechos reservados.', 1],
  ['<a href="#">Privacy Policy</a>', '<a href="#">Política de Privacidad</a>', 1],
  ['<a href="#">Terms of Use</a>', '<a href="#">Términos de Uso</a>', 1],

  // ---- floating CTA ----
  ['>Are You A Candidate?</a>', '>¿Es Usted Candidato?</a>', 1],

  // ---- language switcher: swap which side is active, and step up a level ----
  ['aria-label="Language"', 'aria-label="Idioma"', 1],
  // Language names always appear in their own language on both pages, so only
  // the hrefs and the active state change here.
  [
    '<a href="index.html" hreflang="en" lang="en" class="is-active" aria-current="true"><svg class="flag" aria-hidden="true"><use href="#flag-us"/></svg>English</a>\n  <a href="es/index.html" hreflang="es" lang="es"><svg class="flag" aria-hidden="true"><use href="#flag-es"/></svg>Español</a>',
    '<a href="../index.html" hreflang="en" lang="en"><svg class="flag" aria-hidden="true"><use href="#flag-us"/></svg>English</a>\n  <a href="index.html" hreflang="es" lang="es" class="is-active" aria-current="true"><svg class="flag" aria-hidden="true"><use href="#flag-es"/></svg>Español</a>',
    1,
  ],

  // ---- hreflang + asset paths for the extra directory level ----
  ['<link rel="alternate" hreflang="en" href="index.html">', '<link rel="alternate" hreflang="en" href="../index.html">', 1],
  ['<link rel="alternate" hreflang="es" href="es/index.html">', '<link rel="alternate" hreflang="es" href="index.html">', 1],
  ['<link rel="alternate" hreflang="x-default" href="index.html">', '<link rel="alternate" hreflang="x-default" href="../index.html">', 1],
  ['href="media/', 'href="../media/', 2],
  ['href="patient-center/', 'href="../patient-center/', 12],
  ['href="css/', 'href="../css/', 1],
  ['src="js/', 'src="../js/', 1],
  ['src="media/', 'src="../media/', 6],
  ['poster="media/', 'poster="../media/', 1],
];

// Normalised to LF so the multi-line entries still match if git checks the
// file out with CRLF line endings on Windows.
let html = fs.readFileSync(srcPath, 'utf8').replace(/\r\n/g, '\n');
const problems = [];

for (const [en, es, expected] of copy) {
  const found = html.split(en).length - 1;
  if (found !== expected) {
    problems.push(`  expected ${expected}x, found ${found}x: ${JSON.stringify(en.slice(0, 70))}`);
    continue;
  }
  html = html.split(en).join(es);
}

if (problems.length) {
  console.error(`build-es: ${problems.length} string(s) did not match index.html:`);
  console.error(problems.join('\n'));
  console.error('\nindex.html changed without tools/build-es.js being updated. Fix the entries above and re-run.');
  process.exit(1);
}

html = html.replace(
  '<link rel="stylesheet" href="../css/style.css">',
  '<link rel="stylesheet" href="../css/style.css">\n<!-- Generated by tools/build-es.js from ../index.html — do not edit by hand. -->'
);

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, html, 'utf8');

const leftovers = ['Gastric Sleeve', 'Frequently Asked', 'Insurance Check', 'Are You A Candidate'].filter((s) =>
  html.includes(s)
);
if (leftovers.length) {
  console.error(`build-es: untranslated copy still present: ${leftovers.join(', ')}`);
  process.exit(1);
}

console.log(`build-es: wrote ${path.relative(root, outPath)} (${copy.length} strings translated)`);
