'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { newsPageData } from '@/data/siteData'
import NewsCard from '@/components/ui/NewsCard'

export default function NewsPageClient() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredItems = activeFilter === 'all'
    ? newsPageData.items
    : newsPageData.items.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-tempero-dark">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              {newsPageData.hero.title}{' '}
              <span className="text-gold-italic">{newsPageData.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 text-xl text-tempero-gray-300 max-w-2xl mx-auto">
              {newsPageData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-tempero-dark border-b border-tempero-gray-800">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {newsPageData.filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-tempero-gold text-tempero-dark'
                    : 'bg-tempero-gray-800 text-tempero-gray-300 hover:bg-tempero-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 md:py-20 bg-tempero-dark">
        <div className="container-wide">
          {filteredItems.length > 0 ? (
            <div className="news-grid">
              {filteredItems.map((item, index) => (
                <NewsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  excerpt={item.excerpt}
                  category={item.category}
                  image={item.image}
                  date={item.date}
                  featured={item.featured && index < 2}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-tempero-gray-400 text-lg">
                No items found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
