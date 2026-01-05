'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

interface TeamMemberCardProps {
  id: string
  name: string
  role: string
  image: string
  instagram?: string
  index?: number
  variant?: 'grid' | 'featured'
}

export default function TeamMemberCard({
  id,
  name,
  role,
  image,
  instagram,
  index = 0,
  variant = 'grid',
}: TeamMemberCardProps) {
  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <Link href={`/team/${id}`} className="block">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tempero-dark via-tempero-dark/20 to-transparent" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-tempero-gold transition-colors">
                {name}
              </h3>
              <p className="text-tempero-gray-300 text-sm mt-1">{role}</p>
              
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center mt-3 text-tempero-gray-400 hover:text-tempero-gold transition-colors text-sm"
                >
                  <Instagram className="h-4 w-4 mr-1" />
                  Instagram
                </a>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      <Link href={`/team/${id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-full mx-auto w-32 md:w-40 border-2 border-tempero-gray-800 group-hover:border-tempero-gold transition-colors">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-tempero-gold transition-colors">
          {name}
        </h3>
        <p className="text-tempero-gray-400 text-sm mt-1">{role}</p>
      </Link>
    </motion.div>
  )
}
