import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string().min(3, { message: "O nome precisa ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  assunto: z.string().min(5, { message: "O assunto precisa ter no mínimo 5 caracteres." }),
  mensagem: z.string().min(10, { message: "A mensagem precisa ter no mínimo 10 caracteres." }),
});

export type ContatoSchema = z.infer<typeof contatoSchema>;
