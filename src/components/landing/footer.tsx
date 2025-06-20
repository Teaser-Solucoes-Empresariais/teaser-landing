import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"
import { TeaserText } from "../base/teaser-text"

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Grid principal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Seção principal */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-4">
              <div className="text-xl sm:text-2xl font-bold">
                <TeaserText size="2xl" />
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Soluções que levam hiper produtividade para sua empresa. Não deixe que falta de tempo impeça você garantir um crescimento saudável para seu negócio. Conte com nossa ajuda!
              </p>
              {/* Redes sociais */}
              <div className="flex space-x-4">
                <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/teaser-solu%C3%A7%C3%B5es/"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    aria-label="LinkedIn da Teaser Soluções"
                >
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
                <Link
                    target="_blank"
                    href="https://www.instagram.com/teaser.solucoes/"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                    aria-label="Instagram da Teaser Soluções"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </div>
            </div>

            {/* Serviços */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-red-500">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Desenvolvimento
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Suporte
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Consultoria
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Treinamento
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-blue-500">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Equipe
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-red-500">Contato</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li className="break-words">
                  <a
                      href="mailto:contato.teasermkt@gmail.com"
                      className="hover:text-white transition-colors duration-200"
                  >
                    contato.teasermkt@gmail.com
                  </a>
                </li>
                <li>
                  <a
                      href="tel:+5586999689414"
                      className="hover:text-white transition-colors duration-200"
                  >
                    (86) 99968-9414
                  </a>
                </li>
                <li className="text-gray-400">
                  Teresina, Piauí - Brasil
                </li>
              </ul>
            </div>

            {/* Apoio */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-blue-500">Apoio</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                      href="https://www.fapepi.pi.gov.br/"
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                      rel="noopener noreferrer"
                  >
                    Fapepi
                  </Link>
                </li>
                <li>
                  <Link
                      href="https://sebrae.com.br/sites/PortalSebrae/"
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                      rel="noopener noreferrer"
                  >
                    Sebrae
                  </Link>
                </li>
                <li>
                  <Link
                      href="https://sebrae.com.br/sites/PortalSebrae/startupnordeste"
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base block py-1"
                      rel="noopener noreferrer"
                  >
                    Startup NE
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divisor e copyright */}
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Teaser Soluções. Todos os direitos reservados.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-right">
                <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                >
                  Política de Privacidade
                </Link>
                <Link
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
