'use client';

import { useEffect, useRef } from 'react';

export function ScrollBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      el.style.width = `${pct}%`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[1000] h-[2px] w-0 bg-brand transition-[width] duration-75 ease-linear"
      aria-hidden
    />
  );
}
