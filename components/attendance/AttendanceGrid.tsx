import AttendanceCard from "./AttendanceCard";

import { coralistas } from "@/lib/mock/coralistas";

export default function AttendanceGrid() {
  return (
    <section
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {coralistas.map((coralista) => (
        <AttendanceCard
          key={coralista.id}
          nome={coralista.nome}
          naipe={coralista.naipe}
        />
      ))}
    </section>
  );
}