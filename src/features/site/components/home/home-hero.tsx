import type { CSSProperties } from 'react'
import { MAIN_ACTION } from '../../content'
import { HERO, assistant, reports, type ReportShot } from '../../home'
import { Arrow } from '../arrow'

type Box = { left: number; top: number; width: number; height?: number }

const at = ({ left, top, width, height }: Box): CSSProperties => ({
  left: `${left}%`,
  top: `${top}%`,
  width: `${width}%`,
  ...(height ? { height: `${height}%` } : {}),
})

function Shot({ report, box, pos = '62% 30%' }: { report: ReportShot; box: Box; pos?: string }) {
  return (
    <div className="ly-piece pc-shot" style={at(box)}>
      <img src={report.small} alt="" width={720} height={Math.round((720 * report.height) / report.width)} style={{ objectPosition: pos }} />
    </div>
  )
}

function Ask({ q, a, box }: { q: string; a?: string; box: Box }) {
  return (
    <div className="ly-piece pc-ask" style={at(box)}>
      <span className="pc-ask__who">Asistente</span>
      <p className="pc-ask__q">{q}</p>
      {a ? <p className="pc-ask__a">{a}</p> : null}
    </div>
  )
}

function Tag({ title, line, box }: { title: string; line: string; box: Box }) {
  return (
    <div className="ly-piece pc-tag" style={at(box)}>
      <b>{title}</b>
      <span>{line}</span>
    </div>
  )
}

/* hero--triptych: the headline, a collage of report captures and assistant answers that changes set every
   2.8 s (layout.js, with its pause disc on the piece that ends at 96% x 96%), one large button */
export function HomeHero() {
  return (
    <section className="hero hero--triptych" data-enter="" aria-labelledby="hero-h">
      <div className="hero__fx" data-fx="gradient-mesh" data-fx-seed="25" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="span-3">
            <h1 id="hero-h">{HERO.title}</h1>
            <p className="hero__lead">{HERO.lead}</p>
          </div>
          <div
            className="ly-collage span-6 start-4"
            role="img"
            aria-label="Informes de KPIntelligent (Bridge de resultados, Matriz KPIntelligent, pirámide DuPont, umbral de rentabilidad, NOF frente a fondo de maniobra) y respuestas del asistente"
          >
            <div className="ly-collage__set is-on">
              <Ask q={assistant.question} a={assistant.answer} box={{ left: 4, top: 6, width: 44 }} />
              <Tag title="Bridge de resultados" line="Qué partida explica la variación del beneficio" box={{ left: 58, top: 10, width: 38 }} />
              <Shot report={reports.bridge} box={{ left: 22, top: 46, width: 74, height: 50 }} />
            </div>
            <div className="ly-collage__set" aria-hidden="true">
              <Shot report={reports.matriz} box={{ left: 4, top: 6, width: 60, height: 46 }} pos="60% 40%" />
              <Tag title="Matriz KPIntelligent" line="Eficiencia, deuda, rentabilidad y riesgo" box={{ left: 68, top: 10, width: 28 }} />
              <Shot report={reports.dupont} box={{ left: 32, top: 50, width: 64, height: 46 }} pos="60% 45%" />
            </div>
            <div className="ly-collage__set" aria-hidden="true">
              <Shot report={reports.puntoMuerto} box={{ left: 4, top: 6, width: 58, height: 46 }} pos="60% 25%" />
              <Ask q="¿Cuánto puedo crecer sin pedir financiación?" box={{ left: 66, top: 8, width: 30 }} />
              <Shot report={reports.nofFm} box={{ left: 36, top: 54, width: 60, height: 42 }} pos="60% 85%" />
            </div>
          </div>
          <div className="span-3 start-10 hero__cta">
            <a className="btn btn--primary" href="#demo">
              {MAIN_ACTION}
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
