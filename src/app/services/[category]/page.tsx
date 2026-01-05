import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceCategoryPageClient from './ServiceCategoryPageClient'
import { servicesData } from '@/data/siteData'

interface Props {
  params: { category: string }
}

export async function generateStaticParams() {
  return servicesData.categories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = servicesData.categories.find((c) => c.slug === params.category)
  
  if (!category) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: category.seo.title,
    description: category.seo.description,
  }
}

export default function ServiceCategoryPage({ params }: Props) {
  const category = servicesData.categories.find((c) => c.slug === params.category)
  
  if (!category) {
    notFound()
  }

  return <ServiceCategoryPageClient category={category} />
}
