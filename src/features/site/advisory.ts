/* Asesoría financiera (/soluciones/asesoria-financiera): the page the cold-email campaign sends people to.
   Written "de usted", like the emails. Left out until the owner decides them: what the client receives each month,
   the price, "Quiénes somos", the data-handling answer and the sample report. */

export const ADVISORY_ACTION = 'Pedir el informe de mi empresa'

export const ADVISORY_PATH = '/soluciones/asesoria-financiera'

export const advisoryQuestions = [
  '¿Cuánto tengo que vender para no perder dinero?',
  '¿Por qué gano dinero y no tengo caja?',
  '¿Cómo me ve mi banco frente a las empresas de mi sector?',
  '¿Puedo devolver la deuda con lo que genero?',
  '¿Cuánto puedo crecer sin pedir financiación?',
  '¿Qué pasa con el resultado si las ventas bajan un 5 %?',
  '¿Voy según presupuesto?',
]

export const advisorySteps = [
  {
    title: 'Nos da el CIF de su empresa y un correo',
    line: 'Con eso basta para empezar.',
  },
  {
    title: 'Le enviamos su informe financiero',
    line: 'Balance, resultados y ratios de los últimos ejercicios, a partir de las cuentas que su empresa deposita en el Registro Mercantil. Es suyo.',
  },
  {
    title: 'Nos hace una pregunta sobre sus números',
    line: 'Le contestamos el mismo día, con sus cifras.',
  },
  {
    title: 'Si le resulta útil, lo vemos en media hora',
    line: 'Por videollamada. Si no, se queda con el informe.',
  },
]

export const advisoryTools = [
  {
    title: 'Sus datos, sin cambiar de programa',
    line: 'Leemos su contabilidad desde los ficheros de su ERP o conectándonos a su base de datos. Trabajamos con SAP, Navision, Odoo y Sage, y con Excel y bases SQL.',
  },
  {
    title: 'Cifras que cuadran',
    line: 'Con sus cuentas oficiales.',
  },
  {
    title: 'Grupos de empresas',
    line: 'Cada sociedad por separado y el grupo sumado, en la misma pantalla.',
  },
  {
    title: 'Su sector como referencia',
    line: 'Sus ratios frente a los de las empresas de su sector y tamaño, con los datos de la Central de Balances del Banco de España.',
  },
  {
    title: 'Y si quiere tenerlo siempre a la vista',
    line: 'Un cuadro de mando financiero en Power BI, actualizado desde su contabilidad: balance, resultados, tesorería, deuda, presupuesto y rating frente a su sector.',
  },
]

export const advisoryAudience = [
  'Empresas y grupos de empresas que presentan cuentas en el Registro Mercantil.',
  'Que no tienen director financiero, o lo tienen ocupado en cerrar el mes.',
  'Que ya tienen gestoría o asesor fiscal. No lo sustituimos: ellos presentan los impuestos y llevan la contabilidad; nosotros analizamos lo que esas cuentas dicen.',
]

export const advisoryFaq = [
  {
    question: '¿De dónde sacan los datos de mi empresa para el informe gratuito?',
    answer:
      'De las cuentas anuales que su empresa deposita en el Registro Mercantil. Son públicas. No tenemos ningún dato interno suyo hasta que usted nos lo da.',
  },
  {
    question: '¿El informe gratuito me compromete a algo?',
    answer: 'No. Es suyo y puede usarlo como quiera.',
  },
  {
    question: '¿Sustituyen a mi gestoría?',
    answer: 'No. Trabajamos con los datos que ella prepara.',
  },
  {
    question: '¿Tengo que cambiar de programa de contabilidad?',
    answer: 'No. Trabajamos con el que ya tiene.',
  },
]

/** the words the person accepts; the request email keeps them with the date, as the record of the permission */
export const ADVISORY_CONSENT =
  'Acepto que KPIntelligent use estos datos para enviarme por correo el informe financiero de mi empresa y contestar a mi petición.'
