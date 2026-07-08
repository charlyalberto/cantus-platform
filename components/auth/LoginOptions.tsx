"use client";

import Link from "next/link";

export default function LoginOptions() {
  return (
    <div className="flex items-center justify-between mt-5">

      <label className="flex items-center gap-2 cursor-pointer">

        <input
          type="checkbox"
          className="
            h-4
            w-4
            rounded
            border-slate-300
            text-[#173F9A]
            focus:ring-[#173F9A]
          "
        />

        <span className="text-sm text-slate-600">
          Lembrar-me
        </span>

      </label>

      <Link
        href="#"
        className="
          text-sm
          text-[#173F9A]
          hover:underline
        "
      >
        Esqueci minha senha
      </Link>

    </div>
  );
}