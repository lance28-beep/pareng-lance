import Link from "next/link"

export default function Navigation() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">
            Pareng <span className="text-[#7CFF00]">Lance</span>
          </h1>
        </Link>
        <p className="text-xs ml-2 opacity-70 uppercase tracking-wider">VISUAL | WEB DESIGN</p>
      </div>
      
      <nav className="hidden md:flex items-center space-x-8">
        <Link 
          href="/servicios" 
          className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
        >
          Servicios
        </Link>
        <Link 
          href="/proyectos" 
          className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
        >
          Proyectos
        </Link>
        <Link 
          href="/blog" 
          className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
        >
          Blog
        </Link>
        <Link 
          href="/about" 
          className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
        >
          About
        </Link>
        <Link 
          href="/contacto" 
          className="text-sm opacity-70 hover:opacity-100 hover:text-[#7CFF00] transition-colors"
        >
          Contacto
        </Link>
      </nav>
      
      {/* Mobile menu button - would need JavaScript to toggle */}
      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  )
} 