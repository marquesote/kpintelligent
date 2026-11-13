import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SiteNav } from '@/features/site/components/site-nav'
import { SiteFooter } from '@/features/site/components/site-footer'
import { SolutionSections } from '@/features/site/components/solution-sections'
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
    title: `${solution.title}: ${solution.category.toLowerCase()} | KPIntelligent`,
    description: solution.subtitle,
    openGraph: {
      title: `${solution.title} | KPIntelligent`,
      description: solution.subtitle,
      locale: 'es_ES',
      siteName: 'KPIntelligent',
      type: 'website',
      images: ['/share.jpg'],
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
    <>
      <SiteNav base="/" />
      <SolutionSections solution={solution} />
      <SiteFooter base="/" />
    </>
  )
}
