const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getCoralistas() {
  const response = await fetch(`${API_URL}/coralistas`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar coralistas");
  }

  return response.json();
}

export async function getCoralista(id: string) {
  const response = await fetch(`${API_URL}/coralistas/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar coralista");
  }

  return response.json();
}

export async function createCoralista(data: {
  nome: string;
  telefone: string;
  dataNascimento: string;
  email: string;
  naipe: "SOPRANO" | "CONTRALTO" | "TENOR" | "BAIXO";
}) {
  const response = await fetch(`${API_URL}/coralistas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar coralista");
  }

  return response.json();
}

export async function updateCoralista(
  id: string,
  data: {
    nome: string;
    telefone: string;
    dataNascimento: string;
    email: string;
    naipe: "SOPRANO" | "CONTRALTO" | "TENOR" | "BAIXO";
  }
) {
  const response = await fetch(`${API_URL}/coralistas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar coralista");
  }

  return response.json();
}

export async function deleteCoralista(id: string) {
  const response = await fetch(`${API_URL}/coralistas/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir coralista");
  }
}