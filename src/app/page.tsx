import { Navbar } from '@/components/public/Navbar'
import { HeroSection } from '@/components/public/HeroSection'
import { StatsSection } from '@/components/public/StatsSection'
import { ValueProposition } from '@/components/public/ValueProposition'
import { ServicesSection } from '@/components/public/ServicesSection'
import { MethodologySection } from '@/components/public/MethodologySection'
import { SectorsSection } from '@/components/public/SectorsSection'
import { CasesSection } from '@/components/public/CasesSection'
import { CompanySection } from '@/components/public/CompanySection'
import { CTASection } from '@/components/public/CTASection'
import { ContactSection } from '@/components/public/ContactSection'
import { Footer } from '@/components/public/Footer'
import { ScrollReveal } from '@/components/public/ScrollReveal'

export default function HomePage() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ValueProposition />
      <ServicesSection />
      <MethodologySection />
      <SectorsSection />
      <CasesSection />
      <CompanySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
