import { forwardRef } from "react";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/Input";

type EmailInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative">
        <Mail
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <Input
          ref={ref}
          type="email"
          placeholder="email@cantus.com"
          className={`pl-12 ${className ?? ""}`}
          {...props}
        />
      </div>
    );
  }
);

EmailInput.displayName = "EmailInput";

export default EmailInput;