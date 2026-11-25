import type { CSSProperties } from 'react'
import {
  ADVISORY_ACTION,
  advisoryAudience,
  advisoryFaq,
  advisoryQuestions,
  advisorySteps,
  advisoryTools,
} from '../advisory'
import { AdvisoryForm } from './advisory-form'
import { Arrow } from './arrow'
import { Photo } from './photo'
import { photos } from '../photos'

const twoPhoneScreens = { '--hm': 2 } as CSSProperties

function Hero() {
  return (
    <section className="hero hero--split" data-enter="" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero-split">
          <div className="hero-copy span-6">
            <p className="t-label">Asesoría financiera para empresas</p>
            <h1 id="hero-h">Sus números, explicados cada mes</h1>
            <p className="t-lead">
              Analizamos las cuentas de su empresa, le decimos qué significan y decidimos con usted qué hacer.
              Antes de contratar nada, le enviamos gratis el informe financiero de su empresa, hecho con sus
              cuentas depositadas.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#informe">
                {ADVISORY_ACTION}
                <Arrow />
              </a>
            </div>
            <p className="advisory-note">Gratuito. Sin compromiso. Solo necesitamos el CIF y un correo.</p>
          </div>
          <div className="hero-visual frame frame--photo span-6 start-7">
            <Photo photo={photos.meeting} sizes="(max-width: 1023px) 100vw, 70vw" phoneCrop={false} eager />
          </div>
        </div>
      </div>
    </section>
  )
}

function Questions() {
  return (
    <section className="section" id="preguntas" style={twoPhoneScreens} aria-labelledby="preguntas-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="preguntas-h">Las preguntas que contestamos</h2>
            <p>
              Las que se hace quien dirige una empresa y no tiene un director financiero al lado. Cada una
              tiene su informe, con sus cifras.
            </p>
          </div>
        </div>
        <ul className="rows span-6 start-7">
          {advisoryQuestions.map((question) => (
            <li key={question}>
              <span className="rows__name">{question}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Start() {
  return (
    <section
      className="section ground-surface"
      id="como-empezamos"
      style={twoPhoneScreens}
      aria-labelledby="como-empezamos-h"
    >
      <div className="wrap">
        <div className="section-head">
          <h2 id="como-empezamos-h">Empezamos con su informe, no con un folleto</h2>
        </div>
        <div className="grid grid--top">
          {[0, 2].map((start) => (
            <ol className={`rows span-6${start ? ' start-7' : ''}`} start={start + 1} key={start}>
              {advisorySteps.slice(start, start + 2).map((step, i) => (
                <li key={step.title}>
                  <span className="rows__name">
                    {start + i + 1}. {step.title}
                  </span>
                  <p>{step.line}</p>
                </li>
              ))}
            </ol>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tools() {
  return (
    <section className="section" id="herramientas" style={twoPhoneScreens} aria-labelledby="herramientas-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="herramientas-h">Con qué trabajamos</h2>
            <p>Con una herramienta propia, el Analizador Financiero, y con cuadros de mando en Power BI.</p>
          </div>
        </div>
        <ul className="rows span-6 start-7">
          {advisoryTools.map((tool) => (
            <li key={tool.title}>
              <span className="rows__name">{tool.title}</span>
              <p>{tool.line}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AudienceAndFaq() {
  return (
    <section
      className="section ground-surface"
      id="para-quien"
      style={twoPhoneScreens}
      aria-labelledby="para-quien-h"
    >
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="para-quien-h">Para quién es</h2>
          </div>
          <ul className="rows">
            {advisoryAudience.map((line) => (
              <li key={line}>
                <p>{line}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="span-6 start-7">
          <h2 className="advisory-faq-h">Preguntas frecuentes</h2>
          <div className="faq">
            {advisoryFaq.map((item) => (
              <div className="faq__item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Request() {
  return (
    <section className="section" id="informe" style={twoPhoneScreens} aria-labelledby="informe-h">
      <div className="wrap grid grid--top">
        <div className="span-6">
          <div className="section-head">
            <h2 id="informe-h">Empiece por ver sus propios números</h2>
            <p>Díganos el CIF de su empresa y a qué correo se lo enviamos.</p>
          </div>
          <AdvisoryForm />
        </div>
        <div className="frame frame--photo span-6 start-7">
          <Photo photo={photos.bank} />
        </div>
      </div>
    </section>
  )
}

export function AdvisorySections() {
  return (
    <main id="top">
      <Hero />
      <Questions />
      <Start />
      <Tools />
      <AudienceAndFaq />
      <Request />
    </main>
  )
}
