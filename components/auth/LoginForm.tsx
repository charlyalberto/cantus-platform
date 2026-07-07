import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginForm() {
  return (

    <div className="w-full">

      <h2 className="text-3xl font-bold text-slate-800">
        Entrar
      </h2>

      <p className="text-slate-500 mt-2">
        Informe seus dados de acesso.
      </p>

      <div className="mt-10 space-y-5">

        <div>

          <label className="text-sm font-medium">
            E-mail
          </label>

          <Input
            type="email"
            placeholder="email@cantus.com"
          />

        </div>

        <div>

          <label className="text-sm font-medium">
            Senha
          </label>

          <Input
            type="password"
            placeholder="********"
          />

        </div>

        <Button
          className="w-full"
          size="lg"
        >
          Entrar
        </Button>

      </div>

    </div>

  );
}