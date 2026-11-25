import type { Metadata } from 'next'
import { SiteNav } from '@/features/site/components/site-nav'
import { SiteFooter } from '@/features/site/components/site-footer'
import { AdvisorySections } from '@/features/site/components/advisory-sections'

const TITLE = 'Asesoría financiera para empresas en Madrid · KPIntelligent'
const DESCRIPTION =
  'Asesoría financiera mensual para pymes y grupos de empresas. Empiece con el informe financiero de su empresa, gratuito y sin compromiso.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/soluciones/asesoria-financiera' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: 'es_ES',
    siteName: 'KPIntelligent',
    type: 'website',
    images: ['/share.jpg'],
  },
}

export default function AdvisoryPage() {
  return (
    <>
      <SiteNav base="/" />
      <AdvisorySections />
      <SiteFooter base="/" />
    </>
  )
}
