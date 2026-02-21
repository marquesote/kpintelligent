export interface SolutionFeature {
  icon: string
  title: string
  description: string
}

export interface SolutionBenefit {
  metric: string
  label: string
  description: string
}

export interface SolutionUseCase {
  sector: string
  title: string
  description: string
}

export interface SolutionPage {
  slug: string
  category: string
  categorySlug: string
  title: string
  subtitle: string
  description: string
  heroImage?: string
  features: SolutionFeature[]
  benefits: SolutionBenefit[]
  useCases: SolutionUseCase[]
  technologies: string[]
  relatedSolutions: string[]
  faq: Array<{ question: string; answer: string }>
}

export const solutionsContent: Record<string, SolutionPage> = {
  // ==========================================
  // INTELIGENCIA DE NEGOCIO
  // ==========================================

  'dashboards-interactivos': {
    slug: 'dashboards-interactivos',
    category: 'Inteligencia de Negocio',
    categorySlug: 'bi',
    title: 'Dashboards Interactivos',
    subtitle: 'Visualiza tus datos en tiempo real con cuadros de mando inteligentes y personalizados',
    description: 'Diseñamos y desarrollamos dashboards interactivos que transforman datos complejos en visualizaciones claras y accionables. Nuestros cuadros de mando se conectan directamente a tus fuentes de datos, se actualizan en tiempo real y permiten a cada usuario explorar la información relevante para su rol. Desde el CEO hasta el equipo de operaciones, cada persona accede a los KPIs que necesita para tomar decisiones informadas.',
    features: [
      {
        icon: 'realtime',
        title: 'Actualización en Tiempo Real',
        description: 'Los dashboards se conectan directamente a tus bases de datos, ERPs y CRMs, mostrando información actualizada al segundo. Olvídate de exportar y copiar datos manualmente entre hojas de cálculo.',
      },
      {
        icon: 'personalization',
        title: 'Personalización por Rol',
        description: 'Cada usuario visualiza los KPIs relevantes para su función. El director financiero ve márgenes y flujos de caja, el comercial ve pipeline de ventas, y operaciones ve eficiencia de producción.',
      },
      {
        icon: 'drill',
        title: 'Drill-down y Exploración',
        description: 'Navega desde una vista general hasta el detalle más granular con un solo clic. Analiza tendencias, compara períodos y filtra por cualquier dimensión sin necesidad de conocimientos técnicos.',
      },
      {
        icon: 'alerts',
        title: 'Alertas y Notificaciones',
        description: 'Configura alertas automáticas cuando un KPI supera o no alcanza un umbral definido. Recibe notificaciones por email, Teams o Slack para actuar antes de que los problemas escalen.',
      },
    ],
    benefits: [
      {
        metric: '-70%',
        label: 'Tiempo en reportes',
        description: 'Reducción del tiempo dedicado a la elaboración manual de informes y consolidación de datos de múltiples fuentes.',
      },
      {
        metric: '+45%',
        label: 'Velocidad de decisión',
        description: 'Las decisiones basadas en datos se toman más rápido al tener toda la información centralizada y actualizada.',
      },
      {
        metric: '100%',
        label: 'Trazabilidad',
        description: 'Cada dato mostrado tiene una fuente verificable. Elimina la incertidumbre sobre la fiabilidad de la información.',
      },
      {
        metric: '+30%',
        label: 'Adopción del dato',
        description: 'Más empleados utilizan datos para sus decisiones diarias gracias a interfaces intuitivas y accesibles.',
      },
    ],
    useCases: [
      {
        sector: 'Retail',
        title: 'Dashboard de Ventas Omnicanal',
        description: 'Cadena de 50+ tiendas que unificó datos de punto de venta, eCommerce y marketplace en un solo dashboard. El equipo comercial pasó de generar informes en 3 días a consultar datos en tiempo real.',
      },
      {
        sector: 'Finanzas',
        title: 'Cuadro de Mando de Tesorería',
        description: 'Entidad financiera que centralizó posiciones de caja, previsiones de flujo y conciliación bancaria en un dashboard interactivo con alertas de desviación automáticas.',
      },
      {
        sector: 'Manufactura',
        title: 'Control de Producción en Planta',
        description: 'Empresa industrial que monitorizó OEE, tiempos de parada, tasas de defectos y consumo energético en dashboards de planta con actualización cada 5 minutos.',
      },
    ],
    technologies: ['Power BI', 'Tableau', 'Qlik Sense', 'Looker', 'Google Data Studio', 'Apache Superset', 'Grafana'],
    relatedSolutions: ['reporting-automatizado', 'power-bi-tableau-qlik', 'calidad-gobierno-dato'],
    faq: [
      {
        question: '¿Cuánto tiempo tarda en implementarse un dashboard?',
        answer: 'Un dashboard básico puede estar operativo en 2-4 semanas. Proyectos más complejos con múltiples fuentes de datos e integraciones suelen requerir entre 6 y 12 semanas, incluyendo la fase de modelado de datos y validación.',
      },
      {
        question: '¿Necesitamos comprar licencias de software?',
        answer: 'Depende de la herramienta elegida. Power BI Pro parte de 8,40€/usuario/mes. Tableau tiene planes desde 15€/usuario/mes. También trabajamos con herramientas open source como Apache Superset o Metabase sin coste de licencia.',
      },
      {
        question: '¿Pueden conectarse a nuestro ERP y CRM actual?',
        answer: 'Sí. Nos integramos con los principales ERPs (SAP, Navision, Odoo, Sage) y CRMs (Salesforce, HubSpot, Dynamics 365), además de bases de datos SQL, APIs REST, archivos Excel y Google Sheets.',
      },
    ],
  },

  'reporting-automatizado': {
    slug: 'reporting-automatizado',
    category: 'Inteligencia de Negocio',
    categorySlug: 'bi',
    title: 'Reporting Automatizado',
    subtitle: 'Elimina la elaboración manual de informes y libera tiempo para el análisis estratégico',
    description: 'Automatizamos por completo el ciclo de generación de informes: desde la extracción de datos de múltiples fuentes hasta la distribución personalizada a cada destinatario. Nuestras soluciones eliminan los errores humanos, garantizan la consistencia de la información y liberan cientos de horas al año que tu equipo puede dedicar a tareas de mayor valor añadido.',
    features: [
      {
        icon: 'schedule',
        title: 'Programación Flexible',
        description: 'Configura informes diarios, semanales, mensuales o bajo demanda. Define horarios de ejecución, destinatarios y formatos de entrega (PDF, Excel, email, portal web) según las necesidades de cada área.',
      },
      {
        icon: 'multiformat',
        title: 'Múltiples Formatos y Canales',
        description: 'Genera informes en PDF, Excel, PowerPoint o HTML. Distribúyelos por email, SharePoint, Teams, portales web internos o intégralos directamente en tus aplicaciones corporativas.',
      },
      {
        icon: 'consistency',
        title: 'Consistencia y Fiabilidad',
        description: 'Cada informe se genera desde la misma fuente de datos con las mismas reglas de negocio. Elimina discrepancias entre departamentos y asegura que todos trabajan con las mismas cifras.',
      },
      {
        icon: 'template',
        title: 'Templates Corporativos',
        description: 'Diseñamos plantillas profesionales alineadas con tu imagen corporativa. Incluyen gráficos, tablas y narrativa automática que se completan sin intervención manual.',
      },
    ],
    benefits: [
      {
        metric: '-85%',
        label: 'Tiempo de elaboración',
        description: 'Informes que antes requerían horas de trabajo manual se generan automáticamente en minutos.',
      },
      {
        metric: '0',
        label: 'Errores humanos',
        description: 'La automatización elimina los errores de copia, pegado y cálculo manual que comprometen la integridad de los datos.',
      },
      {
        metric: '+200h',
        label: 'Horas liberadas al año',
        description: 'Tiempo que tu equipo puede dedicar a análisis estratégico, interpretación de tendencias y toma de decisiones.',
      },
      {
        metric: '24/7',
        label: 'Disponibilidad',
        description: 'Los informes se generan y distribuyen automáticamente, incluso fuera del horario laboral, festivos y fines de semana.',
      },
    ],
    useCases: [
      {
        sector: 'Banca',
        title: 'Reporting Regulatorio Automatizado',
        description: 'Entidad financiera que automatizó la generación de más de 40 informes regulatorios mensuales, reduciendo el tiempo de preparación de 5 días a 4 horas y eliminando errores de cumplimiento.',
      },
      {
        sector: 'Retail',
        title: 'Informes de Cierre Diario',
        description: 'Cadena de retail que implementó informes de cierre diario automáticos para 120 tiendas, incluyendo ventas, inventario y personal, distribuidos a las 7:00 AM a cada director de tienda.',
      },
      {
        sector: 'Logística',
        title: 'Reporting de Flota en Tiempo Real',
        description: 'Empresa de transporte que automatizó informes de rendimiento de flota, consumo de combustible y tiempos de entrega, con alertas automáticas ante desviaciones de los KPIs establecidos.',
      },
    ],
    technologies: ['Power BI Paginated Reports', 'SSRS', 'Power Automate', 'Python', 'Apache Airflow', 'Crystal Reports', 'SQL Server'],
    relatedSolutions: ['dashboards-interactivos', 'power-bi-tableau-qlik', 'etl-data-warehousing'],
    faq: [
      {
        question: '¿Qué tipos de informes se pueden automatizar?',
        answer: 'Prácticamente cualquier informe recurrente: cierres diarios/mensuales, reporting financiero, informes de ventas, KPIs operativos, reporting regulatorio, informes de RRHH, control de calidad, y más.',
      },
      {
        question: '¿Es necesario cambiar nuestros sistemas actuales?',
        answer: 'No. Nos conectamos a tus sistemas existentes (ERPs, CRMs, bases de datos, ficheros) sin necesidad de migrar ni modificar tu infraestructura actual.',
      },
      {
        question: '¿Se pueden personalizar los informes por destinatario?',
        answer: 'Sí. Cada destinatario puede recibir una vista personalizada con los datos de su área, región o responsabilidad, usando el mismo informe base con filtros dinámicos.',
      },
    ],
  },

  'power-bi-tableau-qlik': {
    slug: 'power-bi-tableau-qlik',
    category: 'Inteligencia de Negocio',
    categorySlug: 'bi',
    title: 'Power BI, Tableau & Qlik',
    subtitle: 'Expertos certificados en las herramientas líderes del mercado de Business Intelligence',
    description: 'Somos partners certificados de las tres plataformas de BI más potentes del mercado. No vendemos herramientas: analizamos tus necesidades, tu stack tecnológico y tu presupuesto para recomendar la solución que mejor se adapte a tu empresa. Nuestro equipo cuenta con certificaciones oficiales en Power BI, Tableau y Qlik, lo que nos permite implementar, migrar y optimizar cualquier plataforma de BI.',
    features: [
      {
        icon: 'powerbi',
        title: 'Microsoft Power BI',
        description: 'Ideal para empresas con ecosistema Microsoft (Azure, Office 365, Dynamics). Ofrece la mejor relación calidad-precio, integración nativa con Excel y capacidades de IA integradas con Copilot.',
      },
      {
        icon: 'tableau',
        title: 'Tableau',
        description: 'La herramienta de referencia para visualización avanzada y análisis exploratorio. Perfecta para equipos de analistas que necesitan máxima flexibilidad y capacidades de storytelling con datos.',
      },
      {
        icon: 'qlik',
        title: 'Qlik Sense',
        description: 'Motor asociativo único que permite explorar datos sin rutas predefinidas. Ideal para descubrir patrones ocultos y relaciones entre datos que otras herramientas no detectan.',
      },
      {
        icon: 'migration',
        title: 'Migración entre Plataformas',
        description: 'Realizamos migraciones completas entre plataformas de BI, preservando modelos de datos, lógica de negocio y visualizaciones. Minimizamos el impacto en la operativa diaria.',
      },
    ],
    benefits: [
      {
        metric: '100%',
        label: 'Cobertura de herramientas',
        description: 'No dependemos de un solo proveedor. Recomendamos la herramienta que mejor se adapta a cada caso de uso y presupuesto.',
      },
      {
        metric: '15+',
        label: 'Certificaciones oficiales',
        description: 'Nuestro equipo acumula más de 15 certificaciones oficiales entre Power BI, Tableau y Qlik.',
      },
      {
        metric: '-40%',
        label: 'Coste total de propiedad',
        description: 'Optimizamos licencias, modelado de datos y arquitectura para reducir el coste total de la plataforma de BI.',
      },
      {
        metric: '+60%',
        label: 'Rendimiento de consultas',
        description: 'Optimizamos modelos de datos, DAX/LOD/set analysis para que los dashboards carguen en segundos.',
      },
    ],
    useCases: [
      {
        sector: 'Corporativo',
        title: 'Migración de Qlik a Power BI',
        description: 'Gran corporación que migró más de 200 informes de QlikView a Power BI, aprovechando las licencias de Microsoft 365 existentes y reduciendo el coste de BI un 45%.',
      },
      {
        sector: 'Consultoría',
        title: 'Implementación de Tableau Server',
        description: 'Consultora internacional que desplegó Tableau Server para 500 analistas, con gobierno de contenido, seguridad a nivel de fila y catálogo de datos centralizado.',
      },
      {
        sector: 'Industria',
        title: 'Qlik Sense para Producción',
        description: 'Empresa manufacturera que implementó Qlik Sense para análisis de producción, aprovechando el motor asociativo para descubrir correlaciones entre calidad, materias primas y condiciones ambientales.',
      },
    ],
    technologies: ['Power BI Desktop', 'Power BI Service', 'Power BI Premium', 'Tableau Desktop', 'Tableau Server', 'Tableau Cloud', 'Qlik Sense', 'QlikView', 'NPrinting'],
    relatedSolutions: ['dashboards-interactivos', 'reporting-automatizado', 'etl-data-warehousing'],
    faq: [
      {
        question: '¿Cuál es la mejor herramienta de BI para mi empresa?',
        answer: 'Depende de tu ecosistema tecnológico, presupuesto y necesidades. Power BI es ideal para entornos Microsoft y mejor precio. Tableau destaca en visualización avanzada. Qlik es superior para exploración libre de datos. Realizamos una evaluación gratuita para recomendarte la mejor opción.',
      },
      {
        question: '¿Podemos combinar varias herramientas?',
        answer: 'Sí. Muchas empresas usan Power BI para reporting operativo y Tableau para análisis exploratorio avanzado. Te ayudamos a diseñar una arquitectura híbrida coherente.',
      },
      {
        question: '¿Ofrecen formación en estas herramientas?',
        answer: 'Sí. Impartimos formación desde nivel básico hasta avanzado en las tres plataformas, con programas adaptados al perfil de cada usuario (analistas, directivos, desarrolladores).',
      },
    ],
  },

  // ==========================================
  // INGENIERÍA DE DATOS
  // ==========================================

  'etl-data-warehousing': {
    slug: 'etl-data-warehousing',
    category: 'Ingeniería de Datos',
    categorySlug: 'data-engineering',
    title: 'ETL & Data Warehousing',
    subtitle: 'Construimos la base de datos sólida que tu empresa necesita para analizar y decidir',
    description: 'Diseñamos e implementamos procesos ETL (Extracción, Transformación y Carga) robustos y almacenes de datos (Data Warehouses) escalables que centralizan toda la información de tu empresa en una única fuente de verdad. Conectamos ERPs, CRMs, bases de datos, APIs y archivos planos en un repositorio organizado, limpio y optimizado para el análisis.',
    features: [
      {
        icon: 'extraction',
        title: 'Extracción Multi-Fuente',
        description: 'Conectamos con cualquier fuente de datos: bases de datos relacionales (SQL Server, PostgreSQL, MySQL), ERPs (SAP, Navision, Odoo), CRMs (Salesforce, HubSpot), APIs REST/SOAP, ficheros CSV/Excel y servicios cloud.',
      },
      {
        icon: 'transformation',
        title: 'Transformación Inteligente',
        description: 'Aplicamos reglas de negocio, limpieza, deduplicación, normalización y enriquecimiento de datos. Convertimos datos crudos en información estructurada y lista para el análisis.',
      },
      {
        icon: 'warehouse',
        title: 'Data Warehouse Moderno',
        description: 'Diseñamos almacenes de datos con arquitectura estrella o copo de nieve, optimizados para consultas analíticas. Implementamos tanto en la nube (Snowflake, BigQuery, Redshift) como on-premise.',
      },
      {
        icon: 'orchestration',
        title: 'Orquestación y Monitorización',
        description: 'Automatizamos la ejecución de los procesos ETL con herramientas como Apache Airflow, Azure Data Factory o AWS Glue. Incluimos monitorización, alertas y logs de auditoría.',
      },
    ],
    benefits: [
      {
        metric: '1',
        label: 'Fuente de verdad',
        description: 'Todos los departamentos trabajan con los mismos datos, desde la misma fuente, eliminando silos de información y discrepancias.',
      },
      {
        metric: '-90%',
        label: 'Tiempo de preparación',
        description: 'Los analistas dejan de "limpiar" datos manualmente y se centran en generar insights y valor para el negocio.',
      },
      {
        metric: '99.9%',
        label: 'Disponibilidad',
        description: 'Procesos ETL monitorizados 24/7 con recuperación automática ante fallos y alertas proactivas.',
      },
      {
        metric: '10x',
        label: 'Velocidad de consulta',
        description: 'Los datos pre-procesados y optimizados permiten consultas analíticas que antes tardaban horas en ejecutarse en segundos.',
      },
    ],
    useCases: [
      {
        sector: 'Retail',
        title: 'Data Warehouse Omnicanal',
        description: 'Cadena de retail que unificó datos de TPV, eCommerce, fidelización y logística en un Data Warehouse en Snowflake, permitiendo análisis de cliente 360° y optimización de inventario.',
      },
      {
        sector: 'Farmacéutica',
        title: 'ETL para Ensayos Clínicos',
        description: 'Laboratorio farmacéutico que automatizó la ingesta y transformación de datos de ensayos clínicos desde 15 fuentes diferentes, reduciendo el tiempo de consolidación de semanas a horas.',
      },
      {
        sector: 'Finanzas',
        title: 'Consolidación Financiera Multi-Entidad',
        description: 'Grupo financiero con 8 filiales que centralizó la consolidación contable en un Data Warehouse, automatizando eliminaciones intercompañía y generando estados financieros consolidados en minutos.',
      },
    ],
    technologies: ['Azure Data Factory', 'AWS Glue', 'Apache Airflow', 'dbt', 'Snowflake', 'BigQuery', 'Amazon Redshift', 'SQL Server SSIS', 'Talend', 'Fivetran'],
    relatedSolutions: ['calidad-gobierno-dato', 'migracion-nube', 'dashboards-interactivos'],
    faq: [
      {
        question: '¿Qué diferencia hay entre un Data Warehouse y un Data Lake?',
        answer: 'Un Data Warehouse almacena datos estructurados y transformados, optimizados para consultas analíticas. Un Data Lake almacena datos en bruto de cualquier formato. Muchas empresas usan ambos: el Data Lake como repositorio central y el Data Warehouse como capa de consumo.',
      },
      {
        question: '¿Cuánto tiempo tarda un proyecto de Data Warehousing?',
        answer: 'Un MVP funcional con las fuentes principales puede estar listo en 8-12 semanas. Un proyecto completo con todas las fuentes, históricos y optimización suele requerir 4-6 meses.',
      },
      {
        question: '¿Necesitamos infraestructura en la nube?',
        answer: 'No necesariamente. Implementamos Data Warehouses tanto en la nube (recomendado para escalabilidad y coste variable) como on-premise. Analizamos tu caso para recomendar la mejor opción.',
      },
    ],
  },

  'calidad-gobierno-dato': {
    slug: 'calidad-gobierno-dato',
    category: 'Ingeniería de Datos',
    categorySlug: 'data-engineering',
    title: 'Calidad y Gobierno del Dato',
    subtitle: 'Datos limpios, fiables y gobernados como la base de toda decisión inteligente',
    description: 'La calidad de tus decisiones depende directamente de la calidad de tus datos. Implementamos frameworks de gobierno del dato y programas de calidad que aseguran que cada dato de tu organización sea preciso, completo, consistente y oportuno. Definimos políticas, roles, procesos y métricas que transforman los datos de un activo pasivo en una ventaja competitiva.',
    features: [
      {
        icon: 'profiling',
        title: 'Data Profiling y Auditoría',
        description: 'Analizamos el estado actual de tus datos: completitud, unicidad, consistencia, validez y actualidad. Identificamos problemas sistémicos, duplicados, outliers y datos huérfanos.',
      },
      {
        icon: 'cleansing',
        title: 'Limpieza y Estandarización',
        description: 'Corregimos errores, eliminamos duplicados, normalizamos formatos y enriquecemos datos incompletos. Implementamos reglas de validación automáticas para prevenir la entrada de datos erróneos.',
      },
      {
        icon: 'catalog',
        title: 'Catálogo de Datos',
        description: 'Creamos un inventario completo de todos los activos de datos de tu organización: qué datos existen, dónde están, quién los produce, quién los consume y qué significan en términos de negocio.',
      },
      {
        icon: 'monitoring',
        title: 'Monitorización Continua',
        description: 'Implementamos dashboards de calidad de datos con métricas automatizadas y alertas. Detectamos degradación de calidad en tiempo real antes de que impacte en los informes y decisiones.',
      },
    ],
    benefits: [
      {
        metric: '+95%',
        label: 'Precisión de datos',
        description: 'Los datos de tu organización alcanzan niveles de precisión superiores al 95% tras implementar nuestro framework de calidad.',
      },
      {
        metric: '-60%',
        label: 'Tiempo de resolución',
        description: 'Los problemas de datos se detectan y resuelven automáticamente, reduciendo drásticamente el tiempo de resolución de incidencias.',
      },
      {
        metric: '+35%',
        label: 'Confianza en datos',
        description: 'Los usuarios confían más en los datos y toman decisiones basadas en información verificada y gobernada.',
      },
      {
        metric: '-50%',
        label: 'Coste de mala calidad',
        description: 'Reducción significativa del "coste de la mala calidad": reprocesos, decisiones erróneas y oportunidades perdidas.',
      },
    ],
    useCases: [
      {
        sector: 'Seguros',
        title: 'Gobierno de Datos de Cliente',
        description: 'Aseguradora que implementó un framework de gobierno de datos maestros de cliente, eliminando 120.000 registros duplicados y estableciendo una vista unificada del cliente (Golden Record).',
      },
      {
        sector: 'Salud',
        title: 'Calidad de Datos Clínicos',
        description: 'Red hospitalaria que implementó controles de calidad automatizados en datos de pacientes, reduciendo errores en historiales clínicos un 80% y mejorando la seguridad del paciente.',
      },
      {
        sector: 'Manufactura',
        title: 'Master Data Management',
        description: 'Grupo industrial que centralizó y gobernó los datos maestros de producto, proveedor y materiales para 6 plantas, eliminando inconsistencias que causaban errores en la planificación.',
      },
    ],
    technologies: ['Informatica Data Quality', 'Talend Data Quality', 'Great Expectations', 'Apache Griffin', 'Collibra', 'Alation', 'Microsoft Purview', 'Atlan'],
    relatedSolutions: ['etl-data-warehousing', 'data-governance', 'estrategia-datos'],
    faq: [
      {
        question: '¿Cómo se mide la calidad de los datos?',
        answer: 'Evaluamos 6 dimensiones: completitud (% de campos vacíos), unicidad (duplicados), consistencia (datos coherentes entre sistemas), validez (valores dentro de rangos permitidos), actualidad (frescura) y precisión (correspondencia con la realidad).',
      },
      {
        question: '¿Cuánto cuesta implementar un programa de calidad de datos?',
        answer: 'Depende del alcance. Una auditoría inicial con recomendaciones puede realizarse en 2-4 semanas. Un programa completo de gobierno y calidad de datos se implementa de forma incremental en 3-6 meses.',
      },
      {
        question: '¿Quién se encarga de mantener la calidad una vez implementada?',
        answer: 'Definimos roles (Data Stewards, Data Owners) y procesos para que tu equipo mantenga la calidad. También ofrecemos servicios de mantenimiento y monitorización continua.',
      },
    ],
  },

  'migracion-nube': {
    slug: 'migracion-nube',
    category: 'Ingeniería de Datos',
    categorySlug: 'data-engineering',
    title: 'Migración a la Nube',
    subtitle: 'Lleva tus datos y analítica a la nube con cero pérdida de información y máxima seguridad',
    description: 'Planificamos y ejecutamos la migración de tu infraestructura de datos a la nube (Azure, AWS o Google Cloud) con una metodología probada que garantiza cero pérdida de información, mínimo impacto operativo y máximo aprovechamiento de las capacidades cloud. Desde el assessment inicial hasta la optimización post-migración, te acompañamos en cada paso.',
    features: [
      {
        icon: 'assessment',
        title: 'Assessment y Planificación',
        description: 'Evaluamos tu infraestructura actual, dependencias, volúmenes de datos y requisitos de rendimiento. Diseñamos un plan de migración por fases que minimiza riesgos y tiempo de inactividad.',
      },
      {
        icon: 'multicloud',
        title: 'Multi-Cloud y Agnóstico',
        description: 'Trabajamos con los tres grandes proveedores cloud: Microsoft Azure, Amazon Web Services y Google Cloud Platform. Recomendamos la plataforma que mejor se adapta a tu caso y evitamos vendor lock-in.',
      },
      {
        icon: 'security',
        title: 'Seguridad y Cumplimiento',
        description: 'Implementamos cifrado en tránsito y en reposo, control de acceso granular, auditoría de accesos y cumplimiento de normativas (RGPD, ISO 27001, HIPAA). La seguridad no es opcional.',
      },
      {
        icon: 'optimization',
        title: 'Optimización de Costes',
        description: 'Diseñamos arquitecturas cloud cost-effective con auto-scaling, reservas de capacidad y storage tiers. Monitorizamos el consumo y optimizamos continuamente para evitar facturas sorpresa.',
      },
    ],
    benefits: [
      {
        metric: '-50%',
        label: 'Costes de infraestructura',
        description: 'Pasar de servidores on-premise a la nube reduce costes de hardware, mantenimiento, electricidad y personal técnico dedicado.',
      },
      {
        metric: '∞',
        label: 'Escalabilidad',
        description: 'Escala recursos bajo demanda en minutos. Procesa picos de trabajo sin preocuparte por la capacidad del hardware.',
      },
      {
        metric: '99.99%',
        label: 'Disponibilidad',
        description: 'Las plataformas cloud ofrecen SLAs de alta disponibilidad con redundancia geográfica y recuperación ante desastres.',
      },
      {
        metric: '0',
        label: 'Pérdida de datos',
        description: 'Nuestra metodología de migración garantiza cero pérdida de datos con validaciones cruzadas y rollback automático.',
      },
    ],
    useCases: [
      {
        sector: 'Retail',
        title: 'Migración a Azure de Retail Nacional',
        description: 'Cadena de retail que migró su Data Warehouse de SQL Server on-premise a Azure Synapse Analytics, reduciendo los costes de infraestructura un 55% y mejorando los tiempos de procesamiento un 300%.',
      },
      {
        sector: 'Finanzas',
        title: 'Data Platform en AWS',
        description: 'Fintech que construyó su plataforma de datos íntegramente en AWS (S3 + Glue + Redshift + QuickSight), procesando 2TB diarios de transacciones con costes 60% inferiores a la solución on-premise.',
      },
      {
        sector: 'Sanidad',
        title: 'Migración Segura a Google Cloud',
        description: 'Red de clínicas que migró datos de pacientes a Google Cloud con cumplimiento RGPD, implementando BigQuery para análisis y Looker para reporting, con cifrado end-to-end.',
      },
    ],
    technologies: ['Microsoft Azure', 'Amazon Web Services', 'Google Cloud Platform', 'Azure Synapse', 'Amazon Redshift', 'BigQuery', 'Snowflake', 'Databricks', 'Terraform', 'Docker'],
    relatedSolutions: ['etl-data-warehousing', 'calidad-gobierno-dato', 'cumplimiento-rgpd'],
    faq: [
      {
        question: '¿Cuánto tiempo requiere una migración a la nube?',
        answer: 'Una migración típica de Data Warehouse se ejecuta en 3-6 meses, incluyendo assessment, diseño, migración, validación y optimización. Migraciones más complejas con múltiples sistemas pueden requerir 6-12 meses.',
      },
      {
        question: '¿Habrá tiempo de inactividad durante la migración?',
        answer: 'Planificamos la migración para minimizar el impacto. Usamos estrategias de migración progresiva y cutover en ventanas de mantenimiento, con rollback preparado si fuera necesario.',
      },
      {
        question: '¿Qué pasa si no cumplimos normativas como RGPD en la nube?',
        answer: 'Diseñamos la arquitectura cloud con cumplimiento normativo desde el inicio (compliance by design). Elegimos regiones de datos en la UE, implementamos cifrado y control de acceso, y documentamos las medidas técnicas.',
      },
    ],
  },

  // ==========================================
  // IA Y ANALÍTICA AVANZADA
  // ==========================================

  'machine-learning': {
    slug: 'machine-learning',
    category: 'IA y Analítica Avanzada',
    categorySlug: 'ia',
    title: 'Machine Learning',
    subtitle: 'Modelos inteligentes que aprenden de tus datos para automatizar y optimizar procesos',
    description: 'Desarrollamos modelos de Machine Learning personalizados que resuelven problemas reales de negocio: desde la clasificación automática de clientes y la detección de fraude hasta la optimización de precios y la predicción de demanda. Nuestro enfoque es pragmático: no implementamos ML por moda, sino cuando aporta valor medible al negocio.',
    features: [
      {
        icon: 'classification',
        title: 'Clasificación y Segmentación',
        description: 'Modelos que clasifican automáticamente clientes, productos, transacciones o tickets. Segmentación inteligente basada en comportamiento, no solo en demografía, para personalizar experiencias y ofertas.',
      },
      {
        icon: 'anomaly',
        title: 'Detección de Anomalías',
        description: 'Algoritmos que identifican patrones inusuales en tiempo real: fraude en transacciones, fallos en maquinaria, comportamiento anómalo de usuarios o desviaciones en procesos productivos.',
      },
      {
        icon: 'optimization',
        title: 'Optimización Automática',
        description: 'Modelos de optimización que ajustan precios dinámicamente, asignan recursos, planifican rutas o minimizan desperdicios. Decisiones que antes requerían intuición, ahora se basan en datos.',
      },
      {
        icon: 'mlops',
        title: 'MLOps y Producción',
        description: 'No nos quedamos en el prototipo. Desplegamos modelos en producción con monitorización continua, reentrenamiento automático, versionado y A/B testing para garantizar rendimiento sostenido.',
      },
    ],
    benefits: [
      {
        metric: '+25%',
        label: 'Eficiencia operativa',
        description: 'Los modelos de ML automatizan decisiones repetitivas, liberando a tu equipo para tareas de mayor valor añadido.',
      },
      {
        metric: '-40%',
        label: 'Costes de fraude',
        description: 'La detección de anomalías reduce significativamente las pérdidas por fraude, errores y actividades no autorizadas.',
      },
      {
        metric: '+15%',
        label: 'Incremento de ingresos',
        description: 'La segmentación inteligente y personalización mejoran tasas de conversión, cross-selling y retención de clientes.',
      },
      {
        metric: '85%+',
        label: 'Precisión de modelos',
        description: 'Nuestros modelos alcanzan y superan el 85% de precisión, con validación rigurosa y métricas transparentes.',
      },
    ],
    useCases: [
      {
        sector: 'Banca',
        title: 'Detección de Fraude en Tiempo Real',
        description: 'Entidad bancaria que implementó un modelo de detección de fraude que analiza transacciones en milisegundos, reduciendo falsos positivos un 60% y detectando un 30% más de fraude real.',
      },
      {
        sector: 'Retail',
        title: 'Motor de Recomendación',
        description: 'eCommerce que implementó un sistema de recomendación ML que incrementó el ticket medio un 18% y la tasa de conversión un 12% mediante sugerencias personalizadas en tiempo real.',
      },
      {
        sector: 'Industria',
        title: 'Mantenimiento Predictivo',
        description: 'Planta industrial que desplegó modelos de ML sobre datos de sensores IoT para predecir fallos en maquinaria 72h antes de que ocurran, reduciendo paradas no planificadas un 45%.',
      },
    ],
    technologies: ['Python', 'scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'LightGBM', 'MLflow', 'Kubeflow', 'Amazon SageMaker', 'Azure ML', 'Vertex AI'],
    relatedSolutions: ['analisis-predictivo', 'ia-generativa-chatbots', 'etl-data-warehousing'],
    faq: [
      {
        question: '¿Necesitamos muchos datos para implementar Machine Learning?',
        answer: 'Depende del problema. Algunos modelos funcionan bien con miles de registros, otros necesitan millones. Evaluamos la viabilidad antes de empezar y, si los datos no son suficientes, proponemos estrategias de enriquecimiento o transfer learning.',
      },
      {
        question: '¿Cuánto tiempo tarda un proyecto de ML?',
        answer: 'Un POC (prueba de concepto) puede estar listo en 4-6 semanas. Llevarlo a producción con MLOps requiere 2-4 meses adicionales. El timeline depende de la disponibilidad y calidad de los datos.',
      },
      {
        question: '¿Los modelos necesitan mantenimiento?',
        answer: 'Sí. Los modelos degradan con el tiempo (model drift) a medida que cambian los patrones de datos. Implementamos monitorización y reentrenamiento automático para mantener la precisión.',
      },
    ],
  },

  'ia-generativa-chatbots': {
    slug: 'ia-generativa-chatbots',
    category: 'IA y Analítica Avanzada',
    categorySlug: 'ia',
    title: 'IA Generativa & Chatbots',
    subtitle: 'Asistentes inteligentes y soluciones de IA generativa conectadas a los datos de tu empresa',
    description: 'Implementamos soluciones de IA generativa que van mucho más allá de ChatGPT. Creamos asistentes de IA personalizados que entienden tu negocio, acceden a tus datos internos y responden preguntas en lenguaje natural. Desde chatbots de atención al cliente hasta copilots internos para empleados, integramos LLMs (Large Language Models) con la información específica de tu empresa mediante RAG (Retrieval-Augmented Generation).',
    features: [
      {
        icon: 'rag',
        title: 'RAG - Respuestas con tus Datos',
        description: 'Conectamos modelos de lenguaje a tus documentos, bases de datos y bases de conocimiento internas. El asistente responde con información precisa y actualizada de tu empresa, no con datos genéricos.',
      },
      {
        icon: 'chatbot',
        title: 'Chatbots Empresariales',
        description: 'Asistentes de IA para atención al cliente, soporte técnico, consultas de RRHH o FAQs internas. Disponibles 24/7 en web, Teams, Slack, WhatsApp o tu aplicación corporativa.',
      },
      {
        icon: 'copilot',
        title: 'Copilots para Empleados',
        description: 'Asistentes de IA que ayudan a tus empleados a analizar datos, redactar informes, resumir documentos, buscar información y automatizar tareas repetitivas con lenguaje natural.',
      },
      {
        icon: 'generation',
        title: 'Generación de Contenido',
        description: 'Soluciones de IA para generar descripciones de producto, emails personalizados, informes narrativos, resúmenes ejecutivos y documentación técnica de forma automática.',
      },
    ],
    benefits: [
      {
        metric: '-60%',
        label: 'Tiempo de búsqueda',
        description: 'Los empleados encuentran información interna en segundos preguntando en lenguaje natural, en lugar de buscar en carpetas y documentos.',
      },
      {
        metric: '24/7',
        label: 'Disponibilidad',
        description: 'Los asistentes de IA responden consultas de clientes y empleados las 24 horas, 7 días a la semana, sin colas de espera.',
      },
      {
        metric: '+40%',
        label: 'Productividad',
        description: 'Los copilots internos multiplican la productividad de los equipos al automatizar tareas de búsqueda, redacción y análisis.',
      },
      {
        metric: '-70%',
        label: 'Tickets de soporte',
        description: 'Los chatbots resuelven la mayoría de consultas recurrentes sin intervención humana, liberando al equipo de soporte.',
      },
    ],
    useCases: [
      {
        sector: 'Legal',
        title: 'Asistente Legal con IA',
        description: 'Despacho de abogados que implementó un asistente de IA conectado a su base de jurisprudencia y legislación, permitiendo a los letrados encontrar precedentes y normativa en segundos.',
      },
      {
        sector: 'eCommerce',
        title: 'Chatbot de Atención al Cliente',
        description: 'Tienda online que desplegó un chatbot con IA generativa que resuelve el 75% de consultas sin intervención humana, con conocimiento del catálogo, pedidos y políticas de devolución.',
      },
      {
        sector: 'RRHH',
        title: 'Copilot de Recursos Humanos',
        description: 'Empresa de 2.000 empleados que implementó un asistente de IA para consultas de nómina, vacaciones, beneficios y políticas internas, reduciendo llamadas a RRHH un 65%.',
      },
    ],
    technologies: ['OpenAI GPT-4', 'Azure OpenAI', 'Claude (Anthropic)', 'LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'ChromaDB', 'Hugging Face', 'AWS Bedrock'],
    relatedSolutions: ['machine-learning', 'analisis-predictivo', 'estrategia-datos'],
    faq: [
      {
        question: '¿Es seguro conectar la IA a nuestros datos internos?',
        answer: 'Sí, cuando se implementa correctamente. Usamos modelos on-premise o APIs con acuerdos de confidencialidad, cifrado de datos, control de acceso granular y auditoría. Los datos nunca se usan para entrenar modelos de terceros.',
      },
      {
        question: '¿Puede la IA "inventar" respuestas incorrectas (alucinaciones)?',
        answer: 'Las alucinaciones son un riesgo real. Lo mitigamos con RAG (respuestas basadas en documentos fuente), validación de respuestas, citación de fuentes y configuración de confianza mínima para mostrar respuestas.',
      },
      {
        question: '¿Qué coste tiene implementar un chatbot con IA?',
        answer: 'Un chatbot básico con RAG puede estar operativo desde 5.000€. Soluciones más complejas con integraciones, multi-idioma y personalización avanzada oscilan entre 15.000€ y 50.000€. El coste recurrente de API depende del volumen de consultas.',
      },
    ],
  },

  'analisis-predictivo': {
    slug: 'analisis-predictivo',
    category: 'IA y Analítica Avanzada',
    categorySlug: 'ia',
    title: 'Análisis Predictivo',
    subtitle: 'Anticípate al futuro con modelos que predicen tendencias, demanda y comportamientos',
    description: 'El análisis predictivo utiliza datos históricos, algoritmos estadísticos y técnicas de Machine Learning para identificar la probabilidad de resultados futuros. Nuestras soluciones predictivas permiten a las empresas pasar de la analítica descriptiva ("¿qué pasó?") a la analítica predictiva ("¿qué va a pasar?") y prescriptiva ("¿qué debemos hacer?").',
    features: [
      {
        icon: 'forecasting',
        title: 'Forecasting de Demanda',
        description: 'Modelos de previsión de demanda que combinan series temporales, variables externas (clima, eventos, festivos) y Machine Learning para predecir ventas, tráfico o consumo con precisión superior al 90%.',
      },
      {
        icon: 'churn',
        title: 'Predicción de Churn',
        description: 'Identifica a los clientes con mayor probabilidad de abandono antes de que se vayan. Activa campañas de retención personalizadas basadas en señales predictivas y scoring de riesgo.',
      },
      {
        icon: 'scoring',
        title: 'Scoring y Propensión',
        description: 'Modelos de scoring que priorizan leads, evalúan riesgo crediticio, predicen propensión de compra o valoran la probabilidad de impago. Datos objetivos para decisiones antes basadas en intuición.',
      },
      {
        icon: 'timeseries',
        title: 'Series Temporales Avanzadas',
        description: 'Modelos ARIMA, Prophet, LSTM y N-BEATS para previsión de métricas financieras, producción, logística y cualquier variable que evolucione en el tiempo.',
      },
    ],
    benefits: [
      {
        metric: '+20%',
        label: 'Precisión en previsiones',
        description: 'Los modelos predictivos mejoran las previsiones manuales o basadas en medias simples entre un 15% y un 35%.',
      },
      {
        metric: '-30%',
        label: 'Reducción de stock',
        description: 'La previsión de demanda optimiza niveles de inventario, reduciendo tanto excesos como roturas de stock.',
      },
      {
        metric: '+25%',
        label: 'Retención de clientes',
        description: 'La predicción de churn permite actuar proactivamente y retener clientes que de otra forma se habrían perdido.',
      },
      {
        metric: '3-6x',
        label: 'ROI del proyecto',
        description: 'Los proyectos de análisis predictivo típicamente retornan entre 3 y 6 veces la inversión en el primer año.',
      },
    ],
    useCases: [
      {
        sector: 'Retail',
        title: 'Previsión de Demanda por Tienda',
        description: 'Cadena de supermercados que implementó modelos de previsión de demanda por tienda y categoría, reduciendo el desperdicio alimentario un 25% y las roturas de stock un 40%.',
      },
      {
        sector: 'Telecomunicaciones',
        title: 'Modelo Anti-Churn',
        description: 'Operadora de telecomunicaciones que predice clientes en riesgo de baja con 60 días de anticipación, activando ofertas de retención que redujeron el churn un 22%.',
      },
      {
        sector: 'Energía',
        title: 'Previsión de Consumo Energético',
        description: 'Distribuidora eléctrica que predice la demanda energética a 24-72 horas con un error inferior al 3%, optimizando la compra en el mercado mayorista y ahorrando millones.',
      },
    ],
    technologies: ['Python', 'R', 'Prophet (Meta)', 'ARIMA/SARIMA', 'XGBoost', 'LightGBM', 'TensorFlow', 'statsmodels', 'H2O.ai', 'DataRobot'],
    relatedSolutions: ['machine-learning', 'ia-generativa-chatbots', 'dashboards-interactivos'],
    faq: [
      {
        question: '¿Cuántos datos históricos necesitamos para un modelo predictivo?',
        answer: 'Como regla general, al menos 2-3 años de datos históricos para patrones estacionales. Para previsiones de corto plazo sin estacionalidad, 6-12 meses pueden ser suficientes. Evaluamos tu caso específico.',
      },
      {
        question: '¿Qué precisión puede alcanzar un modelo predictivo?',
        answer: 'Depende del dominio y la calidad de los datos. Un modelo de previsión de demanda bien calibrado alcanza errores del 5-15%. Modelos de clasificación (churn, fraude) superan el 85-90% de precisión habitualmente.',
      },
      {
        question: '¿Los modelos predictivos reemplazan al juicio humano?',
        answer: 'No. Los modelos proporcionan una base objetiva para la decisión, pero el contexto, la estrategia y el juicio experto siguen siendo fundamentales. Lo ideal es combinar predicción algorítmica con conocimiento del negocio.',
      },
    ],
  },

  // ==========================================
  // CONSULTORÍA ESTRATÉGICA
  // ==========================================

  'estrategia-datos': {
    slug: 'estrategia-datos',
    category: 'Consultoría Estratégica',
    categorySlug: 'consultoria',
    title: 'Estrategia de Datos',
    subtitle: 'Diseñamos el roadmap que transforma tu empresa en una organización Data-Driven',
    description: 'Una estrategia de datos define cómo una organización va a recopilar, gestionar, analizar y capitalizar sus datos para alcanzar sus objetivos de negocio. Diseñamos hojas de ruta completas que alinean la tecnología, los procesos y las personas con la visión estratégica de tu empresa. No se trata solo de herramientas: se trata de crear una cultura donde los datos son el motor de cada decisión.',
    features: [
      {
        icon: 'maturity',
        title: 'Assessment de Madurez Analítica',
        description: 'Evaluamos el nivel de madurez analítica de tu organización en 5 dimensiones: estrategia, datos, tecnología, personas y procesos. Identificamos gaps y definimos el camino hacia la excelencia analítica.',
      },
      {
        icon: 'roadmap',
        title: 'Roadmap de Transformación',
        description: 'Diseñamos un plan de transformación por fases con hitos claros, quick wins e inversiones priorizadas. Cada fase entrega valor tangible mientras construye las bases para la siguiente.',
      },
      {
        icon: 'culture',
        title: 'Cultura Data-Driven',
        description: 'Implementamos programas de change management, formación y data literacy que aseguran que toda la organización adopte una cultura basada en datos, no solo el departamento de IT.',
      },
      {
        icon: 'roi',
        title: 'Business Case y ROI',
        description: 'Construimos el business case detallado de cada iniciativa: inversión requerida, beneficios esperados, timeline de retorno y métricas de seguimiento. Datos para justificar la inversión en datos.',
      },
    ],
    benefits: [
      {
        metric: '360°',
        label: 'Visión integral',
        description: 'La estrategia de datos alinea tecnología, procesos y personas en torno a objetivos de negocio claros y medibles.',
      },
      {
        metric: '+50%',
        label: 'Adopción del dato',
        description: 'Las organizaciones con estrategia de datos formal multiplican la adopción de herramientas analíticas en toda la empresa.',
      },
      {
        metric: '3-5x',
        label: 'ROI de inversiones',
        description: 'Las iniciativas de datos priorizadas estratégicamente generan un retorno 3-5 veces superior a las implementaciones aisladas.',
      },
      {
        metric: '-40%',
        label: 'Coste de implementación',
        description: 'Una hoja de ruta bien definida evita inversiones duplicadas, tecnologías incompatibles y proyectos sin impacto.',
      },
    ],
    useCases: [
      {
        sector: 'Banca',
        title: 'Transformación Digital de Entidad Financiera',
        description: 'Banco mediano que definió su estrategia de datos a 3 años, priorizando la unificación de datos de cliente, automatización de reporting regulatorio y modelos de riesgo. ROI del 400% en el primer año.',
      },
      {
        sector: 'Retail',
        title: 'Estrategia Data-Driven para Retail',
        description: 'Grupo de distribución que diseñó su roadmap analítico: desde un Data Warehouse centralizado hasta modelos de previsión de demanda y personalización de ofertas. Implementado en 3 fases de 6 meses.',
      },
      {
        sector: 'Industria',
        title: 'Industria 4.0 Data Strategy',
        description: 'Empresa manufacturera que definió su estrategia de datos para la transición a Industria 4.0: integración de sensores IoT, Data Lake, mantenimiento predictivo y gemelos digitales.',
      },
    ],
    technologies: ['Frameworks DAMA-DMBOK', 'DCAM (EDM Council)', 'Data Maturity Models', 'Design Thinking', 'OKRs', 'Business Model Canvas'],
    relatedSolutions: ['data-governance', 'calidad-gobierno-dato', 'etl-data-warehousing'],
    faq: [
      {
        question: '¿Cuánto tiempo lleva definir una estrategia de datos?',
        answer: 'Un assessment de madurez y hoja de ruta inicial puede completarse en 6-8 semanas. Una estrategia detallada con business case, governance y plan de implementación requiere 3-4 meses.',
      },
      {
        question: '¿Necesitamos un CDO (Chief Data Officer)?',
        answer: 'No necesariamente al inicio. Pero una estrategia de datos exitosa requiere un sponsor ejecutivo. Podemos actuar como CDO interino mientras se define la estructura organizativa adecuada.',
      },
      {
        question: '¿Por dónde empezamos si no tenemos nada?',
        answer: 'Empezamos siempre por el diagnóstico: entendemos tu situación actual, tus objetivos de negocio y tus pain points. Desde ahí, definimos quick wins que generen valor inmediato mientras construimos la estrategia a largo plazo.',
      },
    ],
  },

  'data-governance': {
    slug: 'data-governance',
    category: 'Consultoría Estratégica',
    categorySlug: 'consultoria',
    title: 'Data Governance',
    subtitle: 'Establece el marco que asegura calidad, seguridad y trazabilidad de tus datos',
    description: 'El Data Governance (gobierno del dato) establece las políticas, roles, procesos y tecnologías necesarias para gestionar los datos como un activo estratégico. Implementamos frameworks de gobierno del dato que definen quién puede acceder a qué datos, cómo se asegura su calidad, cómo se protege la privacidad y cómo se garantiza el cumplimiento normativo.',
    features: [
      {
        icon: 'framework',
        title: 'Framework de Gobierno',
        description: 'Diseñamos un framework de gobierno del dato adaptado a tu organización, basado en estándares internacionales (DAMA-DMBOK, EDM Council) pero pragmático y ejecutable.',
      },
      {
        icon: 'roles',
        title: 'Roles y Responsabilidades',
        description: 'Definimos la estructura organizativa del dato: Data Owners (propietarios de negocio), Data Stewards (custodios), Data Engineers y comités de gobierno con funciones y responsabilidades claras.',
      },
      {
        icon: 'policies',
        title: 'Políticas y Estándares',
        description: 'Redactamos políticas de clasificación de datos, acceso, retención, calidad, privacidad y seguridad. Estándares de nomenclatura, definiciones de negocio y diccionario de datos corporativo.',
      },
      {
        icon: 'lineage',
        title: 'Linaje y Trazabilidad',
        description: 'Implementamos herramientas que trazan el origen, transformación y destino de cada dato. Sabes exactamente de dónde viene cada cifra de un informe y qué transformaciones ha sufrido.',
      },
    ],
    benefits: [
      {
        metric: '+80%',
        label: 'Confianza en datos',
        description: 'Cuando existen políticas claras y roles definidos, la organización confía en los datos para tomar decisiones críticas.',
      },
      {
        metric: '-70%',
        label: 'Incidencias de datos',
        description: 'Un gobierno del dato maduro previene problemas en origen, reduciendo drásticamente las incidencias de calidad.',
      },
      {
        metric: '100%',
        label: 'Trazabilidad',
        description: 'Cada dato tiene un propietario, una fuente conocida y un linaje documentado. Fundamental para auditorías y cumplimiento.',
      },
      {
        metric: '-45%',
        label: 'Tiempo de localización',
        description: 'El catálogo de datos y el diccionario de negocio permiten encontrar cualquier dato de la organización en segundos.',
      },
    ],
    useCases: [
      {
        sector: 'Banca',
        title: 'Gobierno del Dato para BCBS 239',
        description: 'Entidad bancaria que implementó un framework de gobierno del dato para cumplir con los principios BCBS 239 de agregación de datos de riesgo, incluyendo linaje completo de datos de riesgo.',
      },
      {
        sector: 'Salud',
        title: 'Gobierno de Datos Sanitarios',
        description: 'Red hospitalaria que estableció políticas de gobierno para datos de pacientes, ensayos clínicos e investigación, asegurando calidad, privacidad y cumplimiento normativo.',
      },
      {
        sector: 'Corporativo',
        title: 'Data Governance en Grupo Multinacional',
        description: 'Grupo multinacional con presencia en 12 países que unificó la definición de "cliente", "venta" y "margen" mediante un diccionario de datos corporativo y comités de gobierno.',
      },
    ],
    technologies: ['Collibra', 'Alation', 'Microsoft Purview', 'Atlan', 'Apache Atlas', 'Informatica', 'DAMA-DMBOK', 'EDM Council DCAM'],
    relatedSolutions: ['calidad-gobierno-dato', 'estrategia-datos', 'cumplimiento-rgpd'],
    faq: [
      {
        question: '¿Data Governance es solo para grandes empresas?',
        answer: 'No. Cualquier empresa que use datos para tomar decisiones se beneficia del gobierno del dato. Para pymes, implementamos frameworks ágiles y pragmáticos que no requieren grandes inversiones en herramientas.',
      },
      {
        question: '¿Cuánto tarda en verse resultados?',
        answer: 'Los primeros resultados son visibles en 3-4 meses: catálogo de datos, roles definidos y primeras métricas de calidad. Un programa de governance maduro se consolida en 12-18 meses.',
      },
      {
        question: '¿Necesitamos herramientas específicas?',
        answer: 'Dependiendo del tamaño de la organización. Empresas pequeñas pueden empezar con herramientas open source o incluso SharePoint. Organizaciones grandes se benefician de plataformas como Collibra, Alation o Microsoft Purview.',
      },
    ],
  },

  'cumplimiento-rgpd': {
    slug: 'cumplimiento-rgpd',
    category: 'Consultoría Estratégica',
    categorySlug: 'consultoria',
    title: 'Cumplimiento RGPD',
    subtitle: 'Protección de datos personales y cumplimiento normativo sin frenar tu negocio',
    description: 'El Reglamento General de Protección de Datos (RGPD) no es solo una obligación legal: es una oportunidad para generar confianza con tus clientes y diferenciarte en el mercado. Implementamos un programa integral de cumplimiento que cubre los aspectos técnicos, organizativos y legales del RGPD, alineando la protección de datos con tus procesos de negocio y tu estrategia de datos.',
    features: [
      {
        icon: 'audit',
        title: 'Auditoría de Cumplimiento',
        description: 'Evaluamos el nivel actual de cumplimiento con el RGPD: registro de actividades de tratamiento, bases de legitimación, análisis de riesgos, medidas técnicas y organizativas, y derechos de los interesados.',
      },
      {
        icon: 'privacy',
        title: 'Privacy by Design',
        description: 'Integramos la protección de datos desde el diseño de cualquier sistema, aplicación o proceso. No como un añadido posterior, sino como un principio fundamental de la arquitectura.',
      },
      {
        icon: 'dpia',
        title: 'Evaluaciones de Impacto (DPIA)',
        description: 'Realizamos Evaluaciones de Impacto en la Protección de Datos para tratamientos de alto riesgo: perfilado, decisiones automatizadas, datos de salud, videovigilancia y Big Data.',
      },
      {
        icon: 'rights',
        title: 'Gestión de Derechos ARCO+',
        description: 'Implementamos procesos y herramientas para gestionar los derechos de acceso, rectificación, cancelación, oposición, portabilidad y olvido de forma automatizada y dentro de plazos legales.',
      },
    ],
    benefits: [
      {
        metric: '100%',
        label: 'Cumplimiento normativo',
        description: 'Programa integral que cubre todos los requisitos del RGPD, LOPDGDD y directrices de la AEPD.',
      },
      {
        metric: '€0',
        label: 'Sanciones evitadas',
        description: 'Las sanciones por incumplimiento del RGPD pueden alcanzar los 20M€ o el 4% de la facturación global. Nuestra implementación las previene.',
      },
      {
        metric: '+30%',
        label: 'Confianza del cliente',
        description: 'Los clientes valoran y premian a las empresas que demuestran un compromiso real con la protección de sus datos.',
      },
      {
        metric: '<72h',
        label: 'Respuesta ante brecha',
        description: 'Protocolo de notificación de brechas de seguridad implementado para cumplir con el plazo de 72 horas ante la AEPD.',
      },
    ],
    useCases: [
      {
        sector: 'eCommerce',
        title: 'Programa RGPD para eCommerce',
        description: 'Plataforma de eCommerce con 2 millones de clientes que implementó un programa RGPD completo: consentimientos granulares, gestión de cookies, derechos automatizados y privacy by design en nuevos desarrollos.',
      },
      {
        sector: 'Salud',
        title: 'RGPD para Datos Sanitarios',
        description: 'Red de clínicas que implementó medidas reforzadas para datos de salud: cifrado, seudonimización, evaluaciones de impacto, formación del personal sanitario y protocolos de brecha.',
      },
      {
        sector: 'RRHH',
        title: 'Cumplimiento en Gestión de Personal',
        description: 'Empresa multinacional que regularizó el tratamiento de datos de empleados en 8 países: transferencias internacionales, videovigilancia, control horario y canal de denuncias.',
      },
    ],
    technologies: ['OneTrust', 'TrustArc', 'Securiti', 'Microsoft Priva', 'Data Loss Prevention (DLP)', 'Cifrado AES-256', 'IAM/PAM'],
    relatedSolutions: ['data-governance', 'calidad-gobierno-dato', 'estrategia-datos'],
    faq: [
      {
        question: '¿Estamos obligados a cumplir con el RGPD?',
        answer: 'Si tu empresa trata datos personales de ciudadanos de la UE (clientes, empleados, proveedores), sí. El RGPD aplica independientemente del tamaño de la empresa, aunque las obligaciones se adaptan al nivel de riesgo.',
      },
      {
        question: '¿Necesitamos un DPO (Delegado de Protección de Datos)?',
        answer: 'Es obligatorio para administraciones públicas, empresas cuya actividad principal implique tratamiento a gran escala de datos sensibles, y empresas que realicen observación sistemática a gran escala. Para el resto, es recomendable pero no obligatorio.',
      },
      {
        question: '¿Qué pasa si sufrimos una brecha de seguridad?',
        answer: 'Implementamos un protocolo que incluye: detección y contención inmediata, evaluación del impacto, notificación a la AEPD en menos de 72h si procede, comunicación a los afectados cuando sea necesario, y acciones correctivas.',
      },
    ],
  },
}

export function getSolutionBySlug(slug: string): SolutionPage | undefined {
  return solutionsContent[slug]
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutionsContent)
}

export function getSolutionsByCategory(categorySlug: string): SolutionPage[] {
  return Object.values(solutionsContent).filter(s => s.categorySlug === categorySlug)
}
