'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  name: string
  shortDescription: string
  image: string
  href: string
  index?: number
}

export default function ServiceCard({
  name,
  shortDescription,
  image,
  href,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="group block service-card h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tempero-dark/80 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white group-hover:text-tempero-gold transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-tempero-gray-400 text-sm line-clamp-2">
            {shortDescription}
          </p>
          <div className="mt-4 flex items-center text-tempero-gold text-sm font-medium">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
