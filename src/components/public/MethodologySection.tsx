'use client'

import { siteConfig } from '@/config/siteConfig'

const stepIcons = [
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>,
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>,
  <svg key="5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>,
  <svg key="6" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="relative py-16 sm:py-20 md:py-28 bg-mesh-dark overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 reveal">
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
            Nuestra Metodología
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-section text-white mb-4 sm:mb-6">
            Un proceso <span className="text-gradient-blue">probado</span> de principio a fin
          </h2>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed">
            Seis fases que garantizan el éxito de tu proyecto de datos, desde la auditoría inicial hasta el soporte continuo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-purple/50 to-accent-cyan/50" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-0">
            {siteConfig.methodology.map((step, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={step.number}
                  className={`reveal relative lg:flex lg:items-center lg:gap-8 ${index > 0 ? 'lg:mt-16' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Left content */}
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:pr-16 lg:order-3 lg:text-left lg:pl-16'}`}>
                    {isLeft && (
                      <div className="glass-card p-5 sm:p-6 md:p-8 inline-block text-left hover-glow transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-primary-400">{stepIcons[index]}</span>
                          <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                            Fase {step.number}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-dark-secondary border-2 border-primary-500/30 items-center justify-center z-10">
                    <span className="font-heading text-lg font-bold text-gradient-blue">
                      {step.number}
                    </span>
                  </div>

                  {/* Right content */}
                  <div className={`lg:w-1/2 ${!isLeft ? 'lg:pl-16' : 'lg:pl-16 lg:order-3'}`}>
                    {!isLeft && (
                      <div className="glass-card p-5 sm:p-6 md:p-8 inline-block text-left hover-glow transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-accent-purple">{stepIcons[index]}</span>
                          <span className="text-xs font-bold uppercase tracking-wider text-accent-purple">
                            Fase {step.number}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile view */}
                  <div className="lg:hidden glass-card p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
                          Fase {step.number}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed pl-14">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
