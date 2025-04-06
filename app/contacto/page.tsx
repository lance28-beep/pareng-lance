import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactoPage() {
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
        </nav>
      </header>

      {/* Contact Section */}
      <main className="container mx-auto px-4 py-24">
        <Link href="/" className="inline-flex items-center text-sm mb-12 hover:text-[#7CFF00] transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Hablemos de tu <span className="text-[#7CFF00]">proyecto</span>
            </h2>
            <p className="text-lg opacity-80 mb-8">
              Cuéntanos sobre tu idea y cómo podemos ayudarte a transformarla en una experiencia digital única.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center">
                  <span className="text-[#7CFF00]">📧</span>
                </div>
                <div>
                  <p className="text-sm opacity-70">Email</p>
                  <p className="font-medium">hola@designedbydan.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#7CFF00]/20 flex items-center justify-center">
                  <span className="text-[#7CFF00]">📱</span>
                </div>
                <div>
                  <p className="text-sm opacity-70">Teléfono</p>
                  <p className="font-medium">+34 123 456 789</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm">
                  Nombre
                </label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  className="bg-white/10 border-white/10 focus:border-[#7CFF00]/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-white/10 border-white/10 focus:border-[#7CFF00]/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className="bg-white/10 border-white/10 focus:border-[#7CFF00]/50"
                  rows={5}
                />
              </div>

              <Button className="w-full bg-[#7CFF00] text-black hover:bg-[#7CFF00]/90">Enviar mensaje</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

