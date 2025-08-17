// src/app/theme-client.tsx
"use client";

import { useEffect, useState } from "react";
// @ts-expect-error
import { themes } from "../theme";

export default function ThemeClient() {
  const [theme, setTheme] = useState<string | any>("light");

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved && themes[saved as keyof typeof themes]) {
      setTheme(saved as keyof typeof themes);
    }
  }, []);

  // Apply theme to CSS variables
  useEffect(() => {
    const current = themes[theme];
    if (!current) return;

    const root = document.documentElement;
    Object.entries(current).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key.toLowerCase()}`, value as string);
    });

    localStorage.setItem("theme", theme);
  }, [theme]);

  return null; // No UI — only applies theme
}
