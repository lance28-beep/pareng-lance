"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
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
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Google Form submission URL
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScxmdkgqphMLRxHOfhNIkLYHYM7xQ52Ehe4jI2kvXEYeq45kg/formResponse'
    
    // Create a new FormData object for Google Forms
    const googleFormData = new FormData()
    googleFormData.append('entry.1168164901', name)
    googleFormData.append('entry.1218904268', email)
    googleFormData.append('entry.1726878304', subject)
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
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#7CFF00]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7CFF00]/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-[#7CFF00]">touch</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's build something incredible</h3>
                <p className="text-white/70">
                  Whether you have a question about our services, pricing, or just want to say hello, we're here to
                  help.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center mt-1">
                    <Mail className="h-5 w-5 text-[#7CFF00]" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Email</p>
                    <p className="font-medium">vallelance8@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center mt-1">
                    <Phone className="h-5 w-5 text-[#7CFF00]" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Phone</p>
                    <p className="font-medium">+63 928 898 8692</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center mt-1">
                    <MapPin className="h-5 w-5 text-[#7CFF00]" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70">Location</p>
                    <p className="font-medium">Naga City, Philippines</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm opacity-70 mb-4">Follow us on social media</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/HustleWithParengLance"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/vallelance/"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rolando-valle-43159b199/"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/rolando_va52047"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors hover:scale-110"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@rolandovalle7490"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@mr.c0oletz?lang=env"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors hover:scale-110"
                    aria-label="TikTok"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M19 9a7 7 0 1 1-6.74-6.74V2h-3v8h3v-1.26A7 7 0 0 1 19 9Z" />
                      <path d="M10 14v-2a7 7 0 0 1 7-7" />
                    </svg>
                  </a>
                  <a
                    href="https://dribbble.com/lanceValle"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors hover:scale-110"
                    aria-label="Dribbble"
                  >
                    <Dribbble className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Custom Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
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
                        placeholder="you@example.com"
                        required
                        className="bg-white/10 border-white/10 focus-visible:ring-[#7CFF00]/50 focus-visible:border-[#7CFF00]/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
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
      </div>
    </section>
  )
}

