import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br
from-slate-100 to-blue-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-[650px] text-center">

        <div className="text-6xl mb-8">🎼</div>

        <h1 className="text-7xl font-black text-blue-900">
          CANTUS
        </h1>

        <p className="mt-4 text-gray-600 text-base">
          Sistema Inteligente de Gestão Coral
        </p>

        <div className="mt-14">
          <h2 className="text-2xl font-bold tracking-wide">
            Coral Kerigma
          </h2>

        
        </div>

     <div className="mt-10 flex justify-center">
<Link
  href="/login"
  className="mt-10 flex items-center justify-center gap-2
             bg-[#173F9A] hover:bg-[#0F2D73]
             text-white font-bold
             px-8 py-4
             rounded-xl
             shadow-lg
             transition-all duration-300
             hover:scale-105
             hover:shadow-2xl
             group
             cursor-pointer"
>
  <span>Acessar Plataforma</span>

  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>
</div>

        <p className="mt-8 text-gray-400 text-sm">
          Versão 0.1.0 
          © 2026 Cantus Platform
        </p>

      </div>
    </main>
  );
}