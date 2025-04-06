"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  ChevronRight,
  Star,
  Users,
  Code,
  Palette,
  Layout,
  Zap,
  Award,
  CheckCircle,
  ChevronLeft,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import ProcessSection from "@/components/process-section"
import MethodologySection from "@/components/methodology-section"
import CountUp from './CountUp'
import FAQItem from "@/components/faq-item"
import { Navbar } from '@/components/Navbar'

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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const { scrollToSection } = useSmoothScroll(setIsMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Automotive Design",
      image: "/coming.png",
      category: "branding",
      description: "Branding and web design for luxury company",
    },
    { id: 2, title: "Web Platform", category: "web", description: "Interface design for site builder", image: "/coming.png" },
    { id: 3, title: "Mobile App", category: "ui", description: "Interface design for financial application", image: "/coming.png" },
    { id: 4, title: "E-commerce", category: "web", description: "Online store for fashion brand", image: "/coming.png" },
    { id: 5, title: "Corporate Site", category: "branding", description: "Web design for technology company", image: "/coming.png" },
        { id: 6, title: "Dashboard", category: "ui", description: "Administration interface for SaaS", image: "/coming.png" },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      company: "TechSolutions",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Working with Pareng Lance was transformative for our brand. His deep understanding of user psychology and attention to detail resulted in a website that not only looks stunning but also converts visitors into customers at an unprecedented rate.",
      rating: 5,
      role: "CEO",
      highlight: "Unprecedented conversion rates"
    },
    {
      id: 2,
      name: "María González",
      company: "Fashion Brand",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "The e-commerce redesign by Pareng Lance increased our conversions by 40% in just the first month. His strategic approach to user experience and his ability to create visually stunning designs that drive sales is truly remarkable.",
      rating: 5,
      role: "Marketing Director",
      highlight: "40% increase in conversions"
    },
    {
      id: 3,
      name: "Javier López",
      company: "FinTech App",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote:
        "Pareng Lance's UI design for our financial app received a 4.9-star rating on both app stores. His intuitive interfaces and attention to accessibility made our complex financial services approachable for all users.",
      rating: 5,
      role: "Product Manager",
      highlight: "4.9-star app store rating"
    },
    {
      id: 4,
      name: "Sofia Martinez",
      company: "Healthcare Platform",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      quote:
        "Pareng Lance's ability to create intuitive interfaces for complex healthcare data was a game-changer for our platform. Patient engagement increased by 65% after implementing his designs, and our medical staff reported significantly improved workflow efficiency.",
      rating: 5,
      role: "UX Director",
      highlight: "65% increase in patient engagement"
    },
    {
      id: 5,
      name: "David Chen",
      company: "E-commerce Startup",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote:
        "The mobile app Pareng Lance designed for us has been featured in design publications and has a 4.8-star rating on both app stores. His attention to micro-interactions and user experience details created a product that users genuinely love to use.",
      rating: 5,
      role: "Founder",
      highlight: "Featured in design publications"
    },
    {
      id: 6,
      name: "Emma Wilson",
      company: "Educational Platform",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "Our student engagement increased by 60% after implementing Pareng Lance's design. He truly understands how to create experiences that connect with users on an emotional level while maintaining functionality and purpose.",
      rating: 5,
      role: "Education Director",
      highlight: "60% increase in student engagement"
    }
  ]

  const clients = [
    { 
      id: 1, 
      name: "TechCorp Solutions", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=TechCorp&font=/font/raleway"
    },
    { 
      id: 2, 
      name: "FinanceHub Global", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=FinanceHub&font=/font/raleway"
    },
    { 
      id: 3, 
      name: "MediaGroup Studios", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=MediaGroup&font=/font/raleway"
    },
    { 
      id: 4, 
      name: "RetailBrand Co", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=RetailBrand&font=/font/raleway"
    },
    { 
      id: 5, 
      name: "HealthTech Innovations", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=HealthTech&font=/font/raleway"
    },
    { 
      id: 6, 
      name: "EcoSmart Systems", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=EcoSmart&font=/font/raleway"
    },
    { 
      id: 7, 
      name: "CloudNet Services", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=CloudNet&font=/font/raleway"
    },
    { 
      id: 8, 
      name: "AeroSpace Dynamics", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=AeroSpace&font=/font/raleway"
    },
    { 
      id: 9, 
      name: "GreenEnergy Corp", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=GreenEnergy&font=/font/raleway"
    },
    { 
      id: 10, 
      name: "DataFlow Analytics", 
      logo: "https://placehold.co/400x200/1a1a1a/7CFF00?text=DataFlow&font=/font/raleway"
    }
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
      features: ["Wireframing and Prototypes", "Interface Design", "Usability Testing"],
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

  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "My design process follows a comprehensive approach: 1) Discovery phase to understand your business goals, target audience, and unique challenges; 2) Research and competitive analysis to identify opportunities; 3) Strategy development to align design with business objectives; 4) Wireframing and prototyping to visualize the user experience; 5) Visual design that reflects your brand identity; 6) Development with clean, efficient code; 7) Testing across devices and browsers; 8) Launch with performance optimization; and 9) Post-launch support and continuous improvement based on analytics and user feedback.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary based on scope and complexity. A typical website redesign takes 4-8 weeks from concept to launch, while more complex projects like e-commerce platforms or custom web applications may require 2-3 months. I provide detailed timelines during our initial consultation and keep you updated throughout the process. For urgent projects, I offer expedited services with additional fees.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, I work with clients worldwide and have experience managing projects across different time zones. Communication is primarily conducted through video calls, email, and collaborative tools like Figma and Asana. I'm fluent in English and can accommodate various communication preferences. For international projects, I offer flexible payment options and clear documentation of deliverables.",
    },
    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Yes, I offer comprehensive maintenance plans to ensure your website remains secure, up-to-date, and performing optimally. These plans include regular security updates, content updates, performance monitoring, technical support, and monthly reports. I also provide training sessions to help you manage your website content independently if desired.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "My pricing is project-based and depends on factors such as complexity, features required, and timeline. I offer transparent pricing with no hidden fees and provide detailed proposals before starting any work. For smaller businesses, I offer starter packages, while larger organizations can benefit from custom enterprise solutions. I'm happy to discuss your budget and find a solution that delivers value within your constraints.",
    },
    {
      question: "Do you handle both design and development?",
      answer:
        "Yes, I offer end-to-end services covering both design and development. This integrated approach ensures seamless execution from concept to launch, with consistent quality throughout the process. For specialized projects requiring additional expertise, I have a network of trusted specialists I can collaborate with while maintaining project oversight.",
    },
    {
      question: "How do you ensure my website will be mobile-friendly?",
      answer:
        "I design all websites with a mobile-first approach, ensuring they look and function perfectly across all devices and screen sizes. This includes responsive design techniques, touch-friendly interfaces, optimized images, and performance considerations for mobile users. I test extensively on various devices and use tools like Google's Mobile-Friendly Test to verify compatibility.",
    },
    {
      question: "What technologies and platforms do you work with?",
      answer:
        "I work with a wide range of technologies including React, Next.js, Vue.js, and traditional HTML/CSS/JavaScript. For content management systems, I specialize in WordPress, Shopify, and headless CMS solutions. I choose the most appropriate technology stack based on your specific needs, considering factors like scalability, performance requirements, and budget constraints.",
    },
    {
      question: "How do you handle revisions and feedback?",
      answer:
        "I believe in collaborative design and include multiple revision rounds in my process. After each major milestone, I present work for your feedback and incorporate your suggestions. I maintain clear communication throughout and document all changes. For larger projects, I schedule regular check-ins to ensure we're aligned and can address concerns promptly.",
    },
    {
      question: "Do you offer SEO services with your web design?",
      answer:
        "Yes, I incorporate SEO best practices into all website designs, including proper structure, meta tags, optimized content, and technical SEO elements. I can also provide ongoing SEO services to improve your search rankings and drive organic traffic. For comprehensive SEO strategies, I offer additional packages that include keyword research, content optimization, and performance tracking.",
    }
  ]

  const scrollToTestimonial = (index: number) => {
    const testimonialCarousel = document.getElementById('testimonial-carousel');
    const dots = document.querySelectorAll('#testimonios button');
    
    if (!testimonialCarousel) return;
    
    // Update active dot
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('bg-[#7CFF00]', 'w-6');
        dot.classList.remove('bg-white/30');
      } else {
        dot.classList.remove('bg-[#7CFF00]', 'w-6');
        dot.classList.add('bg-white/30');
      }
    });
    
    // Scroll to the testimonial
    const scrollAmount = index * 416; // 400px width + 16px gap
    testimonialCarousel.style.transform = `translateX(-${scrollAmount}px)`;
    setScrollLeft(scrollAmount);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    
    // Change cursor to grabbing
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    
    // Calculate the new scroll position
    const newScrollLeft = scrollLeft - walk;
    
    // Find the closest testimonial index
    const testimonialWidth = 416; // 400px width + 16px gap
    const newIndex = Math.round(newScrollLeft / testimonialWidth);
    
    // Ensure the index is within bounds
    const boundedIndex = Math.max(0, Math.min(newIndex, testimonials.length - 1));
    
    // Update the carousel position
    scrollToTestimonial(boundedIndex);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  useEffect(() => {
    // Auto-scroll testimonials every 5 seconds
    let currentIndex = 0;
    const testimonialCarousel = document.getElementById('testimonial-carousel');
    const dots = document.querySelectorAll('#testimonios button');
    
    const autoScroll = () => {
      // Only auto-scroll if not being dragged
      if (!isDragging) {
        currentIndex = (currentIndex + 1) % testimonials.length;
        scrollToTestimonial(currentIndex);
      }
    };
    
    // Set up interval for auto-scrolling
    const intervalId = setInterval(autoScroll, 5000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [isDragging]);

  // Update the scrollToContact function to use our new hook
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      scrollToSection('contacto');
    } else {
      // Fallback to the contact page if the section is not found on the current page
      window.location.href = '/contacto';
    }
  };

  // Add refs and animation controls for the stats section
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const statsControls = useAnimation();

  // Trigger animation when stats come into view
  useEffect(() => {
    if (isStatsInView) {
      statsControls.start("visible");
    }
  }, [isStatsInView, statsControls]);

  // Animation variants for the stats
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation variants for the testimonial cards
  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-40 pb-24">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-black/30 border border-[#7CFF00]/20 rounded-full px-4 py-1.5 flex items-center">
            <span className="h-2 w-2 bg-[#7CFF00] rounded-full mr-2"></span>
            <span className="text-sm text-[#7CFF00]">Design that connects and transforms</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Transforming ideas into <span className="block text-[#7CFF00]">digital experiences.</span>
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mt-8">
            Web design, branding and visual content designed to connect, impact and enhance your brand in the digital world.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6"
            onClick={() => window.open('https://m.me/mr.c0oletz', '_blank')}
          >
            Let's talk about your project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          {/* link to services section */}
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-6 py-6" onClick={() => scrollToSection('servicios')}  >
            View Services
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ArrowDown className="h-4 w-4 opacity-50" />
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Stats Section */}
      <section className="bg-white/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7CFF00] mb-2">
                  <CountUp
                    from={0}
                    to={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                    separator=","
                    direction="up"
                    duration={1.5}
                    className="count-up-text"
                  />
                  {stat.value.includes('+') && '+'}
                </div>
                <div className="text-sm opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-24" id="servicios">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#7CFF00]">services</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            We offer complete digital solutions to help your brand stand out in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#7CFF00]/50 transition-all group hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-[#7CFF00]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#7CFF00]/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm opacity-70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-[#7CFF00] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6">
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Process Section - New section with the same vibe as the reference */}
      <ProcessSection />

      {/* Methodology Section - Additional new section with the same vibe */}
      <MethodologySection />

      {/* Philosophy Section - Another new section with the same vibe */}

      <section className="relative w-full py-24 overflow-hidden bg-black">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/0 pointer-events-none"></div>

        {/* Main content */}
        <div className="container mx-auto px-4">
          {/* Section header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-[#7CFF00]">philosophy</span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              The foundational principles that guide our approach to design and digital experiences, creating meaningful connections between brands and their audiences.
            </p>
          </motion.div>

          {/* Principles */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Zap className="w-8 h-8 text-[#7CFF00]" />,
                title: "Impact",
                description:
                  "We create designs that make a lasting impression and stand out in a crowded digital landscape. Our work is bold, memorable, and strategically crafted to capture attention and drive engagement.",
              },
              {
                icon: <Users className="w-8 h-8 text-[#7CFF00]" />,
                title: "Connection",
                description: "We focus on creating meaningful connections between your brand and your target audience. By understanding user psychology and behavior, we design experiences that resonate on a deeper level.",
              },
              {
                icon: <Award className="w-8 h-8 text-[#7CFF00]" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every detail, ensuring that each project exceeds expectations. Our commitment to quality drives us to continuously refine and perfect our work until it achieves the highest standards.",
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-[#7CFF00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                <p className="text-sm opacity-70 max-w-xs mx-auto">{principle.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional philosophy content */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
              At the heart of our approach is a deep understanding that design is not just about aesthetics—it's about creating experiences that solve problems, communicate effectively, and drive results.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#7CFF00]">User-Centered Design</h3>
                <p className="text-sm opacity-70">
                  We place users at the center of our design process, creating intuitive interfaces that anticipate needs and deliver seamless experiences.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-[#7CFF00]">Strategic Thinking</h3>
                <p className="text-sm opacity-70">
                  Every design decision is backed by strategic thinking, ensuring that our work not only looks great but also achieves your business objectives.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Large stylized text/logo */}
 
        </div>
      </section>
      <motion.div
          className="mt-24 relative overflow-hidden w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-2xl"></div>
            
            {/* Marquee container */}
            <div className="relative whitespace-nowrap overflow-hidden w-full">
              <div className="animate-marquee inline-block">
                <h2
                  className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-transparent tracking-tighter leading-none inline-block"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}
                >
                  designed <span style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0)", color: "rgba(128, 128, 128, 0.07)" }}> Lance</span>
                </h2>
                {/* Duplicate for seamless marquee */}
                <h2
                  className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-transparent tracking-tighter leading-none inline-block"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}
                >
                  designed <span style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0)", color: "rgba(128, 128, 128, 0.07)" }}> Lance</span>
                </h2>
              </div>
            </div>
          </div>
        </motion.div>

    

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-24" id="proyectos">
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
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
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
          <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6">
            View all projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white/5 py-24" id="testimonios">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              What our <span className="text-[#7CFF00]">clients</span> say
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Discover why leading brands trust Pareng Lance with their digital projects.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                ref={carouselRef}
                id="testimonial-carousel"
                className="flex flex-nowrap gap-6 pb-8 transition-transform duration-500 ease-in-out cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ touchAction: 'pan-y pinch-zoom' }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.id} 
                    className="min-w-[350px] md:min-w-[400px] bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#7CFF00]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7CFF00]/10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={testimonialVariants}
                    custom={index}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#7CFF00] text-[#7CFF00]" />
                      ))}
                    </div>
                    <div className="relative mb-6">
                      <svg className="absolute -top-4 -left-2 w-8 h-8 text-[#7CFF00]/20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="italic text-sm leading-relaxed pl-6">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full object-cover border-2 border-[#7CFF00]/30"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#7CFF00] rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-black" />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-xs opacity-70">{testimonial.role}, {testimonial.company}</div>
                        <div className="text-xs text-[#7CFF00] mt-1 font-medium">{testimonial.highlight}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Add Your Testimonial Card */}
                <motion.div 
                  className="min-w-[350px] md:min-w-[400px] bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#7CFF00]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#7CFF00]/10 cursor-pointer flex flex-col items-center justify-center text-center"
                  onClick={scrollToContact}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={testimonialVariants}
                  custom={testimonials.length}
                  transition={{ delay: testimonials.length * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-[#7CFF00]/10 rounded-full flex items-center justify-center mb-6"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MessageCircle className="w-8 h-8 text-[#7CFF00]" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Share Your Experience</h3>
                  <p className="text-sm opacity-70 mb-6">
                    Have you worked with Pareng Lance? We'd love to hear your feedback, testimonial, or any concerns to help us improve our services.
                  </p>
                  <Button className="bg-[#7CFF00] text-black hover:bg-white rounded-full px-6 flex items-center gap-2 group">
                    Leave Your Feedback 
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <motion.button 
                  key={index} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === 0 ? 'bg-[#7CFF00] w-6' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => scrollToTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 pointer-events-none">
              <motion.button 
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#7CFF00]/20 hover:border-[#7CFF00]/30 transition-all duration-300 pointer-events-auto"
                onClick={() => {
                  const currentIndex = Math.round(scrollLeft / 416);
                  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                  scrollToTestimonial(prevIndex);
                }}
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-[#7CFF00]/20 hover:border-[#7CFF00]/30 transition-all duration-300 pointer-events-auto"
                onClick={() => {
                  const currentIndex = Math.round(scrollLeft / 416);
                  const nextIndex = (currentIndex + 1) % testimonials.length;
                  scrollToTestimonial(nextIndex);
                }}
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Testimonial Stats */}
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            variants={statsVariants}
            initial="hidden"
            animate={statsControls}
          >
            <motion.div 
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              variants={statItemVariants}
            >
              <motion.div 
                className="text-4xl font-bold text-[#7CFF00] mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>
                  <CountUp from={0} to={100} duration={2} />
                  <span>%</span>
                </span>
              </motion.div>
              <div className="text-sm opacity-70">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              variants={statItemVariants}
            >
              <motion.div 
                className="text-4xl font-bold text-[#7CFF00] mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span>
                  <CountUp from={0} to={120} duration={2} />
                  <span>+</span>
                </span>
              </motion.div>
              <div className="text-sm opacity-70">Projects Completed</div>
            </motion.div>
            <motion.div 
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              variants={statItemVariants}
            >
              <motion.div 
                className="text-4xl font-bold text-[#7CFF00] mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span>
                  <CountUp from={0} to={40} duration={2} />
                  <span>%</span>
                </span>
              </motion.div>
              <div className="text-sm opacity-70">Average Conversion Increase</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-24 relative overflow-hidden bg-black/40">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-radial from-[#7CFF00]/5 via-transparent to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_2px,transparent_2px),linear-gradient(to_bottom,#000_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div>

        <div className="relative">
          {/* Section Header with Animation */}
          <motion.div 
            className="text-center mb-20 container mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Brands that <span className="text-[#7CFF00]">trust</span> us
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Join our growing list of satisfied clients from various industries
            </p>
          </motion.div>

          {/* Marquee Client Logos - Row 1 */}
          <div className="relative w-full overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-black after:to-transparent">
            <motion.div 
              className="flex gap-8 animate-marquee whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  className="relative group shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group-hover:border-[#7CFF00]/30 group-hover:bg-white/10 w-48 h-24 flex items-center justify-center">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7CFF00]/0 via-[#7CFF00]/0 to-[#7CFF00]/0 group-hover:from-[#7CFF00]/5 group-hover:via-[#7CFF00]/10 group-hover:to-[#7CFF00]/5 transition-all duration-500"></div>
                    
                    {/* Client Logo */}
                    <div className="relative">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={160}
                        height={80}
                        className="h-12 w-auto object-contain mx-auto filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>

                    {/* Hover Info */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/90 backdrop-blur-sm p-3 rounded-lg transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <p className="text-sm text-white whitespace-nowrap font-medium">{client.name}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Marquee Client Logos - Row 2 (Reverse Direction) */}
          <div className="relative w-full overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-black after:to-transparent">
            <motion.div 
              className="flex gap-8 animate-marquee2 whitespace-nowrap"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}-reverse`}
                  className="relative group shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group-hover:border-[#7CFF00]/30 group-hover:bg-white/10 w-48 h-24 flex items-center justify-center">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#7CFF00]/0 via-[#7CFF00]/0 to-[#7CFF00]/0 group-hover:from-[#7CFF00]/5 group-hover:via-[#7CFF00]/10 group-hover:to-[#7CFF00]/5 transition-all duration-500"></div>
                    
                    {/* Client Logo */}
                    <div className="relative">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={160}
                        height={80}
                        className="h-12 w-auto object-contain mx-auto filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                      />
                    </div>

                    {/* Hover Info */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/90 backdrop-blur-sm p-3 rounded-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <p className="text-sm text-white whitespace-nowrap font-medium">{client.name}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="container mx-auto px-4">
            
            {/* CTA Button */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-white/5 text-white hover:bg-[#7CFF00] hover:text-black rounded-full px-8 py-4 border border-white/10 hover:border-[#7CFF00] transition-all duration-300"
                  onClick={() => scrollToContact()}
                >
                  Become Our Next Success Story
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-24" id="faq">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-[#7CFF00]">Questions</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Find answers to common questions about our design process, timelines, and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-white/10 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6"
            onClick={() => scrollToContact()}
          >
            Still have questions? <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
   
    </div>
  )
}

