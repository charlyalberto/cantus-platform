"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createCoralista,
  updateCoralista,
} from "@/lib/api/coralistas";

import { phoneMask } from "@/lib/masks";
import type { Coralista } from "@/lib/types/coralista";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import {
  coralistaSchema,
  type CoralistaFormData,
} from "@/schemas/coralista";

type CoralistaFormProps = {
  mode: "create" | "edit";
  initialData?: Coralista;
  onCancel?: () => void;
};

export default function CoralistaForm({
  mode,
  initialData,
  onCancel,
}: CoralistaFormProps) {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CoralistaFormData>({
    resolver: zodResolver(coralistaSchema),
    defaultValues: {
      nome: initialData?.nome ?? "",
      telefone: initialData?.telefone ?? "",
      dataNascimento: initialData?.dataNascimento
        ? initialData.dataNascimento.substring(0, 10)
        : "",
      email: initialData?.email ?? "",
      naipe: initialData?.naipe ?? "SOPRANO",
    },
  });

  async function onSubmit(data: CoralistaFormData) {
    try {
      const payload = {
        nome: data.nome,
        telefone: data.telefone ?? "",
        dataNascimento: new Date(
          data.dataNascimento
        ).toISOString(),
        email: data.email ?? "",
        naipe: data.naipe,
      };

      if (mode === "create") {
        await createCoralista(payload);
      } else {
        await updateCoralista(initialData!.id, payload);
      }

      toast.success(
        mode === "create"
            ? "Coralista cadastrado com sucesso!"
            : "Coralista atualizado com sucesso!"
        );

      if (typeof onCancel === "function") {
        onCancel();
      } else {
        router.push("/coralistas");
      }

      router.refresh();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(
        mode === "create"
            ? "Erro ao cadastrar coralista."
            : "Erro ao atualizar coralista."
        );
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Nome
        </label>

        <Input
          {...register("nome")}
          placeholder="Nome completo"
          autoFocus
        />

        {errors.nome && (
          <p className="mt-1 text-sm text-red-500">
            {errors.nome.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Telefone
        </label>

        <Controller
          name="telefone"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="(81) 99999-9999"
              value={field.value ?? ""}
              onChange={(e) =>
                field.onChange(phoneMask(e.target.value))
              }
            />
          )}
        />

        {errors.telefone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.telefone.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Data de Nascimento
        </label>

        <Input
          type="date"
          {...register("dataNascimento")}
        />

        {errors.dataNascimento && (
          <p className="mt-1 text-sm text-red-500">
            {errors.dataNascimento.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          E-mail
        </label>

        <Input
          type="email"
          {...register("email")}
          placeholder="email@exemplo.com"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Naipe
        </label>

        <select
          {...register("naipe")}
          className="w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          <option value="SOPRANO">Soprano</option>
          <option value="CONTRALTO">Contralto</option>
          <option value="TENOR">Tenor</option>
          <option value="BAIXO">Baixo</option>
        </select>

        {errors.naipe && (
          <p className="mt-1 text-sm text-red-500">
            {errors.naipe.message}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancelar
          </Button>
        )}

        <Button
            type="submit"
            disabled={isSubmitting}
            >
            {isSubmitting
                ? mode === "create"
                ? "Cadastrando..."
                : "Salvando alterações..."
                : mode === "create"
                ? "Cadastrar"
                : "Salvar alterações"}
            </Button>

      </div>
    </form>
  );
}