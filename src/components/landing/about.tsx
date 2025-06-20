"use client"
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
      <section
          id="sobre"
          className="min-h-screen flex justify-center items-center py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-red-50 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Imagem */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <Image
                    src="/evento_ne.png"
                    alt="Sobre a Teaser Soluções"
                    width={600}
                    height={500}
                    className="rounded-xl sm:rounded-2xl shadow-xl w-full h-auto transition-transform duration-300 hover:scale-105"
                />

                {/* Card de estatística */}
                {/* <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-red-600">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Anos de Experiência</div>
              </div> */}
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-red-200 rounded-full opacity-20 blur-2xl -z-10"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10"></div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Sobre Nós
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Construindo o futuro com{" "}
                  <span className="text-blue-600">inovação</span> e{" "}
                  <span className="text-red-600">excelência</span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Somos uma startup piauiense com o propósito de tornar o mercado mais estável e seguro. Garantimos a longevidade das empresas ao eliminar gargalos operacionais e transformar a tomada de decisões em um processo simples, ágil e orientado por dados.
                </p>
              </div>

              {/* Lista de Conquistas */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-start sm:items-center space-x-3 justify-center lg:justify-start group"
                    >
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed text-left">
                    {feature}
                  </span>
                    </div>
                ))}
              </div>

              {/* Botão de Ação */}
              <div className="pt-2 sm:pt-4">
                <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    onClick={() => {
                      window.location.href = "/on-progress"
                    }}
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}