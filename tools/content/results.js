/*
 * The Real Results page: before-and-after photos and patients' own stories.
 *
 * Photos are the practice's, from the "before and after" folder, resized and
 * stripped of metadata into media/results/ (Julie's pair is cropped to her
 * alone). Each patient is listed by first name only.
 *
 * A story is kept exactly as the patient wrote it, typos included, in `story`
 * with its language in `lang`. Its translation into the other language sits
 * in `translation`, and the page shows a reader the version in their own
 * language with a way to open the original. `headline` and `result` are taken
 * from the patient's own words, never added to them.
 *
 * A photo entry is either a before/after pair or, for the three patients who
 * sent one picture with both halves in it, a single `combined` image with the
 * before on the left. `extra` photos only appear in the full-size viewer.
 */

const pair = (before, after) => ({ before, after });
const combined = (file) => ({ combined: file });

const patients = [
  {
    slug: 'freddy',
    name: 'Freddy',
    photos: [pair('freddy-before', 'freddy-after')],
    extra: [{ file: 'freddy-before-2', when: 'before' }],
    result: { en: ['194 lbs', 'lost in 15 months'], es: ['194 libras', 'menos en 15 meses'] },
    lang: 'es',
    headline: {
      es: 'No solo bajé de peso: recuperé mi salud, mi energía y mi vida.',
      en: 'I didn’t just lose weight: I got back my health, my energy and my life.',
    },
    story: [
      'De 388 a 194 libras en solo 15 meses.',
      'A mis 56 años, el 18 de junio de 2025 tomé la mejor decisión de mi vida: ponerme en manos del Dr. Irfan Wadiwala. Hoy puedo decir que no solo bajé de peso: recuperé mi salud, mi energía y mi vida. Cada paso de este proceso estuvo acompañado por un equipo extraordinario cuya dedicación marcó la diferencia. Su atención postoperatoria ha sido impecable, cuidando cada detalle con una empatía y un profesionalismo que nunca olvidaré. Mi gratitud es profunda.',
      'Gracias de corazón al Dr. Wadiwala y a todo su personal por guiarme con sabiduría, paciencia y cariño en este camino. Este logro no es el final.',
      'Es solo el comienzo… y lo mejor está por llegar.',
    ],
    translation: [
      'From 388 to 194 pounds in just 15 months.',
      'At 56, on June 18, 2025, I made the best decision of my life: putting myself in Dr. Irfan Wadiwala’s hands. Today I can say that I didn’t just lose weight: I got back my health, my energy and my life. Every step of this process was guided by an extraordinary team whose dedication made the difference. Their post-operative care has been impeccable, attending to every detail with an empathy and professionalism I will never forget. My gratitude runs deep.',
      'Heartfelt thanks to Dr. Wadiwala and all of his staff for guiding me along this path with wisdom, patience and kindness. This achievement is not the end.',
      'It is only the beginning… and the best is yet to come.',
    ],
  },
  {
    slug: 'ralph',
    name: 'Ralph',
    procedure: 'sleeve',
    photos: [pair('ralph-before', 'ralph-after')],
    result: { en: ['106 lbs', 'lost in about 4½ months'], es: ['106 libras', 'menos en unos 4½ meses'] },
    lang: 'en',
    headline: {
      en: 'This surgery has truly saved and changed my life.',
      es: 'Esta cirugía de verdad me salvó y me cambió la vida.',
    },
    story: [
      'Dear Dr. Wadiwala,',
      'I wanted to give you an update on my progress and let you know how happy I am with my decision. I officially started my Journey on October 29, 2014 with the two week pre-op liquid diet. I had my Sleeve Surgery on November 12, 2014 and approximately 4.5 months later I have lost a total of 106 pounds and still losing. This surgery has truly saved and changed my life, and given me a second chance to live again. Until you lose the weight you do not realize how much it is holding you back, my energy is through the roof. The ultimate goal is to be healthy and comfortable and stop serious health problems down the road. When I started I weighed 339 pounds and as I type this I am at 233 pounds, and my BMI has dropped from 50.1 to 34.5. I have gone from a 4x shirt to a Large Also, I wanted to thank you for being such a compassionate doctor. When I visit you I can see in you eyes that you truly enjoy changing our lives for the better and giving us the tool to make the changes. I do want people to understand that you give us the tool to be successful, but that it is up to us on how we use it. This also is a big decision and comes with great sacrifice, but huge reward as well.',
    ],
    translation: [
      'Estimado Dr. Wadiwala:',
      'Quería contarle cómo voy y decirle lo feliz que estoy con mi decisión. Comencé oficialmente mi camino el 29 de octubre de 2014 con la dieta líquida preoperatoria de dos semanas. Me hicieron la cirugía de manga el 12 de noviembre de 2014 y, unos 4.5 meses después, he bajado un total de 106 libras y sigo bajando. Esta cirugía de verdad me salvó y me cambió la vida, y me dio una segunda oportunidad para volver a vivir. Hasta que uno baja de peso no se da cuenta de cuánto lo está frenando; mi energía está por las nubes. La meta final es estar sano y cómodo y evitar problemas de salud graves en el futuro. Cuando empecé pesaba 339 libras y, mientras escribo esto, peso 233, y mi IMC bajó de 50.1 a 34.5. Pasé de una camisa 4X a una talla L. También quería agradecerle por ser un médico tan compasivo. Cuando lo visito, puedo ver en sus ojos que de verdad disfruta cambiar nuestras vidas para bien y darnos la herramienta para hacer los cambios. Sí quiero que la gente entienda que usted nos da la herramienta para tener éxito, pero que depende de nosotros cómo la usamos. Además, es una decisión importante que implica un gran sacrificio, pero también una enorme recompensa.',
    ],
  },
  {
    slug: 'sherita',
    name: 'Sherita',
    photos: [pair('sherita-before', 'sherita-after')],
    lang: 'en',
    headline: {
      en: 'Overall my quality of life is so much better.',
      es: 'En general, mi calidad de vida es mucho mejor.',
    },
    story: [
      'Before surgery my life was very difficult. I was so extremely overweight that walking up stairs was a chore and the pain in my knees was unbearable. I was at a point where I did not want to look in the mirror and dealt with depression from being overweight. My blood pressure has decreased and sleep apnea has improved, also I no longer have to take medication for high cholesterol. Since my weight loss surgery my self esteem and energy levels are so high. I now enjoy shopping for a body that I have not seen in 20 years. The surgery it self wasn’t difficult physically but mentally a little more challenging but well worth it. Overall my quality of life is so much better and I’m even excited about working out these days. I am very appreciative of Dr. Wadiwala and his staff and I think its awesome to have a surgeon with such a great bedside manner.',
    ],
    translation: [
      'Antes de la cirugía mi vida era muy difícil. Tenía tanto sobrepeso que subir escaleras era una carga y el dolor de rodillas era insoportable. Llegué a un punto en que no quería verme al espejo y sufría de depresión por el sobrepeso. Mi presión arterial bajó, la apnea del sueño mejoró y ya no tengo que tomar medicamento para el colesterol alto. Desde mi cirugía para bajar de peso, mi autoestima y mi energía están por las nubes. Ahora disfruto ir de compras para un cuerpo que no veía desde hace 20 años. La cirugía en sí no fue difícil físicamente; mentalmente fue un poco más desafiante, pero valió mucho la pena. En general, mi calidad de vida es mucho mejor y hasta me emociona hacer ejercicio. Estoy muy agradecida con el Dr. Wadiwala y su personal, y me parece increíble tener un cirujano con un trato tan cálido con sus pacientes.',
    ],
  },
  {
    slug: 'alicia',
    name: 'Alicia',
    procedure: 'sleeve',
    photos: [pair('alicia-before', 'alicia-after')],
    lang: 'en',
    headline: { en: 'I am a whole new me and I love it!', es: '¡Soy una persona completamente nueva y me encanta!' },
    story: [
      'Before having the gastric sleeve I was always tired and wasn’t able to do many activities because of my weight and back pain. Now I have energy and feel full of life. I am able to take my daughter to parks and actually interact with her and not feel like I need a break in between. I am a whole new me and I love it!',
      'Thank you Dr. Wadiwala for helping to enjoy life again.',
    ],
    translation: [
      'Antes de la manga gástrica siempre estaba cansada y no podía hacer muchas actividades por mi peso y el dolor de espalda. Ahora tengo energía y me siento llena de vida. Puedo llevar a mi hija al parque y de verdad jugar con ella sin sentir que necesito un descanso a cada rato. ¡Soy una persona completamente nueva y me encanta!',
      'Gracias, Dr. Wadiwala, por ayudarme a disfrutar la vida otra vez.',
    ],
  },
  {
    slug: 'veronica',
    name: 'Veronica',
    procedure: 'sleeve',
    photos: [pair('veronica-before', 'veronica-after')],
    lang: 'en',
    headline: {
      en: 'I feel like I am capable of doing anything I set my mind too.',
      es: 'Siento que soy capaz de lograr cualquier cosa que me proponga.',
    },
    story: [
      'I am full of confidence, I feel beautiful and I feel like I am capable of doing anything I set my mind too. Before my bariatric sleeve I was extremely shy and will always second guess my self. I never thought I could enjoy my self and my life as much as I do now.',
      'The gastric sleeve has been the most important and fulfilling choice I have done.',
      'Thank you Dr. Wadiwala!!!!!',
    ],
    translation: [
      'Estoy llena de confianza, me siento bonita y siento que soy capaz de lograr cualquier cosa que me proponga. Antes de mi manga bariátrica era extremadamente tímida y siempre dudaba de mí misma. Nunca pensé que podría disfrutarme a mí misma y a mi vida tanto como ahora.',
      'La manga gástrica ha sido la decisión más importante y gratificante que he tomado.',
      '¡Gracias, Dr. Wadiwala!!!!!',
    ],
  },
  {
    slug: 'jennifer',
    name: 'Jennifer C.',
    procedure: 'sleeve',
    photos: [combined('jennifer-combined')],
    lang: 'es',
    headline: { es: 'Siempre hubo miedos, pero aún así lo hice… y nunca me rendí.', en: 'There were always fears, but I did it anyway… and I never gave up.' },
    story: [
      'La manga gastrica para mi a sido un proceso de maravilloso, una montaña rusa de emociones porque sin duda elevó muchísimo más mi seguridad, siempre hubo miedos pero aún así lo hice y con la mejor actitud y nunca me rendí, cuando tomen la decisión y lo hagan! Ya no miren la báscula; cuiden sus hábitos que siempre pregunten hacen las cosas bien los resultados serán los mejores sin margen de error.',
    ],
    translation: [
      'For me the gastric sleeve has been a wonderful process, a roller coaster of emotions, because without a doubt it raised my confidence so much more. There were always fears, but I did it anyway, with the best attitude, and I never gave up. When you make the decision, do it! Stop looking at the scale; take care of your habits, always ask questions, do things right, and the results will be the best, with no margin for error.',
    ],
  },
  {
    slug: 'nandie',
    name: 'Nandie',
    photos: [pair('nandie-before', 'nandie-after')],
    result: { en: ['86 lbs', 'lost in one year'], es: ['86 libras', 'menos en un año'] },
    lang: 'en',
    headline: { en: 'What a difference a year makes!', es: '¡Qué diferencia hace un año!' },
    story: ['What a difference a year makes! 86lbs lighter, and my self-esteem higher!'],
    translation: ['¡Qué diferencia hace un año! ¡86 libras menos y mi autoestima más alta!'],
  },
  {
    slug: 'julie',
    name: 'Julie',
    photos: [pair('julie-before', 'julie-after')],
    result: { en: ['32 lbs', 'and 5 dress sizes'], es: ['32 libras', 'y 5 tallas menos'] },
    lang: 'en',
    headline: { en: 'I didn’t do it for vanity, I did it for my health.', es: 'No lo hice por vanidad, lo hice por mi salud.' },
    story: [
      'So happy that I chose to have gastric surgery. I didn’t do it for vanity, I did it for my health, and to correct a hernia. I didn’t want to end up on medications later on in life, like my mother. She has diabetes, amongst many other issues. I am happy that I made a lifestyle change. 5 dress sizes and 32 lbs since 4/14/14. I’m glad that I put myself first and I will be healthy, not only for myself, but for my family.',
    ],
    translation: [
      'Estoy muy feliz de haber elegido la cirugía gástrica. No lo hice por vanidad, lo hice por mi salud y para corregir una hernia. No quería terminar tomando medicamentos más adelante, como mi mamá. Ella tiene diabetes, entre muchos otros problemas. Me alegra haber cambiado mi estilo de vida. 5 tallas de vestido y 32 libras menos desde el 14/4/14. Me alegra haberme puesto en primer lugar; voy a estar sana, no solo por mí, sino por mi familia.',
    ],
  },

  // Photos only.
  { slug: 'jennifer-2', name: 'Jennifer', photos: [combined('jennifer-2-combined')] },
  { slug: 'emely', name: 'Emely', photos: [pair('emely-before', 'emely-after'), pair('emely-before-side', 'emely-after-side')] },
  { slug: 'jean-carlos', name: 'Jean Carlos', photos: [combined('jean-carlos-combined')] },
  { slug: 'oriana', name: 'Oriana', photos: [pair('oriana-before', 'oriana-after')] },
  { slug: 'lisleth', name: 'Lisleth', photos: [pair('lisleth-before', 'lisleth-after'), pair('lisleth-before-2', 'lisleth-after-2')] },
  { slug: 'maria', name: 'Maria', photos: [combined('maria-combined')] },
  { slug: 'maydiel', name: 'Maydiel', photos: [pair('maydiel-before', 'maydiel-after'), pair('maydiel-before-2', 'maydiel-after-2')] },
  { slug: 'christina', name: 'Christina', photos: [pair('christina-before', 'christina-after')] },
  { slug: 'joely', name: 'Joely', photos: [pair('joely-before', 'joely-after')] },
  { slug: 'deb', name: 'Deb', photos: [pair('deb-before', 'deb-after')] },
  { slug: 'tammy', name: 'Tammy', photos: [pair('tammy-before', 'tammy-after')] },
  { slug: 'jessica', name: 'Jessica', photos: [pair('jessica-before', 'jessica-after')] },
];

