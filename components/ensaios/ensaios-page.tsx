"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/common/page-header";
import { EnsaioTable } from "@/components/ensaios/ensaio-table";
import { NovoEnsaioModal } from "@/components/ensaios/novo-ensaio-modal";
import { Button } from "@/components/ui/button";

interface EnsaiosPageProps {
  ensaios: any[];
}

export function EnsaiosPage({ ensaios }: EnsaiosPageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <PageHeader
          title="Ensaios"
          description="Gerencie os ensaios do coral."
          action={
            <Button onClick={() => setOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Novo Ensaio
            </Button>
          }
        />

        <EnsaioTable ensaios={ensaios} />
      </div>

      <NovoEnsaioModal
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}