import { getEnsaios } from "@/lib/api/ensaios";
import { EnsaiosPage } from "@/components/ensaios/ensaios-page";

export default async function Page() {
  const ensaios = await getEnsaios();

  return <EnsaiosPage ensaios={ensaios} />;
}