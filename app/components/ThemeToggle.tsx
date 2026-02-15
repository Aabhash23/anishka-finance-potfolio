"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <svg
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 111.415-1.415l2.12 2.12a1 1 0 11-1.415 1.415zM2.05 6.464l2.12-2.12a1 1 0 011.415 1.415l-2.12 2.12a1 1 0 01-1.415-1.415zm12.12 5.656l2.12 2.12a1 1 0 11-1.415 1.415l-2.12-2.12a1 1 0 111.415-1.415z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Light</span>
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5 text-slate-900"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span className="text-sm font-medium text-slate-700">Dark</span>
        </>
      )}
    </button>
  );
}
