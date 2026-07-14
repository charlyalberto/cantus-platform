export type AttendanceStatus =
  | "Pendente"
  | "Presente"
  | "Ausente"
  | "Justificado";

export interface Attendance {

  id: number;

  nome: string;

  naipe: string;

  situacao: AttendanceStatus;

}