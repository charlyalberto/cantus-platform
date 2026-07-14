export default function AttendanceProgress() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold">
          Progresso da Chamada
        </h3>

        <span className="font-bold text-[#173F9A]">
          0%
        </span>

      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full w-0 rounded-full bg-[#173F9A]"
        />

      </div>

      <p className="mt-3 text-sm text-slate-500">
        0 de 120 coralistas registrados.
      </p>

    </section>
  );
}