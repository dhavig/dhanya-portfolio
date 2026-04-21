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
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300 ease-out font-sans bg-white/95 dark:bg-stone-900/90 backdrop-blur-lg shadow-sm border-b border-stone-200/50 dark:border-stone-800/60"
        style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-6 flex justify-between items-center">
          <a href="#home" className="cursor-pointer group transition-all duration-300">
            <div className="text-2xl font-serif tracking-wide transition-all duration-500 text-stone-900 dark:text-stone-100 drop-shadow-sm">
              dhanya<span className="text-red-600 dark:text-red-500 font-medium">.</span>
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
                    isActive
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
                  }`}
                >
                  <span className="relative z-10">{l.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px transition-all duration-300 ${
                      isActive
                        ? 'bg-red-600 dark:bg-red-400 opacity-80'
                        : 'opacity-0 group-hover:opacity-60 bg-stone-500'
                    }`}
                  />
                </a>
              );
            })}
            <div className="flex items-center">
              <a
                href="#projects"
                className="relative font-medium text-sm uppercase tracking-wider transition-all duration-300 group flex items-center gap-2 px-4 py-2 rounded-full border transform hover:scale-105 border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-red-500/70 hover:text-red-600 dark:hover:text-red-400 bg-stone-100/50 dark:bg-stone-800/40 hover:bg-white dark:hover:bg-stone-800"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Playground</span>
              </a>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                download="Dhanya_Sridhar_Resume.html"
                className="ml-4 px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 bg-red-700 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500"
              >
                Resume
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-lg transition-colors text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 font-sans ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 transition-opacity duration-500 bg-white/95 dark:bg-stone-900/95 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute right-0 top-0 h-full w-64 p-8 transition-transform duration-500 bg-white dark:bg-stone-900 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-lg text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="mt-16 space-y-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`block w-full text-left text-lg font-light transition-all duration-300 ${
                  active === l.href
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                <span className="capitalize">{l.label}</span>
              </a>
            ))}
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              download="Dhanya_Sridhar_Resume.html"
              onClick={() => setMobileOpen(false)}
              className="inline-block mt-8 px-6 py-3 rounded-full text-sm font-medium text-white transition-all duration-300 bg-red-700 hover:bg-red-600"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function svg(className?: string) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg {...svg(className)}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

function Menu({ className }: { className?: string }) {
  return (
    <svg {...svg(className)}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function X({ className }: { className?: string }) {
  return (
    <svg {...svg(className)}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
