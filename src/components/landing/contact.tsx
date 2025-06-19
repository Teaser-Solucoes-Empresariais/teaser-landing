"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contatoSchema } from "@/utils/schemas/contato_schema";
import { useMutation } from "@tanstack/react-query"
import type { ContatoSchema } from "@/utils/schemas/contato_schema";
import { useTeaserService } from "@/hooks/services/use-teaser-service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";


export default function Contact() {
  const { contactUs } = useTeaserService()

  const form = useForm<ContatoSchema>({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    },
  });

  const { mutate: mutateContact, isPending: contactPending } = useMutation<ContatoSchema, unknown, ContatoSchema>({
    mutationFn: (data: ContatoSchema) => {
      return contactUs(data) as unknown as Promise<ContatoSchema>
    },
    onSuccess: () => {
      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    },
    onError: () => {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }
  })

  function onSubmit(data: ContatoSchema) {
    mutateContact(data)
  }

  return (
    <section id="contato" className="h-screen py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Entre em Contato
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pronto para <span className="text-blue-600">transformar</span> seu negócio?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Teaser está pronta para ajudar no que você precisa para buscar o próximo passo da sua empresa. Venha descobrir como!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bloco de informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vamos conversar sobre suas necessidades</h3>
              <p className="text-gray-600 leading-relaxed">
                Fale conosco e descubra o que podemos fazer por você. Nos envie um e-mail ou fale pelo nosso WhatsApp para marcarmos uma conversa.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600 break-all">contato.teasermkt@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Telefone</div>
                  <div className="text-gray-600">(86) 99968-9414</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Endereço</div>
                  <div className="text-gray-600">Teresina, Piauí - Brasil</div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome completo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="assunto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assunto</FormLabel>
                        <FormControl>
                          <Input placeholder="Como podemos ajudar?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mensagem"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Descreva seu projeto ou necessidade..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    disabled={contactPending}
                  >
                    {contactPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Mensagem"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
