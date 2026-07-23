import { z } from "zod";

export const ensaioSchema = z.object({
  titulo: z
    .string()
    .min(3, "Informe o título do ensaio."),

  data: z
    .string()
    .min(1, "Informe a data."),

  hora: z
    .string()
    .min(1, "Informe o horário."),

  local: z
    .string()
    .optional(),

  tipo: z.enum([
    "GERAL",
    "NAIPE",
    "EXTRA",
    "APRESENTACAO",
  ]),

  descricao: z
    .string()
    .optional(),
});

export type EnsaioFormData = z.infer<typeof ensaioSchema>;