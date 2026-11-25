import type { CSSProperties } from 'react'
import type { DeepScreen } from '@/data/aiDeepContent'
import { invoiceFlow } from '../../content'
import { AssistantChat } from './assistant-chat'
import { LiveNumber } from './live-number'
import { CaseScreen, FlowScreen, LiveDashboard, ReportScreen, Screen } from './screens'

/* The moving screens of the "IA y automatización" pages: the audit's maturity radar, an agent at work, an invoice
   being read, a team's training, a search through documents, a forecast and a model training. */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

/* ---------------------------------------------------------------- audit: maturity radar and opportunity matrix */
const AXES = ['Procesos', 'Datos', 'Herramientas', 'Equipo', 'Seguridad', 'Estrategia']
const NOW = [0.55, 0.38, 0.62, 0.45, 0.5, 0.3]
const PLAN = [0.82, 0.75, 0.85, 0.72, 0.8, 0.78]

function radarPath(values: number[], r = 70, cx = 90, cy = 88) {
  return (
    values
      .map((val, i) => {
        const a = (Math.PI * 2 * i) / values.length - Math.PI / 2
        return `${i ? 'L' : 'M'}${(cx + Math.cos(a) * r * val).toFixed(1)} ${(cy + Math.sin(a) * r * val).toFixed(1)}`
      })
      .join(' ') + ' Z'
  )
}

