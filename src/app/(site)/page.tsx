import type { CSSProperties } from 'react'
import { SiteNav } from '@/features/site/components/site-nav'
import { SiteFooter } from '@/features/site/components/site-footer'
import { Arrow } from '@/features/site/components/arrow'
import { HoloHero } from '@/features/site/components/live/holo-hero'
import { AiServicesSection, AutomationSection } from '@/features/site/components/live/ai-sections'
import { CaseScreen, LiveDashboard, PipelineBand } from '@/features/site/components/live/screens'
import { AssistantChat } from '@/features/site/components/live/assistant-chat'
import { DataOrbit, DemoPreview, LiveFeed } from '@/features/site/components/live/orbit'
import {
  MAIN_ACTION,
  biTools,
  cases,
  clouds,
  solutionGroups,
  sourcesDiagram,
  steps,
} from '@/features/site/content'

/* V4: the V2 page (paper ground, the logo's blue, Newsreader / Hanken Grotesk) with moving pictures in place of
   the photographs: a holographic dashboard in the hero, live screens (a dashboard, the cases, an automation, an
   assistant) in the sections, and the new "IA y automatización" sections after the hero.
   moments: word-highlight (#empresa, the statement)
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
        <HoloHero />

        <AiServicesSection />

        <AutomationSection />

        <section className="section" id="soluciones" style={twoPhoneScreens} aria-labelledby="soluciones-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="soluciones-h">Soluciones para cada fase del dato</h2>
              <p>Trece servicios en cinco áreas, de la base de datos a la decisión.</p>
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
              <div className="span-6 start-7 lv-fill">
                <LiveDashboard />
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
              <LiveFeed
                title="Sincronización en vivo"
                label="Un registro en movimiento de las cargas de datos: SAP, Odoo, HubSpot, Salesforce y Excel llegan al almacén y Power BI se actualiza."
                lines={[
                  ['07:00', 'SAP · 18 tablas cargadas en el almacén'],
                  ['07:02', 'Odoo · pedidos y facturas del día'],
                  ['07:03', 'HubSpot · 214 oportunidades actualizadas'],
                  ['07:04', 'Salesforce · cuentas y contactos sincronizados'],
                  ['07:05', 'Excel de presupuesto · validado sin errores'],
                  ['07:06', 'Power BI · 12 informes listos para el día'],
                ]}
              />
            </div>

            <div className="panel span-6 start-7 ground-inverse lv-dgpanel" data-icon-base="/assets/icons">
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
          <div className="wrap grid lv-statement">
            <div className="span-6">
              <p className="t-label">La empresa</p>
              <p className="mo-wh__text">
                Creamos cultura analítica en las organizaciones: una única fuente de verdad en lugar de hojas de
                cálculo desordenadas y silos de información, para que los datos pasen a ser{' '}
                <strong>activos tangibles</strong>.
              </p>
            </div>
            <div className="span-6 start-7 lv-fill">
              <DataOrbit
                mode="stream"
                chaos
                title="De los silos a una fuente de verdad"
                label="Hojas de cálculo, ERP, CRM, correos y archivos sueltos se mueven desordenados y fluyen hacia una única fuente de verdad, de la que salen informes, previsiones e IA."
                nodes={['Hojas de cálculo', 'ERP', 'CRM', 'Correos', 'Archivos sueltos']}
                core="Una fuente de verdad"
                outputs={['Informes', 'Previsiones', 'IA']}
              />
            </div>
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
              <div className="span-6 start-7 lv-fill">
                {cases.map((item, i) => (
                  <div className="lv-peek" data-peek-for={item.key} hidden={i > 0} key={item.key}>
                    <CaseScreen kind={item.key} />
                  </div>
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
            <PipelineBand steps={steps} />
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
                data-failed="No se ha enviado. Lo que has escrito sigue aquí: inténtalo de nuevo o escríbenos a marques@kpintelligent.es."
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
                <p className="form__note">
                  Usamos tus datos solo para contestarte: <a href="/privacidad">política de privacidad</a>.
                </p>
                <p className="form__status" role="status" data-form-status="" />
              </form>
              <DemoPreview
                items={[
                  { title: 'Tus cuadros de mando, con tus datos', viz: 'wave' },
                  { title: 'Un asistente que responde sobre tu empresa', viz: 'chat' },
                  { title: 'Una automatización trabajando', viz: 'flow' },
                ]}
              />
            </div>
            <div className="span-6 start-7 lv-fill">
              <AssistantChat />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter base="" />
    </>
  )
}
