"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TeaserText } from "../base/teaser-text"

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed w-screen z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl cursor-pointer">
              <TeaserText size={"2xl"} />
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              Início
            </Link>
            <Link href="#servicos" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              Serviços
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              Sobre
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
              Contato
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer"
              onClick={() => window.location.href = "/on-progress"}
            >
              Login
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">Começar Agora</Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = "/on-progress"}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
