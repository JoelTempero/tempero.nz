'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2, GraduationCap, Palette, Calendar } from 'lucide-react'
import { homePageData, teamPageData } from '@/data/siteData'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  GraduationCap,
  Palette,
  Calendar,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0">
          <Image
            src={homePageData.hero.backgroundImage}
            alt="Tempero Creative"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-wide text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight text-shadow-lg">
              {homePageData.hero.headline.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
              <span className="text-gold-italic">{homePageData.hero.headlineAccent}</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-tempero-gray-200 max-w-2xl mx-auto text-shadow">
              {homePageData.hero.subheadline}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={homePageData.hero.ctaPrimary.href} icon={ArrowRight}>
                {homePageData.hero.ctaPrimary.text}
              </Button>
              <Button href={homePageData.hero.ctaSecondary.href} variant="secondary">
                {homePageData.hero.ctaSecondary.text}
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Classics - Core Services */}
      <section className="py-20 md:py-28 bg-tempero-dark">
        <div className="container-wide">
          <SectionHeading
            title={homePageData.classicsSection.title}
            titleAccent={homePageData.classicsSection.titleAccent}
            subtitle={homePageData.classicsSection.subtitle}
          />

          <div className="mt-12 services-grid">
            {homePageData.classicsSection.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                shortDescription={service.shortDescription}
                image={service.image}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Connected - Extended Services */}
      <section className="py-20 md:py-28 bg-tempero-darker">
        <div className="container-wide">
          <SectionHeading
            title={homePageData.connectedSection.title}
            titleAccent={homePageData.connectedSection.titleAccent}
            subtitle={homePageData.connectedSection.subtitle}
          />

          <div className="mt-12 services-grid">
            {homePageData.connectedSection.services.map((service, index) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                shortDescription={service.shortDescription}
                image={service.image}
                href={service.href}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/services" variant="secondary" icon={ArrowRight}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview - The Temperos */}
      <section className="py-20 md:py-28 bg-tempero-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={homePageData.aboutPreview.image}
                alt="The Tempero Family"
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
            >
              <h2 className="section-heading">
                {homePageData.aboutPreview.title}{' '}
                <span className="text-gold-italic">{homePageData.aboutPreview.titleAccent}</span>
              </h2>
              
              <p className="mt-6 text-tempero-gray-300 text-lg leading-relaxed">
                {homePageData.aboutPreview.description}
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-6">
                {homePageData.aboutPreview.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-tempero-gold">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-tempero-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Button href={homePageData.aboutPreview.cta.href} icon={ArrowRight}>
                  {homePageData.aboutPreview.cta.text}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 md:py-28 bg-tempero-blue">
        <div className="container-wide">
          <SectionHeading
            title={homePageData.clientsSection.title}
            titleAccent={homePageData.clientsSection.titleAccent}
            subtitle={homePageData.clientsSection.subtitle}
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homePageData.clientsSection.categories.map((category, index) => {
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
                    href={category.href}
                    className="block p-6 rounded-xl bg-white/5 border border-white/10 hover:border-tempero-gold/50 hover:bg-tempero-gold/5 transition-all group"
                  >
                    {Icon && (
                      <Icon className="h-10 w-10 text-tempero-gold mb-4" />
                    )}
                    <h3 className="text-xl font-semibold text-white group-hover:text-tempero-gold transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-tempero-gray-400 text-sm">
                      {category.description}
                    </p>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-tempero-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              {homePageData.ctaSection.title}{' '}
              <span className="text-gold-italic">{homePageData.ctaSection.titleAccent}</span>
            </h2>
            
            <p className="mt-6 text-lg text-tempero-gray-300 max-w-xl mx-auto">
              {homePageData.ctaSection.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={homePageData.ctaSection.ctaPrimary.href} icon={ArrowRight}>
                {homePageData.ctaSection.ctaPrimary.text}
              </Button>
              <Button href={homePageData.ctaSection.ctaSecondary.href} variant="ghost">
                {homePageData.ctaSection.ctaSecondary.text}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
