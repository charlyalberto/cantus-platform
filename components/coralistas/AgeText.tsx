type AgeTextProps = {
  idade: number;
};

export default function AgeText({ idade }: AgeTextProps) {
  return (
    <span className="text-sm text-slate-500">
      • {idade} anos
    </span>
  );
}