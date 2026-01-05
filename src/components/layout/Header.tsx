'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { siteConfig } from '@/data/siteData'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-tempero-dark/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative z-50 flex items-center"
          >
            <span className="text-xl md:text-2xl font-semibold text-white tracking-tight">
              Tempero
            </span>
            <span className="text-xl md:text-2xl font-semibold text-tempero-gold ml-1 tracking-tight">
              Creative
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {siteConfig.navigation.main.map((item) => (
              item.name === 'Services' ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-tempero-gold'
                        : 'text-white hover:text-tempero-gold'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-tempero-darker/95 backdrop-blur-md rounded-lg shadow-xl border border-tempero-gray-800 overflow-hidden"
                      >
                        <div className="py-2">
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-sm text-white hover:bg-tempero-gold/10 hover:text-tempero-gold transition-colors"
                          >
                            All Services
                          </Link>
                          <div className="h-px bg-tempero-gray-800 my-1" />
                          {siteConfig.navigation.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-2 text-sm text-tempero-gray-300 hover:bg-tempero-gold/10 hover:text-tempero-gold transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-tempero-gold'
                      : 'text-white hover:text-tempero-gold'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href={siteConfig.navigation.cta.href}
              className="btn-primary text-sm"
            >
              {siteConfig.navigation.cta.name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 lg:hidden p-2 text-white hover:text-tempero-gold transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-tempero-dark/95 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-tempero-darker p-6 pt-24 overflow-y-auto"
            >
              <div className="space-y-2">
                {siteConfig.navigation.main.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name === 'Services' ? (
                      <div>
                        <Link
                          href={item.href}
                          className={`block py-3 text-lg font-medium ${
                            isActive(item.href)
                              ? 'text-tempero-gold'
                              : 'text-white'
                          }`}
                        >
                          {item.name}
                        </Link>
                        <div className="pl-4 space-y-1 mt-1">
                          {siteConfig.navigation.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className={`block py-2 text-base ${
                                isActive(service.href)
                                  ? 'text-tempero-gold'
                                  : 'text-tempero-gray-400 hover:text-white'
                              }`}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block py-3 text-lg font-medium ${
                          isActive(item.href)
                            ? 'text-tempero-gold'
                            : 'text-white hover:text-tempero-gold'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-tempero-gray-800"
              >
                <Link
                  href={siteConfig.navigation.cta.href}
                  className="btn-primary w-full text-center"
                >
                  {siteConfig.navigation.cta.name}
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex justify-center space-x-6"
              >
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tempero-gray-400 hover:text-tempero-gold transition-colors capitalize"
                  >
                    {platform}
                  </a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
