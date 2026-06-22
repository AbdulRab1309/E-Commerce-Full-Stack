export type Theme = "red" | "white" | "black";
const THEMES: Theme[] = ["red", "white", "black"];

export function getNextTheme(current: Theme): Theme {
  const idx = THEMES.indexOf(current);
  return THEMES[(idx + 1) % THEMES.length];
}

export function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "red";
  const t = document.documentElement.getAttribute("data-theme");
  return (t as Theme) || "red";
}
