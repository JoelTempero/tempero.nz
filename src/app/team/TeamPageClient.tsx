'use client'

import { motion } from 'framer-motion'
import { teamPageData } from '@/data/siteData'
import TeamMemberCard from '@/components/ui/TeamMemberCard'

export default function TeamPageClient() {
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
              {teamPageData.hero.title}{' '}
              <span className="text-gold-italic">{teamPageData.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 text-xl text-tempero-gray-300 max-w-2xl mx-auto">
              {teamPageData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-20 bg-tempero-dark">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {teamPageData.members.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                id={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                instagram={member.instagram}
                index={index}
                variant="featured"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-tempero-darker">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Want to work with us?
            </h2>
            <p className="mt-4 text-tempero-gray-400">
              We'd love to hear about your project and see how we can help bring your vision to life.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="btn-primary"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
