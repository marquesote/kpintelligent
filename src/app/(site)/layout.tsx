import type { Metadata, Viewport } from 'next'
import { KitScripts } from '@/features/site/components/kit-scripts'

const TITLE = 'KPIntelligent: consultora de datos, BI e IA en Madrid'
const DESCRIPTION =
  'Reunimos los datos de tu ERP, tu CRM y tus hojas de cálculo en una única fuente de verdad y la convertimos en cuadros de mando, informes automáticos y modelos predictivos.'

export const metadata: Metadata = {
  metadataBase: new URL('https://kpintelligent.es'),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    title: TITLE,
    description: 'Cuadros de mando, ingeniería de datos e inteligencia artificial para empresas.',
    images: ['/share.jpg'],
    locale: 'es_ES',
    siteName: 'KPIntelligent',
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.png' },
  other: { 'site-kind': 'other', 'page-type': 'service' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f6f6f2',
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
  '/assets/moments/word-highlight/moment.js',
  '/assets/moments/picture-develops/moment.js',
]

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-type="service"
      data-radius="soft"
      data-buttons="solid"
      data-motion=""
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..700&family=Hanken+Grotesk:wght@400..600&display=swap"
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
