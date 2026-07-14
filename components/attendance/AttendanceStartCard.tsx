import { ClipboardCheck } from "lucide-react";

import { Button } from "@/components/ui/Button";

type AttendanceStartCardProps = {
  onStart: () => void;
};

export default function AttendanceStartCard({
  onStart,
}: AttendanceStartCardProps) {
  return (
    <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">

      <div className="flex flex-col items-center text-center">

        <ClipboardCheck
          size={60}
          className="text-[#173F9A]"
        />

        <h2 className="mt-6 text-3xl font-bold">
          Nova Chamada
        </h2>

        <p className="mt-3 text-slate-500">
          Escolha um ensaio e registre a presença dos coralistas.
        </p>

        <Button
          className="mt-8"
          size="lg"
          onClick={onStart}
        >
          ▶ Iniciar Chamada
        </Button>

      </div>

    </section>
  );
}