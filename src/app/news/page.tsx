import { Metadata } from 'next'
import NewsPageClient from './NewsPageClient'
import { newsPageData } from '@/data/siteData'

export const metadata: Metadata = {
  title: newsPageData.seo.title,
  description: newsPageData.seo.description,
}

export default function NewsPage() {
  return <NewsPageClient />
}
