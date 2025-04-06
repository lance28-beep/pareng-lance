"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from 'framer-motion'

// Custom hook for smooth scrolling
const useSmoothScroll = (setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      
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

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollToSection } = useSmoothScroll(setIsMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-black py-3" : "bg-transparent py-6",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold">
                Pareng <span className="text-[#7CFF00]">Lance</span>
              </h1>
            </Link>
            <p className="text-xs ml-2 opacity-70 uppercase tracking-wider hidden sm:block">VISUAL | WEB DESIGN</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="text-sm hover:text-[#7CFF00] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')} 
              className="text-sm hover:text-[#7CFF00] transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')} 
              className="text-sm hover:text-[#7CFF00] transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-sm hover:text-[#7CFF00] transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm hover:text-[#7CFF00] transition-colors"
            >
              Contact
            </button>
            <Button 
              className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6"
              onClick={() => window.open('https://m.me/mr.c0oletz', '_blank')}
            >
              Let's talk about your project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white menu-button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            className="mobile-menu md:hidden fixed inset-0 backdrop-blur-md z-50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <h1 className="text-xl font-bold">
                    Pareng <span className="text-[#7CFF00]">Lance</span>
                  </h1>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 hover:text-[#7CFF00] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6">
                <button
                  onClick={() => {
                    scrollToSection('servicios');
                    setIsMenuOpen(false);
                  }}
                  className="text-white text-xl py-3 border-b border-white/10 hover:text-[#7CFF00] transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => {
                    scrollToSection('proyectos');
                    setIsMenuOpen(false);
                  }}
                  className="text-white text-xl py-3 border-b border-white/10 hover:text-[#7CFF00] transition-colors text-left"
                >
                      Projects
                </button>
                <button
                  onClick={() => {
                    scrollToSection('testimonios');
                    setIsMenuOpen(false);
                  }}
                  className="text-white text-xl py-3 border-b border-white/10 hover:text-[#7CFF00] transition-colors text-left"
                >
                      Testimonials
                </button>
                <button
                  onClick={() => {
                    scrollToSection('faq');
                    setIsMenuOpen(false);
                  }}
                  className="text-white text-xl py-3 border-b border-white/10 hover:text-[#7CFF00] transition-colors text-left"
                >
                        FAQ
                </button>
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="text-white text-xl py-3 border-b border-white/10 hover:text-[#7CFF00] transition-colors text-left"
                >
                        Contact
                </button>
                <Button
                  className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6 mt-4"
                  onClick={() => {
                    window.open('https://m.me/mr.c0oletz', '_blank');
                    setIsMenuOpen(false);
                  }}
                >
                  Let's talk about your project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 