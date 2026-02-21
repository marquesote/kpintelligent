'use client'

import { useState, useEffect } from 'react'
import { siteConfig } from '@/config/siteConfig'

function DataVisualization() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs - responsive sizes to prevent overflow */}
      <div className="absolute top-1/4 left-[15%] w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full bg-primary-500/20 blur-[60px] sm:blur-[80px] md:blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-accent-purple/15 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-accent-cyan/10 blur-[60px] sm:blur-[70px] md:blur-[80px] animate-float-slow" />

      {/* Grid */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Particles */}
      <div className="particle particle-sm" style={{ top: '15%', left: '10%' }} />
      <div className="particle particle-md" style={{ top: '25%', right: '15%' }} />
      <div className="particle particle-lg" style={{ top: '60%', left: '20%' }} />
      <div className="particle particle-sm" style={{ top: '40%', right: '25%' }} />
      <div className="particle particle-md" style={{ top: '70%', left: '60%' }} />
      <div className="particle particle-sm" style={{ top: '80%', right: '10%' }} />
      <div className="particle particle-lg" style={{ top: '20%', left: '45%' }} />
      <div className="particle particle-sm" style={{ top: '55%', right: '40%' }} />

      {/* Animated rings - hidden on small mobile, responsive on larger */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] opacity-10">
        <div className="absolute inset-0 border border-primary-400/30 rounded-full animate-spin-slow" />
        <div className="absolute inset-8 border border-accent-purple/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="absolute inset-16 border border-accent-cyan/20 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }} />
      </div>
    </div>
  )
}

export function HeroSection() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % siteConfig.hero.headlines.length)
        setIsAnimating(false)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-mesh-hero overflow-hidden">
      <DataVisualization />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/70 font-medium">
              Expertos en Data & Analytics
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-hero-mobile md:text-hero text-white mb-6 min-h-[3.5em] md:min-h-[2.3em]">
            <span
              className={`inline-block transition-all duration-400 ${
                isAnimating
                  ? 'opacity-0 translate-y-4'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {siteConfig.hero.headlines[currentHeadline].split(' ').map((word, i) => {
                const highlightWords = ['datos', 'decisiones', 'activos', 'cultura', 'analítica']
                const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw))
                return (
                  <span key={i}>
                    {isHighlight ? (
                      <span className="text-gradient-blue">{word}</span>
                    ) : (
                      word
                    )}
                    {' '}
                  </span>
                )
              })}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            {siteConfig.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={siteConfig.hero.ctaPrimary.href}
              className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-2xl overflow-hidden group min-h-[48px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-purple to-primary-500 bg-[length:200%_100%] animate-gradient rounded-2xl" />
              <span className="absolute inset-[1px] bg-gradient-to-r from-primary-600 to-accent-purple rounded-2xl" />
              <span className="relative flex items-center gap-2">
                {siteConfig.hero.ctaPrimary.text}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href={siteConfig.hero.ctaSecondary.href}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white/90 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all gap-2 group min-h-[48px]"
            >
              <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {siteConfig.hero.ctaSecondary.text}
            </a>
          </div>

          {/* Partners row */}
          <div className="mt-10 sm:mt-16 pt-8 sm:pt-10 border-t border-white/5">
            <p className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/30 mb-4 sm:mb-6 font-medium">
              Partners tecnológicos
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center">
              {siteConfig.partners.map((partner) => (
                <span
                  key={partner}
                  className="text-sm text-white/25 font-medium hover:text-white/50 transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10">
        <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
