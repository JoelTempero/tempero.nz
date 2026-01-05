'use client'

import Link from 'next/link'
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig, footerData } from '@/data/siteData'

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-tempero-darker border-t border-tempero-gray-800">
      {/* Main Footer */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold text-white tracking-tight">
                Tempero
              </span>
              <span className="text-2xl font-semibold text-tempero-gold ml-1 tracking-tight">
                Creative
              </span>
            </Link>
            <p className="mt-4 text-tempero-gray-400 max-w-sm">
              {footerData.tagline}
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a 
                href={`mailto:${siteConfig.email}`}
                className="flex items-center text-tempero-gray-400 hover:text-tempero-gold transition-colors"
              >
                <Mail className="h-4 w-4 mr-3" />
                {siteConfig.email}
              </a>
              <a 
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="flex items-center text-tempero-gray-400 hover:text-tempero-gold transition-colors"
              >
                <Phone className="h-4 w-4 mr-3" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center text-tempero-gray-400">
                <MapPin className="h-4 w-4 mr-3" />
                {siteConfig.location}
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {Object.entries(siteConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform]
                if (!Icon) return null
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-tempero-gray-400 hover:text-tempero-gold hover:bg-tempero-gray-800 rounded-full transition-all"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerData.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tempero-gray-400 hover:text-tempero-gold transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-tempero-gray-400 hover:text-tempero-gold transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-tempero-gray-800">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-tempero-gray-500 text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/privacy" 
                className="text-tempero-gray-500 hover:text-tempero-gray-300 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-tempero-gray-500 hover:text-tempero-gray-300 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
