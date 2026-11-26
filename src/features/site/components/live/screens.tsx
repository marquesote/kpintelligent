import type { CSSProperties, ReactNode } from 'react'
import { LiveNumber } from './live-number'

/* The site's moving pictures: dark "screens" on the paper page, each a live piece of what we build (a dashboard,
   a case's result, the method, an automation running, a report being read). CSS and SVG only, except the
   figures (LiveNumber). Reduced motion holds every one still (live.css). */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

export function Screen({
  title,
  label,
  className = '',
  children,
}: {
  title: string
  label: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`lv-card ${className}`.trim()} role="img" aria-label={label}>
      <div className="lv-card__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{title}</span>
        <b className="lv-pill">
          <span className="lv-live" /> En vivo
        </b>
      </div>
      <div className="lv-card__body" aria-hidden="true">
        {children}
      </div>
      <span className="lv-scan" aria-hidden="true" />
    </div>
  )
}

const AREA = 'M0 70 C20 62 30 66 45 55 S75 40 90 44 S120 28 140 30 S175 14 200 18'

export function LiveDashboard() {
  const rows = [
    ['Norte', 'En objetivo', 'ok'],
    ['Centro', 'En objetivo', 'ok'],
    ['Levante', 'Revisar margen', 'warn'],
    ['Sur', 'En objetivo', 'ok'],
  ]
  return (
    <Screen
      title="Cuadro de mando · Dirección"
      label="Un cuadro de mando en vivo: ventas, margen y tesorería, la evolución de las ventas y el estado de cada zona."
      className="lv-dash"
    >
      <div className="lv-dash__kpis">
        <div className="lv-w">
          <p className="lv-w__t">Ventas</p>
          <p className="lv-kpi__v">
            <LiveNumber value={1.24} decimals={2} suffix=" M€" drift={0.006} />
          </p>
          <p className="lv-up">▲ 8,6 %</p>
        </div>
        <div className="lv-w">
          <p className="lv-w__t">Margen</p>
          <p className="lv-kpi__v">
            <LiveNumber value={43.5} decimals={1} suffix=" %" drift={0.006} />
          </p>
          <p className="lv-up">▲ 2,1 pt</p>
        </div>
        <div className="lv-w">
          <p className="lv-w__t">Tesorería</p>
          <p className="lv-kpi__v">
            <LiveNumber value={1.36} decimals={2} suffix=" M€" drift={0.01} />
          </p>
          <p className="lv-down">▼ 1,4 %</p>
        </div>
      </div>
      <div className="lv-w lv-dash__chart">
        <p className="lv-w__t">
          Ventas acumuladas <small>este año y el anterior</small>
        </p>
        <svg viewBox="0 0 200 80" preserveAspectRatio="none">
          <path className="lv-line__area" d={`${AREA} L200 80 L0 80 Z`} />
          <path className="lv-line__prev" d="M0 74 C25 70 40 68 60 62 S100 54 120 50 S170 38 200 36" />
          <path className="lv-line__path" d={AREA} pathLength={1} />
        </svg>
      </div>
      <ul className="lv-dash__rows">
        {rows.map(([zone, state, tone], i) => (
          <li key={zone} style={v({ '--i': i })}>
            <span>{zone}</span>
            <span className="lv-meter">
              <i style={v({ '--w': `${92 - i * 11}%` })} />
            </span>
            <b className={`lv-chip lv-chip--${tone}`}>{state}</b>
          </li>
        ))}
      </ul>
    </Screen>
  )
}

/* ---------------------------------------------------------------- the four cases */

function seeded(n: number, seed: number) {
  let s = seed
  return Array.from({ length: n }, () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  })
}

function RetailCase() {
  return (
    <>
      <p className="lv-w__t">
        Informe de ventas · 52 tiendas <small>cada mañana</small>
      </p>
      <div className="lv-stores">
        {Array.from({ length: 52 }, (_, i) => (
          <i key={i} style={v({ '--d': `${(i % 13) * 0.09 + Math.floor(i / 13) * 0.05}s` })} />
        ))}
      </div>
      <div className="lv-race">
        <p>
          <span>Antes</span> <span className="lv-race__bar lv-race__bar--slow" /> <b>3 días</b>
        </p>
        <p>
          <span>Ahora</span> <span className="lv-race__bar lv-race__bar--fast" /> <b>3 horas</b>
        </p>
      </div>
    </>
  )
}

