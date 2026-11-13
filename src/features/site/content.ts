import { photos } from './photos'

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
  { label: 'Método', id: 'metodo' },
  { label: 'Empresa', id: 'empresa' },
]

export const cases = [
  {
    key: 'retail',
    name: 'Cadena de retail',
    line: 'Automatizamos el reporting de ventas de más de 50 tiendas.',
    value: 'De 3 días a 3 horas',
    photo: photos.retail,
  },
  {
    key: 'finanzas',
    name: 'Entidad financiera',
    line: 'Modelos predictivos de cross-selling sobre los clientes que ya tenía.',
    value: '+6 % de ingresos',
    photo: photos.bank,
  },
  {
    key: 'farma',
    name: 'Farmacéutica',
    line: 'Previsión de demanda y gestión de stock en la cadena de suministro.',
    value: '−40 % de costes operativos',
    photo: photos.pharma,
  },
  {
    key: 'logistica',
    name: 'Empresa de logística',
    line: 'Rutas de reparto calculadas con machine learning: menos tiempo y menos combustible.',
    value: '+25 % de eficiencia',
    photo: photos.warehouse,
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
  motion: { pulse: 'none' },
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
