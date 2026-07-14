"use client";

import {
  Home,
  Users,
  Music,
  Calendar,
  Presentation,
  BarChart3,
  Settings,
  LogOut,
  ClipboardCheck,
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
          <div className="text-5xl">🎼</div>

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

      <nav className="flex-1 overflow-y-auto p-4">

  {/* Geral */}

  <div className="mb-6">

    <p className="mb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
      Geral
    </p>

    <div className="space-y-2">

      <SidebarItem
        icon={Home}
        label="Dashboard"
        href="/dashboard"
      />

      <SidebarItem
        icon={ClipboardCheck}
        label="Chamada"
        href="/chamada"
      />

    </div>

  </div>

  {/* Gestão */}

  <div className="mb-6">

    <p className="mb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
      Gestão
    </p>

    <div className="space-y-2">

      <SidebarItem
        icon={Users}
        label="Coristas"
        href="/coralistas"
      />

      <SidebarItem
        icon={Calendar}
        label="Ensaios"
        href="/ensaios"
      />

      <SidebarItem
        icon={Music}
        label="Repertório"
        href="/repertorio"
      />

      <SidebarItem
        icon={Presentation}
        label="Apresentações"
        href="/eventos"
      />

    </div>

  </div>

  {/* Análises */}

  <div className="mb-6">

    <p className="mb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
      Análises
    </p>

    <div className="space-y-2">

      <SidebarItem
        icon={BarChart3}
        label="Relatórios"
        href="/relatorios"
      />

    </div>

  </div>

  {/* Sistema */}

  <div>

    <p className="mb-3 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
      Sistema
    </p>

    <div className="space-y-2">

      <SidebarItem
        icon={Settings}
        label="Configurações"
        href="/configuracoes"
      />

    </div>

  </div>

</nav>
    </aside>
  );
}
