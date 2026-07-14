import PageHeader from "@/components/layout/PageHeader";

import AttendanceSession from "@/components/attendance/AttendanceSession";

export default function ChamadaPage() {
  return (
    <>
      <PageHeader
        title="Chamada"
        description="Registre a presença dos coralistas durante os ensaios."
      />

      <AttendanceSession />
    </>
  );
}