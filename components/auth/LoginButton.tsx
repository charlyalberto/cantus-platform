import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

type LoginButtonProps = {
  loading?: boolean;
};

export default function LoginButton({
  loading = false,
}: LoginButtonProps) {
  return (
    <Button
      className="w-full mt-6"
      size="lg"
      type="submit"
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Entrando...
        </>
      ) : (
        "Entrar"
      )}
    </Button>
  );
}