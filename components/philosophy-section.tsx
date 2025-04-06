"use client"

import { useState, useEffect } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import ProcessSection from "@/components/process-section"
import MethodologySection from "@/components/methodology-section"
import CountUp from './CountUp'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [isScrolled, setIsScrolled] = useState(false)

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
      category: "branding",
      description: "Branding and web design for luxury company",
    },
    { id: 2, title: "Web Platform", category: "web", description: "Interface design for site builder" },
    { id: 3, title: "Mobile App", category: "ui", description: "Interface design for financial application" },
    { id: 4, title: "E-commerce", category: "web", description: "Online store for fashion brand" },
    { id: 5, title: "Corporate Site", category: "branding", description: "Web design for technology company" },
    { id: 6, title: "Dashboard", category: "ui", description: "Administration interface for SaaS" },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const testimonials = [
    {
      id: 1,
      name: "Carlos Rodríguez",
      company: "TechSolutions",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with Dan was an exceptional experience. He perfectly understood our vision and transformed it into a design that exceeded our expectations.",
    },
    {
      id: 2,
      name: "María González",
      company: "Fashion Brand",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The redesign of our online store increased our conversions by 40%. The attention to detail and strategic approach made the difference.",
    },
    {
      id: 3,
      name: "Javier López",
      company: "FinTech App",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The user interface that Dan designed for our application has received praise from both users and investors. An exceptional work.",
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
        "My process begins with a discovery phase to understand your objectives, followed by research, wireframing, visual design, development, and finally launch and continuous optimization.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The time varies depending on the complexity of the project. A typical website can take 4 to 8 weeks, while more complex projects may require 2-3 months.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, I work with clients from all over the world. Communication is mainly done through video calls and online collaboration tools.",
    },
    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Yes, I offer maintenance plans to ensure your website remains updated, secure, and functioning correctly.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-6",
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
            <Link href="#servicios" className="text-sm hover:text-[#7CFF00] transition-colors">
              Services
            </Link>
            <Link href="#proyectos" className="text-sm hover:text-[#7CFF00] transition-colors">
              Projects
            </Link>
            <Link href="#testimonios" className="text-sm hover:text-[#7CFF00] transition-colors">
              Testimonials
            </Link>
            <Link href="#contacto" className="text-sm hover:text-[#7CFF00] transition-colors">
              Contact
            </Link>
            <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6">
              Let's talk about your project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-black z-40 transition-transform duration-300 md:hidden pt-20",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            <Link
              href="#servicios"
              className="text-xl py-2 border-b border-white/10 hover:text-[#7CFF00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#proyectos"
              className="text-xl py-2 border-b border-white/10 hover:text-[#7CFF00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#testimonios"
              className="text-xl py-2 border-b border-white/10 hover:text-[#7CFF00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contacto"
              className="text-xl py-2 border-b border-white/10 hover:text-[#7CFF00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's talk about your project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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
          <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6 py-6">
            Let's talk about your project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-6 py-6">
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
          <motion.div
            className="mt-24 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="marquee-container">
              <div className="marquee-content">
                <h2
                  className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-transparent tracking-tighter leading-none whitespace-nowrap"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}
                >
                  designed <span style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)", textShadow: "0 0 10px rgba(255, 255, 255, 0.1)" }}>Lance</span>
                </h2>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <h2
                  className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-transparent tracking-tighter leading-none whitespace-nowrap"
                  style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}
                >
                  designed <span style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)", textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}>Lance</span>
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
                src={`/placeholder.svg?height=600&width=800&text=${project.title}`}
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What our <span className="text-[#7CFF00]">clients</span> say
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto">
              Discover why our clients trust us with their digital projects.
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
      <section className="container mx-auto px-4 py-24">
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
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl md:text-3xl leading-relaxed">
            With over 8 years of experience in{" "}
            <span className="text-[#7CFF00]">web design, branding and social media</span>, I help brands and entrepreneurs
            build their digital presence with innovative solutions. Every project I design is focused on
            impacting, communicating and converting.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7CFF00]/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to transform your <span className="text-[#7CFF00]">digital presence</span>?
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10">
            Let's talk about your project and how we can help you achieve your goals.
          </p>
          <Button className="bg-[#7CFF00] text-black hover:bg-white rounded-full px-8 py-6 text-lg">
            Contact now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              designed<span className="text-[#7CFF00]">bydan</span>
            </h3>
            <p className="text-sm opacity-70 max-w-xs mb-6">
              Transforming ideas into digital experiences that connect, impact and convert.
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
                  href="#servicios"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonios"
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
              <li className="text-sm opacity-70">hola@designedbydan.com</li>
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
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} designedbydan. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs opacity-50 hover:opacity-70">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs opacity-50 hover:opacity-70">
              Terms and Conditions
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
  )
}

