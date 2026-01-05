'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Video, Camera, Wand2, PenTool, Music, GraduationCap, Lightbulb, Share2, Globe, CalendarDays, Cake } from 'lucide-react'
import { servicesData } from '@/data/siteData'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Video,
  Camera,
  Wand2,
  PenTool,
  Music,
  GraduationCap,
  Lightbulb,
  Share2,
  Globe,
  CalendarDays,
  Cake,
}

export default function ServicesPageClient() {
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
              {servicesData.mainPage.hero.title}{' '}
              <span className="text-gold-italic">{servicesData.mainPage.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 text-xl text-tempero-gray-300 max-w-2xl mx-auto">
              {servicesData.mainPage.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-12 md:py-20 bg-tempero-dark">
        <div className="container-wide">
          <div className="space-y-8">
            {servicesData.categories.map((category, index) => {
              const Icon = iconMap[category.icon]
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${category.slug}`}
                    className="group block service-card overflow-hidden"
                  >
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Image */}
                      <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          {Icon && (
                            <div className="w-10 h-10 rounded-lg bg-tempero-gold/10 flex items-center justify-center">
                              <Icon className="h-5 w-5 text-tempero-gold" />
                            </div>
                          )}
                          <h2 className="text-2xl font-semibold text-white group-hover:text-tempero-gold transition-colors">
                            {category.name}
                          </h2>
                        </div>
                        
                        <p className="text-tempero-gray-400 mb-4">
                          {category.fullDescription}
                        </p>
                        
                        {/* Sub-services Preview */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.services.slice(0, 4).map((service) => (
                            <span
                              key={service.id}
                              className="px-3 py-1 rounded-full bg-tempero-gray-800 text-tempero-gray-300 text-sm"
                            >
                              {service.name}
                            </span>
                          ))}
                          {category.services.length > 4 && (
                            <span className="px-3 py-1 rounded-full bg-tempero-gray-800 text-tempero-gray-400 text-sm">
                              +{category.services.length - 4} more
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-tempero-gold font-medium">
                          Explore {category.name}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-tempero-darker">
        <div className="container-wide">
          <SectionHeading
            title="Additional"
            titleAccent="Services"
            subtitle="More ways we can help bring your creative vision to life."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.additionalServices.map((service, index) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="block p-6 rounded-xl bg-tempero-gray-900/30 border border-tempero-gray-800 hover:border-tempero-gold/50 transition-all group h-full"
                  >
                    {Icon && (
                      <Icon className="h-8 w-8 text-tempero-gold mb-4" />
                    )}
                    <h3 className="text-xl font-semibold text-white group-hover:text-tempero-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-tempero-gray-400 text-sm">
                      {service.description}
                    </p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-tempero-blue">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              Not sure what you need?
            </h2>
            <p className="mt-4 text-tempero-gray-300 max-w-xl mx-auto">
              Let's have a chat! We can help you figure out the best approach for your project and provide a custom solution.
            </p>
            <div className="mt-8">
              <Button href="/contact" icon={ArrowRight}>
                Get a Free Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
