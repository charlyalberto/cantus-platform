export default function AttendanceSummary() {
  return (
    <section className="grid gap-4 md:grid-cols-4">

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Presentes
        </p>

        <h2 className="mt-2 text-3xl font-bold text-green-600">
          0
        </h2>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Ausentes
        </p>

        <h2 className="mt-2 text-3xl font-bold text-red-600">
          0
        </h2>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Justificados
        </p>

        <h2 className="mt-2 text-3xl font-bold text-amber-500">
          0
        </h2>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">
          Pendentes
        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-700">
          120
        </h2>
      </div>

    </section>
  );
}