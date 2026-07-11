import CoralistaActions from "@/components/coralistas/CoralistaActions";
import CoralistaContact from "@/components/coralistas/CoralistaContact";
import CoralistaInfo from "@/components/coralistas/CoralistaInfo";
import CoralistaStatus from "@/components/coralistas/CoralistaStatus";

import { Coralista } from "@/lib/types/coralista";

type CoralistaRowProps = {
  coralista: Coralista;
};

export default function CoralistaRow({
  coralista,
}: CoralistaRowProps) {
  return (
    <tr
      className="
        border-b
        border-slate-100
        transition
        hover:bg-slate-50
      "
    >
      <td className="px-6 py-4">
        <CoralistaInfo
          nome={coralista.nome}
          naipe={coralista.naipe}
        />
      </td>

      <td className="px-6 py-4">
        <CoralistaContact
          telefone={coralista.telefone}
        />
      </td>

      <td className="px-6 py-4">
        <CoralistaStatus
          status={coralista.status}
        />
      </td>

      <td className="px-6 py-4">
        <CoralistaActions />
      </td>
    </tr>
  );
}