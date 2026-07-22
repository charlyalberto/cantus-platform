"use client";

import { useRouter } from "next/navigation";

import CoralistaActions from "@/components/coralistas/CoralistaActions";
import CoralistaContact from "@/components/coralistas/CoralistaContact";
import CoralistaInfo from "@/components/coralistas/CoralistaInfo";
import CoralistaStatus from "@/components/coralistas/CoralistaStatus";

import { Coralista } from "@/lib/types/coralista";

type CoralistaRowProps = {
  coralista: Coralista;
  onDelete: () => void;
};

export default function CoralistaRow({
  coralista,
  onDelete,
}: CoralistaRowProps) {
  const router = useRouter();

  return (
    <tr
      className="
        border-b border-slate-100
        transition-colors
        duration-200
        hover:bg-slate-50
        focus-within:bg-slate-50
      "
    >
      <td className="px-6 py-4">
        <CoralistaInfo
          nome={coralista.nome}
          naipe={coralista.naipe}
          dataNascimento={coralista.dataNascimento}
        />
      </td>

      <td className="px-6 py-4">
        <CoralistaContact
          telefone={coralista.telefone}
        />
      </td>

      <td className="px-6 py-4">
        <CoralistaStatus
          ativo={coralista.ativo}
        />
      </td>

      <td className="px-6 py-4">
        <CoralistaActions
          onView={() =>
            router.push(`/coralistas/${coralista.id}`)
          }
          onEdit={() =>
            router.push(`/coralistas/${coralista.id}/editar`)
          }
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}