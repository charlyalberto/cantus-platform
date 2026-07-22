import { Phone } from "lucide-react";

type CoralistaContactProps = {
  telefone: string;
};

export default function CoralistaContact({
  telefone,
}: CoralistaContactProps) {
  return (
    <div className="flex items-center gap-2 text-slate-600">

      <Phone
        size={14}
        className="text-slate-400"
      />

      <span className="text-sm">
        {telefone}
      </span>

    </div>
  );
}