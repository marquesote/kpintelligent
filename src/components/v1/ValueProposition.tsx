'use client'

const propositions = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Fuente Única de Verdad',
    description: 'Unificamos tus fuentes de datos dispares en una única plataforma. Olvídate de hojas de cálculo desordenadas y silos de información.',
    gradient: 'from-primary-500 to-accent-cyan',
    bgGradient: 'from-primary-500/5 to-accent-cyan/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Cultura Analítica',
    description: 'No es solo tecnología, es un cambio cultural. Ayudamos a las organizaciones a ser verdaderamente Data Driven en cada decisión.',
    gradient: 'from-accent-purple to-accent-pink',
    bgGradient: 'from-accent-purple/5 to-accent-pink/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Impacto Económico Directo',
    description: 'Aumento de ingresos, reducción de costes operativos y mejora de previsiones. Datos que producen ROI desde el primer día.',
    gradient: 'from-accent-orange to-accent-pink',
    bgGradient: 'from-accent-orange/5 to-accent-pink/5',
  },
]

export function ValueProposition() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-orange bg-accent-orange/10 rounded-full mb-4">
            Por qué KPIntelligent
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-section text-gray-900 mb-4 sm:mb-6">
            De la intuición a la{' '}
            <span className="text-gradient-warm">inteligencia de datos</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed">
            Dejamos de operar por intuición y empezamos a operar con datos. Tres pilares que transforman tu organización.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 stagger-children">
          {propositions.map((prop, index) => (
            <div
              key={prop.title}
              className={`reveal group relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${prop.bgGradient} border border-gray-100 hover-lift`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {prop.icon}
              </div>

              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {prop.description}
              </p>

              {/* Decorative corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${prop.gradient} opacity-[0.03] rounded-bl-[60px] rounded-tr-3xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
