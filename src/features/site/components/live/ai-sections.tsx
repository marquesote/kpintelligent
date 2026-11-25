import type { CSSProperties } from 'react'
import { aiServices, automationSteps, invoiceFlow } from '../../content'
import { Arrow } from '../arrow'
import { FlowScreen } from './screens'
import { MiniViz } from './mini-viz'

/* The two AI sections of the home page: the five services (each card with its own small moving picture) and
   how a manual process becomes automatic (the steps beside an automation running). */

const v = (vars: Record<string, string | number>) => vars as CSSProperties

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
