import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServiciosPage() {
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
          <Link href="#" className="text-sm text-[#7CFF00]">
            Servicios
          </Link>
          <Link href="/#proyectos" className="text-sm hover:text-[#7CFF00] transition-colors">
            Proyectos
          </Link>
          <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6">
            Hablemos de tu proyecto <ArrowLeft className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>

      {/* Services Section */}
      <main className="container mx-auto px-4 py-24">
        <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-[#7CFF00] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>

        <h2 className="text-5xl font-bold mb-16">
          Nuestros <span className="text-[#7CFF00]">servicios</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="border border-white/10 rounded-xl p-8 hover:border-[#7CFF00]/50 transition-colors">
            <div className="w-12 h-12 bg-[#7CFF00]/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-[#7CFF00] text-xl">01</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Diseño Web</h3>
            <p className="text-white/70 mb-6">
              Creamos sitios web atractivos, funcionales y optimizados para convertir visitantes en clientes.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Diseño UI/UX
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Desarrollo Frontend
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Optimización SEO
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="border border-white/10 rounded-xl p-8 hover:border-[#7CFF00]/50 transition-colors">
            <div className="w-12 h-12 bg-[#7CFF00]/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-[#7CFF00] text-xl">02</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Branding</h3>
            <p className="text-white/70 mb-6">
              Desarrollamos identidades de marca memorables que conectan con tu audiencia y destacan en el mercado.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Diseño de logotipos
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Identidad visual
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Estrategia de marca
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="border border-white/10 rounded-xl p-8 hover:border-[#7CFF00]/50 transition-colors">
            <div className="w-12 h-12 bg-[#7CFF00]/20 rounded-full flex items-center justify-center mb-6">
              <span className="text-[#7CFF00] text-xl">03</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Diseño UI/UX</h3>
            <p className="text-white/70 mb-6">
              Creamos interfaces intuitivas y experiencias de usuario que maximizan la conversión y satisfacción.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Wireframing y prototipos
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Diseño de interfaces
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#7CFF00] rounded-full mr-2"></span>
                Testing de usabilidad
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

