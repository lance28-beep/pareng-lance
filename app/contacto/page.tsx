"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/Navbar"
import { useState, useRef } from "react"
import { Send, CheckCircle, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    // Google Form submission URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScxmdkgqphMLRxHOfhNIkLYHYM7xQ52Ehe4jI2kvXEYeq45kg/formResponse'
    
    // Create a new FormData object for Google Forms
    const googleFormData = new FormData()
    googleFormData.append('entry.1168164901', name)
    googleFormData.append('entry.1218904268', email)
    googleFormData.append('entry.25819410', message)

    // Submit to Google Form using fetch
    fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors', // This is important for cross-origin requests
      body: googleFormData
    })
      .then(() => {
        // Success - even though we won't get a response due to CORS
        setIsSubmitting(false)
        setIsSubmitted(true)
        
        // Reset form
        if (formRef.current) {
          formRef.current.reset()
        }
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      })
      .catch((err) => {
        console.error('Error submitting form:', err)
        setIsSubmitting(false)
        setError("Failed to send message. Please try again later.")
      })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Contact Section */}
      <main className="container mx-auto px-4 py-24">
        <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-[#7CFF00] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Let's talk about your <span className="text-[#7CFF00]">project</span>
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Tell us about your idea and how we can help you transform it into a unique digital experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#7CFF00]" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Email</p>
                  <p className="font-medium">vallelance8@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#7CFF00]" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Phone</p>
                  <p className="font-medium">+63 928 898 8692</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#7CFF00]" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Location</p>
                  <p className="font-medium">Naga City, Philippines</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border border-[#7CFF00]/20 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border border-[#7CFF00]/20 rounded-lg"></div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative z-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-[#7CFF00]/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-[#7CFF00]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/70 text-center">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-white/10 border-white/10 focus-visible:ring-[#7CFF00]/50 focus-visible:border-[#7CFF00]/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-white/10 border-white/10 focus-visible:ring-[#7CFF00]/50 focus-visible:border-[#7CFF00]/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        required
                        className="bg-white/10 border-white/10 focus-visible:ring-[#7CFF00]/50 focus-visible:border-[#7CFF00]/50 min-h-[120px]"
                      />
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#7CFF00] text-black hover:bg-[#7CFF00]/90 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && (
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        )}
                      </span>
                      <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Pareng <span className="text-[#7CFF00]">Lance</span>
              </h3>
              <p className="text-sm opacity-70 mb-4">
                Creating unique digital experiences through innovative design and development.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/HustleWithParengLance"
                  className="text-white hover:text-[#7CFF00] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/vallelance/"
                  className="text-white hover:text-[#7CFF00] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rolando-valle-43159b199/"
                  className="text-white hover:text-[#7CFF00] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/rolando_va52047"
                  className="text-white hover:text-[#7CFF00] transition-colors"
                  aria-label="X (formerly Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.youtube.com/@rolandovalle7490"
                  className="text-white hover:text-[#7CFF00] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/#servicios" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="/#servicios" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#proyectos" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonios" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-sm opacity-70 hover:text-[#7CFF00] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-[#7CFF00] mt-0.5" />
                  <span className="text-sm opacity-70">vallelance8@gmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 text-[#7CFF00] mt-0.5" />
                  <span className="text-sm opacity-70">+63 928 898 8692</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-[#7CFF00] mt-0.5" />
                  <span className="text-sm opacity-70">Naga City, Philippines</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Pareng Lance. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

