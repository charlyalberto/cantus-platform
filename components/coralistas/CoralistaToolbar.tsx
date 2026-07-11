import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CoralistaToolbar() {
  return (
    <div
      className="
        mb-8
        flex
        flex-col
        gap-4
        rounded-2xl
        bg-white
        p-6
        shadow-sm
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Pesquisa */}

      <div className="relative w-full lg:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <Input
          placeholder="Pesquisar coralista..."
          className="pl-11"
        />
      </div>

      {/* Ações */}

      <div className="flex gap-3">

        <Button variant="outline">
          Todos os naipes
        </Button>

        <Button>
          <Plus size={18} className="mr-2" />
          Novo Coralista
        </Button>

      </div>
    </div>
  );
}