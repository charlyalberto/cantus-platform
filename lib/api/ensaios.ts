import { api } from "./client";

import type { EnsaioFormData } from "@/lib/validations/ensaio";

export async function getEnsaios() {
  return api<any[]>("/ensaios", {
    cache: "no-store",
  });
}

export async function createEnsaio(
  data: EnsaioFormData
) {
  return api("/ensaios", {
    method: "POST",
    body: JSON.stringify(data),
  });
}