import { Card } from "@/components/ui/Card";
import Logo from "@/components/ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <Card className="w-full max-w-6xl overflow-hidden">

      <div className="grid md:grid-cols-2">

        <div className="bg-[#173F9A] text-white p-16 flex flex-col justify-center">

          <Logo />

          <h2 className="text-4xl font-bold mt-10">
            Bem-vindo ao Cantus
          </h2>

          <p className="mt-6 text-blue-100 leading-8">
            Tecnologia para quem faz música acontecer.
          </p>

        </div>

        <div className="p-16 flex items-center">

          <LoginForm />

        </div>

      </div>

    </Card>
  );
}