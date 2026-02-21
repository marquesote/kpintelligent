'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export function Footer() {
  return (
    <footer className="relative bg-dark pt-12 sm:pt-16 md:pt-20 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">
          {/* Company */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/logo-kpintelligent.png"
                  alt="KPIntelligent"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                KP<span className="text-gradient-blue">Intelligent</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Transformamos datos en decisiones estratégicas. Creamos cultura analítica para empresas que quieren liderar con datos.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary-500/20 hover:text-primary-400 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary-500/20 hover:text-primary-400 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
              )}
              {siteConfig.social.youtube && (
                <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary-500/20 hover:text-primary-400 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              )}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Soluciones
            </h3>
            <ul className="space-y-3">
              {siteConfig.serviceCategories.map((cat) => {
                const firstItem = siteConfig.navigation
                  .find(n => n.label === 'Soluciones')
                  ?.children?.find(c => c.category?.toLowerCase().includes(cat.title.toLowerCase().split(' ')[0]) || c.category?.toLowerCase().includes(cat.id))
                  ?.items[0]
                return (
                  <li key={cat.id}>
                    <Link
                      href={firstItem?.href || `/#${cat.id}`}
                      className="text-sm text-white/40 hover:text-primary-400 transition-colors"
                    >
                      {cat.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Sectores
            </h3>
            <ul className="space-y-3">
              {siteConfig.sectors.map((sector) => (
                <li key={sector.title}>
                  <Link href="/#sectores" className="text-sm text-white/40 hover:text-primary-400 transition-colors">
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-white mb-6 text-sm uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li><Link href="/#empresa" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Sobre nosotros</Link></li>
              <li><Link href="/#metodologia" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Metodología</Link></li>
              <li><Link href="/#casos" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Casos de éxito</Link></li>
              <li><Link href="/#contacto" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Contacto</Link></li>
              <li><Link href="/" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>

            <h3 className="font-heading font-bold text-white mb-4 text-sm uppercase tracking-wider mt-8">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Aviso Legal</Link></li>
              <li><Link href="/" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} KPIntelligent. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/20">
              {siteConfig.contact.address}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
