import NaipeBadge from "./NaipeBadge";
import AgeText from "./AgeText";
import CoralistaAvatar from "./CoralistaAvatar";

type CoralistaInfoProps = {
  nome: string;
  naipe: string;
  dataNascimento: string | null;
};

function formatarData(data: string | null) {
  if (!data) return "";

  return new Date(data).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
}

function calcularIdade(data: string | null) {
  if (!data) return 0;

  const nascimento = new Date(data);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  const fezAniversario =
    hoje.getMonth() > nascimento.getMonth() ||
    (hoje.getMonth() === nascimento.getMonth() &&
      hoje.getDate() >= nascimento.getDate());

  if (!fezAniversario) {
    idade--;
  }

  return idade;
}

export default function CoralistaInfo({
  nome,
  naipe,
  dataNascimento,
}: CoralistaInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <CoralistaAvatar nome={nome} />

      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-slate-900">
          {nome}
        </h3>

        <div className="flex items-center gap-2">
          <NaipeBadge naipe={naipe} />

          {dataNascimento && (
            <AgeText idade={calcularIdade(dataNascimento)} />
          )}
        </div>

        {dataNascimento && (
          <p className="text-xs text-slate-400">
            📅 {formatarData(dataNascimento)}
          </p>
        )}
      </div>
    </div>
  );
}