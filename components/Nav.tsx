'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

export function Nav() {
  const [active, setActive] = useState('#about');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300 ease-out font-sans bg-white/95 backdrop-blur-lg shadow-sm border-b border-stone-200/50"
      style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-6 flex justify-between items-center">
        <a href="#home" className="cursor-pointer group transition-all duration-300">
          <div className="text-2xl font-serif tracking-wide transition-all duration-500 text-stone-900 drop-shadow-sm">
            dhanya<span className="text-red-600 font-medium">.</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-light text-sm uppercase tracking-wider transition-all duration-300 ease-out group py-1 px-2 rounded-md ${
                  isActive ? 'text-red-600' : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <span className="relative z-10">{l.label}</span>
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-px transition-all duration-300 ${
                    isActive ? 'bg-red-600 opacity-80' : 'opacity-0 group-hover:opacity-60 bg-stone-500'
                  }`}
                />
              </a>
            );
          })}
          <div className="flex items-center">
            <a
              href="#projects"
              className="relative font-medium text-sm uppercase tracking-wider transition-all duration-300 group flex items-center gap-2 px-4 py-2 rounded-full border transform hover:scale-105 border-stone-300 text-stone-600 hover:border-red-500/70 hover:text-red-600 bg-stone-100/50 hover:bg-white"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Playground</span>
            </a>
            <a
              href="#contact"
              className="ml-4 px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 bg-red-700 hover:bg-red-600"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}
