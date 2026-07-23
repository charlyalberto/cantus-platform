const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getDashboard() {
  const response = await fetch(`${API_URL}/dashboard`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar dashboard");
  }

  return response.json();
}