/** Page copy, per language. */
const copy = {
  en: {
    seoTitle: 'Before &amp; After Weight Loss Surgery Results | Houston Surgical Weight Loss',
    description:
      'Real before-and-after photos and stories from gastric sleeve and bariatric surgery patients of Dr. Irfan Wadiwala at Houston Surgical Weight Loss.',
    kicker: 'Patient Results',
    title: 'Real Patients. Real Results.',
    tagline: 'Before-and-after photos and stories from our patients, in their own words.',
    intro:
      'Every photo on this page belongs to a real patient of Dr. Wadiwala. They are shared exactly as the patients sent them: no filters, no retouching. Tap any photo to see it full size.',
    disclaimer:
      '<strong>Individual results vary.</strong> How much weight someone loses, and how quickly, depends on the procedure, their health and their commitment to diet, exercise and follow-up care. These results are not a guarantee of yours.',
    jumpStories: 'Their stories',
    jumpGallery: 'More transformations',
    storiesHeading: 'In Their Own Words',
    galleryHeading: 'More Transformations',
    galleryIntro: 'More of our patients, before and after.',
    before: 'Before',
    after: 'After',
    beforeAlt: (n) => `${n} before weight loss surgery`,
    afterAlt: (n) => `${n} after weight loss surgery`,
    morePhotos: (n) => `+${n} more photo${n === 1 ? '' : 's'}`,
    viewPhotos: 'View photos',
    readMore: 'Read the full story',
    original: { es: 'Translated from Spanish. Read the original', en: 'Read the original' },
    procedures: { sleeve: 'Gastric Sleeve', bariatricGeneral: 'Bariatric &amp; General Surgery' },
    jumpReviews: 'Google reviews',
    reviewsHeading: 'What Our Patients Say on Google',
    reviewsIntro: 'Reviews our patients have left on Google, word for word. Every one is five stars.',
    googleLabel: 'Google Review',
    starsLabel: '5 out of 5 stars',
    readAll: 'Read all our reviews on Google',
    viewer: { label: 'Photo viewer', close: 'Close', prev: 'Previous photo', next: 'Next photo', of: 'of' },
    ctaHeading: 'Your Results Start With a Conversation',
    ctaBody: 'Your first consultation is free, in person or virtual. We will check your insurance and talk you through your options, with no obligation.',
  },
  es: {
    seoTitle: 'Resultados Antes y Después de la Cirugía Bariátrica | Houston Surgical Weight Loss',
    description:
      'Fotos reales de antes y después e historias de pacientes de manga gástrica y cirugía bariátrica del Dr. Irfan Wadiwala en Houston Surgical Weight Loss.',
    kicker: 'Resultados de Pacientes',
    title: 'Pacientes Reales. Resultados Reales.',
    tagline: 'Fotos de antes y después e historias de nuestros pacientes, en sus propias palabras.',
    intro:
      'Cada foto de esta página es de un paciente real del Dr. Wadiwala. Se muestran tal como los pacientes las enviaron: sin filtros ni retoques. Toque cualquier foto para verla en tamaño completo.',
    disclaimer:
      '<strong>Los resultados varían de una persona a otra.</strong> Cuánto peso baja alguien, y qué tan rápido, depende del procedimiento, de su salud y de su compromiso con la dieta, el ejercicio y el seguimiento. Estos resultados no garantizan los suyos.',
    jumpStories: 'Sus historias',
    jumpGallery: 'Más transformaciones',
    storiesHeading: 'En Sus Propias Palabras',
    galleryHeading: 'Más Transformaciones',
    galleryIntro: 'Más de nuestros pacientes, antes y después.',
    before: 'Antes',
    after: 'Después',
    beforeAlt: (n) => `${n} antes de la cirugía para bajar de peso`,
    afterAlt: (n) => `${n} después de la cirugía para bajar de peso`,
    morePhotos: (n) => `+${n} foto${n === 1 ? '' : 's'} más`,
    viewPhotos: 'Ver fotos',
    readMore: 'Leer la historia completa',
    original: { en: 'Traducido del inglés. Leer el original', es: 'Leer el original' },
    procedures: { sleeve: 'Manga Gástrica', bariatricGeneral: 'Cirugía Bariátrica y General' },
    jumpReviews: 'Reseñas de Google',
    reviewsHeading: 'Lo Que Dicen Nuestros Pacientes en Google',
    reviewsIntro: 'Reseñas que nuestros pacientes han dejado en Google, palabra por palabra y en su idioma original. Todas son de cinco estrellas.',
    googleLabel: 'Reseña de Google',
    starsLabel: '5 de 5 estrellas',
    readAll: 'Lea todas nuestras reseñas en Google',
    viewer: { label: 'Visor de fotos', close: 'Cerrar', prev: 'Foto anterior', next: 'Foto siguiente', of: 'de' },
    ctaHeading: 'Sus Resultados Empiezan con una Conversación',
    ctaBody: 'Su primera consulta es gratuita, presencial o virtual. Verificaremos su seguro y le explicaremos sus opciones, sin compromiso.',
  },
};

module.exports = { patients, copy };
