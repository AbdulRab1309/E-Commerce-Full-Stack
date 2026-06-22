"use client";

import { useEffect, useState } from "react";
import type { Theme } from "./ThemeScript";
import { getNextTheme } from "./ThemeScript";

const LABELS: Record<Theme, string> = {
  red: "RED",
  white: "WHITE",
  black: "BLACK",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("red");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "red";
    setTheme(current);
  }, []);

  const cycle = () => {
    const next = getNextTheme(theme);
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("echo-theme", next);
    } catch {
      /* ignore */
    }
  };

  // Avoid hydration mismatch; render plain label until mounted
  const label = mounted ? LABELS[theme] : "THEME";

  return (
    <button
      onClick={cycle}
      aria-label={`Switch theme, current: ${label}`}
      className="text-xs font-black uppercase tracking-widest strike-hover px-2 py-1"
    >
      [{label}]
    </button>
  );
}
