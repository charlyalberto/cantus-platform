import { ReactNode } from "react";

type DashboardPanelProps = {
  title: string;
  children: ReactNode;
};

export default function DashboardPanel({
  title,
  children,
}: DashboardPanelProps) {
  return (
    <section
      className="
        rounded-2xl
        bg-white
        shadow-sm
        overflow-hidden
      "
    >
      <header
        className="
          border-b
          border-slate-200
          px-6
          py-4
        "
      >
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>
      </header>

      <div className="p-6">
        {children}
      </div>
    </section>
  );
}