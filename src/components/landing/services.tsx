import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3, Rocket, FolderCode } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Soluções Rápidas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    color: "text-red-600",
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    color: "text-red-600",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    color: "text-blue-600",
  },
  {
    icon: Rocket,
    title: "Crescimento Acelerado",
    description: "Et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
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
    <section id="servicos" className="py-20 bg-white">
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
