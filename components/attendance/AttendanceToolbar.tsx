import { Search } from "lucide-react";

export default function AttendanceToolbar() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            py-3
            pl-11
            pr-4
            outline-none
            focus:border-[#173F9A]
          "
          placeholder="Pesquisar coralista..."
        />

      </div>

    </section>
  );
}