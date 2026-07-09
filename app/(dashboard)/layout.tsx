import Sidebar from "@/components/navigation/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1 p-10">
        {children}
      </section>
    </main>
  );
}