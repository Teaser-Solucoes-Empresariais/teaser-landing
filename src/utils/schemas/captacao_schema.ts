import { z } from "zod";

export const captacaoSchema = z.object({
  personInfo: z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    companyName: z.string().min(1, "Nome da empresa é obrigatório"),
    phone: z.string().min(1, "Telefone é obrigatório"),
    email: z.string().email("E-mail inválido"),
  }),
  companyInfo: z.object({
    companySize: z.string().min(1, "Tamanho da empresa é obrigatório"),
    companySector: z.string().min(1, "Setor da empresa é obrigatório"),
    marketTime: z.string().min(1, "Tempo de mercado é obrigatório"),
    timeEfficiency: z.string().min(1, "Eficiência de tempo é obrigatória"),
    managementMethod: z.string().min(1, "Método de gestão é obrigatório"),
    usedSoftware: z.string().optional(),
    dataSpeedInterest: z.string().min(1, "Interesse em velocidade de dados é obrigatório"),
    reportFamiliarity: z.string().min(1, "Familiaridade com relatórios é obrigatória"),
    costReductionBelief: z.string().min(1, "Crença em redução de custos é obrigatória"),
    productionGainBelief: z.string().min(1, "Crença em ganho de produção é obrigatória"),
    expansionPlans: z.string().min(1, "Planos de expansão são obrigatórios"),
    managementKnowledge: z.string().min(1, "Conhecimento em gestão é obrigatório"),
    technologyOpenness: z.string().min(1, "Abertura à tecnologia é obrigatória"),
    preferredTech: z.string().min(1, "Tecnologia preferida é obrigatória"),
  }),
});

export type CaptacaoSchema = z.infer<typeof captacaoSchema>;