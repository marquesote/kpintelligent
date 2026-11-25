import type { SolutionPage } from '@/data/solutionsContent'
import { getSolutionBySlug } from '@/data/solutionsContent'
import { MAIN_ACTION } from '../content'
import { Arrow } from './arrow'
import { invoiceFlow } from '../content'
import { AssistantChat } from './live/assistant-chat'
import { FlowScreen, LiveDashboard, ReportScreen } from './live/screens'

/* one moving picture per service area, in place of a photograph */
const etlFlow = {
  title: 'Ingeniería de datos · carga nocturna',
  label: 'Los datos del ERP, el CRM y las hojas de cálculo se extraen, se limpian y se cargan en el almacén, y Power BI se actualiza.',
  nodes: [
    { label: 'ERP', sub: 'SAP · Odoo', icon: 'sap' },
    { label: 'CRM', sub: 'Salesforce', icon: 'salesforce' },
    { label: 'Limpieza', sub: 'Reglas de calidad', glyph: 'M3 6h18M7 12h10M10 18h4' },
    { label: 'Almacén', sub: 'Una sola verdad', icon: 'ui-database' },
    { label: 'Power BI', sub: 'Actualizado', icon: 'power-bi' },
  ],
  log: [
    '02:00 Extracción del ERP: 18 tablas',
    '02:06 Extracción del CRM: oportunidades y cuentas',
    '02:09 Duplicados y errores corregidos',
    '02:12 Almacén actualizado',
    '02:13 Informes de Power BI listos para el día',
  ],
}

function CategoryVisual({ category }: { category: string }) {
  switch (category) {
    case 'data-engineering':
      return <FlowScreen {...etlFlow} />
    case 'ia':
      return <AssistantChat />
    case 'automatizacion':
      return <FlowScreen {...invoiceFlow} />
    case 'consultoria':
      return (
        <ReportScreen
          src="matriz"
          title="Diagnóstico · cuadro de indicadores"
          label="Un cuadro de indicadores de la empresa que se revisa línea a línea."
          chips={['Eficiencia operativa', 'Deuda financiera', 'Rentabilidad', 'Riesgo']}
          eager
        />
      )
    default:
      return <LiveDashboard />
  }
}

function splitDescription(description: string): {
  first: string
  rest: string
} {
  const end = description.indexOf('. ')
  if (end === -1) return { first: description, rest: '' }
  return {
    first: description.slice(0, end + 1),
    rest: description.slice(end + 2),
  }
}

export function SolutionSections({ solution }: { solution: SolutionPage }) {
  const { first, rest } = splitDescription(solution.description)
  const related = solution.relatedSolutions
    .map((slug) => getSolutionBySlug(slug))
    .filter((item): item is SolutionPage => Boolean(item))

  return (
    <main id="top">
      <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
        <div className="wrap">
          <div className="hero-text grid hero-split">
            <div className="hero-copy span-6">
              <h1 id="hero-h">{solution.title}</h1>
              <p className="t-lead">{first}</p>
              <div className="btn-row">
                <a className="btn btn--primary" href="/#demo">
                  {MAIN_ACTION}
                  <Arrow />
                </a>
                <a className="btn btn--secondary" href="#casos-de-uso">
                  Ver casos de uso
                </a>
              </div>
            </div>
            <div className="hero-visual span-6 start-7 lv-fill">
              <CategoryVisual category={solution.categorySlug} />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section statement"
        id="resumen"
        data-moment="word-highlight"
        aria-label="En una frase"
      >
        <div className="wrap">
          <p className="t-label">{solution.title}</p>
          <p className="mo-wh__text">{solution.subtitle}.</p>
        </div>
      </section>

      <section
        className="section ground-surface"
        id="incluye"
        style={{ '--hm': 2 } as React.CSSProperties}
        aria-labelledby="incluye-h"
      >
        <div className="wrap grid grid--top">
          <div className="span-6">
            <div className="section-head">
              <h2 id="incluye-h">Qué incluye el servicio</h2>
              {rest ? <p>{rest}</p> : null}
            </div>
          </div>
          <ul className="rows span-6 start-7">
            {solution.features.map((feature) => (
              <li key={feature.title}>
                <span className="rows__name">{feature.title}</span>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section"
        id="casos-de-uso"
        style={{ '--hm': 2 } as React.CSSProperties}
        aria-labelledby="casos-de-uso-h"
      >
        <div className="wrap">
          <div className="section-head">
            <h2 id="casos-de-uso-h">Casos de uso y resultados</h2>
            <p>Tres proyectos por sector y lo que suele cambiar después.</p>
          </div>
          <div className="grid grid--top">
            <ul className="rows span-6">
              {solution.useCases.map((useCase) => (
                <li key={useCase.title}>
                  <span className="rows__name">{useCase.title}</span>
                  <p>{useCase.description}</p>
                  <span className="rows__value">{useCase.sector}</span>
                </li>
              ))}
            </ul>
            <ul className="rows span-6 start-7">
              {solution.benefits.map((benefit) => (
                <li key={benefit.label}>
                  <span className="rows__name">{benefit.label}</span>
                  <p>{benefit.description}</p>
                  <span className="rows__value">{benefit.metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="preguntas"
        style={{ '--hm': 2 } as React.CSSProperties}
        aria-labelledby="preguntas-h"
      >
        <div className="wrap grid grid--top">
          <div className="span-6">
            <div className="section-head">
              <h2 id="preguntas-h">Preguntas sobre el servicio</h2>
              <p>Trabajamos con {solution.technologies.join(', ')}.</p>
            </div>
            <ul className="rows">
              {related.map((item) => (
                <li key={item.slug}>
                  <a className="link" href={`/soluciones/${item.slug}`}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="faq span-6 start-7">
            {solution.faq.map((item) => (
              <div className="faq__item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
