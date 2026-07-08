import Spinner from "@/components/feedback/Spinner";
import Alert from "@/components/feedback/Alert";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-12 space-y-8">

      <Spinner text="Carregando..." />

      <Alert
        variant="success"
        title="Sucesso"
        message="Coralista cadastrado com sucesso."
      />

      <Alert
        variant="error"
        title="Erro"
        message="Usuário ou senha inválidos."
      />

      <Alert
        variant="warning"
        title="Atenção"
        message="Deseja realmente excluir este coralista?"
      />

      <Alert
        variant="info"
        title="Informação"
        message="O ensaio começa às 19h30."
      />

    </main>
  );
}