import { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'
import { aboutPageData } from '@/data/siteData'

export const metadata: Metadata = {
  title: aboutPageData.seo.title,
  description: aboutPageData.seo.description,
}

export default function AboutPage() {
  return <AboutPageClient />
}
