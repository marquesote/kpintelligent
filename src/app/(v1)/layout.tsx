import type { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'
import '../globals.css'

/* The original site (V1), kept at /v1 to compare it with the current one. Not for search engines. */
export const metadata: Metadata = {
  title: `${siteConfig.seo.siteTitle} (versión anterior)`,
  description: siteConfig.seo.defaultDescription,
  robots: { index: false, follow: false },
}

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
