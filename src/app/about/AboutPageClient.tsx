'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, Heart, Award, BookOpen } from 'lucide-react'
import { aboutPageData } from '@/data/siteData'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Heart,
  Award,
  BookOpen,
}

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-tempero-dark overflow-hidden">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
                {aboutPageData.hero.title}{' '}
                <span className="text-gold-italic">{aboutPageData.hero.titleAccent}</span>
              </h1>
              <p className="mt-6 text-xl text-tempero-gray-300">
                {aboutPageData.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-tempero-gold to-transparent" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-tempero-darker">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <Image
                src={aboutPageData.story.image}
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="section-heading">
                {aboutPageData.story.title}{' '}
                <span className="text-gold-italic">{aboutPageData.story.titleAccent}</span>
              </h2>

              <div className="mt-6 space-y-4">
                {aboutPageData.story.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-tempero-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-tempero-dark">
        <div className="container-wide">
          <SectionHeading
            title={aboutPageData.values.title}
            titleAccent={aboutPageData.values.titleAccent}
          />

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {aboutPageData.values.items.map((value, index) => {
              const Icon = iconMap[value.icon]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 p-6 rounded-xl bg-tempero-gray-900/30 border border-tempero-gray-800"
                >
                  {Icon && (
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-tempero-gold/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-tempero-gold" />
                      </div>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-tempero-gray-400">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-tempero-blue">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">
              {aboutPageData.mission.title}{' '}
              <span className="text-gold-italic">{aboutPageData.mission.titleAccent}</span>
            </h2>

            <blockquote className="mt-8 text-xl md:text-2xl text-tempero-gray-200 leading-relaxed italic">
              "{aboutPageData.mission.statement}"
            </blockquote>

            <div className="mt-10">
              <Button href="/team">
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
