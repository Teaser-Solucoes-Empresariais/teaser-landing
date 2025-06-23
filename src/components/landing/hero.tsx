"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { TeaserText } from "../base/teaser-text"

export default function Hero() {
  return (
      <section
        id="inicio"
        className="min-h-screen flex justify-center items-center relative py-16 sm:py-20 lg:py-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Conteúdo Textual */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  ✨ Soluções Inovadoras
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Transforme seu negócio com a <TeaserText />
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Nosso propósito é impulsionar o crescimento da sua empresa através de soluções tecnológicas personalizadas e eficientes.
                </p>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                    onClick={() => {
                      window.location.href = "/on-progress"
                    }}
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                <Button
                    onClick={() => {
                      alert("Em breve, fique atento a mais novidades!!")
                    }}
                    size="lg"
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Ver Demonstração
                </Button>
              </div>

              {/* Estatísticas - Comentado para uso futuro */}
              {/* <div className="flex items-center justify-center lg:justify-start space-x-6 sm:space-x-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-red-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">98%</div>
                <div className="text-xs sm:text-sm text-gray-600">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-red-600">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Suporte</div>
              </div>
            </div> */}
            </div>

            {/* Imagem e Efeitos */}
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative z-10 max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
                <Image
                    src="/teste.jpg"
                    alt="Teaser Soluções Dashboard"
                    width={600}
                    height={600}
                    className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-auto transition-transform duration-300 hover:scale-105"
                    priority
                />
              </div>

              {/* Efeitos de fundo */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-red-200 rounded-full opacity-20 blur-2xl sm:blur-3xl -z-10"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-200 rounded-full opacity-20 blur-2xl sm:blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
