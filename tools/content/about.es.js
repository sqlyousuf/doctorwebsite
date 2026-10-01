/*
 * Spanish twin of tools/content/about.js.
 *
 * Hand-written rather than run through the string replacer in build-es.js:
 * this is prose, not chrome, and a biography mistranslated by find-and-replace
 * would be worse than no Spanish page at all.
 *
 * Structure must match the English page block for block — the parity check in
 * build-about.js compares heading, list and list-item counts and fails the
 * build if they diverge. That check exists to stop a Spanish page quietly
 * shipping with a section missing; it is not a licence to invent filler to
 * make the numbers agree.
 *
 * Proper nouns stay in English on purpose: hospital names, the names of the
 * professional bodies, and the degree titles are how a reader would find them
 * anywhere else.
 */

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';
const FAX = '281-807-9702';

const ul = (items) => `<ul class="prose-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const photoSlot = (label) => `<div class="photo-slot"><p><strong>Falta una fotografía:</strong> ${label}</p></div>`;

const translations = {
  'our-office': {
    title: 'Nuestra Oficina en Spring, Texas',
    tagline: 'Una sola práctica, un solo cirujano, y un equipo que le conoce por su nombre.',
    seoTitle: 'Nuestra Oficina en Spring, TX | Houston Surgical Weight Loss',
    description:
      'Houston Surgical Weight Loss está en 5220 FM 2920 Rd, Suite 120, Spring, TX 77388. Horario, cómo llegar, y por qué los pacientes nos eligen.',
    body: `
      <p class="intro">Houston Surgical Weight Loss ofrece los avances más recientes en cirugía para bajar de peso,
      para ayudar a los pacientes a alcanzar un peso saludable. El Dr. Wadiwala también realiza varios
      procedimientos de cirugía general, incluyendo extracción de vesícula, apendicectomías y reparación de hernias.
      La mayoría de nuestros procedimientos son ambulatorios y no requieren pasar la noche en el hospital.</p>

      <h2 class="display bar">Dónde Encontrarnos</h2>

      <div class="office-grid">
        <div class="office-card">
          <h3>Dirección</h3>
          <p>5220 FM 2920 Rd.<br>Suite 120<br>Spring, TX 77388</p>
        </div>
        <div class="office-card">
          <h3>Horario</h3>
          <p>Lunes – Viernes<br>8:00 am – 5:00 pm<br><span class="office-closed">Sábado y domingo: cerrado</span></p>
        </div>
        <div class="office-card">
          <h3>Contacto</h3>
          <p><a href="${PHONE_HREF}">${PHONE}</a><br>Fax ${FAX}</p>
        </div>
      </div>

      <div class="office-map">
        <iframe
          title="Mapa que muestra Houston Surgical Weight Loss en 5220 FM 2920 Rd, Suite 120, Spring, TX 77388"
          src="https://www.google.com/maps?q=5220+FM+2920+Rd+Suite+120+Spring+TX+77388&amp;output=embed"
          width="600" height="420" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <h2 class="display bar">Nuestro Edificio</h2>
      ${photoSlot('el exterior del edificio, para que los pacientes lo reconozcan al llegar')}
      ${photoSlot('la recepción y una sala de consulta')}

      <h2 class="display bar">Por Qué los Pacientes Eligen Houston Surgical Weight Loss</h2>
      ${ul([
        'Un cirujano certificado y con subespecialidad (fellowship), con dos décadas de experiencia.',
        'Experiencia en reparación laparoscópica de hernias, cirugía de vesícula, cirugía de colon y procedimientos bariátricos.',
        'Un enfoque en técnicas mínimamente invasivas, para mejores resultados y una recuperación más rápida.',
        'Planes de atención hechos a la medida de la salud y el estilo de vida de cada paciente.',
        'Consultas por telemedicina y seguimiento completo.',
      ])}

      <h2 class="display bar">Si Vive Fuera de la Ciudad</h2>
      <p>Atendemos a pacientes de mucho más allá de Spring, y ofrecemos visitas por video para quienes viven lejos.
      Su primera visita por video es gratuita, igual que lo sería una consulta presencial. Tendrá que venir en
      persona en algún momento antes de la cirugía, pero las primeras conversaciones no requieren el viaje.</p>

      <h2 class="display bar">Para Agendar una Consulta</h2>
      <p>Su primera consulta es gratuita, presencial o por video. Llame a la oficina al
      <a href="${PHONE_HREF}">${PHONE}</a> o solicite una cita en línea. Verificaremos su seguro y le explicaremos
      sus opciones, sin compromiso.</p>
    `,
  },

  'dr-wadiwala': {
    title: 'Dr. Irfan Wadiwala, DO',
    tagline: 'Cirujano bariátrico con subespecialidad y cirujano general certificado.',
    seoTitle: 'Dr. Irfan Wadiwala, DO | Cirujano Bariátrico en Houston, TX',
    description:
      'El Dr. Irfan Wadiwala es cirujano bariátrico con subespecialidad y cirujano general certificado en Spring, TX, con dos décadas de experiencia quirúrgica.',
    body: `
      <p class="intro">El Dr. Irfan Wadiwala es cirujano bariátrico con subespecialidad (fellowship) y cirujano
      general certificado. Ofrece cirugía avanzada para bajar de peso y tratamientos no quirúrgicos en Houston
      Surgical Weight Loss. Su compromiso es ayudar a los pacientes a lograr salud a largo plazo mediante una
      atención segura, eficaz y compasiva.</p>

      <h2 class="display bar">Experiencia</h2>
      <p>Con dos décadas de experiencia quirúrgica, el Dr. Wadiwala ha realizado miles de procedimientos bariátricos
      con excelentes resultados. Anteriormente fue Director de Cirugía Bariátrica en CyFair Medical Center, donde
      dirigió y amplió los servicios bariátricos mínimamente invasivos.</p>

      <h3>Su experiencia incluye</h3>
      ${ul([
        'Manga gástrica, bypass gástrico y cirugía bariátrica de revisión',
        'Técnicas laparoscópicas avanzadas y mínimamente invasivas',
        'Reparación de hernias, extracción de vesícula, apendicectomías, extirpación de quistes y otras cirugías generales',
      ])}

      <h3>Privilegios hospitalarios</h3>
      ${ul([
        'HCA Houston Healthcare Northwest',
        'St. Luke&rsquo;s Health – The Vintage Hospital',
        'Houston Methodist Willowbrook Hospital',
      ])}

      <h2 class="display bar">Formación Académica</h2>
      ${ul([
        'Fellowship en Cirugía Bariátrica Laparoscópica – Penn State Milton Hershey Medical Center',
        'Residencia en Cirugía General – Martin Luther King y Arrowhead Regional Medical Center, Los Ángeles',
        'Doctor en Medicina Osteopática, <em>summa cum laude</em> – Western University, Pomona, California',
        'Certificado por el consejo en Cirugía General',
      ])}

      <h2 class="display bar">Afiliaciones Profesionales</h2>
      ${ul([
        'American Society for Metabolic and Bariatric Surgery (ASMBS)',
        'Society of American Gastrointestinal and Endoscopic Surgeons (SAGES)',
        'Harris County Medical Society',
        'Texas Medical Association',
      ])}
      <p>Se mantiene al día con las nuevas técnicas asistiendo a congresos nacionales de cirugía bariátrica y
      perfeccionando continuamente su práctica quirúrgica.</p>

      <h2 class="display bar">Especialidades</h2>
      ${ul([
        'Cirugía bariátrica para bajar de peso',
        'Reparación de hernias',
        'Extracción de vesícula',
        'Apendicectomía',
        'Extirpación de quistes',
        'Cirugía general compleja',
      ])}

      <h2 class="display bar">Filosofía de Atención</h2>
      <p>El Dr. Wadiwala cree en tratar a la persona completa y no solamente la condición, y acompaña a sus
      pacientes en cada etapa del camino, desde la educación previa a la cirugía hasta el seguimiento a largo plazo.
      Fuera del trabajo disfruta del tiempo al aire libre con su familia, el baloncesto, la equitación y viajar.</p>
    `,
  },

  dietitian: {
    title: 'Florencia Pillow, RDN',
    tagline: 'Nutricionista Dietista Registrada bilingüe.',
    seoTitle: 'Florencia Pillow, RDN | Nutricionista, Houston Surgical Weight Loss',
    description:
      'Florencia Pillow, RDN, es la nutricionista bilingüe de Houston Surgical Weight Loss en Spring, TX, y acompaña a los pacientes antes y después de la cirugía para bajar de peso.',
    body: `
      <p class="intro">Florencia es Nutricionista Dietista Registrada (RDN) bilingüe, con seis años de experiencia
      ayudando a pacientes a construir hábitos más saludables, y con una verdadera vocación por marcar la diferencia
      en la lucha contra la obesidad. En Houston Surgical Weight Loss ofrece orientación nutricional en inglés y en
      español, para acompañar a los pacientes antes y después de la cirugía para bajar de peso.</p>

      <h2 class="display bar">Cómo Trabaja Florencia con los Pacientes</h2>
      <p>Florencia ayuda a los pacientes a entender cada etapa de su plan de nutrición, desde la preparación para la
      cirugía hasta alcanzar las metas de proteína e hidratación y adaptarse a hábitos de alimentación a largo plazo.
      Con un enfoque práctico y compasivo, trabaja con cada paciente para crear un plan que se ajuste a sus
      necesidades, sus preferencias y sus tradiciones culturales.</p>

      ${ul([
        'La preparación para la cirugía',
        'Las metas de proteína e hidratación',
        'La adaptación a hábitos de alimentación a largo plazo',
      ])}

      <h2 class="display bar">Nutrición en Inglés y en Español</h2>
      <p>Florencia atiende en cualquiera de los dos idiomas. La comida es una de las cosas más personales que un
      profesional de la salud le puede pedir cambiar, y es mucho más fácil hablarlo — y que le entiendan de verdad
      sobre lo que come en casa — en sus propias palabras.</p>

      <h2 class="display bar">Cómo Ver a Florencia</h2>
      <p>Las visitas de nutrición son parte del programa y no algo que usted tenga que buscar por su cuenta.
      Pregunte por Florencia en su consulta, o llame a la oficina al <a href="${PHONE_HREF}">${PHONE}</a>.</p>
    `,
  },
};

module.exports = { translations };
