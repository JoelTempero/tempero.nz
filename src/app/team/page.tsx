import { Metadata } from 'next'
import TeamPageClient from './TeamPageClient'
import { teamPageData } from '@/data/siteData'

export const metadata: Metadata = {
  title: teamPageData.seo.title,
  description: teamPageData.seo.description,
}

export default function TeamPage() {
  return <TeamPageClient />
}
