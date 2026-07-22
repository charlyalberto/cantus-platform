import CoralistaTableClient from "@/components/coralistas/CoralistaTableClient";
import { getCoralistas } from "@/lib/api/coralistas";

export default async function CoralistaTable() {
  const coralistas = await getCoralistas();

  return (
    <CoralistaTableClient
      coralistas={coralistas}
    />
  );
}