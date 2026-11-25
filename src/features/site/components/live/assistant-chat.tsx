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

const SETS: Record<string, { title: string; exchanges: Exchange[] }> = {
  agent: {
    title: 'Agente de Dirección · Teams',
    exchanges: [
      {
        q: '¿Qué ha cambiado esta semana?',
        a: 'Las ventas suben un 4,2 %, pero el margen de la zona Levante cae 3,2 puntos por descuentos. Te dejo el detalle por cliente.',
        bars: [70, 74, 52, 78],
        source: 'Fuente: ERP y presupuesto, actualizados hoy',
      },
      {
        q: 'Avisa a Comercial de los descuentos de Levante',
        a: 'Preparado el mensaje para el equipo comercial con los cinco pedidos afectados. Queda pendiente de tu aprobación.',
        bars: [40, 66, 58, 44],
        source: 'Acción: teams.enviar() · espera aprobación',
      },
    ],
  },
  training: {
    title: 'Práctica del taller · IA en el cierre',
    exchanges: [
      {
        q: 'Resume las desviaciones del cierre de octubre',
        a: 'Tres partidas se desvían más de un 10 %: transporte, energía y comisiones. Antes de usarlo, comprueba las cifras en el informe de cierre.',
        bars: [82, 64, 46, 30],
        source: 'Buena práctica: revisar siempre la fuente',
      },
      {
        q: '¿Puedo pegar aquí datos de clientes?',
        a: 'Solo en la herramienta aprobada por la empresa y sin datos personales innecesarios. Lo vemos en el módulo de uso seguro.',
        bars: [30, 50, 70, 90],
        source: 'Política de uso de IA de la empresa',
      },
    ],
  },
  support: {
    title: 'Atención al cliente · web y WhatsApp',
    exchanges: [
      {
        q: '¿Cuándo llega mi pedido 48213?',
        a: 'Salió ayer del almacén y llega el jueves antes de las 14:00. Te envío el enlace de seguimiento por correo.',
        bars: [40, 60, 80, 100],
        source: 'Fuente: ERP y transportista',
      },
      {
        q: 'Quiero devolver una caja que llegó dañada',
        a: 'Lo siento. He abierto la incidencia 2291 y te paso con una persona del equipo para gestionar la recogida.',
        bars: [90, 70, 50, 30],
        source: 'Traspaso a una persona con el historial',
      },
    ],
  },
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

export function AssistantChat({ variant }: { variant?: 'agent' | 'training' | 'support' } = {}) {
  const set = variant ? SETS[variant] : undefined
  const list = set ? set.exchanges : EXCHANGES
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState((set ? set.exchanges : EXCHANGES)[0].q.length)
  const [phase, setPhase] = useState<Phase>('answer')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let timers: ReturnType<typeof setTimeout>[] = []
    let running = false
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms))

    const play = (i: number) => {
      const { q } = list[i]
      setIndex(i)
      setPhase('typing')
      setTyped(0)
      for (let c = 1; c <= q.length; c++) later(() => setTyped(c), c * 38)
      const typedAt = q.length * 38 + 300
      later(() => setPhase('thinking'), typedAt)
      later(() => setPhase('answer'), typedAt + 1300)
      later(() => play((i + 1) % list.length), typedAt + 1300 + 5200)
    }

    const io = new IntersectionObserver((entries) => {
      const visible = entries.some((e) => e.isIntersecting)
      if (visible && !running) {
        running = true
        later(() => play(1 % list.length), 3500)
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
  }, [list])

  const ex = list[index]
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
        <span>{set ? set.title : 'Asistente KPIntelligent · tus datos'}</span>
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
