import {
  Home,
  Users,
  Music,
  Calendar,
  Presentation,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside
      className="
        flex
        h-screen
        w-72
        flex-col
        border-r
        border-slate-200
        bg-white
      "
    >
      {/* Logo */}

      <div className="border-b border-slate-200 p-8">

        <div className="text-center">

          <div className="text-5xl">
            🎼
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-wider text-[#173F9A]">
            CANTUS
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Sistema Inteligente
            <br />
            de Gestão Coral
          </p>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 p-4">

            <SidebarItem
        icon={Home}
        label="Dashboard"
        href="/dashboard"
      />

      <SidebarItem
        icon={Users}
        label="Coralistas"
        href="/coralistas"
      />

      <SidebarItem
        icon={Music}
        label="Repertório"
        href="/repertorio"
      />

      <SidebarItem
        icon={Calendar}
        label="Ensaios"
        href="/ensaios"
      />

      <SidebarItem
        icon={Presentation}
        label="Apresentações"
        href="/eventos"
      />

      <SidebarItem
        icon={BarChart3}
        label="Relatórios"
        href="/relatorios"
      />

      <SidebarItem
        icon={Settings}
        label="Configurações"
        href="/configuracoes"
      />

      </nav>

      {/* Usuário */}

      <div className="border-t border-slate-200 p-6">

        <div className="mb-5">

          <p className="font-semibold">
            Charly Alberto
          </p>

          <p className="text-sm text-slate-500">
            Administrador
          </p>

        </div>

        <SidebarItem
          icon={LogOut}
          label="Sair"
          href="#"
        />

      </div>

    </aside>
  );
}