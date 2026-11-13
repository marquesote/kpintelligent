import type { SolutionPage } from '@/data/solutionsContent'
import { getSolutionBySlug } from '@/data/solutionsContent'
import { MAIN_ACTION } from '../content'
import { Arrow } from './arrow'
import { Photo } from './photo'
import { photos, type SitePhoto } from '../photos'

/* one photograph per service area, each also used on the home page (never twice on one page) */
const categoryPhotos: Record<string, SitePhoto> = {
  bi: photos.workshop,
  'data-engineering': photos.aisle,
  ia: photos.racks,
  consultoria: photos.bank,
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
  const photo = categoryPhotos[solution.categorySlug] ?? categoryPhotos.bi
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
            <div className="hero-visual frame frame--photo span-6 start-7">
              <Photo photo={photo} sizes="(max-width: 1023px) 100vw, 70vw" phoneCrop={false} eager />
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
