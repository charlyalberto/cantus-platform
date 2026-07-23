import { Badge } from "@/components/ui/badge";
import { formatDateTime } from "@/lib/utils/date";

interface Ensaio {
  id: string;
  titulo: string;
  descricao?: string;
  data: string;
  local: string;
  tipo: string;
  ativo: boolean;
}

interface EnsaioTableProps {
  ensaios: Ensaio[];
}

export function EnsaioTable({ ensaios }: EnsaioTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      <table className="w-full">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="p-3 text-left font-semibold">Título</th>
            <th className="p-3 text-left font-semibold">Data</th>
            <th className="p-3 text-left font-semibold">Local</th>
            <th className="p-3 text-center font-semibold">Tipo</th>
          </tr>
        </thead>

        <tbody>
          {ensaios.length > 0 ? (
            ensaios.map((ensaio) => (
              <tr
                key={ensaio.id}
                className="border-b transition-colors hover:bg-muted/50"
              >
                <td className="p-3">{ensaio.titulo}</td>

                <td className="p-3">
                  {formatDateTime(ensaio.data)}
                </td>

                <td className="p-3">{ensaio.local}</td>

                <td className="p-3 text-center">
                  <Badge variant="secondary">
                    {ensaio.tipo}
                  </Badge>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="p-6 text-center text-muted-foreground"
              >
                Nenhum ensaio cadastrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}