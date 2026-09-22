/*
 * Spanish translation of the Lantern page.
 *
 * Its own file because it is by far the longest page, and because its
 * 173-name employer list is reused verbatim from the English module rather
 * than duplicated — those are company names, not text to translate, and
 * keeping one copy means the list can never fall out of sync between the two
 * languages.
 *
 * Lantern, the employer names, hospital names and Dr. Wadiwala's
 * qualifications stay as they are.
 */

const { employerGroups, employerCount } = require('./lantern.js');

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';
const LANTERN_PHONE = '(855) 200-2099';

const ul = (items) => `<ul class="prose-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ol = (items) => `<ol class="prose-steps">${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
const faq = (pairs) =>
  `<div class="faq-list">${pairs
    .map(
      ([q, a]) => `<details class="faq-item">
        <summary>${q}<span class="faq-icon" aria-hidden="true"></span></summary>
        ${a}
      </details>`
    )
    .join('')}</div>`;

const steps = [
  [
    'Su empleador se inscribe en Lantern',
    'Esto es aparte de su seguro médico habitual. Muchos empleados nunca se enteran de que lo tienen, porque no aparece en la tarjeta del seguro.',
  ],
  [
    'Usted decide operarse',
    `Usted, o un dependiente cubierto, se comunica directamente con Lantern al <a href="tel:+18552002099">${LANTERN_PHONE}</a>, o simplemente acude a nuestro programa en Houston Surgical Weight Loss.`,
  ],
  [
    'Lantern le asigna un Asesor de Atención',
    'Una persona real que lo guía durante todo el proceso — le explica su cobertura, programa sus consultas, gestiona el papeleo y responde sus preguntas de principio a fin.',
  ],
  [
    'Usted conoce a nuestros cirujanos',
    'Su consulta, evaluación y estudios preoperatorios están cubiertos, ya sea que venga en persona o nos vea de forma virtual.',
  ],
  [
    'Su cirugía se aprueba y se programa',
    'Lantern gestiona la autorización previa con su empleador. Suele ser mucho más rápido que un seguro tradicional — la mayoría de los pacientes pasa de la primera consulta a la cirugía en menos de un mes, o cuando mejor le convenga. Va a su ritmo.',
  ],
  [
    'Todo está cubierto',
    'Cargos de las instalaciones, honorarios del cirujano, anestesia y la atención posoperatoria habitual.',
  ],
  ['Llega su factura', 'Dice <strong>$0</strong>.'],
];

const surgeries = [
  {
    icon: 'ic-bypass',
    name: 'Bypass Gástrico',
    sub: 'Bypass Gástrico en Y de Roux',
    body: `<p>El procedimiento bariátrico de referencia para pacientes con obesidad severa, diabetes tipo 2 o enfermedad
      por reflujo gastroesofágico (ERGE). Creamos una bolsa gástrica pequeña y redirigimos el intestino delgado, lo que
      limita tanto la cantidad de alimento que puede comer como las calorías que absorbe.</p>
      <p>Los resultados son notables y duraderos — a menudo antes de que el paciente salga del centro quirúrgico.</p>`,
    stats: [
      ['70–80%', 'del exceso de peso corporal perdido, en promedio'],
      ['98%+', 'de los casos de diabetes tipo 2 entran en remisión'],
      ['~1 semana', 'de recuperación típica'],
    ],
  },
  {
    icon: 'ic-sleeve',
    name: 'Gastrectomía en Manga',
    sub: 'Manga Gástrica',
    body: `<p>Durante una gastrectomía en manga laparoscópica retiramos aproximadamente el 80% del estómago, dejando un
      tubo estrecho en forma de manga que contiene mucho menos alimento. El procedimiento también elimina la parte del
      estómago que produce grelina, la principal hormona del hambre — así que los pacientes no solo comen menos,
      realmente sienten menos hambre.</p>
      <p>Muy eficaz para la diabetes tipo 2, la hipertensión, la apnea del sueño y el dolor articular.</p>`,
    stats: [
      ['60–70%', 'del exceso de peso corporal perdido, típicamente'],
      ['~80%', 'del estómago retirado'],
      ['~1 semana', 'de recuperación típica'],
    ],
  },
  {
    icon: 'ic-revision',
    name: 'Cirugía Bariátrica de Revisión',
    sub: 'Después de un procedimiento previo',
    body: `<p>Para pacientes que ya se sometieron a un procedimiento bariátrico o del tracto digestivo superior — banda
      gástrica, manga, grapado gástrico (gastroplastia vertical con banda), funduplicatura de Nissen o bypass gástrico
      — y que desde entonces han tenido pérdida de peso insuficiente, recuperación del peso, reflujo ácido o
      complicaciones quirúrgicas.</p>
      <p>Lantern cubre procedimientos de revisión para pacientes elegibles en muchas configuraciones de plan. Houston
      Surgical Weight Loss tiene experiencia particular en esto y evaluará su caso en la consulta.</p>`,
    stats: [],
  },
];

const tick = (items) =>
  `<ul class="mark-list is-yes">${items
    .map((i) => `<li><svg aria-hidden="true"><use href="#ic-check"/></svg>${i}</li>`)
    .join('')}</ul>`;
const cross = (items) =>
  `<ul class="mark-list is-no">${items
    .map((i) => `<li><svg aria-hidden="true"><use href="#ic-x"/></svg>${i}</li>`)
    .join('')}</ul>`;

const page = {
  title: 'Cobertura de Cirugía Bariátrica con Lantern',
  seoTitle: 'Cobertura Lantern Bariátrica | Houston, TX',
  tagline: 'Cientos de grandes empleadores de EE. UU. ya cubren la cirugía de pérdida de peso. El suyo podría ser uno.',
  description:
    'Houston Surgical Weight Loss es proveedor de la red Lantern. Busque su empleador y descubra si su cirugía bariátrica está cubierta sin costo.',

  body: `
      <p class="intro">Si le han dicho que la cirugía de pérdida de peso es demasiado cara, que su seguro no la cubre,
      o que tendrá que ahorrar durante años para pagarla — tenemos noticias que pueden cambiarlo todo.</p>

      <p>Cientos de los empleadores más grandes de Estados Unidos ofrecen ahora la cirugía bariátrica como un beneficio
      totalmente cubierto y sin costo, a través de un programa llamado <strong>Lantern</strong> (antes conocido como
      SurgeryPlus). Esto significa que millones de trabajadores estadounidenses, y sus familiares cubiertos, podrían
      tener un beneficio que nunca supieron que tenían: la posibilidad de realizarse una cirugía que les cambie la
      vida, sin deducibles, sin copagos y sin gastos de bolsillo de ningún tipo.</p>

      <p>En Houston Surgical Weight Loss somos <strong>Proveedor de la Red Lantern en Houston, TX</strong>, y ayudamos
      todos los días a pacientes elegibles a usar este beneficio. Esta página le explica todo lo que necesita saber:
      qué es Lantern, cómo funciona, qué empleadores participan, qué procedimientos cubre y cómo empezar.</p>

      <div class="cost-callout">
        <p class="cost-kicker">Su empleador pagará su cirugía de pérdida de peso</p>
        <div class="cost-compare">
          <div class="cost-cell">
            <span class="cost-label">Costo habitual de la cirugía</span>
            <span class="cost-figure is-was">$15,000–$25,000</span>
          </div>
          <svg class="cost-arrow" aria-hidden="true"><use href="#ic-arrow"/></svg>
          <div class="cost-cell">
            <span class="cost-label">Su costo, si es elegible</span>
            <span class="cost-figure is-now">$0</span>
          </div>
        </div>
        <p class="cost-note">Los miembros también reciben ayuda para viajes, hospedaje y otros gastos
        relacionados.</p>
        <p class="fine">*Puede aplicar un deducible. Houston Surgical Weight Loss lo revisará con usted en su consulta
        inicial.</p>
      </div>

      <div class="center-cta">
        <a href="${PHONE_HREF}" class="btn btn-solid"><svg><use href="#ic-phone"/></svg> Verifique Su Elegibilidad</a>
      </div>

      <h2 class="display bar">¿Qué Es Lantern?</h2>
      <p>Lantern es una plataforma nacional de salud patrocinada por empleadores que se especializa en conectar a los
      empleados con proveedores quirúrgicos acreditados y de alta calidad, a un costo drásticamente reducido o
      totalmente eliminado para el paciente.</p>
      <p>Se ha convertido en uno de los programas de beneficios quirúrgicos para empleadores más completos del país.
      Los empleadores se asocian con Lantern para dar a su personal acceso a una red seleccionada de centros
      quirúrgicos de primer nivel y cirujanos certificados, entre ellos el Dr. Irfan Wadiwala. A cambio de canalizar
      las cirugías electivas y programadas a través de esta red, los empleadores reducen enormemente sus costos de
      salud — y trasladan ese ahorro directamente a sus empleados en forma de cero gastos de bolsillo.</p>
      <p>Para la cirugía bariátrica en particular, Lantern ha cambiado las reglas del juego. El programa cubre la
      manga gástrica, el bypass gástrico, los procedimientos de revisión y la atención relacionada, con frecuencia sin
      ningún costo para el paciente. <strong>No hay truco.</strong> Es un beneficio laboral legítimo y totalmente
      financiado.</p>

      <h2 class="display bar">¿Cómo Funciona Lantern para la Cirugía Bariátrica?</h2>
      <p>La versión sencilla: su empleador ya negoció un acuerdo con Lantern. Como parte de ese acuerdo, Lantern
      reunió una red de centros quirúrgicos y cirujanos acreditados y bien calificados — como su equipo aquí en
      Houston Surgical Weight Loss. Cuando usted usa un proveedor de la Red Lantern para su procedimiento cubierto, el
      costo total de la cirugía lo paga el plan de su empleador.</p>

      <ol class="steps-flow">
${steps
  .map(
    ([h, p]) => `        <li>
          <div class="steps-body">
            <h3>${h}</h3>
            <p>${p}</p>
          </div>
        </li>`
  )
  .join('\n')}
      </ol>

      <h2 class="display bar">¿Qué Significa "Sin Gastos de Bolsillo"?</h2>
      <p>Entendemos el escepticismo. En el sistema de salud, "sin costo" casi siempre viene con un asterisco. Así que
      seamos específicos sobre lo que Lantern cubre para los pacientes bariátricos elegibles.</p>

      <div class="covered-grid">
        <div class="covered-col is-yes">
          <h3>Cubierto por completo</h3>
          ${tick([
            'Honorarios del cirujano',
            'Cargos de las instalaciones quirúrgicas',
            'Anestesia',
            'Estudios y análisis preoperatorios',
            'Visitas de seguimiento posoperatorias',
          ])}
        </div>
        <div class="covered-col is-no">
          <h3>No aplica</h3>
          ${cross(['Su deducible*', 'Su copago', 'Su coaseguro'])}
        </div>
      </div>

      <p>Para la gran mayoría de los pacientes bariátricos elegibles con Lantern, el costo total de una manga gástrica
      o un bypass gástrico — procedimientos que normalmente costarían entre $15,000 y $25,000 o más — es exactamente
      cero dólares.</p>
      <p class="fine">*Puede aplicar un deducible. Houston Surgical Weight Loss lo revisará con usted en su consulta
      inicial.</p>

      <h2 class="display bar">¿Qué Empleadores Ofrecen Beneficios Bariátricos Lantern?</h2>
      <p>Esta es la pregunta que casi todos hacen primero, y la lista es notablemente larga. Lantern trabaja
      actualmente con cientos de empleadores de prácticamente todos los sectores — desde grandes cadenas minoristas y
      empresas de energía hasta entidades de gobierno, sistemas de salud e instituciones educativas. Muchos ofrecen la
      cirugía bariátrica como un beneficio totalmente incluido o mediante lo que Lantern llama un <em>"Carve-Out"</em>:
      un beneficio bariátrico dedicado que acompaña al plan médico principal del empleador.</p>
      <p>Si usted o un familiar cubierto trabaja en alguna de las organizaciones de la lista, comuníquese con nosotros
      hoy y verificaremos su elegibilidad.</p>

      <div class="employer-finder">
        <label class="employer-search" for="employerSearch">
          <svg aria-hidden="true"><use href="#ic-search"/></svg>
          <input type="search" id="employerSearch" placeholder="Empiece a escribir el nombre de su empleador…"
            autocomplete="off" spellcheck="false">
        </label>
        <p class="employer-status" id="employerCount" role="status">Mostrando los ${employerCount} empleadores
        participantes</p>

        <div class="employer-groups">
${employerGroups}
        </div>

        <p class="employer-empty" id="employerEmpty" hidden>No aparece en la lista publicada — pero eso no
        necesariamente significa que no tenga cobertura. Los beneficios cambian cada año, así que llámenos al
        <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a> y lo verificamos por usted.</p>
      </div>

      <p class="fine">Esta lista está vigente para 2025–2026, y los beneficios de los empleadores cambian cada año. Si
      su empleador no aparece, puede que aún participe o que agregue los beneficios Lantern en el próximo periodo —
      llame al <a href="${PHONE_HREF}">${PHONE}</a> y lo averiguamos por usted.</p>

      <h2 class="display bar">¿Qué Cirugías Están Cubiertas?</h2>
      <div class="surgery-stack">
${surgeries
  .map(
    (s) => `        <article class="surgery-card">
          <div class="surgery-head">
            <span class="card-icon"><svg><use href="#${s.icon}"/></svg></span>
            <div>
              <h3>${s.name}</h3>
              <p class="surgery-sub">${s.sub}</p>
            </div>
          </div>
          <div class="surgery-body">
            ${s.body.trim()}
          </div>${
            s.stats.length
              ? `
          <dl class="surgery-stats">
${s.stats.map(([figure, label]) => `            <div><dt>${figure}</dt><dd>${label}</dd></div>`).join('\n')}
          </dl>`
              : ''
          }
        </article>`
  )
  .join('\n')}
      </div>

      <h2 class="display bar">Preguntas Frecuentes</h2>
      ${faq([
        [
          '¿Lantern cubre a mi cónyuge o a mis hijos?',
          '<p>En la mayoría de los planes, sí. Los dependientes cubiertos suelen ser elegibles para el mismo beneficio.</p>',
        ],
        ['¿Cuál es el requisito de IMC?', '<p>Su cirujano revisará su caso específico durante la consulta.</p>'],
        [
          '¿Mi empleador sabrá que me operé?',
          '<p>No. Su información médica está protegida por HIPAA y no se comparte con su empleador.</p>',
        ],
        [
          '¿Qué pasa si hay complicaciones?',
          '<p>Los procedimientos cubiertos por Lantern incluyen la atención posoperatoria habitual. Su equipo de atención coordina con Lantern para asegurar la cobertura continua del tratamiento médicamente necesario.</p>',
        ],
        [
          '¿Puedo usar el beneficio si trabajo medio tiempo?',
          '<p>Depende de si está inscrito en el plan médico patrocinado por su empleador. Si lo está, es probable que sea elegible. Comuníquese con nosotros para verificarlo.</p>',
        ],
        [
          '¿Hay periodo de espera?',
          '<p>Normalmente no. Le informaremos qué requiere su plan específico durante la verificación de elegibilidad.</p>',
        ],
      ])}

      <h2 class="display bar">Dr. Irfan Wadiwala — Cirujano Bariátrico y General</h2>
      <p>Cirujano bariátrico con subespecialidad y cirujano general certificado por la junta médica, con más de 18 años
      de experiencia quirúrgica y miles de procedimientos bariátricos exitosos.</p>
      <h3>Su experiencia incluye</h3>
      ${ul([
        'Manga gástrica, bypass gástrico y cirugía bariátrica de revisión',
        'Técnicas laparoscópicas avanzadas y mínimamente invasivas',
        'Reparación de hernias, extirpación de vesícula, apendicectomías y extirpación de quistes',
      ])}
      <h3>Privilegios Hospitalarios</h3>
      ${ul([
        'HCA Houston Healthcare Northwest',
        "St. Luke's Health – The Vintage Hospital",
        'Houston Methodist Willowbrook Hospital',
      ])}
      <h3>Formación Académica</h3>
      ${ul([
        'Subespecialidad en Cirugía Bariátrica Laparoscópica – Penn State Milton Hershey Medical Center',
        'Residencia en Cirugía General – Martin Luther King y Arrowhead Regional Medical Center, Los Ángeles',
        'Doctor en Medicina Osteopática, Summa Cum Laude – Western University, Pomona, CA',
        'Certificado por la junta médica en Cirugía General y Cirugía Bariátrica',
      ])}
      <p>El Dr. Wadiwala trata a la persona completa y acompaña a sus pacientes desde la educación preoperatoria hasta
      el seguimiento a largo plazo.</p>

      <h2 class="display bar">Por Qué Elegir Houston Surgical Weight Loss</h2>
      ${ul([
        'Cirujano bariátrico certificado y con subespecialidad, con más de 18 años de experiencia',
        'Especialista en cirugía de pérdida de peso laparoscópica mínimamente invasiva',
        'Planes de atención personalizados según sus metas',
        'Apoyo integral antes, durante y después de la cirugía',
        'Opciones de consulta por telemedicina y en la oficina',
      ])}
    `,
};

module.exports = { page };
