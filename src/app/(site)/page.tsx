import { SiteNav } from '@/features/site/components/site-nav'
import { SiteFooter } from '@/features/site/components/site-footer'
import { HomeHero } from '@/features/site/components/home/home-hero'
import { ReportApp } from '@/features/site/components/home/report-app'
import {
  AssistantSection,
  DataSection,
  SolutionsSection,
  Statement,
} from '@/features/site/components/home/home-sections'
import { DemoSection } from '@/features/site/components/home/demo-section'

/* kind: software (financial analytics with AI: KPIntelligent and the Analizador)
   deal: hero triptych (report captures and assistant answers, sets every 2.8 s) on the effect gradient-mesh,
         palette the client's own logo colours on a night ground (brand), type chivo, radius soft,
         nav nav-centre, footer footer-columns, close close-word, rhythm space, buttons arrow, mark the logo
   moments: letters-assemble (#empresa, the statement builds as it rises), iris-opens (#ia, the light
            ground of the assistant opens through a circle)
   app-frame: #informes, the nine sections of KPIntelligent beside the open report and the findings
   the method's six steps were left out: generic words with no picture of their own */
export default function HomePage() {
  return (
    <>
      <SiteNav base="" />
      <main id="top">
        <HomeHero />
        <ReportApp />
        <Statement />
        <AssistantSection />
        <DataSection />
        <SolutionsSection />
        <DemoSection />
      </main>
      <SiteFooter base="" />
    </>
  )
}
