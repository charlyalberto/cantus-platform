type NaipeBadgeProps = {
  naipe: string;
};

const styles: Record<
  string,
  {
    bg: string;
    text: string;
  }
> = {
  SOPRANO: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  CONTRALTO: {
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  TENOR: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },
  BAIXO: {
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
};

export default function NaipeBadge({ naipe }: NaipeBadgeProps) {
  const style = styles[naipe.toUpperCase()] ?? {
    bg: "bg-slate-100",
    text: "text-slate-700",
  };

  const nome =
    naipe.charAt(0).toUpperCase() +
    naipe.slice(1).toLowerCase();

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-2.5
        py-1
        text-xs
        font-medium
        ${style.bg}
        ${style.text}
      `}
    >
      {nome}
    </span>
  );
}