function BankCase() {
  const xs = seeded(46, 7)
  const ys = seeded(46, 19)
  return (
    <>
      <p className="lv-w__t">
        Propensión a contratar <small>modelo predictivo</small>
      </p>
      <svg className="lv-scatter" viewBox="0 0 200 120">
        <line x1="10" y1="110" x2="195" y2="110" />
        <line x1="10" y1="5" x2="10" y2="110" />
        <path className="lv-scatter__zone" d="M120 8 H195 V60 H120 Z" />
        {xs.map((x, i) => {
          const cx = 14 + x * 178
          const cy = 106 - ys[i] * 98
          const hot = cx > 120 && cy < 60
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={hot ? 3.4 : 2.4}
              className={hot ? 'lv-dot--hot' : 'lv-dot'}
              style={v({ '--d': `${(i % 9) * 0.3}s` })}
            />
          )
        })}
      </svg>
      <p className="lv-callout">
        Clientes con más probabilidad: <b>+6 % de ingresos</b>
      </p>
    </>
  )
}

function PharmaCase() {
  return (
    <>
      <p className="lv-w__t">
        Demanda y stock <small>previsión a 12 semanas</small>
      </p>
      <svg className="lv-fc" viewBox="0 0 200 110" preserveAspectRatio="none">
        <path className="lv-fc__band" d="M110 46 L140 34 L170 40 L200 26 L200 62 L170 70 L140 62 L110 58 Z" />
        <path className="lv-line__path" d="M0 70 L20 62 L40 66 L60 52 L80 58 L100 48 L110 52" pathLength={1} />
        <path className="lv-line__fc" d="M110 52 L140 48 L170 55 L200 44" />
        <line className="lv-fc__today" x1="110" y1="8" x2="110" y2="104" />
        {Array.from({ length: 10 }, (_, i) => (
          <rect
            key={i}
            className="lv-fc__stock"
            x={4 + i * 20}
            width="10"
            y={104 - (16 + ((i * 7) % 14))}
            height={16 + ((i * 7) % 14)}
            style={v({ '--d': `${i * 0.1}s` })}
          />
        ))}
      </svg>
      <p className="lv-callout">
        Stock ajustado a la demanda: <b>−40 % de costes</b>
      </p>
    </>
  )
}

function LogisticsCase() {
  const route = 'M24 92 L60 70 L52 40 L96 28 L132 50 L170 30 L184 74 L138 92 L96 80'
  const stops = [
    [60, 70],
    [52, 40],
    [96, 28],
    [132, 50],
    [170, 30],
    [184, 74],
    [138, 92],
    [96, 80],
  ]
  return (
    <>
      <p className="lv-w__t">
        Ruta del día <small>calculada con machine learning</small>
      </p>
      <svg className="lv-map" viewBox="0 0 200 110">
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="110" />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 22} x2="200" y2={i * 22} />
        ))}
        <path className="lv-map__route" d={route} pathLength={1} />
        {stops.map(([cx, cy], i) => (
          <circle key={i} className="lv-map__stop" cx={cx} cy={cy} r="3" style={v({ '--d': `${i * 0.5}s` })} />
        ))}
        <rect className="lv-map__base" x="17" y="85" width="14" height="14" rx="3" />
        <circle className="lv-map__truck" r="4">
          <animateMotion dur="6s" repeatCount="indefinite" path={route} />
        </circle>
      </svg>
      <p className="lv-callout">
        Menos kilómetros por reparto: <b>+25 % de eficiencia</b>
      </p>
    </>
  )
}

const CASES = {
  retail: { title: 'Retail · reporting', label: 'Cincuenta y dos tiendas que envían sus ventas solas: el informe pasa de 3 días a 3 horas.', body: RetailCase },
  finanzas: { title: 'Banca · cross-selling', label: 'Un gráfico de clientes donde se iluminan los que tienen más probabilidad de contratar.', body: BankCase },
  farma: { title: 'Farmacéutica · demanda', label: 'La demanda real y su previsión, con la banda de confianza y el stock de cada semana.', body: PharmaCase },
  logistica: { title: 'Logística · rutas', label: 'Un mapa donde se dibuja la ruta de reparto calculada y el camión la recorre.', body: LogisticsCase },
} as const

