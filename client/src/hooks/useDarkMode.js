import { useState, useEffect, useCallback } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggle = useCallback(() => {
    setIsDark(d => {
      const value = !d;
      document.documentElement.classList.toggle("dark", value);
      localStorage.setItem("theme", value ? "dark" : "light");
      return value;
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return [isDark, toggle];
}
