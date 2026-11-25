import { findings, reportSections, reports } from '../../home'

function ListPane() {
  return (
    <div className="ui ui-panel ui-win" data-ui="window" data-open="Abierto" data-work="Leyendo" data-done="Listo">
      <div className="ui-win__bar">
        <span className="ui-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ui-win__crumb">
          KPIntelligent <i>/</i> <b>Informes</b>
        </span>
      </div>
      <div className="ui-win__body">
        <nav className="ui-win__side" aria-hidden="true">
          <span className="ui-win__nav is-on">
            Informes<em>85</em>
          </span>
          <span className="ui-win__nav">
            Hallazgos<em>3</em>
          </span>
          <span className="ui-win__nav">Asistente</span>
          <span className="ui-win__label">Vistas</span>
          <span className="ui-win__nav">
            <span className="ui-win__hash">#</span>Grupo
          </span>
          <span className="ui-win__nav">
            <span className="ui-win__hash">#</span>Sector
          </span>
        </nav>
        <div className="ui-win__main">
          <div className="ui-win__cols" aria-hidden="true">
            <span>Apartado</span>
            <span>Qué incluye</span>
            <span>Estado</span>
            <span>Informes</span>
          </div>
          <ul className="ui-win__rows">
            {reportSections.map((section) => (
              <li className={`ui-win__row${section.open ? ' is-on' : ''}`} data-row="" key={section.code}>
                <span className="ui-avatar" data-tone={(Number(section.code) % 5) + 1}>
                  {section.code}
                </span>
                <span className="ui-win__who">{section.name}</span>
                <span className="ui-win__sub">{section.line}</span>
                <span className={`ui-win__st${section.open ? ' is-you' : ' is-done'}`} data-st="">
                  {section.open ? 'Abierto' : 'Listo'}
                </span>
                <span className="ui-win__age">{section.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Findings() {
  return (
    <div className="ui ui-notify app__over" data-ui="notify">
      <ul className="ui-notify__list" data-notify-list="">
        {findings.map((note, i) => (
          <li className="ui-note" key={note.body}>
            {i === 0 ? (
              <span className="ui-agent ui-note__av" aria-hidden="true" />
            ) : (
              <span className="ui-note__ico" aria-hidden="true">
                <svg className="ui-icon" viewBox="0 0 16 16">
                  <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                </svg>
              </span>
            )}
            <span className="ui-note__text">
              <span className="ui-note__title">
                {note.title}
                <time>{note.time}</time>
              </span>
              <span className="ui-note__body">{note.body}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* app-frame: KPIntelligent as one app window, its nine sections beside the open report (a real
   capture, figures blurred) with the Analizador's findings over its lower right */
export function ReportApp() {
  return (
    <section className="section" id="informes" aria-labelledby="informes-h">
      <div className="wrap">
        <div className="grid grid--top">
          <h2 className="span-5" id="informes-h">
            85 informes en una sola aplicación
          </h2>
          <p className="span-6 start-7 app__lead">
            Elija un apartado y abra el informe: KPIntelligent lo calcula con la contabilidad de su ERP.
            El Analizador lee el resultado y le dice qué ha cambiado.{' '}
            <a className="link" href="/soluciones/dashboards-interactivos">
              Ver cómo trabajamos los cuadros de mando
            </a>
          </p>
        </div>
        <div
          className="ui app fill"
          role="img"
          aria-label="La aplicación de KPIntelligent, abierta en el apartado Resultados: la lista de los nueve apartados junto al informe Bridge, con los hallazgos del Analizador"
          data-ui-pause-host=""
        >
          <div className="app__pane app__pane--list">
            <ListPane />
          </div>
          <div className="app__pane app__pane--open" data-ui-loop="">
            <img
              className="app__shot"
              src={reports.bridge.src}
              alt=""
              width={reports.bridge.width}
              height={reports.bridge.height}
              loading="lazy"
            />
            <Findings />
          </div>
        </div>
      </div>
    </section>
  )
}
