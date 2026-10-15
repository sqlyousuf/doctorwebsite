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
 * procedure brand names stay as they are — Nissen, Roux-en-Y.
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
        'Sin dispositivos implantados',
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
        'Etapas dietéticas especiales (líquidos → purés → suaves → alimentos regulares)',
        'Se requiere suplementación vitamínica de por vida para evitar deficiencias',
      ])}
      <p>Los pacientes suelen experimentar menos dolor, menos complicaciones y una recuperación más cómoda que con
      procedimientos más invasivos.</p>

      <h2 class="display bar">¿Es la Gastrectomía en Manga Adecuada para Usted?</h2>
      <p>Puede ser candidato a la gastrectomía en manga si usted:</p>
      ${ul([
        'Tiene un IMC de 30 o más con enfermedades asociadas',
        'Tiene un IMC de 35 o más sin enfermedades asociadas',
        'No ha logrado una pérdida de peso significativa solo con dieta y ejercicio',
        'Está comprometido con cambios de estilo de vida a largo plazo',
        'Desea una solución permanente, sin implantes ni redirección intestinal',
      ])}
      <p>Durante su consulta, el Dr. Wadiwala revisará con detenimiento su historial médico y sus metas de pérdida de
      peso para determinar si la gastrectomía en manga es su mejor opción.</p>
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
        '<p>Sí. Este procedimiento no es reversible, ya que se retira parte del estómago.</p>',
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
      <p>La recuperación suele ser más rápida con técnicas laparoscópicas.</p>
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
        'Etapas dietéticas especiales (líquidos → purés → suaves → alimentos regulares)',
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

  'revision-bariatric-surgery': {
    title: 'Especialista en Cirugía Bariátrica de Revisión en Houston, TX',
    seoTitle: 'Cirugía Bariátrica de Revisión en Houston, TX',
    tagline: 'Cuando un procedimiento anterior no dio el resultado esperado.',
    description:
      'Cirugía bariátrica de revisión en Houston, TX por recuperación de peso, pérdida insuficiente, reflujo o complicaciones de una cirugía previa.',
    stats: [['2–3 semanas', 'para retomar las actividades normales']],
    body: `
      <h2 class="display bar">¿Qué es la Cirugía Bariátrica de Revisión?</h2>
      <p>Si su primera cirugía para bajar de peso no dio los resultados que esperaba — o si está teniendo
      complicaciones — la cirugía bariátrica de revisión puede ser la solución. Este procedimiento correctivo
      puede:</p>
      ${ul([
        'Atender la recuperación de peso después de una cirugía bariátrica',
        'Corregir complicaciones como estrecheces o reflujo',
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
        '<strong>Complicaciones médicas</strong> — como reflujo o deficiencias nutricionales.',
      ])}

      <h2 class="display bar">Qué Esperar Durante el Procedimiento</h2>
      <p>La cirugía bariátrica de revisión normalmente se realiza con técnicas laparoscópicas mínimamente invasivas,
      que permiten incisiones más pequeñas, menos dolor y una recuperación más rápida. El abordaje dependerá de su
      cirugía original y de sus necesidades actuales. Las opciones pueden incluir:</p>
      ${ul([
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
        'Ha tenido complicaciones como reflujo o úlceras',
        'Ha recuperado peso después de un éxito inicial',
        'Está motivado a hacer cambios de estilo de vida a largo plazo para mejorar su salud',
      ])}
      <p>El Dr. Wadiwala revisará con cuidado su historial quirúrgico, su estado de salud actual y sus metas para
      determinar si la cirugía de revisión es su mejor opción. Pacientes de Houston, Spring y Cypress confían en
      nuestra clínica para procedimientos de revisión avanzados y atención personalizada. Nuestra ubicación facilita el
      acceso a pacientes de toda el área metropolitana de Houston.</p>
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
        '<p>Las opciones comunes incluyen revisar una manga para convertirla en bypass o modificar un bypass gástrico para mejorar los resultados.</p>',
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
      <h2 class="display bar">Nuestros Servicios de Cirugía General</h2>
      <p>En Houston Surgical Weight Loss, nuestro equipo se dedica a ofrecer atención quirúrgica general,
      laparoscópica y bariátrica integral. Nos enfocamos en el diagnóstico, el tratamiento y el manejo de
      condiciones médicas tanto comunes como complejas, procurando que cada paciente reciba una atención segura,
      eficaz y personalizada.</p>
      <p>Nuestros cirujanos colaboran estrechamente con los médicos que refieren y con otros especialistas para
      crear planes de tratamiento a la medida. Al combinar tecnología quirúrgica avanzada con una atención humana,
      buscamos reducir el tiempo de recuperación y maximizar los resultados.</p>
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

  'acid-reflux': {
    title: 'Tratamiento del Reflujo Ácido (ERGE) en Houston',
    seoTitle: 'Cirugía de Reflujo Ácido y ERGE en Houston, TX | Funduplicatura de Nissen',
    tagline: 'Alivio duradero cuando la acidez no se va.',
    description:
      'Tratamiento del reflujo ácido y la ERGE en Houston, TX con el Dr. Irfan Wadiwala, incluida la cirugía antirreflujo mínimamente invasiva como la funduplicatura de Nissen.',
    stats: [['Incisiones pequeñas', 'cirugía antirreflujo mínimamente invasiva']],
    body: `
      <h2 class="display bar">¿Qué Es el Reflujo Ácido?</h2>
      <p>El reflujo ácido ocurre cuando el ácido del estómago regresa hacia el esófago, el tubo que lleva los alimentos
      de la boca al estómago. Normalmente, un anillo muscular en la parte baja del esófago se cierra para mantener el
      ácido en su lugar. Cuando esa válvula está débil o se relaja en el momento equivocado, el ácido sube. Cuando el
      reflujo es frecuente, se llama <strong>enfermedad por reflujo gastroesofágico (ERGE)</strong>.</p>
      <h2 class="display bar">Síntomas Comunes</h2>
      ${ul([
        'Acidez: una sensación de ardor en el pecho, a menudo después de comer o al acostarse',
        'Sabor agrio o amargo por el ácido que regresa a la garganta o la boca',
        'Dificultad para tragar, o sensación de comida atorada en la garganta',
        'Tos crónica, ronquera o dolor de garganta',
        'Molestia en el pecho o inflamación',
      ])}
      <p>Con el tiempo, la ERGE sin tratar puede irritar y dañar el revestimiento del esófago, por lo que vale la pena
      revisar los síntomas que no desaparecen.</p>
      <h2 class="display bar">Opciones de Tratamiento</h2>
      <p>Muchas personas comienzan con <strong>cambios en el estilo de vida</strong>, como comidas más pequeñas, evitar
      los alimentos que lo provocan, no comer tarde por la noche y bajar el exceso de peso, junto con
      <strong>medicamentos</strong> para reducir el ácido del estómago. Cuando los síntomas continúan a pesar de esto, o
      cuando prefiere no depender de medicamentos a largo plazo, la <strong>cirugía antirreflujo</strong> puede ser una
      opción.</p>
      <h2 class="display bar">Cirugía Antirreflujo: Funduplicatura de Nissen</h2>
      <p>La <strong>funduplicatura de Nissen</strong> es un tratamiento mínimamente invasivo para la ERGE severa. La parte
      superior del estómago se envuelve alrededor de la parte baja del esófago para reforzar la válvula, de modo que el
      ácido se quede en el estómago. El Dr. Wadiwala la realiza por laparoscopia, a través de unas pocas incisiones
      pequeñas, lo que permite a los pacientes <strong>volver a comer con normalidad más pronto</strong> y sanar con más
      comodidad.</p>
      <p>Si además tiene una hernia hiatal, en la que parte del estómago sube a través del diafragma, con frecuencia se
      repara en la misma operación.</p>
      <h2 class="display bar">El Reflujo Ácido y el Peso</h2>
      <p>El exceso de peso presiona el estómago y hace más probable el reflujo. Para los pacientes que también están
      considerando una cirugía para bajar de peso, el Dr. Wadiwala le explicará qué procedimiento es el más adecuado. El
      <a href="gastric-bypass.html">bypass gástrico</a> suele recomendarse en casos relacionados con el reflujo.</p>
    `,
    faqs: [
      [
        '¿Cuándo debo consultar a un cirujano por el reflujo ácido?',
        '<p>Si tiene acidez o reflujo la mayoría de las semanas, si los medicamentos ya no lo controlan, o si tiene dificultad para tragar, programe una <strong>consulta</strong> para conocer sus opciones.</p>',
      ],
      [
        '¿El seguro cubre la cirugía antirreflujo?',
        '<p>Muchos planes de seguro cubren la cirugía antirreflujo cuando es médicamente necesaria. Nuestro equipo le ayuda a verificar la cobertura antes del procedimiento.</p>',
      ],
      [
        '¿Seguiré necesitando medicamentos para el reflujo después de la cirugía?',
        '<p>Muchos pacientes pueden reducir o dejar sus medicamentos para el reflujo después de la cirugía. El Dr. Wadiwala le explicará qué esperar en su caso.</p>',
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
