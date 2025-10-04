import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Break Limits Tee",
      price: "$60.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6040-pH2fpF8AojBynrQrOTVmDmDXVi0wC5.jpg",
      color: "Black",
    },
    {
      id: 2,
      name: "Pain Fighter Tee",
      price: "$60.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6011-o8tj1B560gxZBqFHLYSwVP77A0c25s.jpg",
      color: "Cream",
    },
    {
      id: 3,
      name: "Standard Skull Tee",
      price: "$60.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5996-TwMpxUL8uat4NuwGoL787tDICuUJpd.jpg",
      color: "Black",
    },
    {
      id: 4,
      name: "Standard Skull Tee",
      price: "$60.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5987-hbKFShVEQkbWTjkAVuXx6LObpdDXhT.jpg",
      color: "White",
    },
    {
      id: 5,
      name: "Gym Rat Tee",
      price: "$60.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5973-2V2h3OAvZFBAISE1TYeW06xsVZHRe7.jpg",
      color: "Cream",
    },
    {
      id: 6,
      name: "Gym Rat Tee",
      price: "$60.000",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5977-WqhfD9g1RNhs562bd0gwGw80TLaypT.jpg",
      color: "White",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bq5IgcoPlmZgHNkxWJcy268WlirYh7.jpg"
                alt="Nova Fit"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#productos" className="text-zinc-300 hover:text-white transition-colors font-medium">
                Productos
              </Link>
              <Link href="#colecciones" className="text-zinc-300 hover:text-white transition-colors font-medium">
                Colecciones
              </Link>
              <Link href="#nuevos" className="text-zinc-300 hover:text-white transition-colors font-medium">
                Nuevos
              </Link>
              <Link href="#contacto" className="text-zinc-300 hover:text-white transition-colors font-medium">
                Contacto
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-zinc-300 hover:text-white">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden text-zinc-300 hover:text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Rompe Tus <span className="text-red-500">Límites</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
              Ropa fitness de alta calidad con diseños únicos para quienes entrenan duro y viven el estilo de vida
              fitness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold">
                Ver Colección
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-white hover:bg-zinc-800 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                Nuevos Lanzamientos
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 pointer-events-none" />
      </section>

      {/* Featured Banner */}
      <section className="bg-red-600 py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-white font-semibold text-sm md:text-base">
            🔥  • ENTREGAS EN TODO EL PAÍS •    🔥
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="productos" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Colección Destacada</h2>
              <p className="text-zinc-400 text-lg">Diseños exclusivos para verdaderos atletas</p>
            </div>
            <Button variant="ghost" className="text-red-500 hover:text-red-400 hidden md:flex">
              Ver Todo →
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden bg-zinc-800">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">NUEVO</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-zinc-400 text-sm mb-1">{product.color}</p>
                      <p className="text-2xl font-bold text-white">{product.price}</p>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">Agregar</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Únete a la Comunidad Nova Fit</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sigue nuestras redes sociales para ver los últimos lanzamientos, promociones exclusivas y contenido fitness
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-zinc-100 px-8 py-6 text-lg font-semibold">
            Seguir en Instagram
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bq5IgcoPlmZgHNkxWJcy268WlirYh7.jpg"
                alt="Nova Fit"
                width={80}
                height={80}
                className="object-contain mb-4"
              />
              <p className="text-zinc-400 text-sm">Ropa fitness de calidad premium para atletas que rompen límites.</p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Tienda</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Colecciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Nuevos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Ofertas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Ayuda</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Envíos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Devoluciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Tallas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-400 text-sm">© 2025 Nova Fit. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
