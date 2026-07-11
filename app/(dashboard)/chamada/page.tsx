import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { ClipboardCheck } from "lucide-react";

export default function ChamadaPage() {
  return (
    <>
      <PageHeader
        title="Chamada"
        description="Realize o registro de presença dos coralistas."
      />

      <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center justify-center gap-6 text-center">

          <ClipboardCheck
            size={60}
            className="text-[#173F9A]"
          />

          <div>
            <h2 className="text-2xl font-semibold text-slate-800">
              Iniciar chamada
            </h2>

            <p className="mt-2 text-slate-500">
              Escolha um ensaio e registre a presença dos coralistas.
            </p>
          </div>

          <Button size="lg">
            Iniciar Chamada
          </Button>

        </div>
      </div>
    </>
  );
}