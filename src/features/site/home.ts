/* The home page's words and pictures (dark, AI-forward redesign). Facts come from KPIntelligent
   catalogue (85 reports in 9 sections) and from what the Analizador really does (an assistant that answers
   with the company's own figures, findings). No figure on a report capture can be read: every one was
   blurred out of the client's screenshots before they were added. */

export interface ReportShot {
  src: string
  /** the 720px file */
  small: string
  alt: string
  width: number
  height: number
}

const shot = (id: string, alt: string, width: number, height: number): ReportShot => ({
  src: `/assets/img/reports/${id}.webp`,
  small: `/assets/img/reports/${id}-720.webp`,
  alt,
  width,
  height,
})

export const reports = {
  bridge: shot('bridge', 'Informe Bridge de la cuenta de resultados: cascada de ventas, consumos y gastos hasta el resultado', 1329, 756),
  matriz: shot('matriz', 'Matriz KPIntelligent: eficiencia operativa, deuda, rentabilidad y riesgo en una pantalla', 1343, 698),
  dupont: shot('dupont', 'Pirámide DuPont: la rentabilidad financiera descompuesta en margen, rotación, apalancamiento y efecto fiscal', 1365, 712),
  puntoMuerto: shot('punto-muerto', 'Umbral de rentabilidad: ventas reales frente a las ventas del punto muerto, mes a mes', 1337, 729),
  nofFm: shot('nof-fm', 'Necesidades operativas de fondos frente al fondo de maniobra', 1361, 741),
  pyg: shot('pyg-grafico', 'Análisis gráfico de la cuenta de pérdidas y ganancias', 1259, 710),
}

export const HERO = {
  title: 'Análisis financiero con IA',
  lead: 'KPIntelligent lee la contabilidad de su ERP y la convierte en 85 informes: balance, resultados, caja, ratios y rating frente a su sector. Y un asistente le contesta con sus propias cifras.',
}

/** the nine sections of KPIntelligent, as its main menu orders them (catalogue, 13/11/2026) */
export const reportSections = [
  { code: '01', name: 'Portada y navegación', line: 'Menú principal y control de versiones', count: 1 },
  { code: '02', name: 'Balance y flujos de caja', line: 'Balance, deuda, NOF, flujo de caja libre', count: 14 },
  { code: '03', name: 'Resultados', line: 'PyG, Bridge, umbral de rentabilidad, TAM', count: 9, open: true },
  { code: '04', name: 'Control presupuestario ERP', line: 'Real frente a presupuesto, por partida', count: 3 },
  { code: '05', name: 'Resultado analítico', line: 'Centros de coste y calidad de datos', count: 4 },
  { code: '06', name: 'Matriz KPIntelligent', line: 'Eficiencia, deuda, rentabilidad, riesgo', count: 10 },
  { code: '07', name: 'Rating Banco de España', line: 'Sus ratios frente a los cuartiles del sector', count: 2 },
  { code: '08', name: 'Análisis por ratios', line: 'Actividad, circulante, estructura, costes', count: 32 },
  { code: '09', name: 'DANTE', line: 'Control presupuestario mes a mes', count: 10 },
]

/** what the Analizador flags on the open report (illustrative wording, no figures) */
export const findings = [
  { title: 'Hallazgo en Resultados', body: 'Los gastos de personal crecen más que las ventas', time: 'ahora' },
  { title: 'Hallazgo en Balance', body: 'Las NOF suben más deprisa que la cifra de negocio', time: '2 min' },
  { title: 'Pregunta contestada', body: '¿Puedo devolver la deuda con lo que genero?', time: '9 min' },
]

export const assistant = {
  question: '¿Por qué gano dinero y no tengo caja?',
  answer: 'Porque sus clientes pagan más tarde que el año pasado y las existencias han crecido: las NOF suben más que el beneficio.',
  sources: ['NOF frente a fondo de maniobra', 'Periodo medio de maduración'],
}

export const askExamples = [
  '¿Cuánto tengo que vender para no perder dinero?',
  '¿Cómo me ve mi banco frente a mi sector?',
  '¿Qué pasa con el resultado si las ventas bajan un 5 %?',
]

export const sourcesDiagram = {
  layout: 'bowtie',
  alt: 'La contabilidad de SAP, Odoo, Excel y su base SQL entra en el Analizador, que devuelve informes en Power BI, respuestas del asistente y hallazgos.',
  sources: [
    { label: 'SAP', icon: 'logos:sap', sub: 'ERP' },
    { label: 'Odoo', icon: 'si:odoo', sub: 'ERP' },
    { label: 'Excel', icon: 'xlsx', sub: 'Hojas' },
    { label: 'SQL', icon: 'ui:database', sub: 'Base de datos' },
  ],
  core: { label: 'Analizador', icon: 'ui:brain' },
  targets: [
    { label: 'Informes', icon: 'power-bi', sub: 'Power BI' },
    { label: 'Respuestas', icon: 'ui:message-square', sub: 'Asistente' },
    { label: 'Hallazgos', icon: 'ui:sparkles', sub: 'Sobre sus cifras' },
  ],
}

export const dataFacts = [
  { name: 'Sin cambiar de programa', line: 'Leemos los ficheros de su ERP o nos conectamos a su base de datos: SAP, Navision, Odoo, Sage, Excel y SQL.' },
  { name: 'Grupos de empresas', line: 'Cada sociedad por separado y el grupo sumado, en la misma pantalla.' },
  { name: 'Su sector como referencia', line: 'Sus ratios frente a los de su sector y tamaño, con la Central de Balances del Banco de España.' },
]

