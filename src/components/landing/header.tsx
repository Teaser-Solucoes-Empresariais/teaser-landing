"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { TeaserText } from "../base/teaser-text"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 64
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
      <>
        {/* Header fixo */}
        <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <Link href="/" className="text-2xl">
                  <TeaserText size={"2xl"} />
                </Link>
              </div>

              {/* Navegação Desktop */}
              <nav className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </Link>
                ))}
              </nav>

              {/* Botões Desktop */}
              <div className="hidden md:flex items-center space-x-3">
                <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer transition-colors duration-200"
                    onClick={() => window.location.href = "/on-progress"}
                >
                  Login
                </Button>
                <Button
                    className="bg-red-600 hover:bg-red-700 text-white cursor-pointer transition-colors duration-200"
                    onClick={() => window.location.href = "/on-progress"}
                >
                  Começar Agora
                </Button>
              </div>

              {/* Menu Mobile */}
              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Abrir menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle className="text-left">
                        <TeaserText size={"xl"} />
                      </SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-col p-4 space-y-6">
                      {/* Navegação Mobile */}
                      <nav className="flex flex-col space-y-4">
                        {navigationItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className="text-left text-lg text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium py-2"
                            >
                              {item.label}
                            </button>
                        ))}
                      </nav>

                      {/* Divisor */}
                      <div className="border-t border-gray-200 my-6"></div>

                      {/* Botões Mobile */}
                      <div className="flex flex-col space-y-3">
                        <Button
                            variant="outline"
                            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            onClick={() => {
                              setIsOpen(false)
                              window.location.href = "/on-progress"
                            }}
                        >
                          Login
                        </Button>
                        <Button
                            className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
                            onClick={() => {
                              setIsOpen(false)
                              window.location.href = "/on-progress"
                            }}
                        >
                          Começar Agora
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        <div className="h-16"></div>
      </>
  )
}
