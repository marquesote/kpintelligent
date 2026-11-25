'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/config/siteConfig'

function AnimatedCounter({ value, suffix }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const numericValue = parseInt(value)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, numericValue])

  return (
    <div ref={ref}>
      <span className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-blue">
        {count}{suffix}
      </span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-dark" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {siteConfig.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="reveal text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-white/50 font-medium">
                {stat.label}
              </div>
              <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-primary-500/50 to-accent-purple/50 counter-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
