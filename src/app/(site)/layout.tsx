import type { Metadata, Viewport } from 'next'
import { KitScripts } from '@/features/site/components/kit-scripts'

const TITLE = 'KPIntelligent: análisis financiero con IA para empresas'
const DESCRIPTION =
  'KPIntelligent convierte la contabilidad de su ERP en 85 informes de balance, resultados, caja, ratios y rating, con un asistente de IA que contesta con sus propias cifras.'

export const metadata: Metadata = {
  metadataBase: new URL('https://kpintelligent.es'),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    title: TITLE,
    description: '85 informes financieros y un asistente de IA sobre la contabilidad de su empresa.',
    images: ['/share.jpg'],
    locale: 'es_ES',
    siteName: 'KPIntelligent',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.png' },
  other: { 'site-kind': 'software', 'page-type': 'software' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#060a14',
}

const ENTER_GUARD =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)"
const MOMENT_GUARD =
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)"

const KIT_STYLES = [
  '/assets/system.css',
  '/assets/ui/cards.css',
  '/assets/motion/motion.css',
  '/assets/backgrounds/backgrounds.css',
  '/assets/layout/layout.css',
  '/assets/icons/icon.css',
  '/assets/diagrams/diagram.css',
  '/assets/site.css',
]

const MOMENT_MODULES = [
  '/assets/moments/moments.js',
  '/assets/moments/lib.js',
  '/assets/moments/letters-assemble/moment.js',
  '/assets/moments/iris-opens/moment.js',
]

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-type="software"
      data-radius="soft"
      data-buttons="arrow"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo:wght@400..700&family=Chivo+Mono:wght@400..500&display=swap"
          rel="stylesheet"
        />
        {KIT_STYLES.map((href) => (
          <link rel="stylesheet" href={href} key={href} />
        ))}
        <script dangerouslySetInnerHTML={{ __html: ENTER_GUARD }} />
        <script dangerouslySetInnerHTML={{ __html: MOMENT_GUARD }} />
        {MOMENT_MODULES.map((href) => (
          <link rel="modulepreload" href={href} key={href} />
        ))}
      </head>
      <body>
        {children}
        <KitScripts />
      </body>
    </html>
  )
}
