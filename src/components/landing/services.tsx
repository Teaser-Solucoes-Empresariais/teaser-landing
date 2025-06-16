import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3, Rocket, FolderCode } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Soluções Rápidas",
    description: " Ganhe tempo na sua rotina, utilizando soluções que funcionam de forma automatizada.",
    color: "text-red-600",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Atuamos em conformidade com a LGPD. Trabalhe com segurança para seus dados e informações.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Conte com o apoio de profissionais multifacetados e que podem ajudar sua empresa em diversas frentes.",
    color: "text-red-600",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Seus dados são mais do que números, são pistas de como melhorar seu negócio. Tenha análises de como crescer sua empresa.",
    color: "text-blue-600",
  },
  {
    icon: Rocket,
    title: "Crescimento Acelerado",
    description: "Agilize suas atividades diárias e tenha mais liberdade para buscar o crescimento da sua organização.",
    color: "text-red-600",
  },
  {
    icon: FolderCode,
    title: "Software Personalizável",
    description: "Tenha acesso a somente aquilo que faz sentido para seu negócio.",
    color: "text-blue-600",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="h-screen py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas para seu <span className="text-red-600">Negócio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama de serviços personalizados para atender às necessidades específicas da sua empresa, desde desenvolvimento de software até a consultoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                  <service.icon className={`h-6 w-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
