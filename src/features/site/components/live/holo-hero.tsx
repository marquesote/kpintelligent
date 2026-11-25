import type { CSSProperties } from 'react'
import { MAIN_ACTION, heroWords, marqueeTools } from '../../content'
import { HoloGlobe } from './holo-globe'
import { LiveNumber } from './live-number'

/* The home hero: the words on the left and, on the right, a holographic dashboard projected from a tablet on a
   desk: three curved panes (gauges, a globe, live figures and charts that draw themselves). Everything moves
   with CSS and SVG; the figures count with LiveNumber. Under it, the tools we connect, in a running strip. */

const BARS = [38, 52, 46, 61, 57, 70, 64, 78, 72, 86, 81, 94]
const LINE = 'M0 46 L12 40 L24 43 L36 32 L48 35 L60 24 L72 28 L84 17 L96 20 L108 10 L120 13'
const FORECAST = 'M120 13 L132 9 L144 11 L156 5'

const v = (vars: Record<string, string | number>) => vars as CSSProperties

function Ring({ pct, label, size = 'sm' }: { pct: number; label: string; size?: 'sm' | 'lg' }) {
  return (
    <div className={`lv-ring lv-ring--${size}`} style={v({ '--pct': pct })}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className="lv-ring__track" cx="50" cy="50" r="42" pathLength={100} />
        <circle className="lv-ring__bar" cx="50" cy="50" r="42" pathLength={100} />
      </svg>
      <span className="lv-ring__val">
        <LiveNumber value={pct} decimals={size === 'lg' ? 1 : 0} suffix=" %" drift={0.02} />
      </span>
      <span className="lv-ring__label">{label}</span>
    </div>
  )
}

function LeftPane() {
  return (
    <div className="lv-pane lv-pane--l">
      <div className="lv-w lv-w--ring">
        <p className="lv-w__t">
          Margen bruto <small>12 meses</small>
        </p>
        <Ring pct={43.5} label="+2,1 pt" size="lg" />
      </div>
      <div className="lv-w">
        <p className="lv-w__t">
          Ventas mensuales <small>M€</small>
        </p>
        <div className="lv-bars">
          {BARS.map((h, i) => (
            <span key={i} style={v({ '--h': `${h}%`, '--d': `${i * 0.12}s` })} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CentrePane() {
  return (
    <div className="lv-pane lv-pane--c">
      <p className="lv-pane__title">
        <span className="lv-live" /> Vista en tiempo real
      </p>
      <HoloGlobe />
      <div className="lv-minis">
        <Ring pct={28} label="Liquidez" />
        <Ring pct={38} label="ROE" />
        <Ring pct={62} label="Cobros" />
      </div>
    </div>
  )
}

function RightPane() {
  return (
    <div className="lv-pane lv-pane--r">
      <div className="lv-kpis">
        <div className="lv-w lv-kpi">
          <p className="lv-w__t">Ventas del año</p>
          <p className="lv-kpi__v">
            <LiveNumber value={4.82} decimals={2} suffix=" M€" drift={0.004} />
          </p>
          <p className="lv-up">▲ 8,6 %</p>
        </div>
        <div className="lv-w lv-kpi">
          <p className="lv-w__t">Tesorería</p>
          <p className="lv-kpi__v">
            <LiveNumber value={1.36} decimals={2} suffix=" M€" drift={0.008} />
          </p>
          <p className="lv-up">▲ 3,2 %</p>
        </div>
      </div>
      <div className="lv-w">
        <p className="lv-w__t">
          Previsión de caja <small>IA</small>
        </p>
        <svg className="lv-line" viewBox="0 0 160 52" preserveAspectRatio="none" aria-hidden="true">
          <path className="lv-line__area" d={`${LINE} L120 52 L0 52 Z`} />
          <path className="lv-line__path" d={LINE} pathLength={1} />
          <path className="lv-line__fc" d={FORECAST} />
          <circle className="lv-line__dot" cx="156" cy="5" r="2.6" />
        </svg>
      </div>
      <div className="lv-w lv-w--donut">
        <svg className="lv-donut" viewBox="0 0 42 42" aria-hidden="true">
          <circle cx="21" cy="21" r="15.9" pathLength={100} className="lv-donut__a" />
          <circle cx="21" cy="21" r="15.9" pathLength={100} className="lv-donut__b" />
          <circle cx="21" cy="21" r="15.9" pathLength={100} className="lv-donut__c" />
        </svg>
        <ul className="lv-legend">
          <li>Personal</li>
          <li>Compras</li>
          <li>Otros</li>
        </ul>
      </div>
    </div>
  )
}

const GLYPHS = [
  'M4 20V10M10 20V4M16 20v-7M22 20H2',
  'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  'M9 3h6M12 3v3M5 10a7 7 0 0 1 14 0v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 13h.01M15 13h.01',
  'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10 21h4',
  'M13 2 3 14h9l-1 8 10-12h-9z',
]

export function HoloHero() {
  return (
    <section className="hero lv-hero ground-inverse" data-enter="" aria-labelledby="hero-h">
      <div className="lv-hero__sky" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-text lv-hero__grid">
          <div className="lv-hero__copy">
            <p className="hero__kicker lv-kicker">
              <span className="dot" /> Datos, BI e inteligencia artificial
            </p>
            <h1 id="hero-h">Consultora de datos e IA en Madrid</h1>
            <p className="lv-rotate-line">
              Convertimos tus datos en{' '}
              <span className="lv-rotate" aria-hidden="true">
                {heroWords.map((word, i) => (
                  <span key={word} style={v({ '--i': i })}>
                    {word}
                  </span>
                ))}
              </span>
              <span className="sr-only">{heroWords.join(', ')}</span>
            </p>
            <p className="hero__lead">
              Unimos tu ERP, tu CRM y tus hojas de cálculo en una única fuente de verdad, y la IA trabaja sobre ella.
              Una cadena de más de 50 tiendas pasó de 3 días a 3 horas en sus informes.
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#demo">
                {MAIN_ACTION}
              </a>
              <a className="btn btn--secondary" href="#ia">
                IA y automatización
              </a>
            </div>
          </div>

          <div
            className="lv-holo"
            role="img"
            aria-label="Un cuadro de mando holográfico proyectado desde una tableta: margen, ventas, tesorería, previsión de caja y un globo con los datos en tiempo real."
          >
            <div className="lv-holo__in">
              <div className="lv-screen">
                <LeftPane />
                <CentrePane />
                <RightPane />
              </div>
              <div className="lv-icons">
                {GLYPHS.map((d) => (
                  <span key={d}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={d} />
                    </svg>
                  </span>
                ))}
              </div>
              <div className="lv-beam">
                {Array.from({ length: 14 }, (_, i) => (
                  <i key={i} style={v({ '--x': `${8 + ((i * 37) % 84)}%`, '--d': `${(i * 0.43) % 3}s` })} />
                ))}
              </div>
              <div className="lv-desk">
                <div className="lv-tablet" />
                <div className="lv-keys" />
                <div className="lv-cup" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-strip lv-marquee" aria-label="Herramientas que conectamos">
          <p className="t-label">Conectamos</p>
          <div className="lv-marquee__view">
            <ul className="lv-marquee__track">
              {[...marqueeTools, ...marqueeTools].map((tool, i) => (
                <li key={`${tool.id}-${i}`} aria-hidden={i >= marqueeTools.length ? true : undefined}>
                  <img src={`/assets/icons/${tool.id}.svg`} alt="" width={20} height={20} loading="lazy" />
                  {tool.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
