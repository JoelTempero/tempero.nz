'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Instagram } from 'lucide-react'
import Button from '@/components/ui/Button'

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  specialties: string[]
  image: string
  instagram?: string
}

interface Props {
  member: TeamMember
}

export default function TeamMemberPageClient({ member }: Props) {
  return (
    <>
      {/* Back Link */}
      <div className="bg-tempero-dark pt-24 md:pt-28">
        <div className="container-wide">
          <Link
            href="/team"
            className="inline-flex items-center text-tempero-gray-400 hover:text-tempero-gold transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Member Profile */}
      <section className="py-12 md:py-20 bg-tempero-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-white">
                {member.name}
              </h1>
              <p className="mt-2 text-xl text-tempero-gold">
                {member.role}
              </p>

              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-tempero-gray-400 hover:text-tempero-gold transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow on Instagram
                </a>
              )}

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-white mb-4">About</h2>
                <p className="text-tempero-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-white mb-4">Specialties</h2>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-4 py-2 rounded-full bg-tempero-gold/10 text-tempero-gold text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Button href="/contact">
                  Work with {member.name.split(' ')[0]}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
