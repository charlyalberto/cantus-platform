import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

type CoralistaActionsProps = {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function CoralistaActions({
  onView,
  onEdit,
  onDelete,
}: CoralistaActionsProps) {
  return (
    <div className="flex justify-center gap-4">

      <button
        onClick={onView}
        className="
          text-slate-500
          transition
          hover:text-blue-600
        "
      >
        <Eye size={18} />
      </button>

      <button
        onClick={onEdit}
        className="
          text-slate-500
          transition
          hover:text-amber-600
        "
      >
        <Pencil size={18} />
      </button>

      <button
        onClick={onDelete}
        className="
          text-slate-500
          transition
          hover:text-red-600
        "
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
}