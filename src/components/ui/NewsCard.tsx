'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

interface NewsCardProps {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  featured?: boolean
  index?: number
}

export default function NewsCard({
  id,
  title,
  excerpt,
  category,
  image,
  date,
  featured = false,
  index = 0,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-NZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const categoryColors: Record<string, string> = {
    videography: 'bg-blue-500/20 text-blue-400',
    photography: 'bg-purple-500/20 text-purple-400',
    design: 'bg-pink-500/20 text-pink-400',
    animation: 'bg-green-500/20 text-green-400',
    music: 'bg-orange-500/20 text-orange-400',
    education: 'bg-yellow-500/20 text-yellow-400',
    news: 'bg-tempero-gold/20 text-tempero-gold',
  }

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group col-span-full lg:col-span-2"
      >
        <Link href={`/news/${id}`} className="block service-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${categoryColors[category] || categoryColors.news}`}>
                  {category}
                </span>
                <span className="flex items-center text-tempero-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formattedDate}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-white group-hover:text-tempero-gold transition-colors">
                {title}
              </h3>
              <p className="mt-3 text-tempero-gray-400 line-clamp-3">
                {excerpt}
              </p>
              
              <div className="mt-6 flex items-center text-tempero-gold font-medium">
                Read more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/news/${id}`} className="block service-card h-full">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${categoryColors[category] || categoryColors.news}`}>
              {category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          <span className="flex items-center text-tempero-gray-500 text-sm mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            {formattedDate}
          </span>
          
          <h3 className="text-lg font-semibold text-white group-hover:text-tempero-gold transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-tempero-gray-400 text-sm line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
