import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServicePageClient from './ServicePageClient'
import { servicesData } from '@/data/siteData'

interface Props {
  params: { category: string; service: string }
}

export async function generateStaticParams() {
  const params: { category: string; service: string }[] = []
  
  servicesData.categories.forEach((category) => {
    category.services.forEach((service) => {
      params.push({
        category: category.slug,
        service: service.slug,
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = servicesData.categories.find((c) => c.slug === params.category)
  const service = category?.services.find((s) => s.slug === params.service)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
  }
}

export default function ServicePage({ params }: Props) {
  const category = servicesData.categories.find((c) => c.slug === params.category)
  const service = category?.services.find((s) => s.slug === params.service)
  
  if (!category || !service) {
    notFound()
  }

  return <ServicePageClient category={category} service={service} />
}
