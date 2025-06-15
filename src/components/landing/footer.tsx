import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"
import { TeaserText } from "../base/teaser-text"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <TeaserText size="2xl" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex space-x-4">
              <Link target="_blank" href="https://www.linkedin.com/company/teaser-solu%C3%A7%C3%B5es/" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/teaser.solucoes/" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Suporte
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Treinamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@teasersolucoes.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Apoio</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.fapepi.pi.gov.br/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Fapepi
                </Link>
              </li>
              <li>
                <Link href="https://sebrae.com.br/sites/PortalSebrae/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Sebrae
                </Link>
              </li>
              <li>
                <Link href="https://sebrae.com.br/sites/PortalSebrae/startupnordeste" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Startup NE
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Teaser Soluções. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
