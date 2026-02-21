export interface ServiceCategory {
  id: string
  title: string
  description: string
  icon: string
  services: Array<{
    title: string
    description: string
  }>
}

export interface SectorItem {
  title: string
  description: string
  icon: string
}

export interface MethodologyStep {
  number: number
  title: string
  description: string
}

export interface CaseStudy {
  title: string
  sector: string
  metric: string
  description: string
}

export interface NavItem {
  label: string
  href: string
  children?: Array<{
    category?: string
    items: Array<{ label: string; href: string; description?: string }>
  }>
}

export interface SiteConfig {
  companyName: string
  domain: string
  tagline: string
  description: string

  contact: {
    phone: string
    phoneDisplay: string
    email: string
    salesEmail: string
    address: string
    city: string
    country: string
  }

  social: {
    linkedin?: string
    twitter?: string
    youtube?: string
  }

  navigation: NavItem[]

  hero: {
    headlines: string[]
    subheadline: string
    ctaPrimary: { text: string; href: string }
    ctaSecondary: { text: string; href: string }
  }

  stats: Array<{
    value: string
    label: string
    suffix?: string
  }>

  serviceCategories: ServiceCategory[]

  sectors: SectorItem[]

  methodology: MethodologyStep[]

  caseStudies: CaseStudy[]

  partners: string[]

  seo: {
    siteTitle: string
    defaultDescription: string
    locale: string
  }
}

