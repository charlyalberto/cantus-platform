import { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
};

export default function DashboardCard({
  title,
  value,
  icon: Icon,
}: DashboardCardProps) {
  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        transition-all
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <Icon
        size={34}
        className="text-[#173F9A]"
      />

      <h2 className="mt-5 text-4xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-slate-500">
        {title}
      </p>
    </div>
  );
}