import { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
};

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <header className="mb-10 flex items-start justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        {description && (
          <p className="mt-2 text-lg text-slate-500">
            {description}
          </p>
        )}
      </div>

      {actions && (
        <div>
          {actions}
        </div>
      )}
    </header>
  );
}