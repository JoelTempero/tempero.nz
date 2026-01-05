import { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'
import { contactPageData } from '@/data/siteData'

export const metadata: Metadata = {
  title: contactPageData.seo.title,
  description: contactPageData.seo.description,
}

export default function ContactPage() {
  return <ContactPageClient />
}
