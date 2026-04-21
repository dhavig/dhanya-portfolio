'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    root.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        onClick={toggle}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="group relative p-4 rounded-full transition-all duration-500 overflow-hidden bg-white/80 hover:bg-stone-100/80 dark:bg-stone-800/80 dark:hover:bg-stone-700/80 backdrop-blur-sm shadow-lg"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-400/20 to-blue-400/20" />
        <div className="relative w-5 h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute inset-0 transition-all duration-500 text-blue-600 dark:text-blue-400 ${
              isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            }`}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute inset-0 transition-all duration-500 text-blue-400 dark:text-blue-300 ${
              isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            }`}
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </div>
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none transition-all duration-300 bg-stone-800 text-stone-100 dark:bg-stone-100 dark:text-stone-800 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
          {isDark ? 'Light mode' : 'Dark mode'}
        </div>
      </button>
    </div>
  );
}
