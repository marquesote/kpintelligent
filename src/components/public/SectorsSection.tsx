'use client'

import { siteConfig } from '@/config/siteConfig'

const sectorIcons: Record<string, React.ReactNode> = {
  retail: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" />
    </svg>
  ),
  finance: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  ),
  health: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  logistics: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  industry: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.25 1.25 0 01-.62-1.08V7.5m6.72 7.67l5.1-3.06a1.25 1.25 0 00.62-1.08V7.5M12 20.25V15.5m0 0l-6.72-4.03M12 15.5l6.72-4.03M3.75 7.5l8.25 4.97 8.25-4.97M3.75 7.5v3.53c0 .444.236.854.62 1.08l7.13 4.28c.31.186.694.186 1.004 0l7.13-4.28a1.25 1.25 0 00.62-1.08V7.5M3.75 7.5L12 2.25l8.25 5.25" />
    </svg>
  ),
  marketing: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  ),
}

const gradientBgs = [
  'from-primary-500/10 to-accent-cyan/10',
  'from-accent-purple/10 to-primary-500/10',
  'from-accent-pink/10 to-accent-purple/10',
  'from-accent-cyan/10 to-primary-500/10',
  'from-accent-orange/10 to-accent-pink/10',
  'from-primary-500/10 to-accent-purple/10',
]

const iconColors = [
  'text-primary-500',
  'text-accent-purple',
  'text-accent-pink',
  'text-accent-cyan',
  'text-accent-orange',
  'text-primary-400',
]

export function SectorsSection() {
  return (
    <section id="sectores" className="relative py-16 sm:py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-purple bg-accent-purple/10 rounded-full mb-4">
            Sectores
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-section text-gray-900 mb-4 sm:mb-6">
            Experiencia en <span className="text-gradient-purple">tu industria</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            Aplicamos soluciones de datos adaptadas a los retos específicos de cada sector.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger-children">
          {siteConfig.sectors.map((sector, index) => (
            <div
              key={sector.title}
              className={`reveal group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-gray-100 hover-lift cursor-default`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradientBgs[index]} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className={iconColors[index]}>
                  {sectorIcons[sector.icon]}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                {sector.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {sector.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Saber más
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
