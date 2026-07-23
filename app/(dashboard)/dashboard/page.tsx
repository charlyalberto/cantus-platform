import DashboardPanel from "@/components/dashboard/DashboardPanel";
import DashboardCard from "@/components/dashboard/DashboardCard";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import PageHeader from "@/components/layout/PageHeader";
import { getDashboard } from "@/lib/api/dashboard";

import {
  Users,
  Music,
  Calendar,
  Presentation,
} from "lucide-react";

export default async function DashboardPage() {
  const dashboard = await getDashboard();

  const stats = [
    {
      title: "Coralistas",
      value: dashboard.cards.coralistas,
      icon: Users,
    },
    {
      title: "Repertório",
      value: 42,
      icon: Music,
    },
    {
      title: "Ensaios",
      value: 3,
      icon: Calendar,
    },
    {
      title: "Eventos",
      value: 8,
      icon: Presentation,
    },
  ];

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Visão geral do Sistema Inteligente de Gestão Coral."
      />

      <WelcomeBanner />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <DashboardPanel title="Próximos Ensaios">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-semibold">
                Sábado • 19:00
              </p>

              <p className="text-sm text-slate-500">
                IEADPE Nova Benfica (no Templo)
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-semibold">
                Quarta • 19:00
              </p>

              <p className="text-sm text-slate-500">
                Salinha do 1º andar
              </p>
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel title="Últimas Atividades">
          <div className="space-y-4">
            <p>✅ João Silva foi cadastrado.</p>
            <p>🎵 Novo repertório adicionado.</p>
            <p>📅 Ensaio confirmado para sábado.</p>
          </div>
        </DashboardPanel>
      </section>
    </>
  );
}