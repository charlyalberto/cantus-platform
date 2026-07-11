import CoralistaAvatar from "./CoralistaAvatar";

type CoralistaInfoProps = {
  nome: string;
  naipe: string;
};

export default function CoralistaInfo({
  nome,
  naipe,
}: CoralistaInfoProps) {
  return (
    <div className="flex items-center gap-4">

      <CoralistaAvatar
        nome={nome}
      />

      <div>

        <h3 className="font-semibold text-slate-800">
          {nome}
        </h3>

        <p className="text-sm text-slate-500">
          {naipe}
        </p>

      </div>

    </div>
  );
}