export const siteConfig: SiteConfig = {
  companyName: 'KPIntelligent',
  domain: 'kpintelligent.es',
  tagline: 'Transforma tus datos en decisiones estrategicas',
  description: 'Consultora especializada en inteligencia de datos, BI, analítica avanzada e IA. Creamos cultura analítica en las organizaciones para convertir datos en activos tangibles.',

  contact: {
    phone: '+34912000000',
    phoneDisplay: '+34 912 000 000',
    email: 'info@kpintelligent.es',
    salesEmail: 'ventas@kpintelligent.es',
    address: 'Madrid, España',
    city: 'Madrid',
    country: 'España',
  },

  social: {
    linkedin: 'https://linkedin.com/company/kpintelligent',
    twitter: 'https://twitter.com/kpintelligent',
    youtube: 'https://youtube.com/@kpintelligent',
  },

  navigation: [
    {
      label: 'Soluciones',
      href: '#soluciones',
      children: [
        {
          category: 'Inteligencia de Negocio',
          items: [
            { label: 'Dashboards Interactivos', href: '/soluciones/dashboards-interactivos', description: 'Cuadros de mando visuales y personalizados' },
            { label: 'Reporting Automatizado', href: '/soluciones/reporting-automatizado', description: 'Eliminación de informes manuales' },
            { label: 'Power BI, Tableau, Qlik', href: '/soluciones/power-bi-tableau-qlik', description: 'Expertos en las mejores herramientas' },
          ],
        },
        {
          category: 'Ingeniería de Datos',
          items: [
            { label: 'ETL & Data Warehousing', href: '/soluciones/etl-data-warehousing', description: 'Extracción, transformación y carga' },
            { label: 'Calidad y Gobierno del Dato', href: '/soluciones/calidad-gobierno-dato', description: 'Datos limpios y fiables' },
            { label: 'Migración a la Nube', href: '/soluciones/migracion-nube', description: 'Azure, AWS, Google Cloud' },
          ],
        },
        {
          category: 'IA y Analítica Avanzada',
          items: [
            { label: 'Machine Learning', href: '/soluciones/machine-learning', description: 'Modelos predictivos y clasificación' },
            { label: 'IA Generativa & Chatbots', href: '/soluciones/ia-generativa-chatbots', description: 'Asistentes inteligentes para tu empresa' },
            { label: 'Análisis Predictivo', href: '/soluciones/analisis-predictivo', description: 'Prevé tendencias y comportamientos' },
          ],
        },
        {
          category: 'Consultoría Estratégica',
          items: [
            { label: 'Estrategia de Datos', href: '/soluciones/estrategia-datos', description: 'Roadmaps de transformación digital' },
            { label: 'Data Governance', href: '/soluciones/data-governance', description: 'Políticas, roles y seguridad' },
            { label: 'Cumplimiento RGPD', href: '/soluciones/cumplimiento-rgpd', description: 'Protección y seguridad de datos' },
          ],
        },
      ],
    },
    {
      label: 'Sectores',
      href: '/#sectores',
    },
    {
      label: 'Casos de Éxito',
      href: '/#casos',
    },
    {
      label: 'Metodología',
      href: '/#metodologia',
    },
    {
      label: 'Empresa',
      href: '/#empresa',
    },
  ],

  hero: {
    headlines: [
      'Transforma tus datos en decisiones estratégicas',
      'Convierte datos en activos tangibles',
      'Crea una cultura analítica en tu empresa',
    ],
    subheadline: 'Centralizamos la información de tu empresa en una única fuente de verdad. Olvídate de hojas de cálculo desordenadas y silos de información.',
    ctaPrimary: { text: 'Solicitar Demo Gratuita', href: '#contacto' },
    ctaSecondary: { text: 'Ver Casos de Éxito', href: '#casos' },
  },

  stats: [
    { value: '150', label: 'Proyectos Completados', suffix: '+' },
    { value: '35', label: 'Reducción Media de Costes', suffix: '%' },
    { value: '98', label: 'Clientes Satisfechos', suffix: '%' },
    { value: '6', label: 'Aumento Medio de Ingresos', suffix: '%' },
  ],

  serviceCategories: [
    {
      id: 'bi',
      title: 'Inteligencia de Negocio (BI)',
      description: 'Dashboards interactivos y reporting automatizado que transforman datos crudos en insights accionables.',
      icon: 'chart',
      services: [
        { title: 'Dashboards Interactivos', description: 'Cuadros de mando visuales y personalizados para ventas, finanzas, producción y RRHH que se actualizan automáticamente.' },
        { title: 'Reporting Automatizado', description: 'Eliminación de la elaboración manual de informes. Ahorra tiempo y reduce errores humanos.' },
        { title: 'KPIs a Medida', description: 'Definición de indicadores clave de desempeño específicos por rol: Directores, Comerciales, Operaciones.' },
        { title: 'Herramientas Líderes', description: 'Expertos certificados en Microsoft Power BI, Tableau, Qlik, Looker y Google Data Studio.' },
      ],
    },
    {
      id: 'data-engineering',
      title: 'Ingeniería y Gestión de Datos',
      description: 'Construimos la infraestructura de datos que necesitas: limpia, organizada y lista para el análisis.',
      icon: 'database',
      services: [
        { title: 'ETL & Data Warehousing', description: 'Procesos de Extracción, Transformación y Carga para limpiar y organizar datos en almacenes seguros.' },
        { title: 'Calidad y Limpieza de Datos', description: 'Reparación de deuda tecnológica: datos sucios, duplicados o incompletos para análisis fiables.' },
        { title: 'Integración de Sistemas', description: 'Conexión de ERPs (Navision, SAP, Odoo), CRMs (HubSpot, Salesforce) y archivos planos en una sola vista.' },
        { title: 'Migración a la Nube', description: 'Traslado de datos de sistemas obsoletos a Azure, AWS o Google Cloud con cero pérdida de información.' },
      ],
    },
    {
      id: 'ia',
      title: 'Analítica Avanzada e IA',
      description: 'Machine Learning, IA Generativa y modelos predictivos que llevan tu empresa al siguiente nivel.',
      icon: 'brain',
      services: [
        { title: 'Análisis Predictivo', description: 'Modelos para prever tendencias de ventas, demanda de stock o comportamientos futuros.' },
        { title: 'Machine Learning', description: 'Algoritmos para clasificación de clientes, detección de fraudes y optimización de procesos.' },
        { title: 'Asistentes de IA & Chatbots', description: 'Agentes de IA y chatbots conectados a los datos de tu empresa para consultas instantáneas.' },
        { title: 'Visión por Computadora', description: 'Soluciones avanzadas de computer vision e IA generativa para sectores específicos.' },
      ],
    },
    {
      id: 'consultoria',
      title: 'Consultoría Estratégica',
      description: 'Diseñamos la estrategia de datos de tu empresa y establecemos un gobierno del dato sólido.',
      icon: 'strategy',
      services: [
        { title: 'Gobierno de Datos', description: 'Definición de políticas, roles y responsabilidades para asegurar calidad, seguridad y trazabilidad del dato.' },
        { title: 'Estrategia de Datos', description: 'Diseño de hojas de ruta para transformar una empresa tradicional en una empresa Data Driven.' },
        { title: 'Seguridad y Cumplimiento', description: 'Protección de datos, cumplimiento de RGPD y ciberseguridad aplicada a los datos corporativos.' },
        { title: 'Auditoría de Datos', description: 'Análisis completo del estado actual de tus sistemas, calidad de datos y madurez analítica.' },
      ],
    },
  ],

  sectors: [
    { title: 'Retail y eCommerce', description: 'Optimización de inventario, personalización de experiencia, predicción de demanda y análisis de cesta de compra.', icon: 'retail' },
    { title: 'Finanzas y Banca', description: 'Detección de fraude, análisis de riesgos, reporting regulatorio y control presupuestario avanzado.', icon: 'finance' },
    { title: 'Salud y Farmacéutica', description: 'Análisis de pacientes, eficiencia operativa hospitalaria y optimización de ensayos clínicos.', icon: 'health' },
    { title: 'Logística y Transporte', description: 'Optimización de rutas y flotas, previsión de demanda y gestión inteligente de almacenes.', icon: 'logistics' },
    { title: 'Manufactura e Industria', description: 'Mantenimiento predictivo, control de calidad automatizado y optimización de cadena de suministro.', icon: 'industry' },
    { title: 'Marketing y Ventas', description: 'Segmentación de clientes, análisis de Churn, Cross-selling, Up-selling y cálculo del CLV.', icon: 'marketing' },
  ],

  methodology: [
    { number: 1, title: 'Diagnóstico', description: 'Análisis del estado actual de los sistemas, calidad de datos y madurez analítica de tu organización.' },
    { number: 2, title: 'Estrategia', description: 'Diseño de la solución técnica y funcional adaptada a tus objetivos de negocio.' },
    { number: 3, title: 'Ingesta y Limpieza', description: 'Conexión de fuentes de datos y depuración de errores para garantizar información fiable.' },
    { number: 4, title: 'Visualización', description: 'Creación de dashboards, modelos analíticos y herramientas de reporting automatizado.' },
    { number: 5, title: 'Capacitación', description: 'Formación al equipo para asegurar la adopción real de las herramientas y su uso continuo.' },
    { number: 6, title: 'Soporte Continuo', description: 'Mantenimiento evolutivo, resolución de incidencias y mejora continua del ecosistema de datos.' },
  ],

  caseStudies: [
    { title: 'Retail Nacional', sector: 'Retail', metric: '-30% tiempo de informes', description: 'Automatización completa del reporting de ventas para una cadena con más de 50 tiendas. De 3 días a 3 horas.' },
    { title: 'Entidad Financiera', sector: 'Finanzas', metric: '+6% ingresos', description: 'Implementación de modelos predictivos de cross-selling que incrementaron los ingresos por cliente existente.' },
    { title: 'Farmacéutica Líder', sector: 'Salud', metric: '-40% costes operativos', description: 'Optimización de la cadena de suministro mediante análisis predictivo de demanda y gestión inteligente de stock.' },
    { title: 'Empresa Logística', sector: 'Logística', metric: '+25% eficiencia', description: 'Optimización de rutas de reparto mediante algoritmos de Machine Learning, reduciendo tiempos y combustible.' },
  ],

  partners: [
    'Microsoft Gold Partner',
    'Google Cloud Partner',
    'AWS Partner',
    'Tableau Partner',
    'Power BI Certified',
    'Qlik Partner',
  ],

  seo: {
    siteTitle: 'KPIntelligent | Transforma tus Datos en Decisiones Estratégicas',
    defaultDescription: 'Consultora de inteligencia de datos, BI, analítica avanzada e IA. Dashboards, Machine Learning, Data Engineering y estrategia de datos para empresas.',
    locale: 'es_ES',
  },
}
