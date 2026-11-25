'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/siteConfig'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="reveal">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-600 bg-primary-50 rounded-full mb-4">
              Contacto
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-section text-gray-900 mb-4 sm:mb-6">
              Hablemos de tus{' '}
              <span className="text-gradient-blue">datos</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 sm:mb-10">
              Solicita una demo gratuita o una auditoría inicial sin coste.
              Nuestro equipo te contactará en menos de 24 horas.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-50/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{siteConfig.contact.email}</div>
                  <div className="text-xs text-gray-500">Email principal</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-50/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{siteConfig.contact.phoneDisplay}</div>
                  <div className="text-xs text-gray-500">Teléfono</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-50/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{siteConfig.contact.address}</div>
                  <div className="text-xs text-gray-500">Oficina central</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="reveal-right">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl border border-green-200 bg-green-50">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                  Mensaje enviado
                </h3>
                <p className="text-gray-500">
                  Te contactaremos en menos de 24 horas. Gracias por confiar en KPIntelligent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl border border-gray-100 bg-white shadow-card">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none text-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none text-sm"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none text-sm"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none text-sm"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Servicio de interés</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none text-sm text-gray-700 bg-white"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="bi">Inteligencia de Negocio (BI)</option>
                    <option value="data-engineering">Ingeniería de Datos</option>
                    <option value="ia">Analítica Avanzada e IA</option>
                    <option value="consultoria">Consultoría Estratégica</option>
                    <option value="auditoria">Auditoría de Datos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all outline-none text-sm resize-none"
                    placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full relative px-8 py-4 text-base font-bold text-white rounded-2xl overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-purple rounded-2xl" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-cyan rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    Enviar Mensaje
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </span>
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Al enviar este formulario aceptas nuestra política de privacidad.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
