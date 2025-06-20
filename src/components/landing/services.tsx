import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3, Rocket, FolderCode } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Soluções Rápidas",
    description: "Ganhe tempo na sua rotina, utilizando soluções que funcionam de forma automatizada.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Atuamos em conformidade com a LGPD. Trabalhe com segurança para seus dados e informações.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Conte com o apoio de profissionais multifacetados e que podem ajudar sua empresa em diversas frentes.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Seus dados são mais do que números, são pistas de como melhorar seu negócio. Tenha análises de como crescer sua empresa.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Rocket,
    title: "Crescimento Acelerado",
    description: "Agilize suas atividades diárias e tenha mais liberdade para buscar o crescimento da sua organização.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: FolderCode,
    title: "Software Personalizável",
    description: "Tenha acesso a somente aquilo que faz sentido para seu negócio.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

export default function Services() {
  return (
      <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Nossos Serviços
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Soluções Completas para seu{" "}
              <span className="text-red-600">Negócio</span>
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Oferecemos uma gama de serviços personalizados para atender às necessidades específicas da sua empresa, desde desenvolvimento de software até consultoria.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
                <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full"
                >
                  <CardHeader className="pb-4">
                    <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${service.color}`} />
                    </div>

                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* CTA Section */}
          {/* <div className="text-center mt-16 sm:mt-20">
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105"
          >
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div> */}
        </div>
      </section>
  )
}