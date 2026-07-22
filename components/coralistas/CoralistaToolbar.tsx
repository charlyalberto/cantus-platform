"use client";

import { useRouter } from "next/navigation";
import { Search, Plus, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CoralistaToolbar() {
  const router = useRouter();

  return (
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Pesquisa */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            placeholder="Pesquisar por nome, telefone ou e-mail..."
            className="h-11 pl-11"
          />
        </div>

        {/* Filtro */}
        <Button
          variant="outline"
          className="h-11 min-w-[180px] justify-between"
        >
          Todos os naipes
          <ChevronDown size={16} />
        </Button>

        {/* Novo */}
        <Button
          className="h-11 px-5"
          onClick={() => router.push("/coralistas/novo")}
        >
          <Plus size={18} />
          Novo Coralista
        </Button>
      </div>
    </div>
  );
}