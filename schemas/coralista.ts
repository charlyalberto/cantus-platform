import { z } from "zod";

export const coralistaSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, "O nome deve ter pelo menos 3 caracteres.")
    .max(100, "O nome deve ter no máximo 100 caracteres."),

  telefone: z
  .string()
  .trim()
  .refine(
    (value) => {
      if (!value) return true;

      const numbers = value.replace(/\D/g, "");

      return numbers.length === 10 || numbers.length === 11;
    },
    {
      message: "Informe um telefone válido.",
    }
  )
  .optional(),

  dataNascimento: z
        .string()
        .min(1, "Informe a data de nascimento."),

        email: z
        .union([
            z.literal(""),
            z.email("Informe um e-mail válido."),
        ])
        .optional(),

        naipe: z.enum([
    "SOPRANO",
    "CONTRALTO",
    "TENOR",
    "BAIXO",
  ]),
});

export type CoralistaFormData = z.infer<typeof coralistaSchema>;