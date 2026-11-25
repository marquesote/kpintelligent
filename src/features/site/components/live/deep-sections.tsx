import type { CSSProperties } from 'react'
import type { AiDeep } from '@/data/aiDeepContent'
import { LiveNumber } from './live-number'
import { MiniViz } from './mini-viz'
import { DeepVisual } from './screens-ai'

/* The three extra sections of an "IA y automatización" page: market figures with their sources, what the service
   can do, and how we work beside a second moving screen. */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

export function DeepStats({ deep }: { deep: AiDeep }) {
  return (
    <section className="section lv-stats-sec" id="cifras" aria-labelledby="cifras-h">
      <div className="lv-hero__sky" aria-hidden="true" />
      <div className="wrap">
        <div className="section-head">
          <p className="t-label">En cifras</p>
          <h2 id="cifras-h">{deep.statsTitle}</h2>
        </div>
        <ul className="lv-stats">
          {deep.stats.map((stat) => (
            <li key={stat.label}>
              <p className="lv-stats__v">
                {stat.count !== undefined ? (
                  <LiveNumber
                    value={stat.count}
                    decimals={stat.decimals ?? 0}
                    prefix={stat.prefix ?? ''}
                    suffix={stat.suffix ?? ''}
                    drift={0}
                  />
                ) : (
                  stat.value
                )}
              </p>
              <p className="lv-stats__l">{stat.label}</p>
              <a className="lv-stats__src" href={stat.url} target="_blank" rel="noopener noreferrer">
                Fuente: {stat.source} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function DeepCapabilities({ deep }: { deep: AiDeep }) {
  return (
    <section className="section ground-surface" id="capacidades" aria-labelledby="capacidades-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="capacidades-h">{deep.capabilitiesTitle}</h2>
        </div>
        <ul className="lv-caps">
          {deep.capabilities.map((cap) => (
            <li key={cap.title} className="lv-ai__card">
              <MiniViz kind={cap.viz} />
              <h3>{cap.title}</h3>
              <p>{cap.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function DeepProcess({ deep }: { deep: AiDeep }) {
  return (
    <section className="section" id="proceso" aria-labelledby="proceso-h">
      <div className="wrap grid grid--top">
        <div className="span-5">
          <div className="section-head">
            <h2 id="proceso-h">{deep.processTitle}</h2>
            <p>{deep.processLead}</p>
          </div>
          <ol className="lv-timeline">
            {deep.process.map((step, i) => (
              <li key={step.title} style={v({ '--i': i, '--n': deep.process.length })}>
                <span className="lv-timeline__n">{i + 1}</span>
                <div>
                  <b>{step.title}</b>
                  <p>{step.line}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="span-7 start-6 lv-fill lv-fill--tall">
          <DeepVisual kind={deep.second} />
        </div>
      </div>
    </section>
  )
}
