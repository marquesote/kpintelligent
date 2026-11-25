'use client'

import { useEffect, useRef, useState } from 'react'

interface LiveNumberProps {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
  /** how far the figure wanders from its value, as a share of it (0.01 = 1 %) */
  drift?: number
  /** milliseconds between two changes */
  period?: number
}

function format(n: number, decimals: number): string {
  return n.toLocaleString('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

/** A figure that counts up when it comes into view and then moves a little, like a live dashboard.
    Server render and reduced motion show the value itself. */
export function LiveNumber({ value, decimals = 0, prefix = '', suffix = '', drift = 0.012, period = 2800 }: LiveNumberProps) {
  const [shown, setShown] = useState(value)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    let timer: ReturnType<typeof setInterval> | undefined
    const countUp = () => {
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / 1400)
        setShown(value * (1 - Math.pow(1 - t, 3)))
        if (t < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
      timer = setInterval(() => setShown(value * (1 + (Math.random() - 0.5) * 2 * drift)), period)
    }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect()
        countUp()
      }
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
      if (timer) clearInterval(timer)
    }
  }, [value, drift, period])

  return (
    <span ref={ref} className="lv-num">
      {prefix}
      {format(shown, decimals)}
      {suffix}
    </span>
  )
}
