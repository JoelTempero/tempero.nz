import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TeamMemberPageClient from './TeamMemberPageClient'
import { teamPageData } from '@/data/siteData'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return teamPageData.members.map((member) => ({
    slug: member.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = teamPageData.members.find((m) => m.id === params.slug)
  
  if (!member) {
    return {
      title: 'Team Member Not Found',
    }
  }

  return {
    title: `${member.name} - ${member.role}`,
    description: member.bio,
  }
}

export default function TeamMemberPage({ params }: Props) {
  const member = teamPageData.members.find((m) => m.id === params.slug)
  
  if (!member) {
    notFound()
  }

  return <TeamMemberPageClient member={member} />
}
