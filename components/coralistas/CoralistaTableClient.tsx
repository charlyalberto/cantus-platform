"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import CoralistaRow from "@/components/coralistas/CoralistaRow";
import DeleteCoralistaDialog from "@/components/coralistas/DeleteCoralistaDialog";

import { deleteCoralista } from "@/lib/api/coralistas";
import { Coralista } from "@/lib/types/coralista";

type CoralistaTableClientProps = {
  coralistas: Coralista[];
};

export default function CoralistaTableClient({
  coralistas,
}: CoralistaTableClientProps) {
  const router = useRouter();

  const [selected, setSelected] = useState<Coralista | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!selected) return;

    try {
      setLoading(true);

      await deleteCoralista(selected.id);

      toast.success("Coralista excluído com sucesso.");

      setSelected(null);

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Não foi possível excluir o coralista.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Coralista
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Contato
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold">
                Situação
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {coralistas.map((coralista) => (
              <CoralistaRow
                key={coralista.id}
                coralista={coralista}
                onDelete={() => setSelected(coralista)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <DeleteCoralistaDialog
        open={!!selected}
        nome={selected?.nome ?? ""}
        loading={loading}
        onCancel={() => setSelected(null)}
        onConfirm={handleDelete}
      />
    </>
  );
}