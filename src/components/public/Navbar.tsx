'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/siteConfig'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileSolucionesOpen, setMobileSolucionesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const soluciones = siteConfig.navigation.find(n => n.label === 'Soluciones')

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src="/logo-kpintelligent.png"
                  alt="KPIntelligent"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                KP<span className="text-gradient-blue">Intelligent</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Soluciones - Mega Menu */}
              <div
                className="mega-menu-trigger relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  Soluciones
                  <svg className={`w-4 h-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Menu */}
                <div className={`mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-[800px] mt-2 p-4 sm:p-6 rounded-2xl bg-dark-secondary/95 backdrop-blur-xl border border-white/10 shadow-2xl ${megaMenuOpen ? '!opacity-100 !visible !translate-y-0' : ''}`}>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {soluciones?.children?.map((group) => (
                      <div key={group.category}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-3">
                          {group.category}
                        </h3>
                        <div className="space-y-1">
                          {group.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block p-2.5 rounded-xl hover:bg-white/5 transition-colors group/item"
                              onClick={() => setMegaMenuOpen(false)}
                            >
                              <div className="text-sm font-medium text-white group-hover/item:text-primary-300 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-xs text-white/40 mt-0.5">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other nav items */}
              {siteConfig.navigation.filter(n => n.label !== 'Soluciones').map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/#contacto"
                className="relative px-6 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-cyan rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Solicitar Demo</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 -mr-1 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`absolute top-0 right-0 w-full max-w-[85vw] sm:max-w-sm h-full bg-dark-secondary/98 border-l border-white/5 p-5 sm:p-6 pt-20 overflow-y-auto transition-transform duration-500 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-1">
            {/* Soluciones with expandable sub-items */}
            <div>
              <button
                onClick={() => setMobileSolucionesOpen(!mobileSolucionesOpen)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-base sm:text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors min-h-[44px]"
              >
                Soluciones
                <svg className={`w-5 h-5 transition-transform ${mobileSolucionesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileSolucionesOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 pb-2 space-y-1">
                  {soluciones?.children?.map((group) => (
                    <div key={group.category} className="mt-3 first:mt-1">
                      <div className="px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-400">
                        {group.category}
                      </div>
                      {group.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-colors min-h-[44px] flex items-center"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other nav items */}
            {siteConfig.navigation.filter(n => n.label !== 'Soluciones').map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3.5 text-base sm:text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link
              href="/#contacto"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-purple rounded-xl hover:opacity-90 transition-opacity min-h-[48px]"
            >
              Solicitar Demo Gratuita
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
