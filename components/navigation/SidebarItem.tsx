"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `
          relative
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          transition-all
          duration-200
        `,
        active
          ? `
            bg-blue-50
            text-[#173F9A]
            font-semibold
            shadow-sm
          `
          : `
            text-slate-600
            hover:bg-slate-100
            hover:text-[#173F9A]
          `
      )}
    >
      {active && (
        <span
          className="
            absolute
            left-0
            top-2
            bottom-2
            w-1
            rounded-r-full
            bg-[#173F9A]
          "
        />
      )}

      <Icon
        size={20}
        className={cn(
          active && "text-[#173F9A]"
        )}
      />

      <span>{label}</span>
    </Link>
  );
}