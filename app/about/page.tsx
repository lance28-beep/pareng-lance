"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

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

export default function AboutPage() {
  const { scrollToSection } = useSmoothScroll();
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Profile"
                width={400}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Pareng Lance</h2>
              <p className="text-lg opacity-80 mb-6">
                I'm a passionate web designer and developer with over 8 years of experience creating beautiful, functional websites that help businesses grow.
              </p>
              <p className="text-lg opacity-80 mb-6">
                My approach combines strategic thinking with creative design to deliver solutions that not only look great but also drive results.
              </p>
              <p className="text-lg opacity-80 mb-8">
                I specialize in creating user-centered designs that enhance the user experience and increase conversion rates.
              </p>
              <Button 
                className="bg-[#7CFF00] text-black hover:bg-white rounded-full px-6"
                onClick={() => window.open('https://m.me/mr.c0oletz', '_blank')}
              >
                Let's work together <ArrowLeft className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Pareng <span className="text-[#7CFF00]">Lance</span>
            </h3>
            <p className="text-sm opacity-70 max-w-xs">
              Transformando ideas en experiencias digitales que conectan, impactan y convierten.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/proyectos"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-sm opacity-70">hola@designedbydan.com</li>
              <li className="text-sm opacity-70">+34 123 456 789</li>
              <li className="flex gap-4 mt-4">
                <Link href="#" className="opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors">
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Pareng Lance. Todos los derechos reservados.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-xs opacity-50 mr-2">Hecho con</span>
            <span className="text-[#7CFF00]">♥</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

