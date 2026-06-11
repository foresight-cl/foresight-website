"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLang, localizedPath } from "@/lib/i18n";

/** Client-side redirect to an ES path, mapped to /en/* inside the EN tree. */
export default function LocalizedRedirect({ to }: { to: string }) {
  const router = useRouter();
  const { lang } = useLang();
  const target = lang === "en" ? localizedPath(to, "en") : to;

  useEffect(() => {
    router.replace(target);
  }, [router, target]);

  return null;
}
