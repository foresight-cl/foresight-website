"use client";

import { useEffect } from "react";
import { GradientButton } from "@/components/ui";
import { useLang } from "@/lib/i18n";

export default function ErrorView({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang } = useLang();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  const c =
    lang === "es"
      ? { title: "Algo salió mal", description: "Ha ocurrido un error inesperado.", retry: "Intentar de nuevo" }
      : { title: "Something went wrong", description: "An unexpected error has occurred.", retry: "Try again" };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">{c.title}</h1>
        <p className="text-slate-500 mb-8">{c.description}</p>
        <GradientButton onClick={() => reset()}>{c.retry}</GradientButton>
      </div>
    </div>
  );
}
