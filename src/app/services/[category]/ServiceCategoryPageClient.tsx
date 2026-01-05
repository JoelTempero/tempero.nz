'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'

interface Service {
  id: string
  name: string
  slug: string
  description: string
  features: string[]
  image: string
}

interface Category {
  id: string
  slug: string
  name: string
  fullDescription: string
  image: string
  services: Service[]
}

interface Props {
  category: Category
}

export default function ServiceCategoryPageClient({ category }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tempero-dark/80 via-tempero-dark/70 to-tempero-dark" />
        </div>

        <div className="container-wide relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center text-tempero-gray-300 hover:text-tempero-gold transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              {category.name}
            </h1>
            <p className="mt-6 text-xl text-tempero-gray-200">
              {category.fullDescription}
            </p>
            <div className="mt-8">
              <Button href="/contact" icon={ArrowRight}>
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-tempero-dark">
        <div className="container-wide">
          <SectionHeading
            title="Our"
            titleAccent={`${category.name} Services`}
            subtitle="Choose from our range of specialized offerings tailored to your needs."
          />

          <div className="mt-12 space-y-8">
            {category.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/services/${category.slug}/${service.slug}`}
                  className="group block service-card overflow-hidden"
                >
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative aspect-video md:aspect-[4/3] overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-tempero-gold transition-colors">
                        {service.name}
                      </h3>
                      <p className="mt-3 text-tempero-gray-400">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="mt-4 grid grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-tempero-gray-300">
                            <Check className="h-4 w-4 text-tempero-gold mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 flex items-center text-tempero-gold font-medium">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Ready to get started with{' '}
              <span className="text-gold-italic">{category.name}</span>?
            </h2>
            <p className="mt-4 text-tempero-gray-300 max-w-xl mx-auto">
              Contact us for a free consultation. We'd love to discuss your project and how we can help.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" icon={ArrowRight}>
                Get a Free Quote
              </Button>
              <Button href="/news" variant="ghost">
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
