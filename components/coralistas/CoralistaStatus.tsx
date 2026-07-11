type CoralistaStatusProps = {
  status: "Ativo" | "Inativo";
};

export default function CoralistaStatus({
  status,
}: CoralistaStatusProps) {
  const active = status === "Ativo";

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold

        ${
          active
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }
      `}
    >
      <span
        className={`
          mr-2
          h-2
          w-2
          rounded-full

          ${
            active
              ? "bg-green-600"
              : "bg-red-600"
          }
        `}
      />

      {status}
    </span>
  );
}