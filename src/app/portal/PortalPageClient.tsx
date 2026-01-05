'use client'

import { motion } from 'framer-motion'
import { Lock, FolderKanban, Download, MessageSquare, FileCheck, ArrowRight } from 'lucide-react'
import { portalPageData } from '@/data/siteData'
import Button from '@/components/ui/Button'

const featureIcons = [FolderKanban, Download, MessageSquare, FileCheck]

export default function PortalPageClient() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-tempero-dark py-32">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Lock Icon */}
          <div className="w-20 h-20 rounded-full bg-tempero-gold/10 flex items-center justify-center mx-auto mb-8">
            <Lock className="h-10 w-10 text-tempero-gold" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            {portalPageData.placeholder.title}{' '}
            <span className="text-gold-italic">{portalPageData.placeholder.titleAccent}</span>
          </h1>

          <p className="mt-6 text-xl text-tempero-gray-300 max-w-xl mx-auto">
            {portalPageData.placeholder.description}
          </p>

          {/* Features Preview */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {portalPageData.placeholder.features.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-tempero-gray-900/30 border border-tempero-gray-800 text-left"
                >
                  <Icon className="h-5 w-5 text-tempero-gold flex-shrink-0" />
                  <span className="text-tempero-gray-300 text-sm">{feature}</span>
                </motion.div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Button href={portalPageData.placeholder.cta.href} icon={ArrowRight}>
              {portalPageData.placeholder.cta.text}
            </Button>
          </motion.div>

          {/* Existing Client Note */}
          <p className="mt-8 text-tempero-gray-500 text-sm">
            Already a client? We'll notify you when the portal launches.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
