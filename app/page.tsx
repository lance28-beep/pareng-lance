"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowDown, ChevronRight, Star, Users, Code, Palette, Layout, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ProcessSection from "@/components/process-section"
import MethodologySection from "@/components/methodology-section"
import PhilosophySection from "@/components/philosophy-section"
import ContactForm from "@/components/contact-form"
import BackgroundParticles from "@/components/background-particles"

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Automotive Design",
      category: "branding",
      description: "Branding and web design for luxury company",
    },
    { id: 2, title: "Web Platform", category: "web", description: "Interface design for site builder" },
    { id: 3, title: "Mobile App", category: "ui", description: "Interface design for financial application" },
    { id: 4, title: "E-commerce", category: "web", description: "Online store for fashion brand" },
    { id: 5, title: "Corporate Site", category: "branding", description: "Web design for technology company" },
    { id: 6, title: "Dashboard", category: "ui", description: "Admin interface for SaaS" },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodriguez",
      company: "TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with Dan was an exceptional experience. He perfectly understood our vision and transformed it into a design that exceeded our expectations.",
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      company: "Fashion Brand",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The redesign of our online store increased our conversions by 40%. The attention to detail and strategic approach made the difference.",
    },
    {
      id: 3,
      name: "Javier Lopez",
      company: "FinTech App",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The user interface that Dan designed for our application has received praise from both users and investors. Exceptional work.",
    },
  ]

  const clients = [
    { id: 1, name: "TechCorp", logo: "/placeholder.svg?height=80&width=160" },
    { id: 2, name: "FinanceHub", logo: "/placeholder.svg?height=80&width=160" },
    { id: 3, name: "MediaGroup", logo: "/placeholder.svg?height=80&width=160" },
    { id: 4, name: "RetailBrand", logo: "/placeholder.svg?height=80&width=160" },
    { id: 5, name: "HealthTech", logo: "/placeholder.svg?height=80&width=160" },
  ]

  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Attractive, functional websites optimized to convert visitors into customers.",
      icon: <Layout className="w-6 h-6 text-[#7CFF00]" />,
      features: ["UI/UX Design", "Frontend Development", "SEO Optimization"],
    },
    {
      id: 2,
      title: "Branding",
      description: "Memorable brand identities that connect with your audience and stand out in the market.",
      icon: <Palette className="w-6 h-6 text-[#7CFF00]" />,
      features: ["Logo Design", "Visual Identity", "Brand Strategy"],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Intuitive interfaces and user experiences that maximize conversion and satisfaction.",
      icon: <Users className="w-6 h-6 text-[#7CFF00]" />,
      features: ["Wireframing & Prototyping", "Interface Design", "Usability Testing"],
    },
    {
      id: 4,
      title: "Web Development",
      description: "Development of websites and web applications with the latest technologies and best practices.",
      icon: <Code className="w-6 h-6 text-[#7CFF00]" />,
      features: ["Frontend Development", "CMS", "E-commerce"],
    },
  ]

  const stats = [
    { id: 1, value: "8+", label: "Years of experience" },
    { id: 2, value: "120+", label: "Completed projects" },
    { id: 3, value: "95%", label: "Satisfied clients" },
    { id: 4, value: "40+", label: "Design awards" },
  ]

  return (
    <>

      <div className="min-h-screen bg-black/50 text-white relative" style={{ zIndex: 2 }}>
        {/* Background Particles */}
        <BackgroundParticles />

        {/* Philosophy Section */}
        <PhilosophySection />

        {/* Portfolio Section */}
        <section className="container mx-auto px-4 py-24 relative" id="projects">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-[#7CFF00]">projects</span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Explore some of our most recent work and discover how we've helped our clients achieve their goals.
            </p>
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              className={
                activeTab === "all"
                  ? "bg-[#7CFF00] text-black hover:bg-[#7CFF00]/90"
                  : "text-white border-white/20 hover:bg-white/10"
              }
              onClick={() => setActiveTab("all")}
            >
              All
            </Button>
            <Button
              variant={activeTab === "web" ? "default" : "outline"}
              className={
                activeTab === "web"
                  ? "bg-[#7CFF00] text-black hover:bg-[#7CFF00]/90"
                  : "text-white border-white/20 hover:bg-white/10"
              }
              onClick={() => setActiveTab("web")}
            >
              Web Design
            </Button>
            <Button
              variant={activeTab === "branding" ? "default" : "outline"}
              className={
                activeTab === "branding"
                  ? "bg-[#7CFF00] text-black hover:bg-[#7CFF00]/90"
                  : "text-white border-white/20 hover:bg-white/10"
              }
              onClick={() => setActiveTab("branding")}
            >
              Branding
            </Button>
            <Button
              variant={activeTab === "ui" ? "default" : "outline"}
              className={
                activeTab === "ui"
                  ? "bg-[#7CFF00] text-black hover:bg-[#7CFF00]/90"
                  : "text-white border-white/20 hover:bg-white/10"
              }
              onClick={() => setActiveTab("ui")}
            >
              UI/UX
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="rounded-xl overflow-hidden relative group">
                <Image
                  src={`/placeholder.svg?height=600&width=800&text=${project.title}`}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 backdrop-blur-sm">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs uppercase tracking-wider text-[#7CFF00] mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm opacity-80">{project.description}</p>
                    <Button variant="link" className="text-[#7CFF00] p-0 mt-2 hover:text-white">
                      View project <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6 group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                View all projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-[#7CFF00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white/5 backdrop-blur-sm py-24 relative" id="testimonials">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                What our <span className="text-[#7CFF00]">clients</span> say
              </h2>
              <p className="text-lg opacity-70 max-w-2xl mx-auto">
                Discover why our clients trust us for their digital projects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex items-center gap-1 mb-6">
                    <Star className="w-4 h-4 fill-[#7CFF00] text-[#7CFF00]" />
                    <Star className="w-4 h-4 fill-[#7CFF00] text-[#7CFF00]" />
                    <Star className="w-4 h-4 fill-[#7CFF00] text-[#7CFF00]" />
                    <Star className="w-4 h-4 fill-[#7CFF00] text-[#7CFF00]" />
                    <Star className="w-4 h-4 fill-[#7CFF00] text-[#7CFF00]" />
                  </div>
                  <p className="italic mb-6 text-sm leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-xs opacity-70">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="container mx-auto px-4 py-24 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Brands that <span className="text-[#7CFF00]">trust</span> us
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {clients.map((client) => (
              <div key={client.id} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="container mx-auto px-4 py-24 text-center relative">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl md:text-3xl leading-relaxed">
              With over 8 years of experience in{" "}
              <span className="text-[#7CFF00]">web design, branding, and social media</span>, I help brands and
              entrepreneurs build their digital presence with innovative solutions. Every project I design is focused on
              making an impact, communicating, and converting.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* CTA Section */}
        <section className="bg-[#7CFF00]/10 backdrop-blur-sm py-24 relative">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to transform your <span className="text-[#7CFF00]">digital presence</span>?
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10">
              Let's talk about your project and how we can help you achieve your goals.
            </p>
            <Button className="bg-[#7CFF00] text-black hover:bg-white rounded-full px-8 py-6 text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Contact now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 border-t border-white/10 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">
                designed<span className="text-[#7CFF00]">bydan</span>
              </h3>
              <p className="text-sm opacity-70 max-w-xs mb-6">
                Transforming ideas into digital experiences that connect, impact, and convert.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#7CFF00]/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                  >
                    About me
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm opacity-70">hello@designedbydan.com</li>
                <li className="text-sm opacity-70">+34 123 456 789</li>
                <li className="text-sm opacity-70">Madrid, Spain</li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-sm">Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 rounded-l-lg bg-white/10 border border-white/10 outline-none w-full"
                  />
                  <Button className="rounded-l-none bg-[#7CFF00] text-black hover:bg-[#7CFF00]/90">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
            <p className="text-xs opacity-50">© {new Date().getFullYear()} designedbydan. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs opacity-50 hover:opacity-70">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs opacity-50 hover:opacity-70">
                Terms & Conditions
              </Link>
              <div className="flex items-center">
                <span className="text-xs opacity-50 mr-2">Made with</span>
                <span className="text-[#7CFF00]">♥</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Made with Framer badge */}
        <div className="fixed bottom-4 right-4">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 text-xs flex items-center">
            <span>Made in Framer</span>
          </div>
        </div>
      </div>
    </>
  )
}

