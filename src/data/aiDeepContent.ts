/* The extra depth of the "IA y automatización" pages: market figures (each with its public source), what the
   service can do (cards with a small moving picture), how we work, and which moving screens the page shows.
   Figures researched in November 2026; every one names its source and links to it. */

export type DeepViz = 'radar' | 'nodes' | 'flow' | 'chat' | 'bars' | 'doc' | 'shield' | 'wave'

export type DeepScreen =
  | 'audit'
  | 'agent'
  | 'doc'
  | 'training'
  | 'rag'
  | 'forecast'
  | 'model'
  | 'chat'
  | 'chat-agent'
  | 'chat-training'
  | 'chat-support'
  | 'flow'
  | 'dashboard'
  | 'report'
  | 'scatter'

export interface DeepStat {
  /** the figure as shown; `count` makes it count up */
  value: string
  count?: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  source: string
  url: string
}

export interface AiDeep {
  hero: DeepScreen
  second: DeepScreen
  statsTitle: string
  stats: DeepStat[]
  capabilitiesTitle: string
  capabilities: { title: string; line: string; viz: DeepViz }[]
  processTitle: string
  processLead: string
  process: { title: string; line: string }[]
}

const INE_2025 = 'https://www.ine.es/dyngs/Prensa/ETICCE20241T2025.htm'
const EUROSTAT_2025 = 'https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251211-2'
const EUROSTAT_SE = 'https://ec.europa.eu/eurostat/statistics-explained/index.php/Use_of_artificial_intelligence_in_enterprises'
const GARTNER_AGENTIC =
  'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027'
const GARTNER_SERVICE =
  'https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290'
const MCKINSEY_2025 = 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2025'
const MCKINSEY_PLANNING = 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/reinventing-business-planning-with-agentic-ai'
const AI_ACT_ART4 = 'https://ai-act-service-desk.ec.europa.eu/es/ai-act/article-4'
const AP_BENCH = 'https://tipalti.com/blog/ap-automation-roi-benchmark/'
const ORACLE_FORECAST = 'https://www.oracle.com/scm/ai-demand-forecasting/'

