import Image from 'next/image';
import { StarField } from '@/components/StarField';

export function Hero() {
  return (
    <section
      id="hero"
      className="dark-section relative flex min-h-screen flex-col items-center justify-center bg-black px-8 pt-11 text-center"
    >
      <StarField />
      <div className="relative z-10 flex w-full max-w-[880px] flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-8 [animation:appleUp_0.8s_0.2s_cubic-bezier(0.25,0.46,0.45,0.94)_forwards] opacity-0">
          <div className="photo-wrap">
            <span className="photo-ping" />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/dhanya.jpg`}
              alt="Dhanya Sridhar"
              width={156}
              height={156}
              className="photo-img"
              priority
              unoptimized
            />
            <span
              className="absolute bottom-2 right-2 z-[3] h-4 w-4 rounded-full border-2 border-black bg-success"
              aria-label="Available"
            />
          </div>

          <div className="text-center">
            <div className="mb-2 text-xs font-light uppercase tracking-[0.12em] text-white/45 sm:text-sm md:text-base">
              Hi! I&apos;m
            </div>
            <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-light">
              Dhanya Sridhar
            </h1>
            <div className="mt-6 text-sm font-medium uppercase tracking-[0.06em] text-brandLight sm:text-base">
              Senior SDET &nbsp;·&nbsp; MS Computer Science · Loyola University Chicago ·{' '}
              <em>Cum Laude</em> · 2026
            </div>
            <div className="mt-2 text-xs tracking-wide text-white/30 sm:text-sm">
              📍 Chicago, IL &nbsp;·&nbsp; 5+ Years &nbsp;·&nbsp; Playwright · Java · CI/CD
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-success/35 bg-success/10 px-4 py-2 text-sm font-medium text-success backdrop-blur">
                <span className="ping-green-dot inline-block h-2 w-2 rounded-full bg-success" />
                Available to Work
              </span>
              <a
                href="https://linkedin.com/in/dhanyasridhar02"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brandLight px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.03] hover:bg-brandHover"
              >
                View LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-sm font-medium text-light backdrop-blur transition-all hover:scale-[1.03] hover:bg-white/20"
              >
                <svg
                  width="13"
                  height="13"
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
                Download Resume
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm text-white/60 backdrop-blur transition-all hover:scale-[1.03] hover:bg-white/10"
              >
                View My Work ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 opacity-0 [animation:appleUp_1s_2s_ease_forwards]">
        <span className="text-[0.65rem] uppercase tracking-[0.08em] text-white/30">
          Scroll
        </span>
        <div className="chevron" />
      </div>
    </section>
  );
}
