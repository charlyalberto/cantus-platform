import Link from "next/link";

import CoralistaForm from "@/components/coralistas/CoralistaForm";
import { getCoralista } from "@/lib/api/coralistas";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditarCoralistaPage({
  params,
}: Props) {
  const { id } = await params;

  const coralista = await getCoralista(id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Editar Coralista
          </h1>

          <p className="text-sm text-slate-500">
            Atualize os dados do coralista.
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
        <CoralistaForm
          mode="edit"
          initialData={coralista}
        />
      </div>
    </div>
  );
}