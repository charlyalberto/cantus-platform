export type Naipe =
  | "SOPRANO"
  | "CONTRALTO"
  | "TENOR"
  | "BAIXO";

export type Coralista = {
  id: string;
  nome: string;
  telefone: string | null;
  email: string | null;
  dataNascimento: string | null;
  naipe: Naipe;
  ativo: boolean;
  createdAt: string;
  updatedAt: string;
};