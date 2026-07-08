import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  href: string;
};

export default function SidebarItem({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-slate-600
        transition-all
        hover:bg-blue-50
        hover:text-[#173F9A]
      "
    >
      <Icon size={20} />

      <span className="font-medium">
        {label}
      </span>
    </Link>
  );
}