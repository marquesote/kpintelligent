import { Navbar } from '@/components/v1/Navbar'
import { HeroSection } from '@/components/v1/HeroSection'
import { StatsSection } from '@/components/v1/StatsSection'
import { ValueProposition } from '@/components/v1/ValueProposition'
import { ServicesSection } from '@/components/v1/ServicesSection'
import { MethodologySection } from '@/components/v1/MethodologySection'
import { SectorsSection } from '@/components/v1/SectorsSection'
import { CasesSection } from '@/components/v1/CasesSection'
import { CompanySection } from '@/components/v1/CompanySection'
import { CTASection } from '@/components/v1/CTASection'
import { ContactSection } from '@/components/v1/ContactSection'
import { Footer } from '@/components/v1/Footer'
import { ScrollReveal } from '@/components/v1/ScrollReveal'

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
