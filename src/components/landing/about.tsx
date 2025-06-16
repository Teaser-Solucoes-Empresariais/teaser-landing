import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Finalista Startup NE - Ciclo 2024/25",
  "Expositor NEON 2025",
  "Apoiados pela FAPEPI - Fundação de Amparo à Pesquisa do Piauí",
  "Apoiados pelo SEBRAE - Serviço Brasileiro de Apoio às Micro e Pequenas Empresas",
]

export default function About() {
  return (
    <section id="sobre" className="h-screen flex justify-center items-center py-20 bg-gradient-to-r from-red-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/evento_ne.png"
              alt="Sobre a Teaser Soluções"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-red-600">5+</div>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div> */}
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                Sobre Nós
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Construindo o futuro com <span className="text-blue-600">inovação</span> e{" "}
                <span className="text-red-600">excelência</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos uma startup piauiense com o propósito de tornar o mercado mais estável e seguro. Garantimos a longevidade das empresas ao eliminar gargalos operacionais e transformar a tomada de decisões em um processo simples, ágil e orientado por dados.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
