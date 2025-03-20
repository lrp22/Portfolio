"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="rounded-full w-5 h-5 flex items-center justify-center transition-colors duration-300
                 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {resolvedTheme === "light" ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </button>
  );
}
