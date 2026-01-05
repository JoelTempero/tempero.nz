import { Metadata } from 'next'
import PortalPageClient from './PortalPageClient'
import { portalPageData } from '@/data/siteData'

export const metadata: Metadata = {
  title: portalPageData.seo.title,
  description: portalPageData.seo.description,
}

export default function PortalPage() {
  return <PortalPageClient />
}
