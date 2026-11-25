export const MAIN_ACTION = 'Solicitar demo gratuita'

export interface SolutionLink {
  label: string
  href: string
  line: string
  /** the label as it reads inside a sentence */
  inline: string
}

export interface SolutionGroup {
  title: string
  lead: string
  items: SolutionLink[]
}

export const solutionGroups: SolutionGroup[] = [
  {
    title: 'Asesoría financiera',
    lead: 'Las cuentas de la empresa, explicadas cada mes.',
    items: [
      {
        label: 'Asesoría financiera',
        inline: 'asesoría financiera',
        href: '/soluciones/asesoria-financiera',
        line: 'Empiece por un informe gratuito',
      },
    ],
  },
  {
    title: 'Inteligencia de negocio',
    lead: 'Cuadros de mando por rol que se actualizan solos.',
    items: [
      {
        label: 'Dashboards interactivos',
        inline: 'dashboards interactivos',
        href: '/soluciones/dashboards-interactivos',
        line: 'Cuadros de mando por rol',
      },
      {
        label: 'Reporting automatizado',
        inline: 'reporting automatizado',
        href: '/soluciones/reporting-automatizado',
        line: 'Informes sin trabajo manual',
      },
      {
        label: 'Power BI, Tableau y Qlik',
        inline: 'Power BI, Tableau y Qlik',
        href: '/soluciones/power-bi-tableau-qlik',
        line: 'La herramienta que ya usas',
      },
    ],
  },
  {
    title: 'Ingeniería de datos',
    lead: 'Datos limpios y reunidos en un almacén seguro.',
    items: [
      {
        label: 'ETL y data warehousing',
        inline: 'ETL y data warehousing',
        href: '/soluciones/etl-data-warehousing',
        line: 'Extraer, transformar, cargar',
      },
      {
        label: 'Calidad y gobierno del dato',
        inline: 'calidad y gobierno del dato',
        href: '/soluciones/calidad-gobierno-dato',
        line: 'Datos limpios y fiables',
      },
      {
        label: 'Migración a la nube',
        inline: 'migración a la nube',
        href: '/soluciones/migracion-nube',
        line: 'Azure, AWS o Google Cloud',
      },
    ],
  },
  {
    title: 'IA y analítica avanzada',
    lead: 'Modelos que prevén ventas, demanda y fraude.',
    items: [
      {
        label: 'Machine learning',
        inline: 'machine learning',
        href: '/soluciones/machine-learning',
        line: 'Modelos de clasificación',
      },
      {
        label: 'IA generativa y chatbots',
        inline: 'IA generativa y chatbots',
        href: '/soluciones/ia-generativa-chatbots',
        line: 'Asistentes sobre tus datos',
      },
      {
        label: 'Análisis predictivo',
        inline: 'análisis predictivo',
        href: '/soluciones/analisis-predictivo',
        line: 'Previsión de ventas y stock',
      },
    ],
  },
  {
    title: 'Consultoría estratégica',
    lead: 'La hoja de ruta y las reglas de tus datos.',
    items: [
      {
        label: 'Estrategia de datos',
        inline: 'estrategia de datos',
        href: '/soluciones/estrategia-datos',
        line: 'Hoja de ruta data driven',
      },
      {
        label: 'Data governance',
        inline: 'data governance',
        href: '/soluciones/data-governance',
        line: 'Políticas, roles y seguridad',
      },
      {
        label: 'Cumplimiento del RGPD',
        inline: 'cumplimiento del RGPD',
        href: '/soluciones/cumplimiento-rgpd',
        line: 'Protección de datos',
      },
    ],
  },
]

export const navWords = [
  { label: 'Datos', id: 'datos' },
  { label: 'Casos', id: 'casos' },
  { label: 'Empresa', id: 'empresa' },
]

