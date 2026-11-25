'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'

/* An assistant answering questions about the company's own data: the question types itself, the assistant
   thinks, the answer and its little chart appear, then the next question. The first exchange is the server
   render (and all that reduced motion shows). */

interface Exchange {
  q: string
  a: string
  bars: number[]
  source: string
}

const EXCHANGES: Exchange[] = [
  {
    q: '¿Cuánto vendimos en octubre frente al año pasado?',
    a: '1,24 M€, un 8,6 % más que en octubre del año pasado. Crecen sobre todo las tiendas de la zona norte.',
    bars: [62, 70, 58, 81],
    source: 'Fuente: ventas del ERP, actualizadas hoy a las 07:00',
  },
  {
    q: '¿Qué clientes tardan más en pagar?',
    a: 'Tres clientes pasan de 90 días y suman 214.000 €. Te dejo la lista preparada para el equipo de cobros.',
    bars: [30, 45, 88, 64],
    source: 'Fuente: cartera de cobros del ERP',
  },
  {
    q: 'Prevé la tesorería de los próximos tres meses',
    a: 'Con los cobros y pagos previstos, el saldo baja en enero y se recupera en febrero. Ningún mes queda en negativo.',
    bars: [74, 52, 68, 80],
    source: 'Fuente: previsión con cobros, pagos y estacionalidad',
  },
]

type Phase = 'typing' | 'thinking' | 'answer'

export function AssistantChat() {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState(EXCHANGES[0].q.length)
  const [phase, setPhase] = useState<Phase>('answer')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timers: ReturnType<typeof setTimeout>[] = []
    let running = false
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms))

    const play = (i: number) => {
      const { q } = EXCHANGES[i]
      setIndex(i)
      setPhase('typing')
      setTyped(0)
      for (let c = 1; c <= q.length; c++) later(() => setTyped(c), c * 38)
      const typedAt = q.length * 38 + 300
      later(() => setPhase('thinking'), typedAt)
      later(() => setPhase('answer'), typedAt + 1300)
      later(() => play((i + 1) % EXCHANGES.length), typedAt + 1300 + 5200)
    }

    const io = new IntersectionObserver((entries) => {
      const visible = entries.some((e) => e.isIntersecting)
      if (visible && !running) {
        running = true
        later(() => play(1), 3500)
      } else if (!visible && running) {
        running = false
        timers.forEach(clearTimeout)
        timers = []
      }
    })
    io.observe(el)
    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [])

  const ex = EXCHANGES[index]
  return (
    <div
      ref={ref}
      className="lv-card lv-chat"
      role="img"
      aria-label="Un asistente de IA que responde en lenguaje natural sobre los datos de la empresa: ventas, cobros y previsión de tesorería, con la fuente de cada respuesta."
    >
      <div className="lv-card__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>Asistente KPIntelligent · tus datos</span>
        <b className="lv-pill">
          <span className="lv-live" /> IA
        </b>
      </div>
      <div className="lv-card__body lv-chat__body" aria-hidden="true">
        <p className="lv-msg lv-msg--q">
          {ex.q.slice(0, typed)}
          {phase === 'typing' ? <span className="lv-caret" /> : null}
        </p>
        {phase === 'thinking' ? (
          <p className="lv-msg lv-msg--a lv-thinking">
            <i />
            <i />
            <i />
          </p>
        ) : null}
        {phase === 'answer' ? (
          <div className="lv-msg lv-msg--a lv-answer" key={index}>
            <p>{ex.a}</p>
            <div className="lv-answer__bars">
              {ex.bars.map((h, i) => (
                <span key={i} style={{ '--h': `${h}%`, '--i': i } as CSSProperties} />
              ))}
            </div>
            <small>{ex.source}</small>
          </div>
        ) : null}
        <div className="lv-chat__input">
          <span>Pregunta lo que quieras sobre tu empresa…</span>
          <b>↑</b>
        </div>
      </div>
      <span className="lv-scan" aria-hidden="true" />
    </div>
  )
}
