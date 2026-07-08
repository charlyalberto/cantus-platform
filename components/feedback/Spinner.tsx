import { Loader2 } from "lucide-react";

type SpinnerProps = {
  size?: number;
  text?: string;
};

export default function Spinner({
  size = 28,
  text,
}: SpinnerProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <Loader2
        className="animate-spin text-[#173F9A]"
        size={size}
      />

      {text && (
        <span className="text-slate-600">
          {text}
        </span>
      )}
    </div>
  );
}