import { Metadata } from 'next'
import ServicesPageClient from './ServicesPageClient'
import { servicesData } from '@/data/siteData'

export const metadata: Metadata = {
  title: servicesData.mainPage.seo.title,
  description: servicesData.mainPage.seo.description,
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