function AuditScreen() {
  const bubbles = [
    { x: 78, y: 26, r: 9, label: 'Facturas' },
    { x: 58, y: 11, r: 6, label: 'Informes' },
    { x: 26, y: 30, r: 6, label: 'Cobros' },
    { x: 80, y: 70, r: 5, label: 'CRM' },
    { x: 32, y: 74, r: 4, label: 'Stock' },
  ]
  return (
    <Screen
      title="Auditoría de IA · madurez y oportunidades"
      label="Un radar con la madurez actual de la empresa en seis áreas frente al objetivo, y una matriz de oportunidades por impacto y esfuerzo."
      className="lv-audit"
    >
      <div className="lv-audit__grid">
        <div className="lv-w">
          <p className="lv-w__t">
            Madurez en IA <small>hoy y objetivo</small>
          </p>
          <svg className="lv-radar" viewBox="0 0 180 176">
            {[0.25, 0.5, 0.75, 1].map((k) => (
              <path key={k} className="lv-radar__grid" d={radarPath(AXES.map(() => k))} />
            ))}
            {AXES.map((axis, i) => {
              const a = (Math.PI * 2 * i) / AXES.length - Math.PI / 2
              return (
                <g key={axis}>
                  <line className="lv-radar__grid" x1="90" y1="88" x2={90 + Math.cos(a) * 70} y2={88 + Math.sin(a) * 70} />
                  <text x={90 + Math.cos(a) * 84} y={90 + Math.sin(a) * 82} textAnchor="middle">
                    {axis}
                  </text>
                </g>
              )
            })}
            <path className="lv-radar__plan" d={radarPath(PLAN)} />
            <path className="lv-radar__now" d={radarPath(NOW)} />
          </svg>
        </div>
        <div className="lv-w">
          <p className="lv-w__t">
            Oportunidades <small>impacto / esfuerzo</small>
          </p>
          <svg className="lv-matrix" viewBox="0 0 100 100">
            <rect className="lv-matrix__win" x="50" y="0" width="50" height="50" />
            <line x1="50" y1="0" x2="50" y2="100" />
            <line x1="0" y1="50" x2="100" y2="50" />
            {bubbles.map((b, i) => (
              <g key={b.label} style={v({ '--d': `${i * 0.5}s` })} className="lv-matrix__b">
                <circle cx={b.x} cy={b.y} r={b.r} />
                <text x={b.x} y={b.y + b.r + 7} textAnchor="middle">
                  {b.label}
                </text>
              </g>
            ))}
          </svg>
          <p className="lv-callout">
            Empezar por: <b>Facturas</b>
          </p>
        </div>
      </div>
      <div className="lv-w">
        <p className="lv-w__t">
          Horas al mes que se liberan <small>estimación</small>
        </p>
        <ul className="lv-feat lv-feat--row">
          {[
            ['Facturas', 64],
            ['Informes', 40],
            ['Cobros', 22],
            ['CRM', 14],
          ].map(([name, h], i) => (
            <li key={name} style={v({ '--w': `${(Number(h) / 64) * 100}%`, '--i': i })}>
              <span>{name}</span>
              <i />
              <b>{h} h</b>
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  )
}

/* ---------------------------------------------------------------- an agent at work */
function AgentScreen() {
  const steps = [
    { t: 'Leo las ventas de la semana en el ERP', s: 'done' },
    { t: 'Comparo con el presupuesto y el año anterior', s: 'done' },
    { t: 'Detecto: margen de Levante −3,2 pt', s: 'alert' },
    { t: 'Preparo el resumen para Dirección', s: 'run' },
    { t: 'Enviar por Teams a Dirección', s: 'approve' },
  ]
  return (
    <Screen
      title="Agente · resumen semanal de Dirección"
      label="Un agente de IA trabajando: lee el ERP, compara con el presupuesto, detecta una caída de margen, prepara el resumen y espera la aprobación para enviarlo."
      className="lv-agent"
    >
      <div className="lv-agent__head">
        <span className="lv-agent__avatar">
          <svg viewBox="0 0 24 24">
            <path d="M9 3h6M12 3v3M5 10a7 7 0 0 1 14 0v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 13h.01M15 13h.01" />
          </svg>
        </span>
        <div>
          <b>Agente de Dirección</b>
          <small>Permisos: lectura ERP · envío con aprobación</small>
        </div>
      </div>
      <ol className="lv-agent__steps">
        {steps.map((step, i) => (
          <li key={step.t} className={`is-${step.s}`} style={v({ '--i': i })}>
            <span className="lv-agent__state" />
            <span>{step.t}</span>
            {step.s === 'approve' ? <b className="lv-agent__btn">Aprobar</b> : null}
          </li>
        ))}
      </ol>
      <div className="lv-agent__tools">
        {['erp.ventas()', 'presupuesto.comparar()', 'alertas.margen()', 'teams.enviar()'].map((tool, i) => (
          <code key={tool} style={v({ '--i': i })}>
            {tool}
          </code>
        ))}
      </div>
    </Screen>
  )
}

/* ---------------------------------------------------------------- an invoice read by the AI */
function DocScreen() {
  const fields = [
    ['Proveedor', 'Proveedor 0142'],
    ['N.º factura', 'F-2318'],
    ['Fecha', '18/11/2026'],
    ['Base imponible', '4.120,00 €'],
    ['IVA 21 %', '865,20 €'],
    ['Total', '4.985,20 €'],
  ]
  return (
    <Screen
      title="Lectura de facturas · IA"
      label="Una factura en PDF recorrida por la IA, que extrae proveedor, número, fecha, base, IVA y total, y la marca como cuadrada con el pedido."
      className="lv-doc"
    >
      <div className="lv-doc__grid">
        <div className="lv-doc__page">
          <div className="lv-doc__logo" />
          {Array.from({ length: 9 }, (_, i) => (
            <b key={i} style={v({ '--w': `${[70, 45, 60, 85, 80, 85, 50, 40, 55][i]}%` })} />
          ))}
          <div className="lv-doc__table">
            {Array.from({ length: 4 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <span className="lv-doc__scan" />
        </div>
        <ul className="lv-doc__fields">
          {fields.map(([k, val], i) => (
            <li key={k} style={v({ '--i': i })}>
              <small>{k}</small>
              <b>{val}</b>
            </li>
          ))}
          <li className="lv-doc__ok" style={v({ '--i': fields.length })}>
            <span className="lv-ok">✓</span> Cuadra con pedido y albarán
          </li>
        </ul>
      </div>
    </Screen>
  )
}

/* ---------------------------------------------------------------- a team's training */
function TrainingScreen() {
  const modules = [
    ['Preguntar bien a la IA', 100],
    ['Revisar respuestas y fuentes', 86],
    ['Uso seguro y datos', 72],
    ['Automatizar una tarea', 54],
    ['IA en el cierre mensual', 31],
  ] as const
  const people = ['MG', 'JL', 'AR', 'CP', 'LS', 'NT', 'EB', 'RV']
  return (
    <Screen
      title="Formación en IA · equipo de Finanzas"
      label="El progreso de un equipo en cinco módulos de formación en IA, con las personas que ya los han completado."
      className="lv-train"
    >
      <div className="lv-w">
        <p className="lv-w__t">
          Progreso por módulo <small>12 personas</small>
        </p>
        <ul className="lv-train__mods">
          {modules.map(([name, pct], i) => (
            <li key={name} style={v({ '--w': `${pct}%`, '--i': i })}>
              <span>{name}</span>
              <span className="lv-meter">
                <i />
              </span>
              <b>{pct} %</b>
            </li>
          ))}
        </ul>
      </div>
      <div className="lv-train__foot">
        <div className="lv-train__people">
          {people.map((p, i) => (
            <span key={p} style={v({ '--i': i })}>
              {p}
            </span>
          ))}
        </div>
        <div className="lv-train__badge">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="9" r="6" />
            <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
          </svg>
          <span>
            <b>
              <LiveNumber value={9} drift={0} />
            </b>{' '}
            certificados
          </span>
        </div>
      </div>
    </Screen>
  )
}

/* ---------------------------------------------------------------- a question answered from documents (RAG) */
function RagScreen() {
  const docs = ['Contrato marco.pdf', 'Política de devoluciones.docx', 'Tarifas 2026.xlsx', 'Manual de calidad.pdf']
  const dots = Array.from({ length: 34 }, (_, i) => ({
    x: 8 + ((i * 37) % 84),
    y: 10 + ((i * 53) % 78),
    hot: [5, 12, 21].includes(i),
  }))
  return (
    <Screen
      title="Asistente · respuestas con tus documentos"
      label="Una pregunta busca en los documentos de la empresa: los fragmentos más cercanos se iluminan y la respuesta llega con sus fuentes citadas."
      className="lv-rag"
    >
      <div className="lv-rag__q">¿Cuál es el plazo de devolución para un cliente mayorista?</div>
      <div className="lv-rag__grid">
        <ul className="lv-rag__docs">
          {docs.map((d, i) => (
            <li key={d} className={i === 1 || i === 0 ? 'is-hit' : ''} style={v({ '--i': i })}>
              {d}
            </li>
          ))}
        </ul>
        <svg className="lv-rag__space" viewBox="0 0 100 100">
          {dots.map((d, i) => (
            <circle key={i} cx={d.x} cy={d.y} r={d.hot ? 3 : 1.8} className={d.hot ? 'is-hot' : ''} style={v({ '--d': `${(i % 7) * 0.3}s` })} />
          ))}
          <circle cx="50" cy="48" r="4" className="lv-rag__query" />
          {dots
            .filter((d) => d.hot)
            .map((d) => (
              <line key={`${d.x}-${d.y}`} x1="50" y1="48" x2={d.x} y2={d.y} />
            ))}
        </svg>
      </div>
      <div className="lv-rag__a">
        30 días desde la entrega, ampliables a 45 para pedidos de más de 5.000 €.
        <span>
          <b>[1]</b> Política de devoluciones, apdo. 3 · <b>[2]</b> Contrato marco, cláusula 7
        </span>
      </div>
    </Screen>
  )
}

/* ---------------------------------------------------------------- a forecast with its confidence band */
function ForecastScreen() {
  const real = 'M0 78 L12 70 L24 74 L36 60 L48 66 L60 52 L72 58 L84 46 L96 50 L108 40'
  return (
    <Screen
      title="Previsión de ventas · próximos 6 meses"
      label="Las ventas reales y su previsión con la banda de confianza, el error del modelo y la recomendación de compra."
      className="lv-fcast"
    >
      <div className="lv-w">
        <p className="lv-w__t">
          Ventas y previsión <small>banda del 90 %</small>
        </p>
        <svg className="lv-fc" viewBox="0 0 180 96" preserveAspectRatio="none">
          <path className="lv-fc__band" d="M108 40 L126 30 L144 34 L162 22 L180 26 L180 52 L162 50 L144 58 L126 54 L108 46 Z" />
          <path className="lv-line__path" d={real} pathLength={1} />
          <path className="lv-line__fc" d="M108 40 L126 40 L144 46 L162 36 L180 39" />
          <line className="lv-fc__today" x1="108" y1="4" x2="108" y2="94" />
        </svg>
      </div>
      <div className="lv-dash__kpis">
        <div className="lv-w">
          <p className="lv-w__t">Error medio</p>
          <p className="lv-kpi__v">
            <LiveNumber value={6.8} decimals={1} suffix=" %" drift={0.03} />
          </p>
        </div>
        <div className="lv-w">
          <p className="lv-w__t">Próximo mes</p>
          <p className="lv-kpi__v">
            <LiveNumber value={1.31} decimals={2} suffix=" M€" drift={0.008} />
          </p>
        </div>
        <div className="lv-w">
          <p className="lv-w__t">Stock</p>
          <p className="lv-kpi__v lv-kpi__v--txt">Comprar</p>
        </div>
      </div>
    </Screen>
  )
}

/* ---------------------------------------------------------------- a model training */
function ModelScreen() {
  const features = [
    ['Días desde la última compra', 92],
    ['Importe medio', 74],
    ['Frecuencia', 63],
    ['Incidencias', 41],
    ['Antigüedad', 28],
  ] as const
  return (
    <Screen
      title="Machine learning · entrenamiento del modelo"
      label="Un modelo entrenándose: la curva de error baja época a época, la precisión sube y se muestran las variables que más pesan."
      className="lv-model"
    >
      <div className="lv-audit__grid">
        <div className="lv-w">
          <p className="lv-w__t">
            Error por época <small>entrenamiento / validación</small>
          </p>
          <svg className="lv-fc" viewBox="0 0 120 80" preserveAspectRatio="none">
            <path className="lv-line__prev" d="M0 10 C20 40 40 54 60 60 S100 66 120 66" />
            <path className="lv-line__path" d="M0 8 C20 44 40 60 60 66 S100 72 120 73" pathLength={1} />
          </svg>
          <p className="lv-callout">
            Precisión: <b><LiveNumber value={91.4} decimals={1} suffix=" %" drift={0.004} /></b>
          </p>
        </div>
        <div className="lv-w">
          <p className="lv-w__t">
            Variables que más pesan <small>abandono de clientes</small>
          </p>
          <ul className="lv-feat">
            {features.map(([name, w], i) => (
              <li key={name} style={v({ '--w': `${w}%`, '--i': i })}>
                <span>{name}</span>
                <i />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Screen>
  )
}

export function DeepVisual({ kind, eager }: { kind: DeepScreen; eager?: boolean }) {
  switch (kind) {
    case 'audit':
      return <AuditScreen />
    case 'agent':
      return <AgentScreen />
    case 'doc':
      return <DocScreen />
    case 'training':
      return <TrainingScreen />
    case 'rag':
      return <RagScreen />
    case 'forecast':
      return <ForecastScreen />
    case 'model':
      return <ModelScreen />
    case 'chat':
      return <AssistantChat />
    case 'chat-agent':
      return <AssistantChat variant="agent" />
    case 'chat-training':
      return <AssistantChat variant="training" />
    case 'chat-support':
      return <AssistantChat variant="support" />
    case 'flow':
      return <FlowScreen {...invoiceFlow} />
    case 'scatter':
      return <CaseScreen kind="finanzas" />
    case 'report':
      return (
        <ReportScreen
          src="matriz"
          title="Diagnóstico · cuadro de indicadores"
          label="Un cuadro de indicadores de la empresa que se revisa área por área."
          chips={['Eficiencia operativa', 'Deuda financiera', 'Rentabilidad', 'Riesgo']}
          eager={eager}
        />
      )
    default:
      return <LiveDashboard />
  }
}
