"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import { ArrowRight, ArrowDown, ChevronRight, Star, Users, Code, Palette, Layout, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import PhilosophySection from "@/components/philosophy-section"
import ContactForm from "@/components/contact-form"
import BackgroundParticles from "@/components/background-particles"
import AIChat from "@/components/ai-chat"

// Custom hook for smooth scrolling
const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate header height for offset
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      
      // Get the section's position
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      
      // Scroll to the section with offset for the header
      window.scrollTo({
        top: sectionPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  return { scrollToSection };
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("all")
  const { scrollToSection } = useSmoothScroll();

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
            {/* link to my messenger   */}
            <Button 
              className="bg-[#7CFF00] text-black hover:bg-white rounded-full px-8 py-6 text-lg group relative overflow-hidden"
              onClick={() => window.open('https://m.me/mr.c0oletz', '_blank')}
            >
              <span className="relative z-10 flex items-center">
                Message me <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
                Pareng<span className="text-[#7CFF00]">Lance</span>
              </h3>
              <p className="text-sm opacity-70 max-w-xs mb-6">
                Transforming ideas into digital experiences that connect, impact, and convert.
              </p>
              <div className="flex gap-4">
                {/* link to my facebook */}
                <Link
                  href="https://www.facebook.com/HustleWithParengLance"
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
                {/* link to my instagram */}
                <Link
                  href="https://www.instagram.com/vallelance/"
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
                {/* link to my linkedin */}
                <Link
                  href="https://www.linkedin.com/in/rolando-valle-43159b199/"
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
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('proyectos')}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors text-left"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonios')}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors text-left"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <Link
                    href="#"
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
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors text-left"
                  >
                    Contact us
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:vallelance8@gmail.com"
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                  >
                    vallelance8@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+639 288 898 8692"
                    className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                  >
                    +639 288 898 8692
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
            <p className="text-xs opacity-50">© {new Date().getFullYear()} Pareng Lance. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs opacity-50 hover:opacity-70">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs opacity-50 hover:opacity-70">
                Terms & Conditions
              </Link>
              <div className="flex items-center">
                <span className="text-xs opacity-50 mr-2">Developed by</span>

                {/* link to my portfolio */}
                <Link href="https://lance28-beep.github.io/portfolio-website/" className="text-[#7CFF00]">Lance</Link>

              </div>
            </div>
          </div>
        </footer>
        
        {/* AI Chat Component */}
        <AIChat />
      </div>
    </>
  )
}

