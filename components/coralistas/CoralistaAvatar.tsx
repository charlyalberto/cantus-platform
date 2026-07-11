type CoralistaAvatarProps = {
  nome: string;
};

export default function CoralistaAvatar({
  nome,
}: CoralistaAvatarProps) {
  const initials = nome
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
        from-[#173F9A]
        to-[#2F66E0]
        text-sm
        font-bold
        text-white
        shadow-sm
      "
    >
      {initials}
    </div>
  );
}