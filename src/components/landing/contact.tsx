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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato.teasermkt@gmail.com",
      color: "bg-red-100 text-red-600",
      href: "mailto:contato.teasermkt@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(86) 99968-9414",
      color: "bg-blue-100 text-blue-600",
      href: "tel:+5586999689414"
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Teresina, Piauí - Brasil",
      color: "bg-red-100 text-red-600",
      href: null
    }
  ];

  return (
      <section
          id="contato"
          className="min-h-screen py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-red-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block bg-red-100 text-red-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Entre em Contato
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Pronto para <span className="text-blue-600">transformar</span> seu negócio?
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              A Teaser está pronta para ajudar no que você precisa para buscar o próximo passo da sua empresa. Venha descobrir como!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Bloco de informações de contato */}
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Vamos conversar sobre suas necessidades
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Fale conosco e descubra o que podemos fazer por você. Nos envie um e-mail ou fale pelo nosso WhatsApp para marcarmos uma conversa.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((contact, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-200 group"
                    >
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 ${contact.color.split(' ')[0]} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                        <contact.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${contact.color.split(' ')[1]}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-gray-900 text-sm sm:text-base">
                          {contact.title}
                        </div>
                        {contact.href ? (
                            <a
                                href={contact.href}
                                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base break-all"
                            >
                              {contact.info}
                            </a>
                        ) : (
                            <div className="text-gray-600 text-sm sm:text-base">
                              {contact.info}
                            </div>
                        )}
                      </div>
                    </div>
                ))}
              </div>

              {/* CTA adicional para mobile */}
              <div className="lg:hidden text-center pt-4">
                <p className="text-sm text-gray-500 mb-4">
                  Ou preencha o formulário abaixo:
                </p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-red-300 to-blue-300 mx-auto"></div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="pb-4 sm:pb-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 text-center lg:text-left">
                    Envie sua mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-1">
                                  <FormLabel className="text-sm sm:text-base">Nome</FormLabel>
                                  <FormControl>
                                    <Input
                                        placeholder="Seu nome completo"
                                        className="h-10 sm:h-11 text-sm sm:text-base"
                                        {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-1">
                                  <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                                  <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="h-10 sm:h-11 text-sm sm:text-base"
                                        {...field}
                                    />
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
                                <FormLabel className="text-sm sm:text-base">Assunto</FormLabel>
                                <FormControl>
                                  <Input
                                      placeholder="Como podemos ajudar?"
                                      className="h-10 sm:h-11 text-sm sm:text-base"
                                      {...field}
                                  />
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
                                <FormLabel className="text-sm sm:text-base">Mensagem</FormLabel>
                                <FormControl>
                                  <Textarea
                                      placeholder="Descreva seu projeto ou necessidade..."
                                      rows={4}
                                      className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base resize-none"
                                      {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                          )}
                      />

                      <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105 h-11 sm:h-12 text-sm sm:text-base"
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
        </div>
      </section>
  );
}
