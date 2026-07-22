import Link from "next/link";

import CoralistaForm from "@/components/coralistas/CoralistaForm";

export default function NovoCoralistaPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Novo Coralista
          </h1>

          <p className="text-sm text-slate-500">
            Preencha os dados para cadastrar um novo coralista.
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
        <CoralistaForm mode="create"/>
      </div>
    </div>
  );
}