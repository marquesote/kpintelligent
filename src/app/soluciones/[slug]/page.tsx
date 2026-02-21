import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Navbar } from '@/components/public/Navbar'
import { Footer } from '@/components/public/Footer'
import { ScrollReveal } from '@/components/public/ScrollReveal'
import { SolutionPageLayout } from '@/components/public/SolutionPageLayout'
import { getSolutionBySlug, getAllSolutionSlugs } from '@/data/solutionsContent'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}

  return {
    title: `${solution.title} | KPIntelligent`,
    description: solution.subtitle,
    openGraph: {
      title: `${solution.title} - ${solution.category} | KPIntelligent`,
      description: solution.subtitle,
      locale: 'es_ES',
      siteName: 'KPIntelligent',
      type: 'website',
    },
  }
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    notFound()
  }

  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <SolutionPageLayout solution={solution} />
      <Footer />
    </main>
  )
}