export type CaseKind = keyof typeof CASES

export function CaseScreen({ kind }: { kind: CaseKind }) {
  const { title, label, body: Body } = CASES[kind]
  return (
    <Screen title={title} label={label} className="lv-case">
      <div className="lv-w lv-case__w">
        <Body />
      </div>
    </Screen>
  )
}

/* ---------------------------------------------------------------- flows */

export interface FlowNode {
  label: string
  sub: string
  icon?: string
  glyph?: string
}

export function FlowScreen({
  title,
  label,
  nodes,
  log,
}: {
  title: string
  label: string
  nodes: FlowNode[]
  log: string[]
}) {
  const cycle = nodes.length * 0.9 + 1.2
  return (
    <Screen title={title} label={label} className="lv-flow">
      <ol className="lv-flow__nodes" style={v({ '--n': nodes.length, '--cycle': `${cycle}s` })}>
        {nodes.map((node, i) => (
          <li key={node.label} style={v({ '--i': i })}>
            <span className="lv-flow__icon">
              {node.icon ? (
                <img src={`/assets/icons/${node.icon}.svg`} alt="" width={26} height={26} loading="lazy" />
              ) : (
                <svg viewBox="0 0 24 24">
                  <path d={node.glyph} />
                </svg>
              )}
            </span>
            <b>{node.label}</b>
            <small>{node.sub}</small>
          </li>
        ))}
      </ol>
      <div className="lv-flow__log" style={v({ '--cycle': `${cycle * 2}s` })}>
        {log.map((line, i) => (
          <p key={line} style={v({ '--i': i, '--n': log.length })}>
            <span className="lv-ok">✓</span> {line}
          </p>
        ))}
      </div>
    </Screen>
  )
}

export function PipelineBand({ steps }: { steps: { title: string }[] }) {
  return (
    <div
      className="lv-pipe"
      style={v({ '--n': steps.length })}
      role="img"
      aria-label={`Los pasos del método, uno detrás de otro: ${steps.map((s) => s.title).join(', ')}.`}
    >
      <div className="lv-pipe__line" aria-hidden="true">
        <span className="lv-pipe__comet" />
      </div>
      <ol aria-hidden="true">
        {steps.map((step, i) => (
          <li key={step.title} style={v({ '--i': i })}>
            <span className="lv-pipe__node">{i + 1}</span>
            <b>{step.title}</b>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ---------------------------------------------------------------- a report being read */

export function ReportScreen({
  src,
  title,
  label,
  chips,
  eager,
}: {
  src: string
  title: string
  label: string
  chips: string[]
  eager?: boolean
}) {
  return (
    <Screen title={title} label={label} className="lv-report">
      <div className="lv-report__img">
        <img
          src={`/assets/img/reports/${src}.webp`}
          srcSet={`/assets/img/reports/${src}-720.webp 720w, /assets/img/reports/${src}.webp 1440w`}
          sizes="(max-width: 1023px) 100vw, 50vw"
          alt=""
          loading={eager ? undefined : 'lazy'}
          decoding="async"
        />
        <span className="lv-report__beam" />
      </div>
      <ul className="lv-report__chips">
        {chips.map((chip, i) => (
          <li key={chip} style={v({ '--i': i })}>
            <span className="lv-ok">✓</span> {chip}
          </li>
        ))}
      </ul>
    </Screen>
  )
}

/* ---------------------------------------------------------------- the footer's band */

export function DataBand() {
  const wave = (amp: number, y: number) => {
    let d = `M0 ${y}`
    for (let x = 0; x <= 2400; x += 100) d += ` Q${x + 50} ${y + (x % 200 === 0 ? -amp : amp)} ${x + 100} ${y}`
    return d
  }
  return (
    <div className="lv-band" aria-hidden="true">
      <svg viewBox="0 0 1200 240" preserveAspectRatio="none">
        <g className="lv-band__waves">
          <path d={wave(38, 120)} />
          <path d={wave(26, 130)} />
          <path d={wave(50, 112)} />
        </g>
      </svg>
      <div className="lv-band__dots" />
      <div className="lv-band__figs">
        <span>ERP</span>
        <span>CRM</span>
        <span>Hojas de cálculo</span>
        <span className="lv-band__to">Una sola fuente de verdad</span>
      </div>
    </div>
  )
}
