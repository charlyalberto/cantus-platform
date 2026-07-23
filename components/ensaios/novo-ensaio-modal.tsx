"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { EnsaioForm } from "./ensaio-form";

interface NovoEnsaioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NovoEnsaioModal({
  open,
  onOpenChange,
}: NovoEnsaioModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Ensaio</DialogTitle>

          <DialogDescription>
            Preencha os dados do ensaio.
          </DialogDescription>
        </DialogHeader>

        <EnsaioForm />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}