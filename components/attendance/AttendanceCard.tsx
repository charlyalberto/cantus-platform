"use client";

import CoralistaAvatar from "@/components/coralistas/CoralistaAvatar";

type AttendanceCardProps = {
  nome: string;
  naipe: string;
};

export default function AttendanceCard({
  nome,
  naipe,
}: AttendanceCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition
        hover:border-[#173F9A]
        hover:shadow-md
      "
    >
      <div className="flex items-center gap-4">

        <CoralistaAvatar nome={nome} />

        <div>

          <h3 className="font-semibold">
            {nome}
          </h3>

          <p className="text-sm text-slate-500">
            {naipe}
          </p>

        </div>

      </div>

      <div className="mt-6 flex gap-2">

        <button
          className="
            flex-1
            rounded-xl
            bg-green-100
            py-2
            font-medium
            text-green-700
            transition
            hover:bg-green-200
          "
        >
          Presente
        </button>

        <button
          className="
            flex-1
            rounded-xl
            bg-red-100
            py-2
            font-medium
            text-red-700
            transition
            hover:bg-red-200
          "
        >
          Ausente
        </button>

      </div>

      <button
        className="
          mt-2
          w-full
          rounded-xl
          bg-amber-100
          py-2
          font-medium
          text-amber-700
          transition
          hover:bg-amber-200
        "
      >
        Justificado
      </button>

    </div>
  );
}