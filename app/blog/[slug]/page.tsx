"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react"
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
    slug: "psychology-of-color-in-web-design",
    content: `
      <p>Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, create visual hierarchy, and establish brand identity. But how do we choose the right colors for our designs?</p>
      
      <h2>The Science Behind Color Psychology</h2>
      
      <p>Color psychology is the study of how colors affect human behavior and emotions. Different colors can trigger different responses in people, and these responses can vary based on cultural, personal, and contextual factors.</p>
      
      <p>For example, red is often associated with energy, passion, and urgency, making it effective for call-to-action buttons. Blue, on the other hand, is linked to trust, stability, and calmness, which is why many financial institutions use it in their branding.</p>
      
      <h2>Creating Emotional Connections</h2>
      
      <p>When designing a website, the color palette you choose should align with the emotions you want to evoke in your users. A healthcare website might use calming blues and greens to convey trust and wellness, while a children's toy store might opt for bright, playful colors to create excitement.</p>
      
      <p>It's important to consider the entire user journey and how color can guide users through your site. Strategic use of color can draw attention to important elements, create visual hierarchy, and improve navigation.</p>
      
      <h2>Accessibility Considerations</h2>
      
      <p>While color is a powerful design tool, it's crucial to ensure that your designs are accessible to all users, including those with color vision deficiencies. Never rely solely on color to convey information; always provide additional visual cues or text alternatives.</p>
      
      <p>Tools like the Web Content Accessibility Guidelines (WCAG) can help you ensure that your color choices meet accessibility standards.</p>
      
      <h2>Conclusion</h2>
      
      <p>Understanding the psychology of color can significantly enhance your web design projects. By thoughtfully selecting colors that align with your brand values and target audience, you can create more engaging and effective digital experiences.</p>
    `
  },
  {
    id: 0,
    title: "The Evolution of Web Design: From Static Pages to Interactive Experiences",
    excerpt: "A deep dive into how web design has evolved over the past three decades and what the future holds for designers and developers.",
    date: "July 5, 2023",
    readTime: "10 min read",
    category: "Web Design History",
    image: "/placeholder.svg?height=500&width=800",
    slug: "evolution-of-web-design",
    content: `
      <p>The web has come a long way since its inception in the early 1990s. What started as simple static pages with basic HTML has evolved into a complex ecosystem of interactive experiences, dynamic content, and sophisticated design systems.</p>
      
      <h2>The Early Days: HTML and Static Pages</h2>
      
      <p>In the beginning, web pages were created using basic HTML. Design options were limited, and pages were primarily text-based with simple formatting. The introduction of tables for layout and the ability to include images marked the first steps toward more visually appealing websites.</p>
      
      <p>During this period, web design was primarily focused on functionality rather than aesthetics. The goal was to make information accessible, not necessarily to create visually stunning experiences.</p>
      
      <h2>The Rise of CSS and Visual Design</h2>
      
      <p>The introduction of Cascading Style Sheets (CSS) in the mid-1990s revolutionized web design. For the first time, designers could separate content from presentation, allowing for more flexible and consistent styling across pages.</p>
      
      <p>As browsers improved their support for CSS, designers began to push the boundaries of what was possible on the web. Layouts became more sophisticated, typography options expanded, and visual design became a priority.</p>
      
      <h2>The Flash Era and Interactive Design</h2>
      
      <p>In the late 1990s and early 2000s, Adobe Flash became a popular tool for creating interactive web experiences. Flash allowed designers to create animations, games, and interactive elements that weren't possible with HTML and CSS alone.</p>
      
      <p>While Flash enabled creative freedom, it also had significant drawbacks, including accessibility issues, performance problems, and security vulnerabilities. These issues eventually led to its decline and the development of more web-native solutions.</p>
      
      <h2>The Modern Web: Responsive Design and Beyond</h2>
      
      <p>The proliferation of mobile devices in the 2010s forced designers to rethink how they approached web design. Responsive design emerged as a solution, allowing websites to adapt to different screen sizes and devices.</p>
      
      <p>Today, web design encompasses a wide range of technologies and approaches. Modern websites can feature complex animations, interactive elements, dynamic content, and sophisticated user experiences, all while maintaining performance and accessibility.</p>
      
      <h2>The Future of Web Design</h2>
      
      <p>As we look to the future, several trends are shaping the evolution of web design:</p>
      
      <ul>
        <li><strong>Artificial Intelligence:</strong> AI is being used to personalize user experiences, generate content, and automate design tasks.</li>
        <li><strong>Voice Interfaces:</strong> As voice assistants become more common, designers are exploring how to create voice-first experiences.</li>
        <li><strong>Web Components:</strong> These reusable, encapsulated elements are making it easier to build consistent design systems.</li>
        <li><strong>Progressive Web Apps:</strong> PWAs combine the best of web and native apps, offering offline functionality and app-like experiences.</li>
      </ul>
      
      <p>The web continues to evolve at a rapid pace, and designers must stay adaptable and open to new technologies and approaches. By understanding the history of web design and staying current with emerging trends, we can create experiences that are both beautiful and functional.</p>
    `
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundPost = blogPosts.find(p => p.slug === params.slug);
    setPost(foundPost || null);
  }, [params.slug]);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <Button className="bg-[#7CFF00] text-black hover:bg-white rounded-full px-6">
              Back to Blog <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navigation />

      {/* Blog Post */}
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-[#7CFF00] mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          
          <div className="mb-8">
            <span className="bg-[#7CFF00] text-black text-xs font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center gap-4 mb-8 text-sm opacity-70">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          
          <div className="relative h-64 md:h-96 mb-12 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-bold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <Button variant="outline" className="rounded-full">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>
      </article>

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