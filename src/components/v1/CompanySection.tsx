'use client'

import { siteConfig } from '@/config/siteConfig'

export function CompanySection() {
  return (
    <section id="empresa" className="relative py-16 sm:py-20 md:py-28 bg-dark-secondary overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 rounded-full mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-display-mobile lg:text-display text-white mb-4 sm:mb-6">
              Creamos <span className="text-gradient-blue">cultura analítica</span> en las empresas
            </h2>
            <p className="text-base sm:text-lg text-white/50 leading-relaxed mb-6 sm:mb-8">
              En KPIntelligent no vendemos solo tecnología. Nuestro objetivo es crear una cultura analítica que transforme la manera en que tu organización toma decisiones. De la intuición a la inteligencia.
            </p>

            <div className="space-y-6">
              {[
                { label: 'Misión', text: 'Democratizar el acceso a la inteligencia de datos para que cada empresa pueda competir con las herramientas de los líderes del mercado.' },
                { label: 'Visión', text: 'Ser el partner de referencia en España y LATAM para la transformación digital basada en datos.' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex-shrink-0 w-1 rounded-full bg-gradient-to-b from-primary-500 to-accent-cyan" />
                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-primary-400 mb-1">
                      {item.label}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual */}
          <div className="reveal-right">
            <div className="relative">
              {/* Main card */}
              <div className="glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 sm:w-40 sm:h-40 bg-primary-500/10 blur-[40px] sm:blur-[60px] rounded-full" />

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                  Nuestros Valores
                </h3>

                <div className="space-y-6">
                  {[
                    { title: 'Transparencia', desc: 'Datos claros, comunicación directa, resultados medibles.', color: 'text-primary-400' },
                    { title: 'Innovación', desc: 'Siempre a la vanguardia de las tecnologías de datos e IA.', color: 'text-accent-purple' },
                    { title: 'Impacto', desc: 'Cada proyecto debe generar ROI tangible para nuestros clientes.', color: 'text-accent-cyan' },
                    { title: 'Colaboración', desc: 'Trabajamos como una extensión de tu equipo, no como proveedores.', color: 'text-accent-orange' },
                  ].map((value, i) => (
                    <div key={value.title} className="flex items-start gap-4 group">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${value.color} font-heading font-bold text-sm group-hover:bg-white/10 transition-colors`}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-bold text-white mb-0.5">
                          {value.title}
                        </h4>
                        <p className="text-white/40 text-sm">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partners badge */}
              <div className="glass-card p-4 sm:p-6 mt-4 sm:mt-6">
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 items-center justify-center">
                  {siteConfig.partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/5 text-[10px] sm:text-xs font-medium text-white/40 border border-white/5"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
