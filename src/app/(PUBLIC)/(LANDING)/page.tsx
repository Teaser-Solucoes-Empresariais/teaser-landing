import Hero from "@/components/landing/hero"
import Services from "@/components/landing/services"
import About from "@/components/landing/about"
import Contact from "@/components/landing/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  )
}
