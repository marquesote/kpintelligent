'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/siteConfig'

const iconMap: Record<string, React.ReactNode> = {
  chart: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  database: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  brain: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  strategy: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
}

const gradients = [
  'from-primary-500 to-accent-cyan',
  'from-accent-purple to-primary-500',
  'from-accent-pink to-accent-purple',
  'from-accent-orange to-accent-pink',
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="soluciones" className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 grid-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-600 bg-primary-50 rounded-full mb-4">
            Nuestras Soluciones
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-section text-gray-900 mb-4 sm:mb-6">
            Soluciones <span className="text-gradient-blue">end-to-end</span> para tus datos
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            Desde la ingesta de datos hasta la inteligencia artificial, cubrimos todo el ciclo de vida del dato en tu organización.
          </p>
        </div>

        {/* Category Tabs - horizontal scroll on mobile */}
        <div className="flex overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 reveal scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
          {siteConfig.serviceCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap min-h-[44px] ${
                activeTab === index
                  ? 'bg-gradient-to-r ' + gradients[index] + ' text-white shadow-lg scale-105'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className={`hidden sm:block ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                {iconMap[category.icon]}
              </span>
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.title.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="reveal">
          {siteConfig.serviceCategories.map((category, catIndex) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeTab === catIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
              style={{ display: activeTab === catIndex ? 'block' : 'none' }}
            >
              {/* Category Description */}
              <div className="text-center mb-6 sm:mb-10">
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 stagger-children">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.title}
                    className="reveal group relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-gray-100 hover-lift hover-glow"
                    style={{ transitionDelay: `${serviceIndex * 100}ms` }}
                  >
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl sm:rounded-t-3xl bg-gradient-to-r ${gradients[catIndex]} opacity-0 group-hover:opacity-100 transition-opacity`} />

                    <div className="flex items-start gap-3 sm:gap-5">
                      <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${gradients[catIndex]} flex items-center justify-center text-white shadow-lg`}>
                        <span className="text-lg font-bold">{String(serviceIndex + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
