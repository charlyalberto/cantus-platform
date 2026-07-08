import {
  Home,
  Users,
  Music,
  Calendar,
} from "lucide-react";

import SidebarItem from "@/components/navigation/SidebarItem";

export default function SidebarTest() {
  return (
    <main className="min-h-screen bg-slate-100 p-12">

      <div className="w-72 rounded-2xl bg-white p-4 shadow">

        <SidebarItem
          icon={Home}
          label="Dashboard"
          href="#"
        />

        <SidebarItem
          icon={Users}
          label="Coralistas"
          href="#"
        />

        <SidebarItem
          icon={Music}
          label="Repertório"
          href="#"
        />

        <SidebarItem
          icon={Calendar}
          label="Ensaios"
          href="#"
        />

      </div>

    </main>
  );
}