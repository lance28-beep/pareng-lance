import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProyectosPage() {
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
          <Link href="#" className="text-sm text-[#7CFF00]">
            Proyectos
          </Link>
          <Button className="bg-white text-black hover:bg-[#7CFF00] rounded-full px-6">
            Hablemos de tu proyecto <ArrowLeft className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>

      {/* Projects Section */}
      <main className="container mx-auto px-4 py-24">
        <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-[#7CFF00] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>

        <h2 className="text-5xl font-bold mb-16">
          Nuestros <span className="text-[#7CFF00]">proyectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="rounded-xl overflow-hidden relative group">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Proyecto de diseño web"
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold">Diseño Automotriz</h3>
                <p className="text-sm opacity-80">Branding y diseño web para empresa de lujo</p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-xl overflow-hidden relative group">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Proyecto de diseño web"
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold">Plataforma Web</h3>
                <p className="text-sm opacity-80">Diseño de interfaz para constructor de sitios</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-xl overflow-hidden relative group">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Proyecto de diseño web"
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold">App Móvil</h3>
                <p className="text-sm opacity-80">Diseño de interfaz para aplicación financiera</p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="rounded-xl overflow-hidden relative group">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Proyecto de diseño web"
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold">E-commerce</h3>
                <p className="text-sm opacity-80">Tienda online para marca de moda</p>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="rounded-xl overflow-hidden relative group">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Proyecto de diseño web"
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold">Sitio Corporativo</h3>
                <p className="text-sm opacity-80">Diseño web para empresa de tecnología</p>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="rounded-xl overflow-hidden relative group">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Proyecto de diseño web"
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div>
                <h3 className="text-xl font-bold">Dashboard</h3>
                <p className="text-sm opacity-80">Interfaz de administración para SaaS</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

