import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-xl font-bold">
              designed<span className="text-[#7CFF00]">bydan</span>
            </h1>
          </Link>
          <p className="text-xs ml-2 opacity-70 uppercase tracking-wider">VISUAL | WEB DESIGN</p>
        </div>
        <nav className="flex items-center gap-8">
          <Link href="/servicios" className="text-sm hover:text-[#7CFF00] transition-colors">
            Servicios
          </Link>
          <Link href="/proyectos" className="text-sm hover:text-[#7CFF00] transition-colors">
            Proyectos
          </Link>
          <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6">
            Hablemos de tu proyecto <ArrowLeft className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>

      {/* About Section */}
      <main className="container mx-auto px-4 py-24">
        <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-[#7CFF00] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8">
              Sobre <span className="text-[#7CFF00]">mí</span>
            </h2>
            <div className="space-y-6 text-lg">
              <p>
                Soy Dan, diseñador web y especialista en branding con más de 8 años de experiencia en el sector digital.
              </p>
              <p>
                Mi pasión es transformar ideas en experiencias digitales que conectan con las audiencias y generan
                resultados tangibles para mis clientes.
              </p>
              <p>
                Con un enfoque centrado en el usuario y un ojo atento al detalle, cada proyecto que emprendo está
                diseñado para destacar en el competitivo mundo digital.
              </p>
              <p>
                Mi filosofía de diseño se basa en tres pilares fundamentales: impactar visualmente, comunicar
                efectivamente y convertir estratégicamente.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Experiencia</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-[#7CFF00] pl-6">
                  <div className="text-sm text-[#7CFF00]">2020 - Presente</div>
                  <div className="font-semibold text-lg">Fundador & Director Creativo</div>
                  <div className="opacity-70">designedbydan</div>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-sm opacity-70">2016 - 2020</div>
                  <div className="font-semibold text-lg">Senior UI/UX Designer</div>
                  <div className="opacity-70">Agencia Digital XYZ</div>
                </div>
                <div className="border-l-2 border-white/20 pl-6">
                  <div className="text-sm opacity-70">2014 - 2016</div>
                  <div className="font-semibold text-lg">Web Designer</div>
                  <div className="opacity-70">Estudio Creativo ABC</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Dan - Diseñador Web"
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7CFF00]/20 flex items-center justify-center">
                  <span className="text-[#7CFF00] text-xl">8+</span>
                </div>
                <div>
                  <div className="text-sm opacity-70">Años de</div>
                  <div className="font-semibold">Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              designed<span className="text-[#7CFF00]">bydan</span>
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
            © {new Date().getFullYear()} designedbydan. Todos los derechos reservados.
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

