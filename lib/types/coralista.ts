export type StatusCoralista =
  | "Ativo"
  | "Inativo";

export type Naipe =
  | "Soprano"
  | "Contralto"
  | "Tenor"
  | "Baixo";

export type Coralista = {
  id: number;
  nome: string;
  naipe: Naipe;
  telefone: string;
  status: StatusCoralista;
};