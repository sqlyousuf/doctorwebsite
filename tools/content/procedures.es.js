/*
 * Spanish translations of the procedure pages.
 *
 * Each body mirrors its English original block for block — same headings, same
 * list lengths, same FAQ count — because tools/build-procedures.js compares the
 * two and fails the build if they drift. The English side is the practice's own
 * clinical copy, so nothing is added, dropped or softened here; this is the
 * same text in Spanish.
 *
 * Voice: formal "usted", matching the rest of the Spanish site. Product and
 * procedure brand names stay as they are — LAP-BAND®, Nissen, Roux-en-Y.
 */

const ul = (items) => `<ul class="prose-list">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;

const translations = {
  'gastric-sleeve': {
    title: 'Especialista en Gastrectomía en Manga en Houston, TX',
    seoTitle: 'Manga Gástrica en Houston, TX | Gastrectomía en Manga',
    tagline: 'Gastrectomía en manga laparoscópica con el Dr. Irfan Wadiwala.',
    description:
      'Cirugía de manga gástrica en Houston, TX con el Dr. Irfan Wadiwala, cirujano bariátrico certificado. Aceptamos la mayoría de los seguros.',
    stats: [
      ['Hasta 70%', 'del exceso de peso perdido en el primer año'],
      ['70–80%', 'del estómago retirado'],
      ['El mismo día', 'la mayoría de los pacientes regresa a casa'],
      ['2–4 semanas', 'para retomar la rutina normal'],
    ],
    body: `
      <p>Si la dieta y el ejercicio por sí solos no le han dado resultados duraderos, la gastrectomía en manga puede
      ser la solución segura y eficaz que busca para bajar de peso de forma sostenible.</p>
      <p>En Houston Surgical Weight Loss, el Dr. Irfan Wadiwala, cirujano bariátrico con subespecialidad y certificado
      por la junta médica, se especializa en la gastrectomía en manga laparoscópica. Este procedimiento mínimamente
      invasivo ayuda a los pacientes a perder <strong>hasta el 70% de su exceso de peso corporal durante el primer
      año</strong>, mejorando además las condiciones de salud relacionadas con la obesidad.</p>
      <p>Llame al <strong>(281) 653-6544</strong> o programe una consulta en línea hoy mismo para saber si la
      gastrectomía en manga es el paso correcto hacia una vida más sana.</p>

      <h2 class="display bar">¿Qué es la Gastrectomía en Manga?</h2>
      <p>La gastrectomía en manga, también llamada cirugía de manga gástrica, es un procedimiento bariátrico
      mínimamente invasivo aprobado por la FDA. Durante la cirugía se retira una gran parte del estómago, dejando una
      bolsa gástrica más pequeña con forma de manga.</p>
      <p>Esta nueva bolsa:</p>
      ${ul([
        'Reduce de forma significativa la cantidad de alimento que cabe',
        'Le ayuda a sentirse satisfecho con porciones más pequeñas',
        'Disminuye el apetito al reducir la producción de grelina, la hormona del hambre',
        'Favorece una pérdida de peso constante y a largo plazo',
      ])}
      <p>A diferencia de otros procedimientos para bajar de peso, la gastrectomía en manga no implica redirigir los
      intestinos, lo que la convierte en una opción más sencilla y a la vez muy eficaz para muchos pacientes.</p>

      <h2 class="display bar">Beneficios de la Gastrectomía en Manga</h2>
      <p>Elegir la gastrectomía en manga tiene ventajas importantes:</p>
      ${ul([
        'Procedimiento laparoscópico mínimamente invasivo',
        'Alta tasa de éxito con pérdida de peso a largo plazo',
        'Mejora o resuelve condiciones relacionadas con la obesidad (diabetes, apnea del sueño, hipertensión)',
        'Sin dispositivos implantados, a diferencia de la banda LAP-BAND®',
        'Sin redirección de los intestinos, a diferencia del bypass gástrico',
        'Menos hambre gracias a la menor producción de grelina',
      ])}
      <p>Para muchos pacientes, estos beneficios hacen de la gastrectomía en manga una herramienta poderosa para
      controlar el peso de forma duradera.</p>

      <h2 class="display bar">Qué Esperar Durante el Procedimiento</h2>
      <p>En Houston Surgical Weight Loss, el Dr. Wadiwala utiliza técnicas laparoscópicas avanzadas para lograr menos
      dolor, una cicatrización más rápida y cicatrices más pequeñas.</p>
      <p>Proceso paso a paso:</p>
      ${ul([
        'Se realizan pequeñas incisiones en el abdomen.',
        'Se introducen los instrumentos quirúrgicos y un laparoscopio.',
        'Se retira aproximadamente el 70–80% del estómago.',
        'El estómago restante toma la forma de un tubo estrecho, o manga.',
      ])}
      <p>Esta bolsa gástrica más pequeña reduce la cantidad de alimento que se consume y disminuye el apetito de forma
      natural, sin necesidad de redirigir el tracto digestivo.</p>

      <h2 class="display bar">La Recuperación Después de la Cirugía</h2>
      <p>Como la cirugía es mínimamente invasiva, la mayoría de los pacientes se recupera de forma rápida y segura.</p>
      <p>Qué esperar:</p>
      ${ul([
        'La mayoría de los pacientes regresa a casa el mismo día.',
        'Las incisiones pequeñas sanan más rápido, reduciendo el tiempo de inactividad',
        'Retorno a actividades ligeras en 1–2 semanas',
        'Retorno a la rutina normal en 2–4 semanas',
        'La pérdida de peso a largo plazo comienza durante los primeros meses',
      ])}
      <p>Los pacientes suelen experimentar menos dolor, menos complicaciones y una recuperación más cómoda que con
      procedimientos más invasivos.</p>

      <h2 class="display bar">¿Es la Gastrectomía en Manga Adecuada para Usted?</h2>
      <p>Puede ser candidato a la gastrectomía en manga si usted:</p>
      ${ul([
        'Tiene un IMC de 35 o más con enfermedades asociadas',
        'Tiene un IMC de 40 o más sin enfermedades asociadas',
        'No ha logrado una pérdida de peso significativa solo con dieta y ejercicio',
        'Está comprometido con cambios de estilo de vida a largo plazo',
        'Desea una solución permanente, sin implantes ni redirección intestinal',
      ])}
      <p>Durante su consulta, el Dr. Wadiwala revisará con detenimiento su historial médico y sus metas de pérdida de
      peso para determinar si la gastrectomía en manga es su mejor opción.</p>

      <h2 class="display bar">Por Qué Elegir Houston Surgical Weight Loss</h2>
      ${ul([
        'Cirujano bariátrico certificado y con subespecialidad, con más de dos décadas de experiencia',
        'Especialista en cirugía de pérdida de peso laparoscópica mínimamente invasiva',
        'Planes de atención personalizados según sus metas',
        'Apoyo integral antes, durante y después de la cirugía',
        'Opciones de consulta por telemedicina y en la oficina',
      ])}
      <p>Nuestra misión es ayudarle a lograr una pérdida de peso segura y duradera, con el apoyo que usted merece.</p>
    `,
    faqs: [
      [
        '¿Cómo ayuda la gastrectomía en manga a bajar de peso?',
        '<p>Al reducir el tamaño del estómago y disminuir los niveles de la hormona del hambre, la gastrectomía en manga le ayuda a comer menos, sentirse satisfecho antes y bajar de peso de forma constante.</p>',
      ],
      [
        '¿Es segura la gastrectomía en manga?',
        '<p>Sí. Es uno de los procedimientos bariátricos más realizados en el mundo, con seguridad y eficacia comprobadas.</p>',
      ],
      [
        '¿La gastrectomía en manga es permanente?',
        '<p>Sí. A diferencia de la banda LAP-BAND®, este procedimiento no es reversible, ya que se retira parte del estómago.</p>',
      ],
      [
        '¿Cuánto dura la recuperación?',
        '<p>La mayoría de los pacientes retoma actividades ligeras en 1–2 semanas y su rutina normal en 2–4 semanas.</p>',
      ],
      [
        '¿Necesitaré vitaminas o suplementos después de la cirugía?',
        '<p>Sí. Los pacientes normalmente necesitan un multivitamínico diario, calcio y vitamina B12 para cuidar su salud a largo plazo.</p>',
      ],
      [
        '¿Cuándo veré resultados?',
        '<p>Muchos pacientes pierden entre el 60 y el 70% de su exceso de peso durante el primer año, sobre todo si lo acompañan de cambios saludables en su estilo de vida.</p>',
      ],
    ],
  },

  'gastric-bypass': {
    title: 'Especialista en Bypass Gástrico en Houston, TX',
    seoTitle: 'Bypass Gástrico en Houston, TX | Y de Roux',
    tagline: 'Bypass gástrico en Y de Roux, realizado por laparoscopia.',
    description:
      'Bypass gástrico laparoscópico (Y de Roux) en Houston, TX con el Dr. Irfan Wadiwala, cirujano bariátrico certificado.',
    stats: [
      ['60–80%', 'del exceso de peso corporal perdido'],
      ['12–18 meses', 'para alcanzar esos resultados'],
      ['1–2 días', 'la mayoría regresa a casa'],
      ['2–4 semanas', 'para retomar la rutina normal'],
    ],
    body: `
      <p>Si ha luchado contra la obesidad y no ha logrado resultados duraderos con dieta, ejercicio o métodos no
      quirúrgicos, el bypass gástrico puede ser la solución segura y eficaz para bajar de peso a largo plazo.</p>
      <p>En Houston Surgical Weight Loss, el cirujano bariátrico con subespecialidad y certificado por la junta médica
      Dr. Irfan Wadiwala realiza el bypass gástrico por laparoscopia para ayudar a los pacientes a perder peso de forma
      significativa y mejorar las condiciones asociadas a la obesidad. Muchos pacientes pierden
      <strong>entre el 60 y el 80% de su exceso de peso corporal durante los primeros 12 a 18 meses</strong> después de
      la cirugía.</p>
      <p>Llame al <strong>(281) 653-6544</strong> o programe su consulta en línea hoy mismo para saber si el bypass
      gástrico es el paso correcto hacia un futuro más saludable.</p>

      <h2 class="display bar">¿Qué es el Bypass Gástrico?</h2>
      <p>El <strong>bypass gástrico</strong> (también conocido como <strong>bypass gástrico en Y de Roux</strong>) es
      un procedimiento para bajar de peso mínimamente invasivo y aprobado por la FDA. Durante la cirugía:</p>
      ${ul([
        'Se crea una bolsa gástrica pequeña para limitar la cantidad de alimento que puede comer.',
        'Se redirige el intestino delgado para evitar una parte del tracto digestivo.',
      ])}
      <p>Este proceso no solo reduce la ingesta de alimentos, sino que también cambia la forma en que su cuerpo absorbe
      calorías y nutrientes, lo que lleva a una pérdida de peso más rápida y sostenible.</p>

      <h3>Beneficios del Bypass Gástrico</h3>
      <p>Los pacientes suelen elegir el bypass gástrico por su eficacia comprobada. Sus beneficios principales
      incluyen:</p>
      ${ul([
        'Pérdida de peso significativa y duradera',
        'Resolución o mejora de condiciones como diabetes tipo 2, apnea del sueño e hipertensión',
        'Procedimiento laparoscópico mínimamente invasivo',
        'Recuperación más rápida que con cirugía abierta',
        'Larga trayectoria de seguridad y éxito en la atención bariátrica',
      ])}

      <h2 class="display bar">Qué Esperar Durante el Procedimiento</h2>
      <p>En Houston Surgical Weight Loss, el Dr. Wadiwala realiza el bypass gástrico con técnicas laparoscópicas, que
      solo requieren incisiones pequeñas.</p>
      <p>Paso a paso:</p>
      ${ul([
        'Se crea una bolsa gástrica pequeña que contiene menos alimento.',
        'Se conecta una sección del intestino delgado a la bolsa, evitando parte del tracto digestivo.',
        'Esta redirección reduce la absorción de calorías y le ayuda a sentirse satisfecho antes.',
      ])}
      <p>Al ser mínimamente invasivo:</p>
      ${ul(['El dolor es menor', 'La recuperación es más rápida', 'Las cicatrices son mínimas'])}

      <h2 class="display bar">La Recuperación Después del Bypass Gástrico</h2>
      <p>La recuperación suele ser más rápida con técnicas laparoscópicas, aunque es más compleja que con la banda
      gástrica, debido a la redirección digestiva.</p>
      <p>Qué esperar:</p>
      ${ul([
        'Muchos pacientes regresan a casa en 1–2 días',
        'Retorno a las actividades normales en 2–4 semanas',
        'Etapas dietéticas especiales (líquidos → purés → suaves → alimentos regulares)',
        'Se requiere suplementación vitamínica de por vida para evitar deficiencias',
      ])}
      <p>La mayoría de los pacientes nota una pérdida de peso significativa durante el primer año, junto con mejoras en
      los problemas de salud relacionados con la obesidad.</p>

      <h2 class="display bar">¿Es el Bypass Gástrico Adecuado para Usted?</h2>
      <p>Puede ser candidato si usted:</p>
      ${ul([
        'Tiene un IMC de 40 o más, o de 35 o más con condiciones asociadas a la obesidad (diabetes, apnea del sueño, hipertensión, etc.)',
        'No ha logrado una pérdida de peso sostenida con dieta, ejercicio o medicamentos',
        'Está comprometido con cambios de estilo de vida y de alimentación a largo plazo',
        'Busca una solución comprobada y duradera para la obesidad y sus riesgos de salud',
      ])}
      <p>Durante su consulta, el Dr. Wadiwala revisará su historial médico, su estilo de vida y sus metas para
      determinar si el bypass gástrico es adecuado para usted.</p>

      <h2 class="display bar">Por Qué Elegir Houston Surgical Weight Loss</h2>
      ${ul([
        'Cirujano bariátrico certificado y con subespecialidad, con más de dos décadas de experiencia',
        'Especialista en bypass gástrico laparoscópico mínimamente invasivo',
        'Historial comprobado ayudando a los pacientes a lograr resultados que cambian vidas',
        'Atención personalizada, desde la consulta inicial hasta el seguimiento de por vida',
        'Consultas por telemedicina y en la oficina para el acompañamiento continuo',
      ])}
    `,
    faqs: [
      [
        '¿Cómo ayuda el bypass gástrico a bajar de peso?',
        '<p>Limita la ingesta de alimentos al crear una bolsa gástrica pequeña y reduce la absorción de calorías al evitar parte del tracto digestivo.</p>',
      ],
      [
        '¿Es seguro el bypass gástrico?',
        '<p>Sí. Es una de las cirugías bariátricas más comunes y mejor estudiadas, con una larga trayectoria de seguridad y eficacia.</p>',
      ],
      [
        '¿Necesitaré tomar vitaminas después de la cirugía?',
        '<p>Sí. Como la absorción se reduce, los pacientes necesitan tomar suplementos diarios para prevenir deficiencias.</p>',
      ],
      [
        '¿Cuánto dura la recuperación?',
        '<p>La mayoría de los pacientes retoma su rutina normal en 2–4 semanas, con seguimiento recomendado de por vida.</p>',
      ],
      [
        '¿Cuándo veré resultados?',
        '<p>Muchos pacientes pierden entre el 60 y el 80% de su exceso de peso en 12 a 18 meses. Las mejoras en condiciones como la diabetes y la hipertensión suelen aparecer en pocas semanas.</p>',
      ],
    ],
  },

  'gastric-balloon': {
    title: 'Especialista en Balón Gástrico en Houston, TX',
    seoTitle: 'Balón Gástrico en Houston, TX | Sin Cirugía',
    tagline: 'Una opción temporal y sin cirugía, colocada sin incisiones.',
    description:
      'Balón gástrico en Houston, TX: una opción temporal y no quirúrgica para bajar de peso, colocada y retirada por endoscopia.',
    stats: [
      ['30–40%', 'del exceso de peso corporal perdido'],
      ['6–12 meses', 'que el balón permanece colocado'],
      ['2–3 días', 'para volver al trabajo y la rutina'],
    ],
    body: `
      <p>Si la dieta y el ejercicio por sí solos no le han dado resultados duraderos, el balón gástrico puede ser la
      solución segura y sin cirugía que estaba buscando.</p>
      <p>En Houston Surgical Weight Loss, el Dr. Irfan Wadiwala, cirujano bariátrico con subespecialidad y certificado
      por la junta médica, ofrece el procedimiento de balón gástrico para ayudar a los pacientes a bajar de peso y
      construir hábitos más saludables. Muchos pacientes obtienen resultados importantes: pierden
      <strong>hasta el 30–40% de su exceso de peso corporal en seis meses</strong>.</p>
      <p>Llame al <strong>(281) 653-6544</strong> o programe su consulta en línea hoy mismo para saber si el balón
      gástrico es la opción adecuada para usted.</p>

      <h2 class="display bar">¿Qué es el Balón Gástrico?</h2>
      <p>El balón gástrico es un procedimiento para bajar de peso no quirúrgico, mínimamente invasivo y aprobado por la
      FDA. Consiste en colocar dentro del estómago un balón blando y expandible que reduce la cantidad de alimento que
      puede comer de una sola vez.</p>
      <p>Este espacio gástrico más reducido:</p>
      ${ul([
        'Le ayuda a sentirse satisfecho más rápido',
        'Reduce el hambre entre comidas',
        'Favorece una pérdida de peso constante y sostenible',
      ])}
      <p>A diferencia de las cirugías bariátricas tradicionales, el balón gástrico:</p>
      ${ul([
        'No requiere incisiones, grapas ni redirección del sistema digestivo',
        'Es una herramienta temporal, que normalmente se retira después de 6–12 meses',
        'Ofrece una forma segura de iniciar cambios de estilo de vida duraderos',
      ])}

      <h2 class="display bar">Beneficios del Balón Gástrico</h2>
      <p>Elegir el balón gástrico tiene ventajas particulares:</p>
      ${ul([
        'No es quirúrgico y es mínimamente invasivo',
        'No produce cambios permanentes en su tracto digestivo',
        'Procedimiento ambulatorio y rápido',
        'Recuperación corta: la mayoría retoma sus actividades en 1–2 días',
        'Resultados eficaces con apoyo dietético y de estilo de vida estructurado',
        'Ayuda a establecer hábitos alimenticios más sanos para el éxito a largo plazo',
      ])}

      <h2 class="display bar">Qué Esperar Durante el Procedimiento</h2>
      <p>En Houston Surgical Weight Loss, el Dr. Wadiwala utiliza técnicas endoscópicas avanzadas y mínimamente
      invasivas.</p>
      <p>Proceso paso a paso:</p>
      ${ul([
        'Se coloca con cuidado un balón de silicona desinflado en el estómago, a través de la boca y con un endoscopio.',
        'Una vez colocado, el balón se llena con una solución salina estéril.',
        'El balón ocupa parte del estómago, dejando menos espacio para los alimentos.',
      ])}
      <p>Como el procedimiento no requiere incisiones y se realiza bajo sedación:</p>
      ${ul([
        'Normalmente toma entre 20 y 30 minutos',
        'Los pacientes regresan a casa el mismo día',
        'La recuperación es rápida y con molestias mínimas',
      ])}

      <h2 class="display bar">La Recuperación Después del Balón Gástrico</h2>
      <p>La recuperación del balón gástrico suele ser más sencilla que la de las opciones quirúrgicas para bajar de
      peso.</p>
      <p>Qué esperar:</p>
      ${ul([
        'Náuseas leves o cólicos estomacales durante algunos días, mientras su cuerpo se adapta',
        'Retorno gradual a la dieta normal, comenzando con líquidos',
        'La mayoría de los pacientes retoma el trabajo y sus actividades diarias en pocos días',
        'Seguimientos regulares para monitorear el progreso y ajustar el estilo de vida',
      ])}
      <p>Como el balón es temporal:</p>
      ${ul([
        'Normalmente se retira después de 6–12 meses',
        'Una alimentación sana y los cambios de estilo de vida son clave para mantener los resultados',
      ])}

      <h2 class="display bar">Cómo Aprovechar su Balón Gástrico</h2>
      <p>Una de las principales ventajas del balón gástrico es que funciona como una herramienta de entrenamiento para
      el control de porciones y la alimentación consciente.</p>
      ${ul([
        'El balón se retira al terminar su periodo de tratamiento (6–12 meses)',
        'Los pacientes continúan con la dieta, el ejercicio y las estrategias de conducta aprendidas durante el tratamiento',
        'El acompañamiento continuo del Dr. Wadiwala y su equipo asegura un control de peso duradero',
      ])}

      <h2 class="display bar">¿Es el Balón Gástrico Adecuado para Usted?</h2>
      <p>Puede ser un buen candidato si usted:</p>
      ${ul([
        'Tiene un IMC entre 30 y 40',
        'Ha tenido dificultades para bajar de peso solo con dieta y ejercicio',
        'Prefiere una opción temporal y sin cirugía',
        'Está comprometido con cambios de estilo de vida que favorezcan su salud a largo plazo',
      ])}
      <p>Durante su consulta, el Dr. Wadiwala revisará su historial médico y sus metas para determinar si el balón
      gástrico es la mejor opción para usted.</p>

      <h2 class="display bar">Por Qué Elegir Houston Surgical Weight Loss</h2>
      ${ul([
        'Cirujano bariátrico certificado y con subespecialidad, con más de dos décadas de experiencia',
        'Experiencia especializada en procedimientos no quirúrgicos y mínimamente invasivos',
        'Planes de atención personalizados según sus metas',
        'Apoyo integral, con orientación dietética y seguimientos',
        'Consultas convenientes por telemedicina y en la oficina',
      ])}
    `,
    faqs: [
      [
        '¿Cómo ayuda el balón gástrico a bajar de peso?',
        '<p>El balón reduce el espacio disponible en el estómago, lo que le ayuda a sentirse satisfecho más rápido y favorece porciones más pequeñas.</p>',
      ],
      [
        '¿Es seguro el balón gástrico?',
        '<p>Sí. Está aprobado por la FDA, no requiere incisiones y se considera uno de los procedimientos para bajar de peso más seguros que existen.</p>',
      ],
      [
        '¿Cuánto tiempo permanece colocado el balón?',
        '<p>Normalmente el balón se retira después de 6–12 meses.</p>',
      ],
      [
        '¿Necesitaré faltar al trabajo?',
        '<p>La mayoría de los pacientes retoma el trabajo y sus actividades normales en 2–3 días.</p>',
      ],
      [
        '¿Qué pasa después de retirar el balón?',
        '<p>Usted continúa con su plan de nutrición y estilo de vida para mantener la pérdida de peso a largo plazo.</p>',
      ],
    ],
  },

  'lap-band': {
    title: 'Especialista en Cirugía LAP-BAND® en Houston, TX',
    seoTitle: 'Banda Gástrica LAP-BAND en Houston, TX | Ajustable',
    tagline: 'Una banda ajustable y reversible, sin grapas ni redirección.',
    description:
      'Cirugía de banda gástrica ajustable LAP-BAND® en Houston, TX con el Dr. Irfan Wadiwala. Ajustable y reversible.',
    stats: [
      ['Hasta 65%', 'del exceso de peso corporal perdido'],
      ['1–2 semanas', 'para retomar las actividades normales'],
      ['Ajustable', 'y totalmente reversible'],
    ],
    body: `
      <p>Si ha tenido dificultades para bajar de peso solo con dieta y ejercicio, la cirugía LAP-BAND® puede ser la
      solución segura, eficaz y ajustable que estaba buscando.</p>
      <p>En Houston Surgical Weight Loss, el Dr. Irfan Wadiwala, cirujano bariátrico con subespecialidad y certificado
      por la junta médica, realiza la cirugía LAP-BAND por laparoscopia para ayudar a los pacientes a lograr una
      pérdida de peso sostenible. Con este procedimiento mínimamente invasivo, muchos pacientes pierden
      <strong>hasta el 65% de su exceso de peso corporal durante el primer año</strong>.</p>
      <p>Llame al <strong>(281) 653-6544</strong> o programe su consulta en línea hoy mismo para saber si la cirugía
      LAP-BAND es el paso correcto para usted.</p>

      <h2 class="display bar">¿Qué es la Cirugía LAP-BAND®?</h2>
      <p>La cirugía LAP-BAND es un procedimiento para bajar de peso mínimamente invasivo y aprobado por la FDA, que
      utiliza una banda ajustable especializada para reducir el tamaño del estómago.</p>
      <p>Esta bolsa gástrica más pequeña:</p>
      ${ul([
        'Limita la cantidad de alimento que puede comer de una sola vez',
        'Le ayuda a sentirse satisfecho más rápido',
        'Favorece una pérdida de peso gradual y saludable',
      ])}
      <p>A diferencia de otras cirugías bariátricas, la LAP-BAND:</p>
      ${ul([
        'No implica cortar ni redirigir el tracto digestivo',
        'Es ajustable, lo que permite adaptar el apoyo a su pérdida de peso',
        'Es reversible, dándole flexibilidad durante todo el proceso',
      ])}
      <p>El diseño ajustable de la LAP-BAND permite hacer cambios con el tiempo, según evolucionen su salud y sus
      necesidades.</p>

      <h2 class="display bar">Beneficios de la Cirugía LAP-BAND</h2>
      <p>Elegir la cirugía LAP-BAND tiene ventajas particulares:</p>
      ${ul([
        'Procedimiento laparoscópico mínimamente invasivo',
        'Recuperación más rápida que con otras cirugías bariátricas',
        'Menor riesgo de complicaciones quirúrgicas',
        'Totalmente ajustable sin necesidad de otra cirugía',
        'Reversible si fuera necesario',
        'Normalmente solo requiere un multivitamínico diario, a diferencia de otros procedimientos que necesitan varios suplementos',
      ])}
      <p>Esto convierte a la LAP-BAND en una excelente opción para pacientes que buscan flexibilidad y un control de
      peso a largo plazo.</p>

      <h2 class="display bar">Qué Esperar Durante el Procedimiento</h2>
      <p>En Houston Surgical Weight Loss, el Dr. Wadiwala utiliza técnicas laparoscópicas, lo que significa que solo se
      necesitan incisiones pequeñas.</p>
      <p>Proceso paso a paso:</p>
      ${ul([
        'Se realiza una pequeña incisión en el abdomen.',
        'El cirujano coloca una banda de silicona ajustable alrededor de la parte superior del estómago.',
        'Esto crea una sección superior más pequeña donde se acumula el alimento, permitiéndole sentirse satisfecho antes.',
        'Se coloca un reservorio de solución salina bajo la piel para poder hacer ajustes con el tiempo.',
        'La banda se puede apretar agregando solución salina o aflojar retirándola, sin necesidad de otra cirugía.',
      ])}
      <p>Gracias a este enfoque mínimamente invasivo:</p>
      ${ul(['Los pacientes sienten menos dolor', 'La recuperación es más rápida y cómoda', 'Las cicatrices son mínimas'])}

      <h2 class="display bar">La Recuperación Después de la Cirugía</h2>
      <p>La recuperación de la cirugía LAP-BAND suele ser más rápida que la de otros procedimientos, porque el tracto
      digestivo no se altera de forma permanente.</p>
      <p>Qué esperar:</p>
      ${ul([
        'La mayoría de los pacientes regresa a casa el mismo día o en 24 horas',
        'Las incisiones pequeñas sanan rápido, reduciendo el tiempo de inactividad',
        'Menos dolor posoperatorio que con cirugía abierta',
        'Muchos pacientes retoman sus actividades normales en 1–2 semanas',
      ])}
      <p>Como el estómago y los intestinos no se alteran quirúrgicamente:</p>
      ${ul([
        'Se presentan menos complicaciones digestivas',
        'Las necesidades nutricionales son más sencillas: con frecuencia basta un multivitamínico diario',
      ])}

      <h2 class="display bar">Ajustes y Seguimiento de su LAP-BAND®</h2>
      <p>Una de las principales ventajas de la cirugía LAP-BAND es que se ajusta por completo a su progreso.</p>
      ${ul([
        'Los ajustes se hacen a través del reservorio de solución salina bajo la piel.',
        'La banda se aprieta o se afloja conforme avanza su proceso de pérdida de peso.',
        'Los ajustes son rápidos, sencillos y no requieren otra cirugía.',
      ])}
      <p>Esta flexibilidad asegura que su plan siga siendo eficaz y personalizado con el paso del tiempo.</p>

      <h2 class="display bar">¿Es la Cirugía LAP-BAND Adecuada para Usted?</h2>
      <p>Los candidatos ideales para la cirugía LAP-BAND suelen ser personas que:</p>
      ${ul([
        'Tienen un IMC de 40 o más, o de 35 o más con problemas de salud relacionados con el peso, como diabetes o apnea del sueño',
        'No han logrado una pérdida de peso duradera solo con dieta y ejercicio',
        'Están comprometidas con cambios de estilo de vida a largo plazo',
        'Prefieren una opción ajustable y reversible',
      ])}
      <p>Durante su consulta, el Dr. Wadiwala revisará su historial de salud y sus metas para determinar si la cirugía
      LAP-BAND es su mejor opción.</p>

      <h2 class="display bar">Por Qué Elegir Houston Surgical Weight Loss</h2>
      ${ul([
        'Cirujano bariátrico certificado y con subespecialidad, con más de dos décadas de experiencia',
        'Especialista en cirugía de pérdida de peso laparoscópica mínimamente invasiva',
        'Planes de atención personalizados según su salud y sus metas',
        'Acompañamiento continuo, con ajustes de la banda y monitoreo a largo plazo',
        'Consultas convenientes por telemedicina y citas en la oficina',
      ])}
    `,
    faqs: [
      [
        '¿Cómo ayuda la cirugía LAP-BAND a bajar de peso?',
        '<p>Al crear una bolsa gástrica más pequeña, la cirugía LAP-BAND limita la ingesta de alimentos, ayudándole a sentirse satisfecho antes y por más tiempo. Esto produce una pérdida de peso gradual y saludable.</p>',
      ],
      [
        '¿Es segura la cirugía LAP-BAND?',
        '<p>Sí. Está aprobada por la FDA y se considera una de las cirugías bariátricas más seguras, porque no implica cortar ni redirigir el sistema digestivo.</p>',
      ],
      [
        '¿Se puede retirar o ajustar la banda?',
        '<p>Por supuesto. La LAP-BAND es totalmente ajustable y reversible, lo que permite una atención personalizada y cambios con el tiempo sin procedimientos invasivos adicionales.</p>',
      ],
      [
        '¿Cuánto dura la recuperación?',
        '<p>La mayoría de los pacientes retoma sus actividades normales en 1–2 semanas, gracias al abordaje laparoscópico mínimamente invasivo.</p>',
      ],
      [
        '¿Necesitaré vitaminas especiales después de la cirugía?',
        '<p>A diferencia de otras cirugías para bajar de peso, los pacientes de LAP-BAND normalmente solo necesitan un multivitamínico diario.</p>',
      ],
      [
        '¿Cuándo veré resultados?',
        '<p>Muchos pacientes ven avances importantes durante el primer año, con frecuencia perdiendo hasta el 65% de su exceso de peso al combinarlo con alimentación sana y ejercicio regular.</p>',
      ],
    ],
  },

  'revision-bariatric-surgery': {
    title: 'Especialista en Cirugía Bariátrica de Revisión en Houston, TX',
    seoTitle: 'Cirugía Bariátrica de Revisión en Houston, TX',
    tagline: 'Cuando un procedimiento anterior no dio el resultado esperado.',
    description:
      'Cirugía bariátrica de revisión en Houston, TX por recuperación de peso, pérdida insuficiente, reflujo o complicaciones de una cirugía previa.',
    stats: [['2–3 semanas', 'para retomar las actividades normales']],
    body: `
      <p>Si su primera cirugía para bajar de peso no dio los resultados que esperaba, o si está teniendo
      complicaciones, la cirugía bariátrica de revisión puede ser la solución.</p>
      <p>En Houston Surgical Weight Loss, el Dr. Irfan Wadiwala, cirujano bariátrico con subespecialidad y certificado
      por la junta médica, se especializa en procedimientos de revisión seguros y eficaces que ayudan a los pacientes a
      recuperar su salud y lograr una pérdida de peso duradera. Ya sea que enfrente recuperación de peso, problemas
      médicos sin resolver o complicaciones de su primer procedimiento, la cirugía de revisión ofrece una segunda
      oportunidad.</p>
      <p>Llame al <strong>(281) 653-6544</strong> o programe su consulta en línea hoy mismo para saber si la cirugía de
      revisión es adecuada para usted.</p>

      <h2 class="display bar">Por Qué Elegir al Dr. Wadiwala para su Cirugía de Revisión</h2>
      ${ul([
        'Cirujano bariátrico con subespecialidad',
        'Amplia experiencia en procedimientos de revisión',
        'Técnicas avanzadas mínimamente invasivas',
        'Planificación quirúrgica personalizada',
        'Sólido seguimiento a largo plazo',
      ])}

      <h2 class="display bar">¿Qué es la Cirugía Bariátrica de Revisión?</h2>
      <p>La cirugía bariátrica de revisión se realiza cuando un procedimiento previo para bajar de peso no logró el
      resultado deseado o provocó complicaciones. Este procedimiento correctivo puede:</p>
      ${ul([
        'Atender la recuperación de peso después de una cirugía bariátrica',
        'Corregir complicaciones como deslizamiento de la banda, estrecheces o reflujo',
        'Mejorar condiciones médicas relacionadas con el peso, como diabetes, hipertensión o apnea del sueño',
        'Mejorar o reemplazar procedimientos antiguos con técnicas más eficaces',
      ])}
      <p>A diferencia de una cirugía bariátrica primaria, la cirugía de revisión se adapta a su historial médico
      particular y a sus necesidades actuales, lo que la convierte en un tratamiento altamente personalizado.</p>

      <h2 class="display bar">Beneficios de la Cirugía de Revisión</h2>
      <p>Elegir la cirugía de revisión trae varias ventajas importantes:</p>
      ${ul([
        'Ayuda a los pacientes a retomar una pérdida de peso sostenible',
        'Corrige problemas causados por un procedimiento anterior',
        'Mejora la calidad de vida y reduce los riesgos de salud asociados a la obesidad',
        'Aporta técnicas quirúrgicas actualizadas y avanzadas para mejores resultados',
        'Ofrece otra oportunidad de controlar el peso a largo plazo',
      ])}

      <h2 class="display bar">Motivos Comunes para una Revisión</h2>
      <p>El Dr. Wadiwala puede recomendar una cirugía de revisión si usted presenta:</p>
      ${ul([
        '<strong>Pérdida de peso insuficiente o recuperación del peso</strong> — el peso ha regresado a pesar de la cirugía previa.',
        '<strong>Complicaciones médicas</strong> — como reflujo, deficiencias nutricionales o problemas con la banda.',
        '<strong>Procedimientos antiguos</strong> — métodos como la banda LAP-BAND® pueden revisarse o convertirse en opciones más eficaces, como la manga gástrica o el bypass gástrico.',
      ])}

      <h2 class="display bar">Qué Esperar Durante el Procedimiento</h2>
      <p>La cirugía bariátrica de revisión normalmente se realiza con técnicas laparoscópicas mínimamente invasivas,
      que permiten incisiones más pequeñas, menos dolor y una recuperación más rápida. El abordaje dependerá de su
      cirugía original y de sus necesidades actuales. Las opciones pueden incluir:</p>
      ${ul([
        '<strong>Retiro o conversión de la banda</strong> — reemplazar una banda gástrica por manga o bypass.',
        '<strong>Conversión de manga a bypass</strong> — para pacientes con reflujo o resultados insuficientes.',
        '<strong>Revisión del bypass gástrico</strong> — ajustes para mejorar la restricción y la absorción.',
      ])}
      <p>Durante su consulta, el Dr. Wadiwala creará un plan quirúrgico personalizado que responda a sus dificultades y
      favorezca el éxito a largo plazo.</p>

      <h2 class="display bar">La Recuperación Después de la Revisión</h2>
      <p>Como la cirugía de revisión es más compleja que un procedimiento bariátrico inicial, los tiempos de
      recuperación pueden variar. Sin embargo, con técnicas mínimamente invasivas, la mayoría de los pacientes
      experimenta:</p>
      ${ul([
        'Estancias hospitalarias más cortas (1–3 días en promedio)',
        'Menos molestias posoperatorias',
        'Retorno gradual a las actividades diarias en 2–3 semanas',
        'Mejores resultados de salud con el seguimiento adecuado',
      ])}

      <h2 class="display bar">Acompañamiento a Largo Plazo</h2>
      <p>La cirugía de revisión es solo una parte de su proceso. En Houston Surgical Weight Loss ofrecemos:</p>
      ${ul([
        'Asesoría nutricional continua',
        'Visitas de seguimiento regulares para monitorear el progreso',
        'Apoyo con los cambios de estilo de vida para maximizar los resultados',
        'Acceso continuo a ajustes y atención personalizada',
      ])}
      <p>Este enfoque integral ayuda a asegurar que su revisión se traduzca en una pérdida de peso duradera y en un
      mayor bienestar.</p>

      <h2 class="display bar">¿Es la Cirugía de Revisión Adecuada para Usted?</h2>
      <p>Puede ser candidato si usted:</p>
      ${ul([
        'Se sometió antes a una cirugía bariátrica pero no logró resultados duraderos',
        'Ha tenido complicaciones como reflujo, deslizamiento de la banda o úlceras',
        'Ha recuperado peso después de un éxito inicial',
        'Está motivado a hacer cambios de estilo de vida a largo plazo para mejorar su salud',
      ])}
      <p>El Dr. Wadiwala revisará con cuidado su historial quirúrgico, su estado de salud actual y sus metas para
      determinar si la cirugía de revisión es su mejor opción. Pacientes de Houston, Spring y Cypress confían en
      nuestra clínica para procedimientos de revisión avanzados y atención personalizada. Nuestra ubicación facilita el
      acceso a pacientes de toda el área metropolitana de Houston.</p>

      <h2 class="display bar">Por Qué Elegir Houston Surgical Weight Loss</h2>
      ${ul([
        'Cirujano bariátrico certificado y con subespecialidad, con más de dos décadas de experiencia',
        'Experiencia especializada en procedimientos de revisión complejos',
        'Abordaje laparoscópico mínimamente invasivo para una recuperación más rápida',
        'Planes de atención personalizados según sus necesidades particulares',
        'Apoyo a largo plazo, desde la cirugía hasta los cambios de estilo de vida',
        'Consultas convenientes por telemedicina y citas en la oficina',
      ])}
    `,
    faqs: [
      [
        '¿Qué es un cirujano de revisión bariátrica y cuándo se necesita uno?',
        '<p>Un cirujano de revisión bariátrica es un especialista capacitado para corregir o mejorar cirugías de pérdida de peso previas que no lograron el resultado deseado o produjeron complicaciones. Los pacientes que han recuperado peso, que tienen síntomas persistentes como reflujo, o cuyos procedimientos anteriores no fueron eficaces pueden ser buenos candidatos. Realizada por un cirujano bariátrico con experiencia y subespecialidad, con técnicas avanzadas y mínimamente invasivas, la cirugía de revisión se considera segura y muy eficaz para restaurar la pérdida de peso a largo plazo y mejorar la salud general. Si busca un cirujano de revisión bariátrica cerca de usted, es importante elegir un profesional con experiencia comprobada en procedimientos complejos y un enfoque personalizado.</p>',
      ],
      [
        '¿Por qué alguien necesitaría una cirugía de revisión?',
        '<p>Puede ser necesaria por recuperación de peso, complicaciones o técnicas quirúrgicas antiguas que hoy resultan menos eficaces.</p>',
      ],
      [
        '¿Es segura la cirugía de revisión?',
        '<p>Sí. Aunque es más compleja que la primera cirugía, la revisión es segura cuando la realiza un cirujano bariátrico experimentado y certificado.</p>',
      ],
      [
        '¿Qué tipos de revisión existen?',
        '<p>Las opciones comunes incluyen convertir una banda LAP-BAND® en manga o bypass, revisar una manga para convertirla en bypass, o modificar un bypass gástrico para mejorar los resultados.</p>',
      ],
      [
        '¿Cuánto dura la recuperación?',
        '<p>Varía, pero muchos pacientes retoman sus actividades normales en 2–3 semanas.</p>',
      ],
      [
        '¿Necesitaré suplementos después de la revisión?',
        '<p>Sí. La mayoría de los pacientes de revisión necesita vitaminas y suplementos para cuidar su nutrición y prevenir deficiencias.</p>',
      ],
      [
        '¿Volveré a bajar de peso después de la revisión?',
        '<p>Muchos pacientes logran una pérdida de peso significativa y mejores resultados de salud tras la revisión, cuando la combinan con hábitos saludables.</p>',
      ],
    ],
  },

  'general-surgery': {
    title: 'Atención Quirúrgica Integral con Tecnología Avanzada en Houston',
    seoTitle: 'Cirugía General en Houston, TX | Hernia y Vesícula',
    tagline: 'Reparación de hernias, vesícula, apéndice y más.',
    description:
      'Cirugía general en Houston, TX: reparación de hernias, extirpación de vesícula, apendicectomía y más, con el Dr. Irfan Wadiwala.',
    stats: [
      ['1–3 semanas', 'de recuperación, por laparoscopia'],
      ['4–6 semanas', 'de recuperación, cirugía abierta'],
    ],
    body: `
      <p>En Houston Surgical Weight Loss, nuestro equipo se dedica a ofrecer atención quirúrgica general, laparoscópica
      y bariátrica integral. Nos enfocamos en el diagnóstico, el tratamiento y el manejo de condiciones médicas tanto
      comunes como complejas, procurando que cada paciente reciba una atención segura, eficaz y personalizada.</p>
      <p>Nuestros cirujanos colaboran estrechamente con los médicos que refieren y con otros especialistas para crear
      planes de tratamiento a la medida. Al combinar tecnología quirúrgica avanzada con una atención humana, buscamos
      reducir el tiempo de recuperación y maximizar los resultados.</p>

      <h2 class="display bar">Nuestros Servicios de Cirugía General</h2>
      <p>Ofrecemos una amplia gama de cirugías generales, con énfasis en técnicas mínimamente invasivas y
      laparoscópicas para lograr una cicatrización más rápida y menos molestias. Nuestros servicios incluyen reparación
      de hernias, extirpación de vesícula y cirugías intestinales para condiciones como cáncer de colon, enfermedad
      inflamatoria intestinal y diverticulitis. También realizamos cirugías de estómago, hígado, páncreas y bazo, con
      métodos avanzados que mejoran la recuperación y los resultados. Damos prioridad a los procedimientos
      laparoscópicos por sus incisiones más pequeñas, su recuperación más rápida y su menor dolor. Además, ofrecemos
      cirugías de piel y tejidos blandos, incluyendo biopsias, extirpación de tumores y tratamientos reconstructivos. A
      continuación, algunos de nuestros procedimientos más frecuentes.</p>

      <h3>Reparación de Hernias</h3>
      <p>Una hernia ocurre cuando un órgano o tejido empuja a través de un punto débil en la pared muscular que lo
      rodea.</p>
      <p>Las hernias ocurren con mayor frecuencia en:</p>
      ${ul([
        'El ombligo (hernia umbilical)',
        'La ingle (hernia inguinal)',
        'Alrededor de incisiones quirúrgicas previas (hernia ventral o incisional)',
      ])}
      <p>Entre las causas comunes están:</p>
      ${ul(['Obesidad', 'Levantar objetos pesados o esfuerzo físico intenso', 'Estreñimiento crónico', 'Tos o esfuerzo persistente'])}
      <p>Tratamiento: en Houston Surgical Weight Loss, el Dr. Wadiwala realiza reparaciones de hernia laparoscópicas
      mínimamente invasivas con un sistema de malla especializado.</p>
      <p>Ventajas de este abordaje:</p>
      ${ul(['Incisiones más pequeñas', 'Menos suturas', 'Recuperación más rápida', 'Menos molestias'])}
      <p>La mayoría de las reparaciones de hernia pueden realizarse de forma ambulatoria, con anestesia local o
      general.</p>

      <h3>Cirugía de Vesícula</h3>
      <p>La vesícula almacena la bilis, que ayuda a digerir las grasas.</p>
      <p>Cuando la química de la bilis se desequilibra, pueden formarse cálculos que causan:</p>
      ${ul(['Dolor abdominal repentino, con frecuencia después de comer', 'Náuseas o vómito', 'Indigestión o inflamación'])}
      <p>Los cálculos pueden obstruir los conductos biliares y provocar inflamación o infección. En casos graves, puede
      ser necesaria la extirpación quirúrgica de la vesícula (colecistectomía).</p>
      <p>Nuestro abordaje:</p>
      ${ul([
        '<strong>Cirugía laparoscópica de vesícula:</strong> mínimamente invasiva, con incisiones pequeñas y recuperación más rápida.',
        '<strong>Cirugía abierta tradicional:</strong> se utiliza en casos complejos o cuando es necesaria.',
      ])}
      <p>La cirugía laparoscópica deja menos cicatriz, acelera la recuperación y reduce el dolor.</p>

      <h3>Cirugía Intestinal (Intestino Delgado y Colon)</h3>
      <p>La cirugía intestinal puede ser necesaria por diversas condiciones, entre ellas:</p>
      ${ul([
        'Cáncer de colon o de recto',
        'Enfermedad inflamatoria intestinal',
        'Pólipos precancerosos',
        'Diverticulitis (bolsas infectadas en la pared del colon)',
        'Prolapso rectal',
      ])}
      <p>Procedimientos que ofrecemos:</p>
      ${ul([
        '<strong>Intestino delgado:</strong> extirpación de los segmentos enfermos y reconexión del tejido sano.',
        '<strong>Cirugía de colon:</strong> extirpación de las porciones afectadas para restaurar la función normal.',
      ])}
      <p>Siempre que es posible utilizamos técnicas laparoscópicas para reducir los tiempos de recuperación y los
      riesgos quirúrgicos.</p>

      <h3>Cirugía de Estómago</h3>
      <p>El estómago cumple un papel fundamental en la digestión. Algunas condiciones que pueden requerir cirugía
      incluyen:</p>
      ${ul(['Úlceras crónicas o sangrado', 'Cáncer de estómago', 'Reflujo grave (ERGE)'])}
      <p>Procedimientos comunes:</p>
      ${ul([
        '<strong>Gastrectomía:</strong> extirpación parcial o total del estómago.',
        '<strong>Funduplicatura de Nissen:</strong> un procedimiento antirreflujo mínimamente invasivo.',
      ])}
      <p>Nuestro objetivo es restaurar la función digestiva normal, dando prioridad a la comodidad y la recuperación del
      paciente.</p>

      <h3>Cirugía de Hígado</h3>
      <p>El hígado es vital para el metabolismo, la desintoxicación y el almacenamiento de nutrientes. Además, tiene la
      capacidad única de regenerarse después de la extirpación quirúrgica de tejido dañado.</p>
      <p>Motivos comunes para una cirugía de hígado:</p>
      ${ul([
        'Extirpación de tumores malignos',
        'Cirrosis avanzada',
        'Complicaciones de hepatitis',
        'Enfermedad hepática terminal',
        'Cáncer de hígado',
      ])}
      <p>Se puede extirpar hasta el 75% del hígado, y la regeneración completa suele ocurrir en cinco o seis
      semanas.</p>

      <h3>Cirugía de Bazo</h3>
      <p>El bazo cumple un papel importante en el combate a las infecciones y en el almacenamiento de sangre adicional.
      Sin embargo, puede extirparse de forma segura cuando es necesario.</p>
      <p>Motivos para extirpar el bazo (esplenectomía):</p>
      ${ul([
        'Traumatismo o lesión',
        'Cáncer',
        'Infecciones como malaria o mononucleosis',
        'Bazo agrandado que provoca complicaciones',
      ])}
      <p>Ofrecemos esplenectomía laparoscópica a los pacientes que califican, con incisiones más pequeñas y una
      recuperación más rápida que la cirugía abierta tradicional.</p>

      <h3>Cirugía de Piel y Tejidos Blandos</h3>
      <p>Los tejidos blandos incluyen músculos, ligamentos, tendones y grasa, mientras que las cirugías de piel
      atienden diversas condiciones externas.</p>
      <p>Los procedimientos comunes incluyen:</p>
      ${ul(['Biopsias de piel', 'Extirpación de lesiones o tumores'])}
    `,
    faqs: [
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
    ],
  },

  'laparoscopic-surgery': {
    title: 'Cirugía Laparoscópica — Mínimamente Invasiva, con Recuperación Más Rápida en Houston',
    seoTitle: 'Cirugía Laparoscópica en Houston, TX | Mínimamente Invasiva',
    tagline: 'Incisiones más pequeñas, menos dolor y un regreso más rápido.',
    description:
      'Cirugía laparoscópica mínimamente invasiva en Houston, TX con el Dr. Irfan Wadiwala: incisiones más pequeñas y recuperación más rápida.',
    stats: [['El mismo día', 'la mayoría de los pacientes regresa a casa']],
    body: `
      <p>En Houston Surgical Weight Loss nos especializamos en la cirugía laparoscópica en Houston, una técnica moderna
      y mínimamente invasiva que se utiliza ampliamente en procedimientos como la cirugía bariátrica, la extirpación de
      vesícula, la apendicectomía, la reparación de hernias y otras condiciones abdominales. Este abordaje avanzado
      emplea incisiones pequeñas e instrumentos guiados con precisión para reducir el dolor, minimizar las cicatrices y
      favorecer una cicatrización más rápida que la cirugía abierta tradicional. Muchos pacientes se benefician de
      estancias hospitalarias más cortas o del alta el mismo día, lo que les permite retomar sus actividades con mayor
      rapidez.</p>
      <p>El Dr. Irfan Wadiwala, cirujano con subespecialidad y certificado por la junta médica, con más de dos décadas
      de experiencia, aporta un amplio dominio de los procedimientos laparoscópicos avanzados y de pérdida de peso, con
      un enfoque firme en la seguridad del paciente, la precisión quirúrgica y el éxito a largo plazo. Su abordaje
      centrado en el paciente asegura que cada plan de tratamiento se adapte cuidadosamente a la condición de cada
      persona.</p>

      <h2 class="display bar">Por Qué la Cirugía Laparoscópica es la Opción Preferida</h2>
      <p>La cirugía laparoscópica, también conocida como cirugía mínimamente invasiva, utiliza incisiones pequeñas y un
      laparoscopio — un tubo delgado y flexible con una cámara diminuta en la punta — para ver y operar dentro del
      cuerpo. Esa cámara proyecta una imagen ampliada de los órganos abdominales en una pantalla, lo que permite al
      cirujano trabajar con una precisión excepcional sin necesidad de una gran incisión abierta.</p>
      <p>Entre las ventajas de la cirugía laparoscópica están:</p>
      ${ul([
        'Cicatrices más pequeñas y menos visibles',
        'Menos dolor y molestias después de la operación',
        'Menor riesgo de complicaciones como infecciones',
        'Estancias hospitalarias más cortas',
        'Regreso más rápido a las actividades diarias y al trabajo',
        'Menor tiempo total de recuperación',
      ])}
      <p>Esta técnica se desarrolló inicialmente para procedimientos ginecológicos y cirugías de vesícula, pero hoy se
      ha extendido a una amplia variedad de cirugías abdominales y de pérdida de peso.</p>

      <h2 class="display bar">Avances Continuos en la Cirugía Laparoscópica</h2>
      <p>Los procedimientos laparoscópicos de hoy son más seguros y eficaces que nunca. La relación entre riesgo y
      beneficio ha mejorado enormemente, lo que convierte a la cirugía laparoscópica en el estándar de atención para
      muchas condiciones.</p>
      ${ul([
        '<strong>Procedimientos repetidos:</strong> la cirugía laparoscópica puede realizarse con seguridad en pacientes con cirugías abiertas o laparoscópicas previas.',
        '<strong>Múltiples puntos de acceso:</strong> normalmente se realizan cinco incisiones pequeñas, con una algo más grande para permitir una entrada segura y evitar lesionar órganos.',
        '<strong>Técnicas avanzadas:</strong> hoy los cirujanos pueden realizar operaciones complejas, como procedimientos bariátricos y cirugías antirreflujo, con menos daño al tejido circundante.',
      ])}
      <p>Estos avances se traducen en mejores resultados, menos tiempo de recuperación y una experiencia más segura para
      el paciente.</p>

      <h2 class="display bar">Procedimientos Laparoscópicos que Realizamos</h2>
      <p>En Houston Surgical Weight Loss ofrecemos una gama completa de servicios laparoscópicos adaptados a las
      necesidades de cada paciente. Ya sea que necesite un procedimiento sencillo o una cirugía compleja, nuestro
      abordaje mínimamente invasivo está diseñado para la seguridad y la eficiencia.</p>

      <h3>Reparación Laparoscópica de Hernias</h3>
      <p>Las hernias ocurren cuando un tejido empuja a través de una zona débil de la pared muscular, con frecuencia en
      la ingle, el ombligo o cerca de incisiones quirúrgicas previas.</p>
      <p>Causas comunes:</p>
      ${ul([
        'Obesidad',
        'Levantar objetos pesados o esfuerzo físico',
        'Tos crónica o estreñimiento',
        'Cirugías abdominales previas',
      ])}
      <p>Ventajas de la reparación laparoscópica de hernias:</p>
      ${ul([
        'Incisiones más pequeñas y cicatrización mínima',
        'Menos suturas necesarias',
        'Recuperación más rápida y regreso pronto a la actividad normal',
        'Menos molestias que con la reparación abierta tradicional',
      ])}
      <p>La mayoría de los pacientes regresa a casa el mismo día, lo que la convierte en uno de los tratamientos más
      convenientes y eficaces disponibles.</p>

      <h3>Extirpación Laparoscópica de la Vesícula</h3>
      <p>La vesícula almacena la bilis que ayuda a la digestión. Cuando la bilis se desequilibra, pueden formarse
      cálculos que provocan:</p>
      ${ul(['Dolor abdominal repentino después de comer', 'Náuseas y vómito', 'Indigestión e inflamación'])}
      <p>La extirpación laparoscópica de la vesícula (colecistectomía) es el estándar de oro para tratar los problemas
      por cálculos biliares. Ofrece:</p>
      ${ul([
        'Incisiones pequeñas y precisas, con cicatrización mínima',
        'Recuperación más rápida y cómoda',
        'Menor riesgo de infección',
        'Cirugía ambulatoria en la mayoría de los casos',
      ])}
      <p>Si está investigando el costo de la extirpación laparoscópica de vesícula, nuestro equipo puede darle
      estimaciones claras y ayudarle con la cobertura del seguro y las opciones de financiamiento.</p>

      <h3>Cirugía Laparoscópica de Colon e Intestino</h3>
      <p>Las técnicas laparoscópicas son ideales para tratar condiciones del intestino delgado y del colon, entre
      ellas:</p>
      ${ul([
        'Cáncer de colon o de recto',
        'Enfermedad inflamatoria intestinal',
        'Diverticulitis',
        'Pólipos precancerosos',
        'Prolapso rectal',
      ])}
      <p>Ventajas:</p>
      ${ul([
        'Extirpación precisa del tejido afectado',
        'Conservación del tejido sano',
        'Recuperación más rápida que con cirugía abierta',
        'Cicatrices más pequeñas y menores tasas de complicación',
      ])}
      <p>Este abordaje mejora considerablemente la comodidad del paciente y su salud digestiva a largo plazo.</p>

      <h3>Cirugía Laparoscópica de Estómago</h3>
      <p>El estómago es esencial para la digestión y la absorción de nutrientes. Algunas condiciones pueden requerir
      intervención quirúrgica, como:</p>
      ${ul(['Reflujo grave (ERGE)', 'Úlceras gástricas crónicas', 'Cáncer de estómago'])}
      <p>Procedimientos comunes:</p>
      ${ul([
        '<strong>Funduplicatura de Nissen:</strong> un tratamiento mínimamente invasivo para la ERGE, que permite retomar la alimentación normal más rápido y sanar con mayor comodidad.',
        '<strong>Gastrectomía parcial o total:</strong> extirpación de parte o de todo el estómago cuando es necesario en condiciones complejas como el cáncer.',
      ])}

      <h3>Cirugía Laparoscópica para Bajar de Peso</h3>
      <p>La cirugía laparoscópica ha transformado por completo los procedimientos bariátricos, como:</p>
      ${ul(['Cirugía de manga gástrica', 'Bypass gástrico', 'Banda gástrica ajustable'])}
      <p>Estas cirugías son hoy más seguras, menos invasivas y más eficaces que nunca, y ayudan a los pacientes a
      obtener resultados duraderos con un tiempo de recuperación menor.</p>

      <h3>Otros Procedimientos Laparoscópicos</h3>
      <p>Nuestra experiencia también abarca:</p>
      ${ul([
        'Extirpación del bazo (esplenectomía) por traumatismo o ciertas condiciones médicas',
        'Apendicectomía (extirpación del apéndice)',
        'Extirpación de tumores hepáticos o resección de tejido',
        'Cirugía de páncreas por tumores o pancreatitis crónica',
      ])}
      <p>Cada procedimiento se planifica con cuidado para lograr los mejores resultados con la menor alteración posible
      del cuerpo. Los pacientes que buscan cirugía laparoscópica para bajar de peso en Houston suelen elegir opciones
      mínimamente invasivas por su menor riesgo, su recuperación más rápida y su éxito comprobado a largo plazo.</p>

      <h2 class="display bar">Laparoscópica frente a Cirugía Abierta</h2>
      <div class="table-wrap">
        <table class="prose-table">
          <thead><tr><th>Característica</th><th>Cirugía Laparoscópica</th><th>Cirugía Abierta</th></tr></thead>
          <tbody>
            <tr><td>Tamaño de la incisión</td><td>Incisiones pequeñas (½ pulgada o menos)</td><td>Incisión grande</td></tr>
            <tr><td>Cicatrización</td><td>Mínima, menos visible</td><td>Considerable, más notoria</td></tr>
            <tr><td>Tiempo de recuperación</td><td>1–3 semanas para la mayoría</td><td>4–6 semanas o más</td></tr>
            <tr><td>Estancia hospitalaria</td><td>Ambulatoria o 1 noche</td><td>Varias noches</td></tr>
            <tr><td>Riesgo de infección</td><td>Menor</td><td>Mayor</td></tr>
            <tr><td>Retorno a las actividades</td><td>Más rápido</td><td>Más lento</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="display bar">Tiempo de Recuperación</h2>
      <p>El tiempo de recuperación depende del procedimiento y de la salud del paciente:</p>
      ${ul([
        'Procedimientos sencillos (hernia, apéndice): 1–2 semanas',
        'Extirpación de vesícula: 1 semana o menos',
        'Cirugías complejas (colon, estómago): 3–4 semanas o más',
      ])}
      <p>La mayoría de los pacientes experimenta:</p>
      ${ul(['Menos dolor después de la cirugía', 'Mayor movilidad más pronto', 'Menos tiempo fuera del trabajo y la vida diaria'])}

      <h2 class="display bar">Costo y Seguro</h2>
      <p>El costo de la cirugía laparoscópica varía según el procedimiento, su complejidad y la cobertura del seguro.
      En Houston Surgical Weight Loss ofrecemos:</p>
      ${ul(['Estimaciones de costo transparentes', 'Ayuda con la verificación del seguro', 'Planes de financiamiento flexibles para pacientes de pago particular'])}
      <p>Muchos planes de seguro cubren las cirugías laparoscópicas cuando son médicamente necesarias. Nuestro personal
      le acompañará en cada paso, desde la planificación del costo hasta la recuperación.</p>

      <h2 class="display bar">Por Qué los Pacientes Confían en Nosotros</h2>
      ${ul([
        'Cirujano certificado y con subespecialidad, con más de dos décadas de experiencia.',
        'Experiencia en reparación laparoscópica de hernias, cirugía de vesícula, cirugía de colon y procedimientos bariátricos.',
        'Enfoque en técnicas mínimamente invasivas para mejores resultados y una recuperación más rápida.',
        'Planes de atención personalizados según la salud y el estilo de vida de cada paciente.',
        'Consultas convenientes por telemedicina y seguimiento integral.',
      ])}
    `,
    faqs: [
      [
        '¿Qué es la cirugía laparoscópica y por qué se prefiere?',
        '<p>Utiliza incisiones pequeñas y una cámara para lograr precisión, lo que se traduce en menos dolor, cicatrices más pequeñas y una recuperación más rápida que la cirugía abierta.</p>',
      ],
      [
        '¿Se puede repetir si ya tuve una cirugía abierta?',
        '<p>Sí. Las técnicas modernas permiten repetir cirugías laparoscópicas, incluso después de operaciones abiertas previas, con medidas de seguridad para proteger los órganos.</p>',
      ],
      [
        '¿Cuánto dura la recuperación?',
        `${ul([
          'Cirugía de hernia o apéndice: 1–2 semanas',
          'Extirpación de vesícula: alrededor de 1 semana',
          'Cirugía de colon o estómago: 3–4 semanas o más',
        ])}`,
      ],
      [
        '¿Cuál es el costo promedio de una extirpación laparoscópica de vesícula?',
        '<p>Los costos varían según el seguro y la complejidad. Ofrecemos estimaciones claras y opciones de financiamiento para pacientes de pago particular.</p>',
      ],
      [
        '¿El seguro cubre la cirugía laparoscópica?',
        '<p>Sí, la mayoría de los planes cubre las cirugías laparoscópicas médicamente necesarias. Nuestro equipo le ayuda a verificar la cobertura antes del procedimiento.</p>',
      ],
      [
        '¿Cómo sé si necesito cirugía general laparoscópica?',
        '<p>Si tiene dolor abdominal persistente, problemas digestivos o síntomas de hernia, programe una consulta para conocer sus opciones.</p>',
      ],
    ],
  },
};

/*
 * The English module embeds its FAQ accordion at the end of `body`, and the
 * parity check compares bodies — so fold the Spanish FAQs in the same way
 * rather than keeping them in a field the check never sees.
 */
const faq = (pairs) =>
  `<div class="faq-list">${pairs
    .map(
      ([q, a]) => `<details class="faq-item">
        <summary>${q}<span class="faq-icon" aria-hidden="true"></span></summary>
        ${a}
      </details>`
    )
    .join('')}</div>`;

for (const page of Object.values(translations)) {
  page.body =
    page.body.trimEnd() +
    '\n\n      <h2 class="display bar">Preguntas Frecuentes</h2>\n      ' +
    faq(page.faqs) +
    '\n    ';
  delete page.faqs;
}

module.exports = { translations };
