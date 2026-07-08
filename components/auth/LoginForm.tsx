"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginFormData,
} from "@/schemas/auth";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginOptions from "./LoginOptions";
import LoginButton from "./LoginButton";

export default function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

        async function onSubmit(data: LoginFormData) {
        console.log(data);

        // Simulação de uma chamada à API
        await new Promise((resolve) => setTimeout(resolve, 2000));

        }

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-slate-800">
        Entrar
      </h2>

      <p className="mt-2 text-slate-500">
        Informe seus dados de acesso.
      </p>

      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-5"
      >
        <div>
            
          <label className="mb-2 block text-sm font-medium">
            E-mail
          </label>

          <EmailInput
            {...form.register("email")}
          />

          {form.formState.errors.email && (
            <p className="mt-2 text-sm text-red-600">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Senha
          </label>

          <PasswordInput
            {...form.register("password")}
          />

          {form.formState.errors.password && (
            <p className="mt-2 text-sm text-red-600">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <LoginOptions />

                    <LoginButton
            loading={form.formState.isSubmitting}
            />

      </form>
    </div>
  );
}