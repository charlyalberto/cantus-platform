type CoralistaStatusProps = {
  ativo: boolean;
};

export default function CoralistaStatus({
  ativo,
}: CoralistaStatusProps) {
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
          ativo
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
            ativo
              ? "bg-green-600"
              : "bg-red-600"
          }
        `}
      />

      {ativo ? "Ativo" : "Inativo"}
    </span>
  );
}