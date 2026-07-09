export default function WelcomeBanner() {
  const hour = new Date().getHours();

  let greeting = "Boa noite";

  if (hour < 12) {
    greeting = "Bom dia";
  } else if (hour < 18) {
    greeting = "Boa tarde";
  }

  const today = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <section
      className="
        mb-8
        rounded-2xl
        bg-white
        p-8
        shadow-sm
      "
    >
      <h2 className="text-2xl font-bold text-slate-900">
        {greeting}, Charly 👋
      </h2>

      <p className="mt-2 text-slate-500">
        {today}
      </p>

      <p className="mt-5 text-slate-600">
        Bem-vindo ao Sistema Inteligente de Gestão Coral.
      </p>
    </section>
  );
}