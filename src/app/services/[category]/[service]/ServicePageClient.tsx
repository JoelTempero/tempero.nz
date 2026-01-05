'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import Button from '@/components/ui/Button'

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
}

interface Props {
  category: Category
  service: Service
}

export default function ServicePageClient({ category, service }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tempero-dark/80 via-tempero-dark/70 to-tempero-dark" />
        </div>

        <div className="container-wide relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/services" className="text-tempero-gray-400 hover:text-tempero-gold transition-colors">
              Services
            </Link>
            <span className="text-tempero-gray-600">/</span>
            <Link href={`/services/${category.slug}`} className="text-tempero-gray-400 hover:text-tempero-gold transition-colors">
              {category.name}
            </Link>
            <span className="text-tempero-gray-600">/</span>
            <span className="text-tempero-gold">{service.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              {service.name}
            </h1>
            <p className="mt-6 text-xl text-tempero-gray-200">
              {service.description}
            </p>
            <div className="mt-8">
              <Button href="/contact" icon={ArrowRight}>
                Request a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-tempero-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                What's <span className="text-gold-italic">Included</span>
              </h2>
              <p className="mt-4 text-tempero-gray-400">
                Every project is tailored to your specific needs, but here's what you can typically expect from our {service.name.toLowerCase()} service.
              </p>
              
              <ul className="mt-8 space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-tempero-gold/20 flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-tempero-gold" />
                    </div>
                    <span className="ml-3 text-tempero-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-tempero-darker">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Our <span className="text-gold-italic">Process</span>
            </h2>
            <p className="mt-4 text-tempero-gray-400">
              We keep things simple and collaborative every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your vision, goals, and requirements to understand exactly what you need.' },
              { step: '02', title: 'Quote & Plan', description: 'You receive a detailed quote and project plan with timeline and deliverables.' },
              { step: '03', title: 'Creation', description: 'Our team gets to work, keeping you updated and involved throughout the process.' },
              { step: '04', title: 'Delivery', description: 'Final files delivered in your preferred formats, with revisions as needed.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-tempero-gold/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-tempero-gray-400 text-sm">
                  {item.description}
                </p>
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
              Ready to discuss your{' '}
              <span className="text-gold-italic">{service.name.toLowerCase()}</span> project?
            </h2>
            <p className="mt-4 text-tempero-gray-300 max-w-xl mx-auto">
              Get in touch for a free consultation. We'd love to hear about your project and how we can help bring it to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" icon={ArrowRight}>
                Get a Free Quote
              </Button>
              <Button href={`/services/${category.slug}`} variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to {category.name}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
