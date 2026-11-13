import type { CSSProperties } from 'react'
import { SiteNav } from '@/features/site/components/site-nav'
import { SiteFooter } from '@/features/site/components/site-footer'
import { Arrow } from '@/features/site/components/arrow'
import { Photo } from '@/features/site/components/photo'
import { photos } from '@/features/site/photos'
import {
  MAIN_ACTION,
  biTools,
  cases,
  clouds,
  solutionGroups,
  sourcesDiagram,
  steps,
} from '@/features/site/content'

/* type: service (site-kind other)
   deal: hero photo, nav nav-mega, close close-photo, footer footer-dark, rhythm surface-pairs,
         buttons solid, mark the client's own logo, grounds none
   palette: the client's own (start.mjs brand): the logo's blue as the one accent on a paper ground
   type: Newsreader / Hanken Grotesk
   moments: word-highlight (#empresa, the statement), picture-develops (#metodo, its photograph)
   Every section is one screen at 1440 (two on a phone where --hm says so). */

const twoPhoneScreens = { '--hm': 2 } as CSSProperties

function ToolIcon({ id, name, cls, w, h }: { id: string; name: string; cls: string; w: number; h: number }) {
  return (
    <span className={`ic-tile ic-tile--flat${cls === 'ic-wide' ? ' ic-tile--wide' : ''}`}>
      <img
        className={`ic ${cls}`.trim()}
        data-icon={id}
        src={`/assets/icons/${id}.svg`}
        alt={name}
        width={w}
        height={h}
        loading="lazy"
      />
    </span>
  )
}

