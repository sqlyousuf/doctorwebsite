/*
 * Spanish translations of the Patient Center pages.
 *
 * One entry per slug, mirroring the English body's structure heading for
 * heading and list item for list item. The build checks that parity — if an
 * English page grows a section and the Spanish one does not, it fails rather
 * than quietly shipping a half-translated page. That is the same guard
 * tools/build-es.js applies to the home page, adapted to whole bodies.
 *
 * Voice: formal "usted" throughout, matching es/index.html. Proper nouns stay
 * as they are — the practice name, Bariatric Fusion®, Lantern, LAP-BAND®, the
 * employer list, hospital and product names.
 *
 * Lantern lives in tools/content/lantern.es.js; it is long enough to warrant
 * its own file, and its 173-name employer list is reused from the English
 * module rather than duplicated.
 */

const PHONE = '281-653-6544';
const PHONE_HREF = 'tel:+12816536544';

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

const translations = {
  'self-pay': {
    title: 'Gastrectomía en Manga de Pago Particular',
    seoTitle: 'Manga Gástrica Pago Particular $6,999 | Houston, TX',
    tagline: 'Gastrectomía en manga desde $6,999 — precio integral, con seguimiento de por vida.',
    description:
      'Gastrectomía en manga de pago particular en Houston desde $6,999, precio integral con seguimiento de por vida por un cirujano bariátrico certificado.',
    body: `
      <div class="price-block">
        <p class="price-label">Precio de Pago Particular</p>
        <p class="price-figure"><span class="price-starting">Desde</span> $6,999</p>
        <p class="price-fine">El precio integral incluye seguimiento de por vida.</p>
      </div>

      <p class="intro">Gastrectomía en manga desde <strong>$6,999</strong>. Ofrecemos el mejor precio del país para un
      procedimiento ambulatorio, con los mejores cirujanos y el mejor programa. Nuestros cirujanos realizan este
      procedimiento desde 2008 y han completado más de 10,000 procedimientos con excelentes resultados y una tasa de
      complicaciones menor que el promedio nacional. No es necesario arriesgarse viajando a México para obtener
      resultados inferiores.</p>

      <h2 class="display bar">Cirugía Bariátrica Experta y Atención Personalizada</h2>
      <p>Su cirugía será realizada por el Dr. Wadiwala — cirujano capacitado en Estados Unidos, certificado por la
      junta médica y perteneciente a un Centro de Excelencia. Los procedimientos se realizan en el Townsen Hospital
      System o en instalaciones comparables, todas completamente acreditadas y equipadas para cirugía bariátrica.
      Nuestros equipos de enfermería y anestesia están certificados, se especializan en cirugía bariátrica y cuentan
      con décadas de experiencia.</p>
      <p>Su consulta inicial es gratuita, presencial o virtual. Recibimos pacientes de todo el país y del extranjero.
      Su cirujano escuchará sus inquietudes y las de su familia, y responderá cada pregunta en palabras fáciles de
      entender, no en jerga médica. Conocerá a su cirujano en persona el día antes de la cirugía para recibir las
      instrucciones finales y tomarse la famosa foto del "antes", y solo necesitará permanecer unos días en Houston
      antes de regresar a casa.</p>

      <h2 class="display bar">Apoyo y Seguimiento de Por Vida</h2>
      <p>El éxito a largo plazo en la pérdida de peso depende del conocimiento sobre nutrición adecuada y del
      seguimiento. Antes de la cirugía se reunirá con nuestra dietista bariátrica, en persona o virtualmente, y
      recibirá materiales por escrito para que no haya ninguna confusión sobre su dieta preoperatoria o
      postoperatoria. Nuestra dietista está siempre disponible para nuestros pacientes antes y después de la
      cirugía.</p>
      <p>Las complicaciones son poco frecuentes. Al realizar su cirugía con nosotros, puede elegir una opción que lo
      protege de cualquier costo derivado del diagnóstico y tratamiento de complicaciones. Si después de investigar
      decide operarse en otro lugar, asegúrese de elegir, como mínimo, un cirujano con buenas reseñas, excelentes
      resultados, amplia experiencia y un programa integral de seguimiento.</p>
      <p>Aunque su cirugía es un procedimiento ambulatorio de un solo día, seremos sus aliados en la pérdida de peso
      para siempre.</p>
      <p><strong>No confíe su salud a cirujanos de menor calidad. Usted puede recibir la mejor atención.</strong>
      Llame al <a href="${PHONE_HREF}">${PHONE}</a> hoy mismo para comenzar su camino.</p>

      <h2 class="display bar">El Precio de Pago Particular Incluye</h2>
      ${ul([
        'Honorarios del cirujano',
        'Honorarios del cirujano asistente',
        'Honorarios de anestesia',
        'Cargos de las instalaciones del centro quirúrgico',
        'Clase de nutrición',
        'Seguimiento de por vida con Houston Surgical Weight Loss',
      ])}

      <h2 class="display bar">Beneficios del Pago Particular</h2>
      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Se Acepta un IMC Más Bajo</h3>
          <p>Puede realizarse la cirugía con un IMC más bajo. Los seguros nunca cubren la cirugía para bajar de peso
          si el IMC es menor de 35. Con el pago particular, puede realizarse una gastrectomía en manga con un IMC
          desde 30.</p>
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>Sin Demoras del Seguro</h3>
          <p>Las aseguradoras cobran sus primas mensuales pero no quieren pagar su atención médica, así que
          establecen numerosos requisitos complicados. Blue Cross Blue Shield of Texas, por ejemplo, exige completar
          un programa de dieta de seis meses, una prueba de apnea del sueño, autorización psicológica y un historial
          de obesidad de 5 años antes de pagar.</p>
        </article>
        <article class="card">
          <span class="card-index">03</span>
          <h3>Sin Edad Mínima</h3>
          <p>Casi ningún seguro cubre la cirugía para bajar de peso en pacientes menores de 18 años. Esto es
          desafortunado, porque la cirugía es segura para los adolescentes y funciona. Hemos operado a decenas de
          estos pacientes y también podemos ayudarle a usted.</p>
        </article>
      </div>

      <h2 class="display bar">Preguntas Frecuentes</h2>
      ${faq([
        [
          '¿Cómo sé si necesito cirugía?',
          '<p>Si tiene síntomas persistentes como dolor, hinchazón o problemas digestivos, programe una consulta. Nuestros cirujanos realizarán exámenes y pruebas para determinar el mejor tratamiento.</p>',
        ],
        [
          '¿Estas cirugías son mínimamente invasivas?',
          `<p>Sí. Siempre que es posible utilizamos técnicas laparoscópicas, que ofrecen:</p>${ul([
            'Incisiones más pequeñas',
            'Menos dolor',
            'Recuperación más rápida',
            'Menor riesgo de complicaciones',
          ])}`,
        ],
        [
          '¿Cuánto dura la recuperación?',
          `<p>La recuperación varía según el procedimiento y la salud del paciente.</p>${ul([
            '<strong>Cirugías laparoscópicas:</strong> de 1 a 3 semanas para la mayoría de los pacientes.',
            '<strong>Cirugías abiertas tradicionales:</strong> de 4 a 6 semanas o más.',
          ])}`,
        ],
        [
          '¿Mi seguro cubrirá la cirugía?',
          '<p>La mayoría de los planes médicos cubren procedimientos médicamente necesarios. Nuestro personal le ayudará a verificar su cobertura y le explicará las opciones de financiamiento si las necesita.</p>',
        ],
        [
          '¿Cómo me preparo para la cirugía?',
          `<p>La preparación puede incluir:</p>${ul([
            'Análisis de laboratorio previos a la cirugía',
            'Ajustes en la alimentación',
            'Indicaciones sobre qué medicamentos suspender o continuar',
          ])}<p>Recibirá un plan preoperatorio personalizado en su consulta.</p>`,
        ],
      ])}
    `,
  },

  'financing-payment': {
    title: 'Financiamiento y Opciones de Pago',
    seoTitle: 'Financiamiento de Cirugía Bariátrica | Houston, TX',
    tagline: 'Opciones de financiamiento para la cirugía de pérdida de peso — manga gástrica desde $6,999.',
    description:
      'Opciones de financiamiento y pago para la cirugía de pérdida de peso en Houston Surgical Weight Loss, incluyendo pago particular, Cherry y CareCredit.',
    body: `
      <p class="intro">Gastrectomía Vertical en Manga desde <strong>$6,999</strong>.</p>

      <div class="price-block">
        <p class="price-label">Oferta Especial</p>
        <p class="price-figure">$6,999<span class="price-starting">*</span></p>
        <p class="price-fine">Precio integral. Pagadero con cheque de caja u orden de pago a nombre de WIFUMAM PA.</p>
      </div>

      <h2 class="display bar">Incluye</h2>
      ${ul([
        'Honorarios del cirujano',
        'Honorarios del hospital',
        'Anestesia',
        'Laboratorios y diagnósticos',
        'Servicios de dietista',
        'Citas de seguimiento durante 1 año',
        'Reembolso hospitalario de $1,000',
      ])}

      <h2 class="display bar">Opción de Financiamiento</h2>
      <p>Pague su procedimiento a plazos con opciones de financiamiento convenientes.</p>

      <h3>Formas de Pago Aceptadas</h3>
      ${ul(['Visa', 'MasterCard', 'Discover', 'American Express'])}

      <div class="card-grid">
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-card"/></svg></span>
          <h3>Cherry</h3>
          <p>Pregunte a nuestro equipo sobre cómo solicitar un plan de pagos Cherry para su procedimiento.</p>
        </article>
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-card"/></svg></span>
          <h3>CareCredit</h3>
          <p>Aceptamos financiamiento CareCredit para procedimientos bariátricos y de cirugía general.</p>
        </article>
      </div>

      <h2 class="display bar">Información Importante</h2>
      ${ul([
        'Los precios están sujetos a cambios y se confirmarán al momento de programar la cirugía.',
        `Los costos indicados NO incluyen:${ul([
          'Medicamentos',
          'Suplementos vitamínicos',
          'La consulta psicológica requerida para la autorización de cirugía bariátrica',
        ])}`,
      ])}
    `,
  },

  'patient-forms': {
    title: 'Formularios del Paciente',
    seoTitle: 'Formularios para Nuevos Pacientes | Houston, TX',
    tagline: 'Complete su documentación de nuevo paciente antes de su primera visita.',
    description:
      'Descargue y complete sus formularios de nuevo paciente para Houston Surgical Weight Loss antes de su primera visita, en inglés o español.',
    body: `
      <p class="intro">Pedimos a todos los nuevos pacientes que completen los siguientes formularios antes de su
      primera visita. Puede llenarlos directamente o imprimirlos y completarlos a mano. Una vez terminados, puede
      traerlos a su cita o enviarlos por correo electrónico a nuestra oficina.</p>

      <h2 class="display bar">Formularios Disponibles</h2>
      <div class="card-grid">
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-clipboard"/></svg></span>
          <h3>Formulario para Nuevos Pacientes — Inglés (Formato PDF)</h3>
          <p><a href="#">Haga clic aquí para descargar</a></p>
        </article>
        <article class="card">
          <span class="card-icon"><svg><use href="#ic-clipboard"/></svg></span>
          <h3>Formulario para Nuevos Pacientes — Español (Formato PDF)</h3>
          <p><a href="#">Haga clic aquí para descargar</a></p>
        </article>
      </div>

      <p class="fine">Los archivos PDF los proporciona la práctica y se enlazarán aquí una vez que estén cargados.</p>

      <p>Si tiene alguna duda mientras completa los formularios, no dude en comunicarse con nosotros al
      <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a> — con gusto le ayudamos.</p>

      <hr class="mini-rule">

      <p>Si tiene consultas sobre los formularios u otra documentación, llámenos al
      <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a>. Estamos aquí para ayudarle en lo que necesite.</p>
    `,
  },

  'after-surgery': {
    title: 'La Vida Después de la Cirugía',
    seoTitle: 'La Vida Después de la Cirugía Bariátrica | Houston, TX',
    tagline: 'Recuperación, seguimiento, dieta y ejercicio — los hábitos que hacen que los resultados duren.',
    description:
      'Cómo es la vida después de la cirugía bariátrica: recuperación, citas de seguimiento, su nueva dieta, ejercicio y cuidados continuos en Houston Surgical Weight Loss.',
    body: `
      <h2 class="display bar">Un Nuevo Comienzo Después de la Cirugía</h2>
      <p class="intro">La cirugía de pérdida de peso es una herramienta poderosa para lograr salud y bienestar a largo
      plazo, y el verdadero éxito comienza después del procedimiento. Esto requiere nuevos hábitos, dedicación y
      seguimiento regular para garantizar una pérdida de peso segura y sostenible.</p>
      <p>Houston Surgical Weight Loss ofrece apoyo integral que incluye citas de seguimiento de rutina, orientación
      dietética personalizada, ajustes de la banda gástrica cuando son necesarios y acceso continuo a nuestro equipo
      para preguntas o inquietudes. Un equipo de profesionales ayuda a los pacientes a adaptarse a su nuevo estilo de
      vida y los guía hacia sus metas durante todo el proceso.</p>

      <h2 class="display bar">La Recuperación Después de la Cirugía</h2>
      <p>La recuperación de cada paciente es única y depende del tipo de procedimiento y de cómo responda el
      cuerpo.</p>
      ${ul([
        'El alta el mismo día aplica a los pacientes de cirugía LAP-BAND®',
        'Es normal sentir algo de dolor y molestia durante unos días, pero se controla con los medicamentos recetados',
        'Los pacientes deben traer a alguien que los lleve a casa el día de la cirugía',
        'No maneje ningún vehículo hasta que el cirujano lo autorice oficialmente',
      ])}
      <p>Las instrucciones postoperatorias detalladas cubren el cuidado de las heridas, las restricciones dietéticas y
      las pautas de actividad física.</p>

      <h2 class="display bar">Seguimiento y Cuidados Continuos</h2>
      <p>El seguimiento constante es esencial para el éxito y la seguridad a largo plazo.</p>
      ${ul([
        'Varias citas se realizan durante el primer año para monitorear el progreso y la cicatrización',
        'Los ajustes de la banda gástrica pueden hacerse en cualquier momento para aumentar o reducir la ingesta de alimentos',
        'Un equipo dedicado está disponible las 24 horas para responder preguntas o atender inquietudes entre visitas',
      ])}
      <p>Las visitas de seguimiento regulares permiten dar seguimiento a la pérdida de peso, atender los problemas a
      tiempo y asegurar que los pacientes sigan por buen camino.</p>

      <h2 class="display bar">Su Nueva Alimentación Después de la Cirugía</h2>
      <p>La cirugía de pérdida de peso cambia la forma en que el cuerpo digiere y absorbe los alimentos, lo que exige
      cambios en los hábitos alimenticios. Como se consumen cantidades más pequeñas, cada bocado cuenta.</p>
      <p>Las recomendaciones dietéticas principales incluyen:</p>
      ${ul([
        'Comidas altas en proteína para preservar la masa muscular',
        'Carbohidratos y grasas limitados para favorecer la pérdida de grasa',
        'Abundante agua y bebidas bajas en calorías sin gas',
        'Vitaminas y nutrientes diarios para prevenir deficiencias',
      ])}
      <p>Debe evitarse el alcohol y el tabaco, ya que interfieren con la cicatrización y el progreso a largo plazo.
      Una dietista registrada crea un plan alimenticio diseñado específicamente para sus necesidades y metas.</p>

      <h2 class="display bar">El Papel del Ejercicio en Su Éxito</h2>
      <p>Una rutina de ejercicio constante es tan importante como una alimentación sana para obtener resultados
      duraderos.</p>
      <p>Después de la cirugía el cuerpo consume menos calorías, lo que puede hacer que queme músculo en lugar de
      grasa. El ejercicio ayuda a desarrollar y mantener la masa muscular, acelera el metabolismo y favorece una
      pérdida de peso sostenible.</p>
      <p>Rutina recomendada:</p>
      ${ul([
        'Procure 30 minutos de ejercicio moderado, cuatro días por semana',
        'Combine ejercicio cardiovascular y de fuerza para obtener mejores resultados',
      ])}
      <p>El ejercicio mejora el ánimo, la energía y la salud en general, más allá de quemar calorías.</p>

      <h2 class="display bar">Las Tres Preguntas Más Comunes</h2>
      ${faq([
        [
          '¿Cuándo puedo volver al trabajo?',
          '<p>La mayoría de los pacientes regresa al trabajo en una semana, dependiendo del tipo de cirugía y de sus responsabilidades laborales. Si el trabajo implica esfuerzo físico, el cirujano puede recomendar un periodo de recuperación más largo y restricciones de actividad ligera, como no levantar, empujar ni jalar más de 10 libras, y evitar torcerse o agacharse en exceso. Siga siempre las indicaciones personalizadas de su cirujano.</p>',
        ],
        [
          '¿Con qué frecuencia necesitaré citas de seguimiento?',
          `<p>El seguimiento es fundamental para el éxito.</p>${ul([
            '<strong>Primer año:</strong> las visitas suelen ser a la semana, al mes, a los 3 meses, a los 6 meses y al año de la cirugía',
            '<strong>Después del primer año:</strong> las citas pueden programarse anualmente o según se necesite',
          ])}<p>Estas visitas permiten al cirujano monitorear el progreso, ajustar la dieta o la banda gástrica y resolver cualquier duda.</p>`,
        ],
        [
          '¿Necesitaré tomar vitaminas y suplementos después de la cirugía?',
          '<p>Sí. Como la cirugía de pérdida de peso cambia la forma en que el cuerpo absorbe los nutrientes, la suplementación de vitaminas y minerales es necesaria de por vida. Los suplementos comunes incluyen multivitamínicos, vitamina B12, calcio, hierro y proteína. Una dietista crea un plan personalizado para prevenir deficiencias y mantenerlo sano.</p>',
        ],
      ])}

      <h2 class="display bar">Por Qué Elegir Houston Surgical Weight Loss</h2>
      ${ul([
        'Dirigido por el Dr. Irfan Wadiwala, cirujano bariátrico certificado y con subespecialidad, con dos décadas de experiencia',
        'Un equipo de atención integral que incluye dietistas registradas y personal de apoyo dedicado',
        'Planes de cuidado posoperatorio diseñados para sus necesidades particulares',
        'Acceso las 24 horas para preguntas o inquietudes urgentes',
        'Un historial comprobado ayudando a los pacientes a lograr resultados a largo plazo',
      ])}

      <h2 class="display bar">Resumen</h2>
      <p>La vida después de la cirugía bariátrica implica compromiso con nuevos hábitos de alimentación y ejercicio,
      seguimiento de rutina para asegurar un progreso seguro y constante, y el apoyo de un equipo dedicado que lo
      acompaña en cada paso. Trabajando de cerca con el equipo de Houston Surgical Weight Loss, usted tendrá las
      herramientas, el conocimiento y el apoyo continuo que necesita para alcanzar sus metas de salud.</p>
    `,
  },

  'vitamin-guide': {
    title: 'Guía de Vitaminas',
    seoTitle: 'Guía de Vitaminas Bariátricas | Houston, TX',
    tagline: 'La suplementación diaria que protege su salud después de la cirugía.',
    description:
      'Guía de vitaminas bariátricas: opciones de paquetes y recomendaciones de suplementación diaria para los pacientes de Houston Surgical Weight Loss.',
    body: `
      <p class="intro">La cirugía bariátrica cambia la forma en que su cuerpo absorbe los nutrientes, por lo que las
      vitaminas especializadas son necesarias para prevenir deficiencias y proteger su salud en general.</p>
      <p>La suplementación diaria constante favorece la cicatrización, aumenta la energía, fortalece los huesos y
      asegura el éxito a largo plazo después de su procedimiento.</p>

      <h2 class="display bar">Opciones de Paquetes de Vitaminas Bariátricas</h2>
      <p>Es importante asegurarse de que las vitaminas que toma cumplan con todos los requisitos bariátricos. Si tiene
      dudas, comuníquese con nuestra oficina para consultar con nuestra dietista interna.</p>

      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Opción 1</h3>
          ${ul(['Tome 2 multivitamínicos de disolución rápida', 'Tome 3 masticables suaves de calcio'])}
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>Opción 2</h3>
          ${ul([
            'Tome 2 multivitamínicos masticables suaves',
            'Tome 1 masticable suave de hierro',
            'Tome 3 masticables suaves de calcio',
          ])}
        </article>
      </div>

      <p>Explore opciones confiables de vitaminas bariátricas diseñadas para apoyar su nutrición y recuperación
      después de la cirugía de pérdida de peso.</p>

      <p class="fine"><strong>Aviso:</strong> Siga las indicaciones de su cirujano o dietista.</p>

      <div class="center-cta">
        <a href="https://www.bariatricfusion.com/?rfsn=9005858.d32c16" class="btn btn-solid" target="_blank" rel="noopener">
          Visite la Tienda de Vitaminas <svg><use href="#ic-arrow"/></svg>
        </a>
      </div>
      <p class="affiliate-note">
        <svg aria-hidden="true"><use href="#ic-info"/></svg>
        <span><strong>Divulgación:</strong> Houston Surgical Weight Loss recibe una comisión por las compras
        realizadas a través de este enlace. Su plan de suplementos lo determinan su cirujano y su dietista según su
        procedimiento, y usted puede comprar vitaminas bariátricas equivalentes donde prefiera.</span>
      </p>
    `,
  },

  'bariatric-vitamins': {
    title: 'Especialista en Vitaminas Bariátricas en Houston, TX',
    seoTitle: 'Vitaminas Bariátricas en Houston, TX | Bariatric Fusion',
    tagline: 'Suplementos Bariatric Fusion® y un plan personalizado para la vida después de la cirugía.',
    description:
      'Especialista en vitaminas bariátricas en Houston, TX. Suplementos Bariatric Fusion® y planes personalizados del Dr. Irfan Wadiwala.',
    body: `
      <p class="intro">En Houston Surgical Weight Loss sabemos que su camino hacia una vida más sana y feliz no
      termina con la cirugía. Después de un bypass gástrico, una gastrectomía en manga o cualquier otra cirugía de
      pérdida de peso, su cuerpo necesita vitaminas y minerales esenciales para sanar, mantener la energía y asegurar
      el éxito a largo plazo.</p>
      <p>Por eso nuestra práctica ofrece una selección completa de vitaminas Bariatric Fusion® a precios accesibles.
      Estos suplementos están especialmente formulados para cubrir las necesidades nutricionales particulares de los
      pacientes de cirugía bariátrica.</p>
      <p>Nuestro equipo, dirigido por el Dr. Irfan Wadiwala, ofrece orientación experta sobre qué vitaminas y
      suplementos son adecuados para usted, según su historial médico, su estilo de vida y el tipo de procedimiento
      que se realizó.</p>
      <p>Llámenos hoy al <a href="${PHONE_HREF}">${PHONE}</a> o programe una cita en línea para conocer más sobre
      nuestro programa de suplementos posoperatorios.</p>

      <h2 class="display bar">Por Qué Son Esenciales Después de la Cirugía</h2>
      <p>La cirugía bariátrica cambia la forma en que su cuerpo digiere y absorbe los alimentos. Aunque esto ayuda a
      bajar de peso, también significa que su cuerpo puede no obtener suficientes nutrientes solo de la dieta. Sin
      suplementación, puede desarrollar deficiencias de micronutrientes que afecten su salud y su recuperación.</p>
      <p>Las vitaminas bariátricas:</p>
      ${ul([
        'Reponen los nutrientes esenciales que su cuerpo ya no absorbe de los alimentos',
        'Favorecen la cicatrización y la recuperación después de la cirugía',
        'Promueven una pérdida de peso saludable y un buen metabolismo',
        'Ayudan a mantener huesos fuertes, buena inmunidad y niveles de energía adecuados',
        'Previenen complicaciones a largo plazo por deficiencias de vitaminas y minerales',
      ])}
      <p>Tomar las vitaminas correctas todos los días es un compromiso de por vida y una parte vital de su éxito.</p>

      <h2 class="display bar">Vitaminas Bariatric Fusion® Disponibles en Houston</h2>
      <p>En Houston Surgical Weight Loss ofrecemos con orgullo las vitaminas Bariatric Fusion®, una de las marcas más
      confiables para pacientes bariátricos. Estos productos están formulados científicamente para cubrir las
      necesidades de su cuerpo después de la cirugía y están disponibles en nuestra oficina de Spring, TX o a través
      de nuestra tienda en línea.</p>
      <p>Nuestras opciones de suplementos incluyen:</p>
      ${ul([
        'Multivitamínicos para la nutrición diaria general',
        'Hierro para mantener la sangre sana y prevenir la anemia',
        'Zinc para favorecer la cicatrización y la función inmunitaria',
        'Cobre para la producción de energía y la formación de colágeno',
        'Vitamina C para reforzar la inmunidad y la reparación de tejidos',
        'Citrato de calcio para fortalecer huesos y dientes',
      ])}
      <p>Cada suplemento está disponible en forma líquida, masticable o en cápsula, para que sea fácil incorporarlo a
      su rutina diaria.</p>

      <h2 class="display bar">Cómo Tomar Sus Vitaminas Bariátricas</h2>
      <p>La mayoría de los pacientes tomará suplementos por el resto de su vida después de la cirugía bariátrica, para
      asegurar una salud duradera y prevenir deficiencias. El Dr. Wadiwala y nuestro equipo crearán un plan
      personalizado según su tipo de cirugía y sus necesidades individuales. Estos suplementos son accesibles, de buen
      sabor y fáciles de incorporar a su estilo de vida.</p>
      <p class="fine"><strong>Aviso:</strong> Siga las indicaciones de su cirujano o dietista.</p>

      <div class="center-cta">
        <a href="https://www.bariatricfusion.com/?rfsn=9005858.d32c16" class="btn btn-solid" target="_blank" rel="noopener">
          Tienda de Vitaminas <svg><use href="#ic-arrow"/></svg>
        </a>
      </div>
      <p class="affiliate-note">
        <svg aria-hidden="true"><use href="#ic-info"/></svg>
        <span><strong>Divulgación:</strong> Houston Surgical Weight Loss recibe una comisión por las compras
        realizadas a través de este enlace. Su plan de suplementos lo determinan su cirujano y su dietista según su
        procedimiento, y usted puede comprar vitaminas bariátricas equivalentes donde prefiera.</span>
      </p>

      <h2 class="display bar">Su Plan Completo de Salud Posoperatoria</h2>
      <p>Las vitaminas por sí solas no bastan para mantener su salud después de la cirugía bariátrica. Nuestro equipo
      ofrece un plan integral que incluye:</p>
      ${ul([
        'Una dieta equilibrada y rica en nutrientes',
        'Actividad física diaria para activar el metabolismo y la energía',
        'Citas de seguimiento regulares para monitorear el progreso y ajustar su plan de suplementos',
        'Educación sobre hábitos saludables para asegurar el éxito a largo plazo',
      ])}
      <p>Al combinar la suplementación adecuada con una vida sana, aprovechará al máximo los beneficios de su cirugía
      y mantendrá sus resultados por muchos años.</p>

      <h2 class="display bar">Cómo Funcionan las Vitaminas Bariátricas</h2>
      <p>Las vitaminas bariátricas son suplementos especialmente formulados para pacientes que se han sometido a
      procedimientos de pérdida de peso como el bypass gástrico, la gastrectomía en manga o el balón gástrico.</p>
      <p>Después de la cirugía bariátrica, el sistema digestivo cambia de forma significativa. El estómago se vuelve
      más pequeño y, en algunos procedimientos, se evitan partes del intestino delgado. Si bien estos cambios ayudan a
      bajar de peso de forma eficaz, también reducen la capacidad del cuerpo para absorber nutrientes esenciales.</p>
      <p>Las vitaminas bariátricas reponen y restauran esos nutrientes en formas altamente absorbibles.</p>

      <h3>Mejor Absorción de Nutrientes</h3>
      <p>Las vitaminas comunes están diseñadas para personas con digestión normal. Las bariátricas son distintas:
      contienen concentraciones más altas de nutrientes esenciales y vienen en formas que el cuerpo absorbe más
      fácilmente después de la cirugía.</p>

      <h3>Prevención de Deficiencias</h3>
      <p>Los pacientes que no toman suplementos después de la cirugía pueden desarrollar deficiencias de nutrientes
      clave como:</p>
      ${ul(['Vitamina B12', 'Hierro', 'Calcio', 'Vitamina D', 'Folato', 'Zinc'])}
      <p>Estas deficiencias pueden causar fatiga, anemia, pérdida ósea y debilidad inmunitaria. Las vitaminas
      bariátricas ayudan a prevenir estas complicaciones a largo plazo.</p>

      <h3>Apoyo a la Cicatrización y la Recuperación</h3>
      <p>Después de la cirugía, el cuerpo necesita nutrientes adicionales para sanar correctamente. Vitaminas como la
      C, el zinc y los nutrientes que favorecen la proteína ayudan a reparar los tejidos durante los primeros
      meses.</p>

      <h3>Energía y Metabolismo</h3>
      <p>Las vitaminas bariátricas también favorecen un metabolismo sano y la producción de energía, ayudando a los
      pacientes a mantenerse activos y conservar sus resultados.</p>

      <h3>Protección a Largo Plazo</h3>
      <p>Como la cirugía bariátrica cambia de forma permanente la manera en que el cuerpo procesa los nutrientes, la
      mayoría de los pacientes necesita tomar vitaminas bariátricas de por vida. Tomar los suplementos correctos a
      diario ayuda a mantener:</p>
      ${ul(['Huesos sanos', 'Un sistema inmunitario fuerte', 'Un metabolismo equilibrado', 'Niveles de energía estables'])}
      <p class="fine"><strong>Nota importante:</strong> Siga siempre las indicaciones de suplementación del Dr. Irfan
      Wadiwala o de su equipo de atención bariátrica, ya que las necesidades varían según el tipo de cirugía y las
      condiciones de salud de cada persona.</p>

      <h2 class="display bar">Preguntas Frecuentes</h2>
      ${faq([
        [
          '¿Qué son las vitaminas bariátricas?',
          '<p>Son suplementos diseñados especialmente para pacientes que se han sometido a cirugía de pérdida de peso. Reponen los nutrientes esenciales que el cuerpo ya no absorbe con eficacia después de procedimientos como el bypass gástrico o la gastrectomía en manga.</p>',
        ],
        [
          '¿Por qué debo tomar vitaminas después de la cirugía?',
          '<p>Porque la cirugía bariátrica modifica su sistema digestivo y reduce la capacidad del cuerpo para absorber nutrientes clave de los alimentos. Tomar vitaminas ayuda a prevenir deficiencias, favorece la cicatrización y mantiene su salud a largo plazo.</p>',
        ],
        [
          '¿Por cuánto tiempo necesitaré tomarlas?',
          '<p>Normalmente de por vida. El uso constante es esencial para prevenir complicaciones a largo plazo y mantener una salud óptima.</p>',
        ],
        [
          '¿En qué presentaciones vienen?',
          '<p>Nuestros suplementos Bariatric Fusion® están disponibles en forma líquida, masticable y en cápsula, para que elija la que más le convenga.</p>',
        ],
        [
          '¿Puedo comprarlas en línea?',
          '<p>¡Sí! Puede comprar vitaminas Bariatric Fusion® directamente a través de nuestro sitio web o recogerlas en nuestra oficina de Spring, TX.</p>',
        ],
      ])}

      <h2 class="display bar">Por Qué Elegirnos para Sus Suplementos</h2>
      ${ul([
        'Orientación experta del Dr. Wadiwala y nuestro equipo bariátrico',
        'Marcas confiables como Bariatric Fusion® con resultados comprobados',
        'Precios accesibles y compra conveniente en la oficina',
        'Recomendaciones personalizadas según su cirugía y sus necesidades de salud',
        'Apoyo continuo durante todo su camino',
      ])}
    `,
  },

  'pre-op-and-post-op': {
    title: 'Dieta Preoperatoria y Postoperatoria',
    seoTitle: 'Dieta Pre y Postoperatoria Bariátrica | Houston, TX',
    tagline: 'El ayuno líquido de dos semanas antes de la cirugía, y las cuatro etapas después.',
    description:
      'El ayuno líquido proteico preoperatorio y las cuatro etapas de la dieta posoperatoria para los pacientes de cirugía bariátrica en Houston Surgical Weight Loss.',
    body: `
      <h2 class="display bar">Ayuno Líquido Proteico Preoperatorio</h2>
      <h3>¿Cuándo Comienza la Dieta Preoperatoria?</h3>
      ${ul([
        'Comienza 2 semanas antes de la fecha programada de su cirugía.',
        'Sin "días libres" ni "fines de semana de descanso". La constancia es la clave del éxito.',
      ])}

      <h3>¿Por Qué Es Importante?</h3>
      <p>La dieta preoperatoria cumple tres propósitos esenciales:</p>
      ${ol([
        '<strong>Reducir el hígado</strong> — un hígado más pequeño deja más espacio en el abdomen para que el cirujano maniobre la cámara laparoscópica con seguridad. Si el hígado es demasiado grande, la cirugía puede posponerse por su seguridad.',
        '<strong>Aumentar la seguridad de la cirugía</strong> — reducir el tamaño del hígado disminuye el riesgo de complicaciones durante el procedimiento.',
        '<strong>Iniciar la pérdida de peso</strong> — el paciente promedio pierde de 10 a 15 libras en estas dos semanas, lo que prepara al cuerpo para los cambios que vienen.',
      ])}

      <h3>Qué Puede Comer y Beber</h3>
      <p>Durante el ayuno líquido preoperatorio, concéntrese en líquidos claros, altos en proteína y bajos en azúcar.
      Se permiten:</p>
      ${ul([
        '<strong>Agua:</strong> al menos 8 vasos al día.',
        '<strong>Batidos de proteína bajos en azúcar:</strong> Premier Protein, Fairlife Protein, Ensure Max, Atkins Advantage, etc.',
        '<strong>Caldos claros:</strong> de pollo, res o verduras.',
        'Leche al 1% o descremada',
        'Gelatina sin azúcar (Jell-O)',
        'Paletas heladas sin azúcar',
        'Yogur bajo en azúcar o yogur griego',
        'Té descafeinado',
        '<strong>Bebidas con electrolitos:</strong> Gatorade Zero o Crystal Light',
      ])}

      <hr class="mini-rule">

      <h2 class="display bar">Etapas de la Dieta Posoperatoria</h2>
      <p>Después de la cirugía, su estómago necesitará tiempo para sanar y adaptarse. Su dieta avanzará en cuatro
      etapas, comenzando con líquidos claros y pasando gradualmente a alimentos sólidos.</p>
      <p>Avanzar demasiado rápido o saltarse etapas puede causar complicaciones y retrasar su recuperación.</p>

      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Etapa 1: Líquidos Claros (Días 1–3)</h3>
          <p><strong>Objetivo:</strong> hidratar el cuerpo y favorecer la cicatrización inmediatamente después de la
          cirugía.</p>
          <p>Líquidos permitidos:</p>
          ${ul([
            'Agua',
            'Hielo picado',
            'Paletas heladas sin azúcar',
            'Jugos de fruta claros y diluidos (sin azúcar añadida)',
            'Gatorade Zero o Crystal Light',
          ])}
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>Etapa 2: Líquidos Completos (Días 4–14)</h3>
          <p><strong>Objetivo:</strong> aportar nutrientes esenciales mientras el estómago sigue sanando.</p>
          <p>Líquidos y alimentos suaves permitidos:</p>
          ${ul([
            'Batidos de proteína bajos en azúcar (Premier Protein, Fairlife, Ensure Max, etc.)',
            'Yogur bajo en azúcar o yogur griego',
            'Caldos claros o sopas licuadas',
            'Leche al 1% o descremada',
            'Pudín sin azúcar',
            'Papillas (consistencia suave)',
            'Jugo de fruta sin azúcar añadida',
          ])}
        </article>
        <article class="card">
          <span class="card-index">03</span>
          <h3>Etapa 3: Purés y Alimentos Suaves (Semanas 3–5)</h3>
          <p><strong>Objetivo:</strong> reintroducir alimentos suaves y nutritivos conforme el estómago se adapta.</p>
          <p>Alimentos permitidos:</p>
          ${ul([
            'Pollo y pescado tiernos (procesados si es necesario)',
            'Tofu suave',
            'Huevos revueltos',
            'Cereales calientes como avena o crema de trigo',
            'Frutas y verduras suaves o en puré',
            'Frijoles y legumbres machacados',
            'Lácteos bajos en grasa: requesón, yogur, leche descremada',
          ])}
        </article>
        <article class="card">
          <span class="card-index">04</span>
          <h3>Etapa 4: Alimentos Sólidos (Semana 6 en Adelante)</h3>
          <p><strong>Objetivo:</strong> pasar a una alimentación equilibrada y sostenible a largo plazo.</p>
          <p>Alimentos permitidos:</p>
          ${ul([
            'Proteínas magras (pollo, pescado, pavo, tofu)',
            'Frutas y verduras frescas',
            'Granos integrales con moderación',
            'Grasas saludables, principalmente insaturadas (aguacate, aceite de oliva, nueces)',
            'Lácteos bajos en grasa',
          ])}
        </article>
      </div>

      <h2 class="display bar">Cronograma de Progresión</h2>
      <div class="table-wrap">
        <table class="prose-table">
          <thead><tr><th>Etapa</th><th>Tiempo</th><th>Enfoque</th></tr></thead>
          <tbody>
            <tr><td>Etapa 1: Líquidos claros</td><td>Días 1–3</td><td>Hidratación y cicatrización</td></tr>
            <tr><td>Etapa 2: Líquidos completos</td><td>Días 4–14</td><td>Proteína y nutrientes esenciales</td></tr>
            <tr><td>Etapa 3: Purés y suaves</td><td>Semanas 3–5</td><td>Alimentos suaves y nutritivos</td></tr>
            <tr><td>Etapa 4: Alimentos regulares</td><td>Semana 6 – de por vida</td><td>Alimentación equilibrada</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="display bar">Preguntas Frecuentes</h2>
      ${faq([
        [
          '¿Por qué debo seguir la dieta preoperatoria tan estrictamente?',
          '<p>La dieta preoperatoria reduce el tamaño de su hígado, lo que permite a su cirujano realizar el procedimiento laparoscópico de forma segura y eficiente. Si el hígado es demasiado grande, la cirugía podría posponerse por su seguridad. Además, esta dieta inicia la pérdida de peso y prepara a su cuerpo para los cambios que vienen.</p>',
        ],
        [
          '¿Cuánta proteína debo consumir después de la cirugía?',
          '<p>Durante las primeras etapas de la recuperación, procure al menos 60 g de proteína al día. La proteína favorece la cicatrización y la reparación de tejidos, preserva el músculo y mantiene un metabolismo sano. Conforme avance, su dietista le dará una meta personalizada.</p>',
        ],
        [
          '¿Cuándo puedo volver a una dieta normal?',
          '<p>La mayoría de los pacientes pasa a una dieta regular en la semana 6. Sin embargo, es esencial seguir cada etapa con cuidado, introducir los alimentos poco a poco y en porciones pequeñas, y evitar aquellos que causen molestias o síndrome de vaciamiento rápido. Su equipo quirúrgico y su dietista vigilarán su progreso y le indicarán cuándo avanzar con seguridad.</p>',
        ],
      ])}

      <p class="fine"><strong>Seguimiento:</strong> las visitas regulares con su cirujano y su dietista son vitales
      para el éxito.</p>
    `,
  },

  'exercise-regimens': {
    title: 'Rutinas de Ejercicio',
    seoTitle: 'Ejercicio Después de la Cirugía Bariátrica | Houston',
    tagline: 'Actividad física antes y después de la cirugía — segura, gradual y constante.',
    description:
      'Rutinas de ejercicio antes y después de la cirugía bariátrica: cuándo empezar, qué hacer y cómo avanzar de forma segura.',
    body: `
      <h2 class="display bar">Actividad Física Antes y Después de la Cirugía</h2>
      <p class="intro">La actividad física regular juega un papel vital en el camino de la pérdida de peso. Combinada
      con una alimentación sana, le ayuda a lograr resultados duraderos y a mejorar su bienestar general.</p>
      <p>Ya sea que se esté preparando para la cirugía o recuperándose de ella, el ejercicio debe ser seguro, gradual
      y constante. Consulte siempre a su médico de cabecera y a su cirujano bariátrico antes de comenzar o cambiar su
      rutina, especialmente si tiene otras condiciones de salud.</p>

      <h2 class="display bar">Por Qué Es Importante</h2>
      <p>El ejercicio ofrece muchos beneficios físicos y emocionales, entre ellos:</p>
      ${ul([
        'Alivio del estrés y mejor estado de ánimo',
        'Mayor autoestima y función cognitiva',
        'Mejor salud cardiovascular y resistencia',
        'Preservación de la masa corporal magra (evita la pérdida de músculo)',
        'Mejor movilidad y salud funcional',
      ])}

      <h2 class="display bar">Antes de la Cirugía</h2>
      <p>Antes de su procedimiento:</p>
      ${ul([
        'Establezca una rutina de actividad física diaria, aunque sea una caminata de 20 a 30 minutos.',
        'Concéntrese en ejercicios de bajo impacto, seguros y sostenibles.',
        'Aproveche este tiempo para crear hábitos saludables que ayudarán en su recuperación y su éxito a largo plazo.',
        'Hable con su médico de cabecera para asegurarse de que los ejercicios elegidos sean seguros para su estado de salud actual.',
      ])}

      <h2 class="display bar">Después de la Cirugía</h2>
      <p>Una vez realizada su cirugía, su plan de actividad cambiará. Espere siempre la autorización de su cirujano
      antes de retomar el ejercicio.</p>
      <h3>Cronograma General</h3>
      ${ul([
        '<strong>Primera semana:</strong> la mayoría de los pacientes puede comenzar con caminatas ligeras al aire libre aproximadamente una semana después de la cirugía.',
        '<strong>Después de dos semanas:</strong> aumente gradualmente el ritmo y la duración de sus caminatas o sesiones de ejercicio ligero.',
        '<strong>Pesas o actividad intensa:</strong> espere hasta que su cirujano lo autorice por completo antes de añadir pesas o entrenamiento de resistencia. Incorporarlas demasiado pronto puede causar lesiones o retrasar la recuperación. Escuche a su cuerpo — si siente dolor o molestia, deténgase de inmediato y comuníquese con su médico.',
      ])}

      <h2 class="display bar">Tipos de Actividad Física</h2>
      <div class="card-grid">
        <article class="card">
          <span class="card-index">01</span>
          <h3>Actividad Moderada</h3>
          ${ul([
            'Caminar (ritmo de 20 minutos por milla)',
            'Baile de salón',
            'Tenis en dobles',
            'Ciclismo casual (10 MPH)',
            'Jardinería general',
          ])}
        </article>
        <article class="card">
          <span class="card-index">02</span>
          <h3>Actividad Intermedia</h3>
          ${ul([
            'Caminata rápida (35–40 minutos)',
            'Ejercicios de ritmo ágil que elevan ligeramente la frecuencia cardiaca',
          ])}
        </article>
        <article class="card">
          <span class="card-index">03</span>
          <h3>Actividad Vigorosa</h3>
          ${ul([
            'Marcha atlética o trote',
            'Tenis individual',
            'Baile aeróbico o clases de step',
            'Ciclismo a más de 10 MPH',
            'Jardinería pesada o trabajo de patio',
          ])}
        </article>
      </div>

      <h2 class="display bar">Consejos para Ejercitarse con Seguridad</h2>
      ${ul([
        'Comience despacio y aumente la intensidad poco a poco.',
        'Registre sus entrenamientos con una aplicación en su teléfono o en un calendario o cuaderno.',
        'Escuche siempre a su cuerpo — la molestia o el dolar agudo son señales para detenerse y pedir consejo.',
        'Manténgase hidratado y con buena nutrición para apoyar su recuperación y su energía.',
      ])}

      <h2 class="display bar">Preguntas Frecuentes</h2>
      ${faq([
        [
          '¿Cuándo puedo empezar a ejercitarme después de la cirugía?',
          '<p>La mayoría de los pacientes puede comenzar con caminatas ligeras aproximadamente una semana después de la cirugía, aunque el momento varía según el procedimiento y el proceso de cicatrización. Su cirujano evaluará su progreso y le dará luz verde para comenzar o aumentar su nivel de actividad. Nunca inicie ejercicios vigorosos o de fuerza hasta que esté completamente autorizado.</p>',
        ],
        [
          '¿Por qué es importante ejercitarme antes de la cirugía?',
          '<p>Comenzar una rutina antes de la cirugía ayuda a fortalecer su cuerpo y sus músculos, lo que facilita la recuperación; mejora la salud del corazón y los pulmones para una cirugía más segura; y establece hábitos que apoyan el éxito a largo plazo. Incluso caminatas diarias sencillas hacen una gran diferencia.</p>',
        ],
        [
          '¿Qué tipo de ejercicio es mejor después de la cirugía?',
          '<p>Al principio, concéntrese en actividades moderadas y de bajo impacto como caminar, andar en bicicleta y nadar (una vez que su cirujano lo autorice). Conforme avance, incorpore gradualmente entrenamiento de fuerza y cardio más vigoroso, como trotar o baile aeróbico. Evite levantar pesas pesadas o entrenamientos de alta intensidad hasta que su cirujano confirme que es seguro. Su equipo le ayudará a crear un plan adaptado a su nivel y a sus metas.</p>',
        ],
      ])}

      <h2 class="display bar">Resumen</h2>
      ${ul([
        '<strong>Antes de la cirugía:</strong> establezca una rutina con ejercicios seguros y de bajo impacto, como caminar.',
        '<strong>Después de la cirugía:</strong> comience despacio, empezando por caminar, y avance según le indique su cirujano.',
        'El ejercicio mejora el ánimo, preserva la masa muscular y favorece una pérdida de peso sostenible.',
        'Escuche siempre a su cuerpo y priorice la seguridad sobre la velocidad.',
      ])}
    `,
  },

  'discharge-instructions': {
    title: 'Instrucciones de Alta',
    seoTitle: 'Instrucciones de Alta Bariátrica | Houston, TX',
    tagline: 'Qué es normal, qué no lo es, y cómo cuidarse en las primeras semanas en casa.',
    description:
      'Instrucciones de alta bariátrica: síntomas normales, cuándo llamar a la oficina, hidratación, cuidado de incisiones, faja, medicamentos y actividad.',
    body: `
      <h2 class="display bar">Síntomas Normales (Primeras 1–2 Semanas)</h2>
      <p>Es común experimentar:</p>
      ${ul([
        'Náuseas',
        'Molestia o dolor leve',
        'Vómito o regurgitación',
        'Diarrea',
        'Estreñimiento durante la primera semana',
        'Presión en el pecho o dolor de hombro (por el gas quirúrgico)',
        'Dolor de garganta (por el tubo respiratorio durante la cirugía)',
      ])}

      <div class="alert-block">
        <h2 class="display bar">Cuándo Llamar de Inmediato</h2>
        <p>Comuníquese con nosotros de inmediato al <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a> si nota:</p>
        ${ul([
          'Fiebre superior a 100.1 °F con escalofríos o temblores',
          'Dolor abdominal intenso que no se alivia con el medicamento',
          'Dolor de pecho repentino e intenso o dificultad para respirar',
          'Más de 7 días sin evacuar',
          'Vómito o diarrea persistentes',
          'Secreción, hinchazón o enrojecimiento importante en las incisiones',
          'Sangrado de las incisiones que no se detiene',
          'Dolor, hinchazón, enrojecimiento o tensión en la pierna o el pie',
          'Incapacidad de orinar de 6 a 8 horas después de la cirugía',
          'Mareo, aturdimiento o desmayo',
        ])}
      </div>

      <h2 class="display bar">Hidratación — Su Prioridad Número 1</h2>
      ${ul([
        '<strong>Mujeres:</strong> al menos 48 oz de líquidos al día',
        '<strong>Hombres:</strong> al menos 64 oz de líquidos al día',
        'Beba a sorbos lentos y en pequeñas cantidades',
        'Evite los popotes y los tragos grandes',
        'Los líquidos fríos suelen tolerarse mejor',
      ])}
      <p>Levántese cada hora, camine algunas vueltas por la casa y use su espirómetro incentivo para hacer 3
      ejercicios de respiración profunda. Esto:</p>
      ${ul(['Alivia el gas quirúrgico (eructar y expulsar gases es normal)', 'Reduce el riesgo de coágulos'])}

      <h2 class="display bar">Cuidado de las Incisiones</h2>
      ${ul([
        'Después de 48 horas, retire la prenda quirúrgica y lave su abdomen con <strong>jabón antibacterial</strong> y una esponja',
        'Una pequeña cantidad de sangre en la prenda es normal; si se empapa, llame a la oficina',
        'Solo báñese en regadera hasta que se le autorice tina, alberca o jacuzzi',
        'Lave suavemente con <strong>movimientos circulares pequeños</strong> para proteger las incisiones',
      ])}

      <h2 class="display bar">Uso de la Faja</h2>
      ${ul([
        'Use su faja durante <strong>1 mes después de la cirugía</strong>',
        'Ayuda a reducir la molestia abdominal y favorece la cicatrización',
        '<strong>No</strong> necesita usarla para dormir',
      ])}

      <h2 class="display bar">Medicamentos y Cuidados en Casa</h2>
      ${ul([
        'Tome los medicamentos para el dolor y las náuseas según lo recetado durante los primeros 3 días, después según los necesite',
        'Los medicamentos más grandes que la cabeza de un alfiler deben <strong>triturarse o tomarse en forma líquida</strong> durante el primer mes',
        'Si toma medicamento para diabetes o presión arterial: revise su glucosa o su presión antes de cada dosis',
        'Continúe usando su <strong>CPAP o BiPAP</strong> salvo que su médico indique lo contrario',
      ])}

      <h2 class="display bar">Actividad</h2>
      ${ul([
        'No levante más de <strong>10 libras</strong> durante las primeras 2 semanas',
        'Evite los ejercicios abdominales hasta que su médico lo autorice',
        'Primer mes: comience con caminatas diarias y avance a caminata rápida o trote ligero',
      ])}
    `,
  },

  'for-out-of-town-patients': {
    title: 'Para Pacientes de Fuera de la Ciudad',
    seoTitle: 'Pacientes Bariátricos de Fuera | Houston, TX',
    tagline: 'Viajar a Houston para su cirugía — dónde hospedarse, comer y aterrizar.',
    description:
      'Viajar a Houston para la cirugía de pérdida de peso: hoteles, restaurantes, aeropuertos y centros comerciales cerca de nuestra oficina en Spring, TX.',
    body: `
      <h2 class="display bar">Viajar a Houston para Su Cirugía</h2>
      <p class="intro">En Houston Surgical Weight Loss ofrecemos cirugía general, laparoscópica y bariátrica avanzada,
      con énfasis en la seguridad, la precisión y una recuperación más rápida. Dirigido por el Dr. Irfan Wadiwala,
      nuestro equipo brinda atención personalizada para ayudarle a lograr mejor salud y resultados duraderos.</p>

      <h2 class="display bar">Hoteles</h2>
      ${ul([
        '<strong>Holiday Inn Express &amp; Suites Spring – Woodlands Area by IHG</strong><br>21606 Spring Plaza Dr, Spring, TX 77388 <em>(4.1 millas de la oficina)</em>',
        '<strong>Courtyard by Marriott Houston City Place</strong><br>22742 Holzwarth Rd, Spring, TX 77389 <em>(4.3 millas de la oficina)</em>',
        '<strong>Residence Inn by Marriott Houston City Place</strong><br>22814 Holzwarth Rd, Spring, TX 77389 <em>(4.3 millas de la oficina)</em>',
      ])}

      <h2 class="display bar">Restaurantes</h2>
      ${ul([
        '<strong>The Toasted Yolk Cafe</strong><br>6705 Grand Pkwy, Spring, TX 77389 <em>(2.3 millas de la oficina)</em>',
        "<strong>Uncle Julio's</strong><br>6835 Grand Pkwy, Spring, TX 77389 <em>(2.2 millas de la oficina)</em>",
        '<strong>Salata</strong><br>6630 Spring Stuebner Rd Suite No. 500, Spring, TX 77389 <em>(2.0 millas de la oficina)</em>',
      ])}

      <h2 class="display bar">Aeropuertos</h2>
      ${ul([
        '<strong>George Bush Intercontinental Airport</strong><br>2800 N Terminal Rd, Houston, TX 77032 <em>(19.4 millas de la oficina)</em>',
        '<strong>William P. Hobby Airport</strong><br>7800 Airport Blvd, Houston, TX 77061 <em>(36.9 millas de la oficina)</em>',
      ])}

      <h2 class="display bar">Centros Comerciales</h2>
      ${ul([
        '<strong>The Woodlands Mall</strong><br>1201 Lake Woodlands Dr Suite 700, The Woodlands, TX 77380 <em>(16 millas de la oficina)</em>',
        '<strong>Grand Parkway Marketplace</strong><br>6635 Spring Stuebner Rd, Spring, TX 77389 <em>(1.8 millas de la oficina)</em>',
        '<strong>Market Street</strong><br>9595 Six Pines Dr, The Woodlands, TX 77380 <em>(12.6 millas de la oficina)</em>',
      ])}
    `,
  },
};

// Lantern is long enough, and its 173-name employer list reusable enough, to
// live in its own module.
translations.lantern = require('./lantern.es.js').page;

module.exports = { translations, ul, ol, faq, PHONE, PHONE_HREF };
