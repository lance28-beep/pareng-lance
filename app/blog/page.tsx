"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Psychology of Color in Web Design",
    excerpt: "How color choices can influence user behavior and create emotional connections with your audience.",
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "Design Theory",
    image: "/placeholder.svg?height=300&width=400",
    slug: "psychology-of-color-in-web-design"
  },
  {
    id: 2,
    title: "Minimalism vs. Maximalism: Finding the Right Balance",
    excerpt: "Exploring the pros and cons of both design approaches and how to determine which is right for your brand.",
    date: "May 28, 2023",
    readTime: "7 min read",
    category: "Design Trends",
    image: "/placeholder.svg?height=300&width=400",
    slug: "minimalism-vs-maximalism"
  },
  {
    id: 3,
    title: "The Future of UI: Voice Interfaces and Beyond",
    excerpt: "How voice interfaces are changing the way we interact with digital products and what designers need to know.",
    date: "April 10, 2023",
    readTime: "6 min read",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
    slug: "future-of-ui-voice-interfaces"
  },
  {
    id: 4,
    title: "Creating Accessible Websites: A Designer's Guide",
    excerpt: "Practical tips and techniques for designing websites that are accessible to all users, regardless of abilities.",
    date: "March 22, 2023",
    readTime: "8 min read",
    category: "Accessibility",
    image: "/placeholder.svg?height=300&width=400",
    slug: "creating-accessible-websites"
  },
  {
    id: 5,
    title: "The Rise of Micro-interactions in Modern Web Design",
    excerpt: "How small animations and feedback mechanisms can significantly enhance user experience and engagement.",
    date: "February 15, 2023",
    readTime: "5 min read",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
    slug: "rise-of-micro-interactions"
  },
  {
    id: 6,
    title: "Typography Trends for 2023: What's In and What's Out",
    excerpt: "A comprehensive guide to the latest typography trends and how to implement them in your designs.",
    date: "January 30, 2023",
    readTime: "6 min read",
    category: "Typography",
    image: "/placeholder.svg?height=300&width=400",
    slug: "typography-trends-2023"
  }
];

// Featured post
const featuredPost = {
  id: 0,
  title: "The Evolution of Web Design: From Static Pages to Interactive Experiences",
  excerpt: "A deep dive into how web design has evolved over the past three decades and what the future holds for designers and developers.",
  date: "July 5, 2023",
  readTime: "10 min read",
  category: "Web Design History",
  image: "/placeholder.svg?height=500&width=800",
  slug: "evolution-of-web-design"
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Get unique categories
  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts by category
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Blog Header */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Journal</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Insights, thoughts, and updates on design, web development, and digital experiences.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
          <div className="bg-zinc-900 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#7CFF00] text-black text-xs font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-xs opacity-70">
                    <Calendar className="h-3 w-3 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-xs opacity-70">
                    <Clock className="h-3 w-3 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="opacity-80 mb-6">{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-[#7CFF00] text-black hover:bg-white rounded-full px-6">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === category
                    ? "bg-[#7CFF00] text-black"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-zinc-900 rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#7CFF00] text-black text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs opacity-70">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="opacity-80 text-sm mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-[#7CFF00] text-sm font-medium flex items-center">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
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