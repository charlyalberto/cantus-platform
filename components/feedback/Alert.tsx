import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

type AlertVariant =
  | "success"
  | "error"
  | "warning"
  | "info";

type AlertProps = {
  variant?: AlertVariant;
  title: string;
  message: string;
};

const styles = {
  success: {
    icon: CheckCircle,
    bar: "bg-green-500",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    title: "text-green-800",
    text: "text-green-700",
  },

  error: {
    icon: AlertCircle,
    bar: "bg-red-500",
    bg: "bg-red-50",
    iconColor: "text-red-600",
    title: "text-red-800",
    text: "text-red-700",
  },

  warning: {
    icon: AlertTriangle,
    bar: "bg-yellow-500",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    title: "text-yellow-800",
    text: "text-yellow-700",
  },

  info: {
    icon: Info,
    bar: "bg-blue-500",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "text-blue-800",
    text: "text-blue-700",
  },
};

export default function Alert({
  variant = "info",
  title,
  message,
}: AlertProps) {
  const style = styles[variant];
  const Icon = style.icon;

  return (
    <div
      className={`
        overflow-hidden
        rounded-xl
        shadow-sm
        ${style.bg}
      `}
    >
      <div className="flex">
        <div className={`w-2 ${style.bar}`} />

        <div className="flex flex-1 gap-4 p-5">
          <Icon
            size={24}
            className={style.iconColor}
          />

          <div>
            <h3
              className={`font-semibold ${style.title}`}
            >
              {title}
            </h3>

            <p
              className={`mt-2 text-sm ${style.text}`}
            >
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}