export const aiDeepContent: Record<string, AiDeep> = {
  'auditoria-ia': {
    hero: 'audit',
    second: 'report',
    statsTitle: 'La IA ya está en la empresa española, pero no todos los proyectos llegan a buen puerto',
    stats: [
      {
        value: '21,1 %',
        count: 21.1,
        decimals: 1,
        suffix: ' %',
        label: 'de las empresas españolas de 10 o más empleados usaba IA a comienzos de 2025, 8,7 puntos más que un año antes.',
        source: 'INE, Encuesta TIC en empresas 2024-2025',
        url: INE_2025,
      },
      {
        value: '20 %',
        count: 20,
        suffix: ' %',
        label: 'de las empresas de la Unión Europea usó IA en 2025, frente al 13,5 % de 2024.',
        source: 'Eurostat, diciembre de 2025',
        url: EUROSTAT_2025,
      },
      {
        value: '+40 %',
        count: 40,
        prefix: '+',
        suffix: ' %',
        label: 'de los proyectos de IA agéntica se cancelarán antes de 2028 por costes, valor poco claro o falta de control del riesgo.',
        source: 'Gartner, junio de 2025',
        url: GARTNER_AGENTIC,
      },
    ],
    capabilitiesTitle: 'Qué revisamos en la auditoría',
    capabilities: [
      { title: 'Procesos y tiempos', line: 'Qué tareas se repiten, quién las hace y cuántas horas se llevan cada mes.', viz: 'flow' },
      { title: 'Calidad de los datos', line: 'Si tus datos del ERP, el CRM y las hojas de cálculo están listos para la IA.', viz: 'bars' },
      { title: 'Madurez digital', line: 'Herramientas, integraciones y hábitos del equipo, puntuados área por área.', viz: 'radar' },
      { title: 'Retorno estimado', line: 'Horas y euros que libera cada oportunidad, con tus propios números.', viz: 'wave' },
      { title: 'Riesgos y cumplimiento', line: 'Protección de datos, Reglamento Europeo de IA y permisos de acceso.', viz: 'shield' },
      { title: 'Hoja de ruta', line: 'Qué automatizar primero, qué después y qué no merece la pena.', viz: 'nodes' },
    ],
    processTitle: 'Cómo es la auditoría',
    processLead: 'Un trabajo acotado, con un entregable claro: sabes por dónde empezar y qué esperar de cada paso.',
    process: [
      { title: 'Entrevistas', line: 'Hablamos con quienes hacen el trabajo en cada área.' },
      { title: 'Recorrido de procesos', line: 'Medimos tiempos, volúmenes y errores de cada tarea.' },
      { title: 'Revisión de datos', line: 'Comprobamos qué datos hay y con qué calidad.' },
      { title: 'Priorización', line: 'Ordenamos las oportunidades por impacto y esfuerzo.' },
      { title: 'Hoja de ruta', line: 'Te entregamos el plan y lo presentamos a dirección.' },
    ],
  },

  'formacion-ia': {
    hero: 'training',
    second: 'chat-training',
    statsTitle: 'Formar al equipo ya no es opcional',
    stats: [
      {
        value: 'Art. 4',
        label: 'del Reglamento Europeo de IA: desde febrero de 2025 pide a las empresas que usan IA medidas para la alfabetización en IA de su personal.',
        source: 'Comisión Europea, AI Act Service Desk',
        url: AI_ACT_ART4,
      },
      {
        value: '17 %',
        count: 17,
        suffix: ' %',
        label: 'de las pequeñas empresas de la UE usa IA, frente al 55 % de las grandes: la brecha es de conocimiento tanto como de medios.',
        source: 'Eurostat, 2025',
        url: EUROSTAT_SE,
      },
      {
        value: '13,4 %',
        count: 13.4,
        decimals: 1,
        suffix: ' %',
        label: 'de las empresas españolas de menos de 10 empleados usaba IA en 2025, casi 6 puntos más que el año anterior.',
        source: 'INE, Encuesta TIC en empresas 2024-2025',
        url: INE_2025,
      },
    ],
    capabilitiesTitle: 'Qué aprende tu equipo',
    capabilities: [
      { title: 'Preguntar bien a la IA', line: 'Cómo pedir un análisis, un resumen o un borrador y obtener lo que necesitas.', viz: 'chat' },
      { title: 'Revisar lo que responde', line: 'Cómo comprobar cifras y fuentes antes de usar una respuesta.', viz: 'doc' },
      { title: 'Uso seguro', line: 'Qué datos se pueden compartir y qué reglas sigue la empresa.', viz: 'shield' },
      { title: 'Automatizar una tarea', line: 'Cada persona automatiza algo suyo con herramientas sencillas.', viz: 'flow' },
      { title: 'Leer cuadros de mando', line: 'Interpretar indicadores y pedir a la IA que explique un cambio.', viz: 'wave' },
      { title: 'Progreso medible', line: 'Ejercicios prácticos y seguimiento de lo que cada persona ya aplica.', viz: 'bars' },
    ],
    processTitle: 'Cómo son los talleres',
    processLead: 'Prácticos, con tus casos y por perfil: cada persona sale con algo que ya usa en su trabajo.',
    process: [
      { title: 'Diagnóstico', line: 'Vemos qué usa hoy el equipo y qué necesita cada perfil.' },
      { title: 'Programa a medida', line: 'Preparamos ejercicios con tus informes y documentos.' },
      { title: 'Talleres', line: 'Sesiones prácticas en tus oficinas o por videollamada.' },
      { title: 'Práctica guiada', line: 'Cada persona aplica lo aprendido a una tarea real.' },
      { title: 'Soporte', line: 'Resolvemos dudas y medimos el uso en las semanas siguientes.' },
    ],
  },

  'agentes-ia': {
    hero: 'agent',
    second: 'chat-agent',
    statsTitle: 'Los agentes de IA pasan de las pruebas a la operación',
    stats: [
      {
        value: '23 %',
        count: 23,
        suffix: ' %',
        label: 'de las organizaciones ya está escalando agentes de IA en alguna área, y otro 39 % los está probando.',
        source: 'McKinsey, The state of AI in 2025',
        url: MCKINSEY_2025,
      },
      {
        value: '15 %',
        count: 15,
        suffix: ' %',
        label: 'de las decisiones del día a día las tomarán agentes de IA de forma autónoma en 2028, frente al 0 % de 2024.',
        source: 'Gartner, junio de 2025',
        url: GARTNER_AGENTIC,
      },
      {
        value: '33 %',
        count: 33,
        suffix: ' %',
        label: 'de las aplicaciones empresariales incluirá IA agéntica en 2028, frente a menos del 1 % en 2024.',
        source: 'Gartner, junio de 2025',
        url: GARTNER_AGENTIC,
      },
    ],
    capabilitiesTitle: 'Qué hace un agente por tu empresa',
    capabilities: [
      { title: 'Consulta tus sistemas', line: 'Lee el ERP, el CRM, el correo y los cuadros de mando con permisos acotados.', viz: 'nodes' },
      { title: 'Prepara informes', line: 'El resumen semanal de ventas, márgenes y tesorería, explicado.', viz: 'doc' },
      { title: 'Vigila indicadores', line: 'Detecta desviaciones en márgenes, cobros o stock y te avisa con el dato.', viz: 'wave' },
      { title: 'Ejecuta tareas', line: 'Actualiza fichas, clasifica correos y cruza datos entre sistemas.', viz: 'flow' },
      { title: 'Pide aprobación', line: 'Las acciones sensibles esperan a que una persona las confirme.', viz: 'shield' },
      { title: 'Conversa contigo', line: 'Le preguntas en Teams o por correo y responde con la fuente.', viz: 'chat' },
    ],
    processTitle: 'Cómo construimos un agente',
    processLead: 'Empezamos con una tarea concreta, con permisos mínimos y registro de todo, y ampliamos cuando funciona.',
    process: [
      { title: 'Elegimos la tarea', line: 'Una tarea frecuente, con un resultado fácil de comprobar.' },
      { title: 'Conectamos sistemas', line: 'Acceso de lectura primero; escritura solo donde haga falta.' },
      { title: 'Definimos límites', line: 'Qué hace solo, qué consulta y qué no puede hacer nunca.' },
      { title: 'Prueba supervisada', line: 'El agente trabaja con una persona revisando cada paso.' },
      { title: 'En marcha', line: 'Vigilamos su trabajo y ampliamos sus tareas poco a poco.' },
    ],
  },

  'automatizacion-procesos': {
    hero: 'doc',
    second: 'flow',
    statsTitle: 'Lo que cuesta seguir haciéndolo a mano',
    stats: [
      {
        value: '2,78 $',
        count: 2.78,
        decimals: 2,
        suffix: ' $',
        label: 'cuesta procesar una factura en las empresas más automatizadas, frente a 10,89 $ de media.',
        source: 'Ardent Partners, AP Metrics that Matter 2025 (vía Tipalti)',
        url: AP_BENCH,
      },
      {
        value: '3,1 días',
        count: 3.1,
        decimals: 1,
        suffix: ' días',
        label: 'tarda en procesarse una factura en las mejores, frente a 10,9 días de media.',
        source: 'Ardent Partners, AP Metrics that Matter 2025 (vía Tipalti)',
        url: AP_BENCH,
      },
      {
        value: '11,8 %',
        count: 11.8,
        decimals: 1,
        suffix: ' %',
        label: 'de las empresas de la UE ya usa IA para analizar textos y documentos: es el uso de la IA más extendido.',
        source: 'Eurostat, 2025',
        url: EUROSTAT_SE,
      },
    ],
    capabilitiesTitle: 'Qué procesos automatizamos',
    capabilities: [
      { title: 'Facturas de proveedor', line: 'Lectura, validación con pedido y albarán, y asiento preparado.', viz: 'doc' },
      { title: 'Conciliación bancaria', line: 'Movimientos cruzados con facturas y cobros; solo revisas lo que no cuadra.', viz: 'bars' },
      { title: 'Pedidos por correo', line: 'Pedidos en PDF o en el cuerpo del correo convertidos en pedidos del ERP.', viz: 'flow' },
      { title: 'Recordatorios de cobro', line: 'Avisos a clientes según el vencimiento y el historial de pago.', viz: 'wave' },
      { title: 'Clasificación de correos', line: 'Cada correo a su sitio, con un resumen y la acción propuesta.', viz: 'chat' },
      { title: 'Control y registro', line: 'Cada ejecución guardada y avisos si algo falla.', viz: 'shield' },
    ],
    processTitle: 'Cómo automatizamos un proceso',
    processLead: 'De un proceso manual a uno automático, por pasos y con una persona supervisando las excepciones.',
    process: [
      { title: 'Mapeamos el proceso', line: 'Cómo se hace hoy, paso a paso, y dónde se pierde el tiempo.' },
      { title: 'Diseñamos el flujo', line: 'Qué hace la IA, qué hace el ERP y qué revisa una persona.' },
      { title: 'Automatizamos', line: 'Conectamos correo, documentos y sistemas.' },
      { title: 'Probamos con casos reales', line: 'Trabaja con tus documentos antes de soltarla.' },
      { title: 'Vigilamos y mejoramos', line: 'Registro de cada ejecución y avisos ante cualquier fallo.' },
    ],
  },

  'ia-generativa-chatbots': {
    hero: 'rag',
    second: 'chat-support',
    statsTitle: 'La IA que conversa ya atiende y resuelve',
    stats: [
      {
        value: '80 %',
        count: 80,
        suffix: ' %',
        label: 'de las consultas habituales de atención al cliente las resolverá la IA agéntica sin intervención humana en 2029.',
        source: 'Gartner, marzo de 2025',
        url: GARTNER_SERVICE,
      },
      {
        value: '30 %',
        count: 30,
        suffix: ' %',
        label: 'menos de costes operativos de atención al cliente se esperan con esa IA en 2029.',
        source: 'Gartner, marzo de 2025',
        url: GARTNER_SERVICE,
      },
      {
        value: '11,8 %',
        count: 11.8,
        decimals: 1,
        suffix: ' %',
        label: 'de las empresas de la UE usa IA para analizar lenguaje escrito, el uso más común de la IA en 2025.',
        source: 'Eurostat, 2025',
        url: EUROSTAT_SE,
      },
    ],
    capabilitiesTitle: 'Qué puede hacer la IA generativa con tus datos',
    capabilities: [
      { title: 'Responder con tus documentos', line: 'Contratos, manuales y políticas: respuestas con la fuente citada.', viz: 'doc' },
      { title: 'Preguntar a tus cifras', line: 'Ventas, márgenes o cobros en lenguaje natural, con su gráfico.', viz: 'chat' },
      { title: 'Atender a clientes', line: 'En la web, WhatsApp o Teams, a cualquier hora y con traspaso a una persona.', viz: 'nodes' },
      { title: 'Redactar y resumir', line: 'Informes, correos y actas a partir de tus datos.', viz: 'flow' },
      { title: 'Datos protegidos', line: 'Permisos por usuario y modelos que no entrenan con tu información.', viz: 'shield' },
      { title: 'Mejora continua', line: 'Medimos qué se pregunta y qué no sabe responder, y lo completamos.', viz: 'wave' },
    ],
    processTitle: 'Cómo ponemos en marcha un asistente',
    processLead: 'El asistente aprende de tus documentos y tus datos, con respuestas comprobables desde el primer día.',
    process: [
      { title: 'Fuentes', line: 'Elegimos documentos, bases de datos y permisos.' },
      { title: 'Indexado', line: 'Preparamos la información para buscarla por significado.' },
      { title: 'Asistente', line: 'Conectamos el modelo, las reglas y el tono de tu empresa.' },
      { title: 'Pruebas', line: 'Comprobamos respuestas con preguntas reales del equipo.' },
      { title: 'Lanzamiento', line: 'En la web, Teams o WhatsApp, con seguimiento de uso.' },
    ],
  },

  'analisis-predictivo': {
    hero: 'forecast',
    second: 'dashboard',
    statsTitle: 'Prever mejor se nota en el stock y en la caja',
    stats: [
      {
        value: '20-50 %',
        label: 'menos error en la previsión de la demanda con IA frente a los métodos tradicionales, según McKinsey.',
        source: 'McKinsey, citado por Oracle',
        url: ORACLE_FORECAST,
      },
      {
        value: '11-15 %',
        label: 'de mejora mediana del inventario en unas 100 empresas que adoptaron sistemas de planificación avanzada.',
        source: 'McKinsey, Reinventing business planning with agentic AI',
        url: MCKINSEY_PLANNING,
      },
      {
        value: '55 %',
        count: 55,
        suffix: ' %',
        label: 'de las grandes empresas de la UE ya usa IA, frente al 17 % de las pequeñas.',
        source: 'Eurostat, 2025',
        url: EUROSTAT_SE,
      },
    ],
    capabilitiesTitle: 'Qué podemos prever',
    capabilities: [
      { title: 'Ventas', line: 'Por producto, tienda o cliente, con su banda de confianza.', viz: 'wave' },
      { title: 'Demanda y stock', line: 'Cuánto comprar y cuándo, para no romper stock ni inmovilizar dinero.', viz: 'bars' },
      { title: 'Tesorería', line: 'Cobros y pagos previstos para anticipar tensiones de caja.', viz: 'flow' },
      { title: 'Clientes que se van', line: 'Quién tiene más riesgo de dejar de comprar, antes de que lo haga.', viz: 'radar' },
      { title: 'Impagos', line: 'Qué clientes tienen más probabilidad de pagar tarde.', viz: 'shield' },
      { title: 'Escenarios', line: 'Qué pasa si suben los costes o bajan las ventas un 5 %.', viz: 'nodes' },
    ],
    processTitle: 'Cómo construimos una previsión',
    processLead: 'Con tu histórico, la estacionalidad y las variables que mueven tu negocio, y medida contra la realidad cada mes.',
    process: [
      { title: 'Histórico', line: 'Reunimos y limpiamos los datos de varios años.' },
      { title: 'Variables', line: 'Estacionalidad, precios, promociones, calendario y clima.' },
      { title: 'Modelo', line: 'Probamos varios modelos y elegimos el más preciso.' },
      { title: 'Validación', line: 'Medimos el error con meses que el modelo no ha visto.' },
      { title: 'En tu cuadro de mando', line: 'La previsión se actualiza sola en Power BI.' },
    ],
  },

  'machine-learning': {
    hero: 'model',
    second: 'scatter',
    statsTitle: 'El machine learning ya trabaja en las empresas europeas',
    stats: [
      {
        value: '20 %',
        count: 20,
        suffix: ' %',
        label: 'de las empresas de la UE usó IA en 2025, frente al 13,5 % del año anterior.',
        source: 'Eurostat, diciembre de 2025',
        url: EUROSTAT_2025,
      },
      {
        value: '+60 %',
        count: 60,
        prefix: '+',
        suffix: ' %',
        label: 'de las empresas de información y comunicación usa IA, el sector que más la adopta.',
        source: 'Eurostat, 2025',
        url: EUROSTAT_SE,
      },
      {
        value: '23 %',
        count: 23,
        suffix: ' %',
        label: 'de las organizaciones ya está escalando sistemas de IA agéntica en alguna parte del negocio.',
        source: 'McKinsey, The state of AI in 2025',
        url: MCKINSEY_2025,
      },
    ],
    capabilitiesTitle: 'Qué modelos construimos',
    capabilities: [
      { title: 'Clasificación', line: 'Qué cliente comprará, qué operación es sospechosa, qué pieza fallará.', viz: 'radar' },
      { title: 'Regresión', line: 'Precio, demanda o plazo de cobro estimados con sus variables.', viz: 'wave' },
      { title: 'Segmentación', line: 'Grupos de clientes o productos que se comportan igual.', viz: 'nodes' },
      { title: 'Detección de anomalías', line: 'Movimientos, gastos o lecturas que se salen de lo normal.', viz: 'shield' },
      { title: 'Recomendación', line: 'El siguiente producto o la siguiente acción para cada cliente.', viz: 'flow' },
      { title: 'Modelos en producción', line: 'Desplegados, vigilados y reentrenados cuando cambian los datos.', viz: 'bars' },
    ],
    processTitle: 'Cómo llevamos un modelo a producción',
    processLead: 'Un modelo solo vale si se usa: lo integramos en tus sistemas y vigilamos que siga acertando.',
    process: [
      { title: 'Pregunta de negocio', line: 'Qué decisión queremos mejorar y cómo mediremos el éxito.' },
      { title: 'Datos', line: 'Reunimos, limpiamos y preparamos las variables.' },
      { title: 'Entrenamiento', line: 'Probamos algoritmos y ajustamos el mejor.' },
      { title: 'Despliegue', line: 'El modelo trabaja dentro de tu ERP, CRM o Power BI.' },
      { title: 'Vigilancia', line: 'Medimos su acierto y lo reentrenamos cuando hace falta.' },
    ],
  },
}

export function getAiDeep(slug: string): AiDeep | undefined {
  return aiDeepContent[slug]
}
