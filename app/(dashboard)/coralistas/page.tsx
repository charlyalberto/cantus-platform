import CoralistaTable from "@/components/coralistas/CoralistaTable";
import CoralistaToolbar from "@/components/coralistas/CoralistaToolbar";
import PageHeader from "@/components/layout/PageHeader";

export default function CoralistasPage() {
  return (
    <>
      <PageHeader
        title="Coralistas"
        description="Gerencie todos os integrantes do coral."
      />

      <CoralistaToolbar />
      <CoralistaTable />
    </>
  );
}