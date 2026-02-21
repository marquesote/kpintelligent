'use client'

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-mesh-dark overflow-hidden">
      {/* Animated background - responsive orb sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full bg-primary-500/15 blur-[80px] sm:blur-[100px] md:blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full bg-accent-purple/15 blur-[60px] sm:blur-[80px] md:blur-[100px] animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center reveal">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-orange bg-accent-orange/10 border border-accent-orange/20 rounded-full mb-4 sm:mb-6">
          Empieza hoy
        </span>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-display-mobile lg:text-display text-white mb-4 sm:mb-6">
          Deja de ir a ciegas.{' '}
          <span className="text-gradient-blue">Saca a la luz</span>{' '}
          tendencias y patrones
        </h2>

        <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Solicita una auditoría gratuita y descubre el potencial oculto en tus datos.
          Sin compromiso, sin letra pequeña.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#contacto"
            className="relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-2xl overflow-hidden group min-h-[48px]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-purple to-primary-500 bg-[length:200%_100%] animate-gradient rounded-2xl" />
            <span className="absolute inset-[2px] bg-gradient-to-r from-primary-600 to-accent-purple rounded-2xl" />
            <span className="relative flex items-center gap-2 sm:gap-3">
              Auditoría Gratuita
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white/80 rounded-2xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all min-h-[48px]"
          >
            Solicitar Demo
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-white/30">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            RGPD Compliant
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Respuesta en 24h
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Sin compromiso
          </div>
        </div>
      </div>
    </section>
  )
}
