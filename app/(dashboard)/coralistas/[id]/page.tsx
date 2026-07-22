import Link from "next/link";

import { getCoralista } from "@/lib/api/coralistas";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CoralistaPage({
  params,
}: Props) {
  const { id } = await params;

  const coralista = await getCoralista(id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {coralista.nome}
          </h1>

          <p className="text-sm text-slate-500">
            Informações do coralista.
          </p>
        </div>

        <Link
          href="/coralistas"
          className="text-sm text-slate-600 hover:underline"
        >
          Voltar
        </Link>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Nome</p>
            <p className="font-medium">{coralista.nome}</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">E-mail</p>
            <p className="font-medium">
              {coralista.email || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Telefone</p>
            <p className="font-medium">
              {coralista.telefone || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Data de nascimento
            </p>
            <p className="font-medium">
              {new Date(
                coralista.dataNascimento
              ).toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Naipe</p>
            <p className="font-medium">
              {coralista.naipe}
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link
            href={`/coralistas/${coralista.id}/editar`}
            className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
          >
            Editar
          </Link>

          <button
            className="rounded-lg border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}