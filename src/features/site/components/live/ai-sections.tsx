import type { CSSProperties } from 'react'
import { aiServices, automationSteps, invoiceFlow, type AiViz } from '../../content'
import { Arrow } from '../arrow'
import { FlowScreen } from './screens'

/* The two AI sections of the home page: the five services (each card with its own small moving picture) and
   how a manual process becomes automatic (the steps beside an automation running). */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

function MiniViz({ kind }: { kind: AiViz }) {
  switch (kind) {
    case 'radar':
      return (
        <div className="lv-mini lv-mini--radar">
          <span className="lv-mini__sweep" />
          <i style={v({ '--x': '30%', '--y': '34%', '--d': '0.6s' })} />
          <i style={v({ '--x': '68%', '--y': '58%', '--d': '1.7s' })} />
          <i style={v({ '--x': '44%', '--y': '74%', '--d': '2.6s' })} />
        </div>
      )
    case 'nodes':
      return (
        <svg className="lv-mini lv-mini--nodes" viewBox="0 0 120 64">
          <path d="M60 32 L18 14 M60 32 L18 50 M60 32 L102 14 M60 32 L102 50" />
          <path className="lv-mini__pulse" d="M18 14 L60 32 L102 50" pathLength={1} />
          <path className="lv-mini__pulse lv-mini__pulse--b" d="M18 50 L60 32 L102 14" pathLength={1} />
          <circle cx="60" cy="32" r="8" className="lv-mini__hub" />
          {[
            [18, 14],
            [18, 50],
            [102, 14],
            [102, 50],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
          ))}
        </svg>
      )
    case 'flow':
      return (
        <div className="lv-mini lv-mini--flow">
          <span />
          <span />
          <span />
          <i />
          <i style={v({ '--d': '1s' })} />
          <i style={v({ '--d': '2s' })} />
        </div>
      )
    case 'chat':
      return (
        <div className="lv-mini lv-mini--chat">
          <p>¿Margen de octubre?</p>
          <p>
            <i />
            <i />
            <i />
          </p>
        </div>
      )
    default:
      return (
        <div className="lv-mini lv-mini--bars">
          {[72, 54, 88].map((w, i) => (
            <span key={w} style={v({ '--w': `${w}%`, '--d': `${i * 0.4}s` })} />
          ))}
        </div>
      )
  }
}

export function AiServicesSection() {
  return (
    <section className="section ground-surface lv-ai" id="ia" aria-labelledby="ia-h">
      <div className="wrap">
        <div className="section-head">
          <p className="t-label">IA y automatización</p>
          <h2 id="ia-h">Haz crecer tu empresa con IA</h2>
          <p>Cinco servicios para que la IA haga el trabajo que se repite, sobre tus propios datos.</p>
        </div>
        <ul className="lv-ai__cards">
          {aiServices.map((service) => (
            <li key={service.n}>
              <a className="lv-ai__card" href={service.href}>
                <MiniViz kind={service.viz} />
                <span className="lv-ai__n">{service.n}</span>
                <h3>{service.title}</h3>
                <p>{service.line}</p>
                <span className="lv-ai__more">
                  Ver el servicio <Arrow />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function AutomationSection() {
  return (
    <section className="section" id="automatizacion" aria-labelledby="automatizacion-h">
      <div className="wrap grid grid--top">
        <div className="span-5">
          <div className="section-head">
            <h2 id="automatizacion-h">Cómo un proceso manual pasa a ser automático</h2>
            <p>Empezamos por un solo proceso y lo ponemos a trabajar con tus datos antes de pasar al siguiente.</p>
          </div>
          <ol className="rows lv-steps">
            {automationSteps.map((step, i) => (
              <li key={step.title} style={v({ '--i': i })}>
                <span className="rows__name">
                  {String(i + 1).padStart(2, '0')} · {step.title}
                </span>
                <p>{step.line}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="span-7 start-6 lv-fill">
          <FlowScreen {...invoiceFlow} />
        </div>
      </div>
    </section>
  )
}
