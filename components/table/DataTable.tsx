import { ReactNode } from "react";

type DataTableProps = {
  children: ReactNode;
};

export default function DataTable({
  children,
}: DataTableProps) {
  return (
    <div
      className="
        mt-8
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      <table className="w-full">
        {children}
      </table>
    </div>
  );
}