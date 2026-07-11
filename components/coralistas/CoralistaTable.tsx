import CoralistaRow from "@/components/coralistas/CoralistaRow";

import { coralistas } from "@/lib/mock/coralistas";

export default function CoralistaTable() {
  return (
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
            />
          ))}

        </tbody>

      </table>
    </div>
  );
}