export default function HomePage() {
  return (
    <>
      <SiteNav base="" />

      <main id="top">
        <section className="hero hero--photo" data-enter="" data-calm="right" aria-labelledby="hero-h">
          <picture className="hero__bg" data-phone-fill="">
            <source
              media="(max-width: 639px)"
              srcSet="/assets/img/photo-f134195982-780x975.webp 780w"
              sizes="100vw"
            />
            <img
              src="/assets/img/photo-f134195982.webp"
              srcSet="/assets/img/photo-f134195982-500.webp 500w, /assets/img/photo-f134195982-960.webp 960w, /assets/img/photo-f134195982-1280.webp 1280w, /assets/img/photo-f134195982.webp 1920w"
              sizes="100vw"
              width={1920}
              height={1381}
              alt={photos.racks.alt}
              fetchPriority="high"
              decoding="async"
              data-source="stand-in"
              data-subject="stand-in"
              style={{ '--ly-pos': '20% 50%', '--ly-pos-phone': '30% 50%' } as CSSProperties}
            />
          </picture>
          <div className="wrap">
            <div className="hero-text">
              <div className="hero__text">
                <h1 id="hero-h">Consultora de datos en Madrid</h1>
                <p className="hero__lead">
                  Unimos tu ERP, tu CRM y tus hojas de cálculo en una única fuente de verdad. Una cadena de
                  más de 50 tiendas pasó de 3 días a 3 horas en sus informes.
                </p>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#demo">
                    {MAIN_ACTION}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="soluciones" style={twoPhoneScreens} aria-labelledby="soluciones-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="soluciones-h">Soluciones para cada fase del dato</h2>
              <p>Doce servicios en cuatro áreas, de la base de datos a la decisión.</p>
            </div>
            <div className="grid grid--top fill">
              <ul className="rows span-6">
                {solutionGroups.map((group) => (
                  <li key={group.title}>
                    <span className="rows__name">{group.title}</span>
                    <p>{group.lead}</p>
                  </li>
                ))}
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7">
                <Photo photo={photos.workshop} />
              </div>
            </div>
          </div>
        </section>

        <section className="section ground-surface" id="datos" aria-labelledby="datos-h">
          <div className="wrap grid grid--top">
            <div className="span-6">
              <div className="section-head">
                <h2 id="datos-h">Todos tus datos en un solo almacén</h2>
                <p>
                  Conectamos ERPs como SAP, Navision u Odoo, CRMs como HubSpot o Salesforce y los archivos
                  planos, y lo dejamos todo en una sola vista.
                </p>
              </div>
              <div className="tools">
                <div>
                  <span className="t-label">Cuadros de mando</span>
                  {biTools.map((tool) => (
                    <ToolIcon key={tool.id} {...tool} />
                  ))}
                </div>
                <div>
                  <span className="t-label">Nube</span>
                  {clouds.map((tool) => (
                    <ToolIcon key={tool.id} {...tool} />
                  ))}
                </div>
              </div>
            </div>
            <div className="panel span-6 start-7" data-icon-base="/assets/icons" data-dg-still="">
              <div className="dg" data-diagram={JSON.stringify(sourcesDiagram)} />
            </div>
          </div>
        </section>

        <section
          className="section statement"
          id="empresa"
          data-moment="word-highlight"
          aria-label="La empresa"
        >
          <div className="wrap">
            <p className="t-label">La empresa</p>
            <p className="mo-wh__text">
              Creamos cultura analítica en las organizaciones: una única fuente de verdad en lugar de hojas de
              cálculo desordenadas y silos de información, para que los datos pasen a ser{' '}
              <strong>activos tangibles</strong>.
            </p>
          </div>
        </section>

        <section className="section" id="casos" style={twoPhoneScreens} aria-labelledby="casos-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="casos-h">Casos de éxito en 4 sectores</h2>
              <p>
                Proyectos en retail, banca, farmacéutica y logística, cada uno con su resultado. También
                trabajamos con industria y con equipos de marketing y ventas.
              </p>
            </div>
            <div className="grid grid--top fill" data-peek="">
              <ul className="rows span-6">
                {cases.map((item) => (
                  <li data-peek-to={item.key} tabIndex={0} key={item.key}>
                    <span className="rows__name">{item.name}</span>
                    <p>{item.line}</p>
                    <span className="rows__value">{item.value}</span>
                  </li>
                ))}
              </ul>
              <div className="frame frame--photo frame--fill span-6 start-7">
                {cases.map((item, i) => (
                  <Photo photo={item.photo} peekFor={item.key} hidden={i > 0} key={item.key} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="metodo" style={twoPhoneScreens} aria-labelledby="metodo-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="metodo-h">Un método en 6 pasos</h2>
            </div>
            <figure className="frame frame--photo develop" data-moment="picture-develops">
              <Photo photo={photos.aisle} sizes="100vw" />
            </figure>
            <div className="grid grid--top steps">
              {[0, 2, 4].map((start) => (
                <ol className="rows span-4" start={start + 1} key={start}>
                  {steps.slice(start, start + 2).map((step, i) => (
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

        <section className="section" id="demo" style={twoPhoneScreens} aria-labelledby="demo-h">
          <div className="wrap grid grid--top">
            <div className="span-6">
              <div className="section-head">
                <h2 id="demo-h">Solicita una demo con tus datos</h2>
                <p>
                  Cuéntanos qué sistemas usas y qué quieres medir. Te escribimos para fijar la fecha de la
                  demo.
                </p>
              </div>
              <form
                className="form demo-form"
                action="mailto:hola@kpintelligent.example"
                method="post"
                encType="text/plain"
                data-endpoint="/api/contact"
                data-sending="Enviando"
                data-sent="Tu solicitud de demo está enviada. Te escribimos para fijar la fecha."
                data-failed="No se ha enviado: ha fallado la conexión. Lo que has escrito sigue aquí; inténtalo de nuevo."
                noValidate
              >
                <div className="field">
                  <label htmlFor="f-name">Nombre</label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    minLength={2}
                    aria-describedby="f-name-err"
                  />
                  <p className="field__error" id="f-name-err" hidden>
                    Escribe tu nombre.
                  </p>
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    aria-describedby="f-email-err"
                  />
                  <p className="field__error" id="f-email-err" hidden>
                    Escribe un email con @, como nombre@empresa.com.
                  </p>
                </div>
                <div className="field field--full">
                  <label htmlFor="f-message">Tu empresa, tus datos y qué quieres medir</label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={4}
                    required
                    minLength={10}
                    aria-describedby="f-message-err"
                  />
                  <p className="field__error" id="f-message-err" hidden>
                    Escribe al menos una frase sobre tu empresa y tus datos.
                  </p>
                </div>
                <div className="btn-row">
                  <button className="btn btn--primary" type="submit">
                    {MAIN_ACTION}
                    <Arrow />
                  </button>
                </div>
                <p className="form__status" role="status" data-form-status="" />
              </form>
            </div>
            <div className="frame frame--photo span-6 start-7">
              <Photo photo={photos.meeting} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter base="" />
    </>
  )
}
