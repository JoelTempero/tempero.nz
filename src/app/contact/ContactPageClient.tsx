'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ChevronDown, Send } from 'lucide-react'
import { contactPageData, siteConfig } from '@/data/siteData'

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual Firebase/API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
              {contactPageData.hero.title}{' '}
              <span className="text-gold-italic">{contactPageData.hero.titleAccent}</span>
            </h1>
            <p className="mt-6 text-xl text-tempero-gray-300 max-w-2xl mx-auto">
              {contactPageData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20 bg-tempero-dark">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <a
                  href={`mailto:${contactPageData.contactInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-tempero-gray-900/30 border border-tempero-gray-800 hover:border-tempero-gold/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-tempero-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-tempero-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white group-hover:text-tempero-gold transition-colors">
                      Email
                    </h3>
                    <p className="text-tempero-gray-400 text-sm mt-1">
                      {contactPageData.contactInfo.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${contactPageData.contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-tempero-gray-900/30 border border-tempero-gray-800 hover:border-tempero-gold/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-tempero-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-tempero-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white group-hover:text-tempero-gold transition-colors">
                      Phone
                    </h3>
                    <p className="text-tempero-gray-400 text-sm mt-1">
                      {contactPageData.contactInfo.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-tempero-gray-900/30 border border-tempero-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-tempero-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-tempero-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-tempero-gray-400 text-sm mt-1">
                      {contactPageData.contactInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-tempero-gray-900/30 border border-tempero-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-tempero-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-tempero-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Hours</h3>
                    <p className="text-tempero-gray-400 text-sm mt-1">
                      {contactPageData.contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(siteConfig.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-tempero-gray-800 text-tempero-gray-300 hover:bg-tempero-gold hover:text-tempero-dark text-sm capitalize transition-all"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-6 md:p-8 rounded-2xl bg-tempero-gray-900/30 border border-tempero-gray-800">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  {contactPageData.form.title}
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-tempero-gray-400">
                      {contactPageData.form.successMessage}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-tempero-gold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-tempero-gray-300 mb-2">
                          {contactPageData.form.fields.name.label} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={contactPageData.form.fields.name.placeholder}
                          className="w-full px-4 py-3 rounded-lg bg-tempero-gray-800 border border-tempero-gray-700 text-white placeholder-tempero-gray-500 focus:outline-none focus:border-tempero-gold transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-tempero-gray-300 mb-2">
                          {contactPageData.form.fields.email.label} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={contactPageData.form.fields.email.placeholder}
                          className="w-full px-4 py-3 rounded-lg bg-tempero-gray-800 border border-tempero-gray-700 text-white placeholder-tempero-gray-500 focus:outline-none focus:border-tempero-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-tempero-gray-300 mb-2">
                          {contactPageData.form.fields.phone.label}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={contactPageData.form.fields.phone.placeholder}
                          className="w-full px-4 py-3 rounded-lg bg-tempero-gray-800 border border-tempero-gray-700 text-white placeholder-tempero-gray-500 focus:outline-none focus:border-tempero-gold transition-colors"
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-tempero-gray-300 mb-2">
                          {contactPageData.form.fields.service.label}
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-tempero-gray-800 border border-tempero-gray-700 text-white focus:outline-none focus:border-tempero-gold transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">{contactPageData.form.fields.service.placeholder}</option>
                          {contactPageData.form.fields.service.options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-tempero-gray-300 mb-2">
                        {contactPageData.form.fields.message.label} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={contactPageData.form.fields.message.placeholder}
                        className="w-full px-4 py-3 rounded-lg bg-tempero-gray-800 border border-tempero-gray-700 text-white placeholder-tempero-gray-500 focus:outline-none focus:border-tempero-gold transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : contactPageData.form.submitButton}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-tempero-darker">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              {contactPageData.faq.title}{' '}
              <span className="text-gold-italic">{contactPageData.faq.titleAccent}</span>
            </h2>
          </div>

          <div className="space-y-4">
            {contactPageData.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-tempero-gray-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-tempero-gray-900/30 hover:bg-tempero-gray-900/50 transition-colors"
                >
                  <span className="font-medium text-white pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-tempero-gold flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-tempero-gray-400">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
