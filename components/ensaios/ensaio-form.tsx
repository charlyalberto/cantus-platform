"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  ensaioSchema,
  type EnsaioFormData,
} from "@/lib/validations/ensaio";

export function EnsaioForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnsaioFormData>({
    resolver: zodResolver(ensaioSchema),
    defaultValues: {
      titulo: "",
      data: "",
      hora: "",
      local: "",
      tipo: "GERAL",
      descricao: "",
    },
  });

  function onSubmit(data: EnsaioFormData) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Título
        </label>

        <Input
          {...register("titulo")}
          placeholder="Ex.: Ensaio Geral"
        />

        {errors.titulo && (
          <p className="mt-1 text-sm text-red-500">
            {errors.titulo.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Data
          </label>

          <Input
            type="date"
            {...register("data")}
          />

          {errors.data && (
            <p className="mt-1 text-sm text-red-500">
              {errors.data.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Hora
          </label>

          <Input
            type="time"
            {...register("hora")}
          />

          {errors.hora && (
            <p className="mt-1 text-sm text-red-500">
              {errors.hora.message}
            </p>
          )}
        </div>
      </div>

      <Button type="submit">
        Testar Formulário
      </Button>
    </form>
  );
}