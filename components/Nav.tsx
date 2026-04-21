'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const darkIds = new Set(['hero', 'skills', 'projects', 'contact']);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDark(darkIds.has(entry.target.id));
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[500] flex h-11 items-center justify-between border-b px-[22px] backdrop-blur-xl backdrop-saturate-[180%] transition-colors duration-300 ${
        dark
          ? 'border-white/10 bg-[rgba(29,29,31,0.72)]'
          : 'border-black/10 bg-white/70'
      }`}
    >
      <span
        className={`text-[0.88rem] font-semibold tracking-tight transition-colors ${
          dark ? 'text-light' : 'text-ink'
        }`}
      >
        Dhanya Sridhar
      </span>
      <div className="hidden gap-[1.8rem] sm:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`text-[0.75rem] transition-colors ${
              dark
                ? 'text-white/60 hover:text-light'
                : 'text-muted hover:text-ink'
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        className="inline-flex items-center gap-1.5 rounded-full bg-brandLight px-4 py-1.5 text-[0.72rem] font-medium text-white"
        href="#contact"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
      </a>
    </nav>
  );
}
