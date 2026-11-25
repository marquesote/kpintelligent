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
  { label: 'Informes', id: 'informes' },
  { label: 'IA', id: 'ia' },
  { label: 'Datos', id: 'datos' },
]

export const steps = [
  { title: 'Diagnóstico', line: 'Revisamos sus sistemas, la calidad de sus datos y qué decisiones quiere tomar con ellos.' },
  { title: 'Conexión', line: 'Leemos su contabilidad desde el ERP o la base de datos, sin que cambie de programa.' },
  { title: 'Cuadre', line: 'Comprobamos que las cifras coinciden con sus cuentas oficiales antes de enseñarle nada.' },
  { title: 'Informes', line: 'Ponemos en marcha KPIntelligent y los informes que su empresa necesita.' },
  { title: 'Asistente', line: 'Activamos el asistente para que pregunte a sus números en lenguaje natural.' },
  { title: 'Seguimiento', line: 'Cada mes revisamos con usted lo que ha cambiado y qué hacer.' },
]
