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
    title: 'Nuestra Nutricionista',
    tagline: 'Apoyo nutricional antes de la cirugía, y por todo el tiempo que lo necesite después.',
    seoTitle: 'Nuestra Nutricionista | Houston Surgical Weight Loss',
    description:
      'Conozca a Flo, la nutricionista de Houston Surgical Weight Loss en Spring, TX, que acompaña a los pacientes antes y después de la cirugía bariátrica.',
    reviewNotes: [
      'La fotografía de Flo — un retrato vertical, en el tamaño más grande que tenga.',
      'Su biografía: formación, credenciales (RD / LD), y cuánto tiempo lleva trabajando con pacientes bariátricos.',
      'Su nombre completo, y las credenciales que quiere que aparezcan después.',
      'Confirmar qué cubre realmente. La lista de abajo es una suposición razonable de la práctica bariátrica habitual, no son sus palabras.',
    ],
    body: `
      <p class="intro">La cirugía es solo una parte del trabajo. Lo que come después — y cómo reconstruye el hábito
      de comer — es la parte que sostiene el resultado. Flo es nuestra nutricionista, y acompaña a los pacientes en
      ambas.</p>

      ${photoSlot('un retrato de Flo, en orientación vertical')}

      <h2 class="display bar">En Qué Le Ayuda</h2>
      ${ul([
        'La dieta previa a la cirugía, y qué esperar de ella',
        'El regreso por etapas a la comida después de la cirugía — líquidos, luego puré, luego blandos, luego comida normal',
        'Las metas de proteína y líquidos, y cómo alcanzarlas cuando el estómago es pequeño',
        'Los suplementos de vitaminas y minerales, que son de por vida después de la mayoría de los procedimientos',
        'Cómo manejar las intolerancias alimentarias que pueden aparecer después de la cirugía',
        'El seguimiento a largo plazo, no solo las primeras semanas',
      ])}

      <h2 class="display bar">Cómo Ver a Flo</h2>
      <p>Las visitas de nutrición son parte del programa y no algo que usted tenga que buscar por su cuenta.
      Pregunte por Flo en su consulta, o llame a la oficina al <a href="${PHONE_HREF}">${PHONE}</a>.</p>
    `,
  },
};

module.exports = { translations };