/* the "IA y automatización" menu: its own entry in the nav, three columns */
export const aiMenu: SolutionGroup[] = [
  {
    title: 'Empieza aquí',
    lead: 'Dónde rinde primero la IA en tu empresa.',
    items: [
      { label: 'Auditoría de IA', inline: 'auditoría de IA', href: '/soluciones/auditoria-ia', line: 'Dónde rinde primero' },
      { label: 'Formación en IA', inline: 'formación en IA', href: '/soluciones/formacion-ia', line: 'Tu equipo, usándola a diario' },
    ],
  },
  {
    title: 'Automatiza',
    lead: 'El trabajo que se repite, hecho solo.',
    items: [
      { label: 'Agentes de IA', inline: 'agentes de IA', href: '/soluciones/agentes-ia', line: 'Trabajan sobre tu ERP y tu CRM' },
      {
        label: 'Automatización de procesos',
        inline: 'automatización de procesos',
        href: '/soluciones/automatizacion-procesos',
        line: 'Facturas, pedidos y correos',
      },
    ],
  },
  {
    title: 'IA sobre tus datos',
    lead: 'Preguntas, previsiones y modelos.',
    items: [
      { label: 'IA generativa y chatbots', inline: 'IA generativa', href: '/soluciones/ia-generativa-chatbots', line: 'Pregunta a tus datos' },
      { label: 'Análisis predictivo', inline: 'análisis predictivo', href: '/soluciones/analisis-predictivo', line: 'Ventas, stock y caja' },
      { label: 'Machine learning', inline: 'machine learning', href: '/soluciones/machine-learning', line: 'Modelos a medida' },
    ],
  },
]

/* the footer's column for the new menu */
export const aiFooterGroup: SolutionGroup = {
  title: 'IA y automatización',
  lead: '',
  items: [...aiMenu[0].items, ...aiMenu[1].items],
}

export const heroWords = ['decisiones', 'previsiones', 'automatizaciones', 'informes que se hacen solos']

export const marqueeTools = [
  { id: 'sap', name: 'SAP' },
  { id: 'odoo', name: 'Odoo' },
  { id: 'salesforce', name: 'Salesforce' },
  { id: 'hubspot', name: 'HubSpot' },
  { id: 'xlsx', name: 'Excel' },
  { id: 'power-bi', name: 'Power BI' },
  { id: 'tableau', name: 'Tableau' },
  { id: 'openai', name: 'OpenAI' },
  { id: 'anthropic', name: 'Claude' },
  { id: 'n8n', name: 'n8n' },
  { id: 'make', name: 'Make' },
  { id: 'zapier', name: 'Zapier' },
  { id: 'teams', name: 'Teams' },
  { id: 'azure', name: 'Azure' },
  { id: 'aws', name: 'AWS' },
  { id: 'google-cloud', name: 'Google Cloud' },
]

export type AiViz = 'radar' | 'nodes' | 'flow' | 'chat' | 'bars'

export const aiServices: { n: string; title: string; line: string; href: string; viz: AiViz }[] = [
  {
    n: '01',
    title: 'Auditoría de IA',
    line: 'Revisamos cómo trabaja tu empresa y te decimos qué automatizar primero y cuánto tiempo ahorra.',
    href: '/soluciones/auditoria-ia',
    viz: 'radar',
  },
  {
    n: '02',
    title: 'Agentes de IA',
    line: 'Consultan tu ERP y tu CRM, preparan informes y avisan cuando algo se sale de lo previsto.',
    href: '/soluciones/agentes-ia',
    viz: 'nodes',
  },
  {
    n: '03',
    title: 'Automatización de procesos',
    line: 'Facturas, conciliaciones, pedidos y correos que se procesan solos; una persona revisa las excepciones.',
    href: '/soluciones/automatizacion-procesos',
    viz: 'flow',
  },
  {
    n: '04',
    title: 'IA generativa sobre tus datos',
    line: 'Pregunta en lenguaje natural y recibe la cifra, el gráfico y de dónde sale.',
    href: '/soluciones/ia-generativa-chatbots',
    viz: 'chat',
  },
  {
    n: '05',
    title: 'Formación y soporte',
    line: 'Formamos a tu equipo y vigilamos que cada automatización siga funcionando.',
    href: '/soluciones/formacion-ia',
    viz: 'bars',
  },
]

export const automationSteps = [
  { title: 'Mapeamos el proceso', line: 'Vemos cómo se hace hoy, paso a paso, y dónde se pierde el tiempo.' },
  { title: 'Automatizamos paso a paso', line: 'Empezamos por la parte que más se repite y la conectamos a tus sistemas.' },
  { title: 'Probamos con datos reales', line: 'Antes de soltarla, la automatización trabaja con tus casos de verdad.' },
  { title: 'Medimos y mejoramos', line: 'Vigilamos cada ejecución y te avisamos si algo necesita una persona.' },
]

const GLYPH_AI = 'M9 3h6M12 3v3M5 10a7 7 0 0 1 14 0v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 13h.01M15 13h.01'
const GLYPH_BOOK = 'M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h8M8 11h6'

