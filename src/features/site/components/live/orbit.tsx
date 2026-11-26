import type { CSSProperties } from 'react'
import type { DeepViz } from '@/data/aiDeepContent'
import { MiniViz } from './mini-viz'
import { Screen } from './screens'

/* Moving pictures that fill the sections that were only words: a constellation of data (sources flowing into a
   core, a service and what it includes, the tools it works with), a live feed, questions answered one after
   another, a panel of results and what the demo shows. CSS and SVG only. */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

type Pt = { x: number; y: number }

function spread(n: number, from: number, to: number) {
  if (n === 1) return [(from + to) / 2]
  return Array.from({ length: n }, (_, i) => from + ((to - from) * i) / (n - 1))
}

function layout(mode: 'orbit' | 'stream' | 'constellation', n: number): Pt[] {
  if (mode === 'stream') return spread(n, 12, 88).map((y) => ({ x: 15, y }))
  if (mode === 'constellation') {
    const cols = 3
    return Array.from({ length: n }, (_, i) => {
      const row = Math.floor(i / cols)
      const rows = Math.ceil(n / cols)
      const jitter = ((i * 37) % 11) - 5
      return { x: 18 + (i % cols) * 32 + jitter, y: rows === 1 ? 50 : 16 + (row * 68) / (rows - 1) + (((i * 53) % 9) - 4) }
    })
  }
  return Array.from({ length: n }, (_, i) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2
    return { x: 50 + Math.cos(a) * 36, y: 50 + Math.sin(a) * 37 }
  })
}

export function DataOrbit({
  title,
  label,
  core,
  nodes,
  outputs = [],
  mode = 'orbit',
  chaos,
}: {
  title: string
  label: string
  core?: string
  nodes: string[]
  outputs?: string[]
  mode?: 'orbit' | 'stream' | 'constellation'
  chaos?: boolean
}) {
  const pts = layout(mode, nodes.length)
  const centre = { x: mode === 'stream' ? 52 : 50, y: 50 }
  const outs = spread(outputs.length, 22, 78).map((y) => ({ x: 87, y }))
  const links: [Pt, Pt][] =
    mode === 'constellation'
      ? pts.flatMap((p, i) => [pts[i + 1], pts[i + 3]].filter(Boolean).map((q) => [p, q] as [Pt, Pt]))
      : pts.map((p) => [p, centre] as [Pt, Pt])
  return (
    <Screen title={title} label={label} className={`lv-orbit lv-orbit--${mode}`}>
      <div className="lv-orbit__stage">
        <svg className="lv-orbit__lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {mode === 'orbit' ? <ellipse className="lv-orbit__path" cx="50" cy="50" rx="36" ry="37" /> : null}
          {links.map(([a, b], i) => (
            <g key={`l-${i}`}>
              <line className="lv-orbit__link" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
              <line
                className="lv-orbit__pulse"
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                pathLength={100}
                style={v({ '--d': `${(i * 0.55) % 3}s` })}
              />
            </g>
          ))}
          {outs.map((o, i) => (
            <g key={`o-${i}`}>
              <line className="lv-orbit__link" x1={centre.x} y1={centre.y} x2={o.x} y2={o.y} />
              <line
                className="lv-orbit__pulse lv-orbit__pulse--out"
                x1={centre.x}
                y1={centre.y}
                x2={o.x}
                y2={o.y}
                pathLength={100}
                style={v({ '--d': `${1 + i * 0.7}s` })}
              />
            </g>
          ))}
        </svg>
        {core ? (
          <div className="lv-orbit__core" style={v({ left: `${centre.x}%`, top: `${centre.y}%` })}>
            <span className="lv-orbit__ring" />
            <span className="lv-orbit__ring lv-orbit__ring--b" />
            <b>{core}</b>
          </div>
        ) : null}
        {nodes.map((node, i) => (
          <span
            key={node}
            className={`lv-orbit__node${chaos ? ' is-chaos' : ''}`}
            style={v({ left: `${pts[i].x}%`, top: `${pts[i].y}%`, '--i': i, '--n': nodes.length })}
          >
            {node}
          </span>
        ))}
        {outputs.map((out, i) => (
          <span key={out} className="lv-orbit__out" style={v({ left: `${outs[i].x}%`, top: `${outs[i].y}%`, '--i': i })}>
            {out}
          </span>
        ))}
      </div>
    </Screen>
  )
}

export function LiveFeed({ title, label, lines }: { title: string; label: string; lines: [string, string][] }) {
  return (
    <Screen title={title} label={label} className="lv-feed">
      <div className="lv-feed__view">
        <ul className="lv-feed__track">
          {[...lines, ...lines].map(([time, text], i) => (
            <li key={`${time}-${i}`}>
              <span className="lv-ok">✓</span>
              <time>{time}</time>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Screen>
  )
}

export function QuestionScreen({ items }: { items: { q: string; a: string; m: string }[] }) {
  return (
    <Screen
      title="Su informe responde · ejemplo"
      label="Las preguntas de quien dirige una empresa, contestadas una tras otra con una cifra de su informe financiero."
      className="lv-qa"
    >
      <div className="lv-qa__stack" style={v({ '--n': items.length })}>
        {items.map((item, i) => (
          <div className="lv-qa__item" key={item.q} style={v({ '--i': i })}>
            <p className="lv-msg lv-msg--q">{item.q}</p>
            <div className="lv-msg lv-msg--a">
              <b className="lv-qa__m">{item.m}</b>
              <p>{item.a}</p>
              <span className="lv-meter">
                <i style={v({ '--w': `${45 + ((i * 17) % 50)}%` })} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="lv-qa__dots">
        {items.map((item, i) => (
          <i key={item.q} style={v({ '--i': i })} />
        ))}
      </div>
    </Screen>
  )
}

export function ResultTiles({ title, items }: { title: string; items: { metric: string; label: string }[] }) {
  return (
    <Screen
      title={title}
      label={`Los resultados que buscamos con el servicio: ${items.map((item) => `${item.metric} ${item.label}`).join(', ')}.`}
      className="lv-results"
    >
      <ul className="lv-results__grid">
        {items.map((item, i) => (
          <li key={item.label} style={v({ '--i': i })}>
            <b>{item.metric}</b>
            <span>{item.label}</span>
            <svg viewBox="0 0 100 24" preserveAspectRatio="none">
              <path
                className="lv-mini__line"
                d={`M0 ${18 - (i % 2) * 4} L20 ${14 + (i % 3) * 2} L40 16 L60 ${10 - (i % 2) * 2} L80 9 L100 ${4 + (i % 3)}`}
                pathLength={1}
              />
            </svg>
          </li>
        ))}
      </ul>
    </Screen>
  )
}

export function DemoPreview({ items }: { items: { title: string; viz: DeepViz }[] }) {
  return (
    <div className="lv-preview">
      <p className="t-label">Lo que verás en la demo</p>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            <MiniViz kind={item.viz} />
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
