'use client'

import { siteConfig } from '@/config/siteConfig'

const caseGradients = [
  'from-primary-500 to-accent-cyan',
  'from-accent-purple to-primary-500',
  'from-accent-pink to-accent-purple',
  'from-accent-cyan to-primary-500',
]

export function CasesSection() {
  return (
    <section id="casos" className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan bg-accent-cyan/10 rounded-full mb-4">
            Casos de Éxito
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-section text-gray-900 mb-4 sm:mb-6">
            Resultados que <span className="text-gradient-blue">hablan por sí solos</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            Datos que producen ROI. Así es como hemos ayudado a nuestros clientes a transformar su negocio.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 stagger-children">
          {siteConfig.caseStudies.map((caseStudy, index) => (
            <div
              key={caseStudy.title}
              className="reveal group relative rounded-2xl sm:rounded-3xl overflow-hidden hover-lift"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseGradients[index]} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative p-6 sm:p-8 md:p-10 border border-gray-100 rounded-2xl sm:rounded-3xl">
                {/* Sector badge */}
                <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-gradient-to-r ${caseGradients[index]} text-white mb-4 sm:mb-6`}>
                  {caseStudy.sector}
                </span>

                {/* Metric - the star */}
                <div className="mb-4 sm:mb-6">
                  <span className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-blue`}>
                    {caseStudy.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed">
                  {caseStudy.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-6 sm:mt-8 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r ${caseGradients[index]} group-hover:w-24 sm:group-hover:w-32 transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