export const invoiceFlow = {
  title: 'Automatización · facturas de proveedor',
  label:
    'Una factura llega por correo, la IA la lee, la cruza con el ERP, registra el asiento y avisa al equipo en Teams; un registro muestra cada paso.',
  nodes: [
    { label: 'Llega la factura', sub: 'Correo', icon: 'gmail' },
    { label: 'La IA la lee', sub: '12 campos', glyph: GLYPH_AI },
    { label: 'Cruza con el ERP', sub: 'Proveedor y pedido', icon: 'odoo' },
    { label: 'Registra el asiento', sub: 'Contabilidad', glyph: GLYPH_BOOK },
    { label: 'Avisa al equipo', sub: 'Teams', icon: 'teams' },
  ],
  log: [
    '09:14 Factura recibida y leída: 12 campos',
    '09:14 Proveedor y pedido encontrados en el ERP',
    '09:15 Importes cuadrados con el albarán',
    '09:15 Asiento registrado en contabilidad',
    '09:15 Aviso enviado a Administración',
  ],
}

export const cases: { key: 'retail' | 'finanzas' | 'farma' | 'logistica'; name: string; line: string; value: string }[] = [
  {
    key: 'retail',
    name: 'Cadena de retail',
    line: 'Automatizamos el reporting de ventas de más de 50 tiendas.',
    value: 'De 3 días a 3 horas',
  },
  {
    key: 'finanzas',
    name: 'Entidad financiera',
    line: 'Modelos predictivos de cross-selling sobre los clientes que ya tenía.',
    value: '+6 % de ingresos',
  },
  {
    key: 'farma',
    name: 'Farmacéutica',
    line: 'Previsión de demanda y gestión de stock en la cadena de suministro.',
    value: '−40 % de costes operativos',
  },
  {
    key: 'logistica',
    name: 'Empresa de logística',
    line: 'Rutas de reparto calculadas con machine learning: menos tiempo y menos combustible.',
    value: '+25 % de eficiencia',
  },
]

export const steps = [
  {
    title: 'Diagnóstico',
    line: 'Revisamos tus sistemas, la calidad de tus datos y tu madurez analítica.',
  },
  {
    title: 'Estrategia',
    line: 'Diseñamos la solución técnica y funcional según tus objetivos de negocio.',
  },
  {
    title: 'Ingesta y limpieza',
    line: 'Conectamos tus fuentes de datos y depuramos los errores para que la información sea fiable.',
  },
  {
    title: 'Visualización',
    line: 'Construimos los dashboards, los modelos analíticos y los informes automáticos.',
  },
  {
    title: 'Capacitación',
    line: 'Formamos a tu equipo para que use las herramientas a diario.',
  },
  {
    title: 'Soporte continuo',
    line: 'Mantenemos el sistema, resolvemos incidencias y lo mejoramos.',
  },
]

export const biTools = [
  { id: 'power-bi', name: 'Power BI', cls: 'ic-tall', w: 30, h: 40 },
  { id: 'tableau', name: 'Tableau', cls: '', w: 40, h: 39 },
  { id: 'qlik', name: 'Qlik', cls: 'ic-wide', w: 40, h: 12 },
  { id: 'looker', name: 'Looker', cls: 'ic-tall', w: 25, h: 40 },
]

export const clouds = [
  { id: 'azure', name: 'Azure', cls: '', w: 40, h: 38 },
  { id: 'aws', name: 'AWS', cls: 'ic-land', w: 40, h: 24 },
  { id: 'google-cloud', name: 'Google Cloud', cls: '', w: 40, h: 32 },
]

export const sourcesDiagram = {
  layout: 'fanin',
  ground: 'none',
  alt: 'Los datos de SAP, Odoo, HubSpot, Salesforce y las hojas de cálculo entran en un único almacén de datos y de ahí salen a Power BI.',
  sources: [
    { label: 'SAP', icon: 'logos:sap', sub: 'ERP' },
    { label: 'Odoo', icon: 'si:odoo', sub: 'ERP' },
    { label: 'HubSpot', icon: 'hubspot', sub: 'CRM' },
    { label: 'Salesforce', icon: 'salesforce', sub: 'CRM' },
    { label: 'Excel', icon: 'xlsx', sub: 'Hojas de cálculo' },
  ],
  target: { label: 'Almacén de datos', icon: 'ui:database' },
  then: { label: 'Power BI', icon: 'power-bi' },
}
