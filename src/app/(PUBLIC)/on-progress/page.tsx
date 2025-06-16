import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function OnProgress () {
  return (
    <main className="h-screen flex justify-center items-center">
      <Card className="container bg-gray-50 flex justify-center content-center w-fit h-fit p-10 shadow-lg">
        <CardContent className="flex flex-col gap-4 text-center w-full h-full justify-center">
          <h1 className="text-4xl font-bold text-red-600">PLATAFORMA EM CONSTRUÇÃO...</h1>
          <h3 className="text-2xl">FIQUE ATENTO NAS REDES PARA MAIS ATUALIZAÇÕES</h3>

          <Link
            href="/"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Voltar para a página inicial
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}
