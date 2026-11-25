import type { CSSProperties } from 'react'
import { solutionGroups } from '../../content'
import { askExamples, assistant, dataFacts, reports, sourcesDiagram } from '../../home'

const twoPhoneScreens = { '--hm': 2 } as CSSProperties

const docIcon = (
  <svg className="ui-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4 2.5h5l3 3v8H4z" />
    <path d="M9 2.5v3h3" />
  </svg>
)

/* letters-assemble: the statement builds itself as it rises through the screen */
export function Statement() {
  return (
    <section className="section statement" id="empresa" data-moment="letters-assemble" aria-labelledby="empresa-h">
      <div className="wrap">
        <h2 className="mo-la__type" id="empresa-h">
          Del ERP a la decisión
        </h2>
        <p className="mo-la__sub">
          Una sola fuente de verdad en lugar de hojas de cálculo sueltas: sus cuentas, ordenadas, explicadas y listas para
          decidir.
        </p>
      </div>
    </section>
  )
}

function AssistantChat() {
  return (
    <div className="ui ui-panel ui-chat" data-ui="chat">
      <div className="ui-head">
        <span className="ui-agent" aria-hidden="true" />
        <div className="ui-title">Asistente del Analizador</div>
        <span className="ui-chat__online">Con sus cifras</span>
      </div>
      <div className="ui-chat__body">
        <div className="ui-msg ui-msg--me" data-chat-q="">
          <span className="ui-msg__text">{assistant.question}</span>
        </div>
        <div className="ui-msg ui-msg--bot" data-chat-a="">
          <span className="ui-agent ui-msg__av" aria-hidden="true" />
          <span className="ui-msg__col">
            <span className="ui-chat__answer">{assistant.answer}</span>
            <span className="ui-chat__srcs">
              {assistant.sources.map((source) => (
                <span className="ui-chat__src" key={source}>
                  {docIcon}
                  {source}
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>
      <div className="ui-chat__input">
        <span className="ui-chat__ph">Pregunte a sus números</span>
        <span className="ui-chat__send" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="14" height="14">
            <path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  )
}

/* iris-opens: the light ground opens through a circle over the dark page */
export function AssistantSection() {
  return (
    <section
      className="section ground-inverse"
      id="ia"
      data-moment="iris-opens"
      data-moment-opts='{"from": "base"}'
      aria-labelledby="ia-h"
    >
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="ia-h">Pregunte a sus números y le contestan</h2>
            <p>
              El asistente del Analizador responde en lenguaje natural con las cifras de su empresa y le dice en qué
              informe verlo. Solo usa los datos del grupo que tiene abierto.
            </p>
          </div>
          <ul className="rows ask-list">
            {askExamples.map((question) => (
              <li key={question}>
                <span className="rows__name">{question}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="span-6 start-7 ask-card">
          <div className="stage stage--fade-b" data-ui-loop="">
            <AssistantChat />
          </div>
        </div>
      </div>
    </section>
  )
}

export function DataSection() {
  return (
    <section className="section" id="datos" aria-labelledby="datos-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="datos-h">Su contabilidad entra, salen informes y respuestas</h2>
            <p>Cifras que cuadran con sus cuentas oficiales, actualizadas desde su propio sistema.</p>
          </div>
          <ul className="rows">
            {dataFacts.map((fact) => (
              <li key={fact.name}>
                <span className="rows__name">{fact.name}</span>
                <p>{fact.line}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="span-6 start-7">
          <div className="panel">
            <div className="dg" data-diagram={JSON.stringify(sourcesDiagram)} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function SolutionsSection() {
  return (
    <section className="section" id="soluciones" style={twoPhoneScreens} aria-labelledby="soluciones-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="soluciones-h">Servicios de finanzas, datos e IA</h2>
          <p>Doce servicios en cuatro áreas, de los cuadros de mando a los modelos de IA, sobre los mismos datos.</p>
        </div>
        <div className="grid grid--top fill">
          <ul className="rows span-6">
            {solutionGroups.map((group) => (
              <li key={group.title}>
                <a className="rows__name" href={group.items[0].href}>
                  {group.title}
                </a>
                <p>{group.lead}</p>
              </li>
            ))}
          </ul>
          <div className="frame frame--shot frame--fill span-6 start-7">
            <img src={reports.pyg.src} alt={reports.pyg.alt} width={reports.pyg.width} height={reports.pyg.height} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
