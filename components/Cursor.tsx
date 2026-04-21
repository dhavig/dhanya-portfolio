'use client';

import { useEffect, useRef } from 'react';

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0, ry = 0, x = 0, y = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => {
      dot.classList.add('is-hover');
      ring.classList.add('is-hover');
    };
    const onLeave = () => {
      dot.classList.remove('is-hover');
      ring.classList.remove('is-hover');
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-ink transition-[width,height,background] duration-200"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-ink/30 transition-[width,height,border-color] duration-200"
        aria-hidden
      />
      <style jsx>{`
        .is-hover {
          background: var(--brand);
          width: 14px;
          height: 14px;
        }
        .cursor-ring.is-hover {
          background: transparent;
          width: 50px;
          height: 50px;
          border-color: rgba(0, 113, 227, 0.3);
        }
      `}</style>
    </>
  );
}
