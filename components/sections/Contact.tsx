import { Reveal } from '@/components/Reveal';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative font-sans">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-600">Get in Touch</span>
            <h2 className="text-5xl sm:text-6xl font-serif mt-4 mb-6 text-stone-900">
              Let&apos;s Build Quality Together
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-stone-600">
              Actively seeking Senior SDET roles. Based in Chicago — available for hybrid, remote,
              or on-site across the US. Work-authorized, no sponsorship required.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Available Immediately
            </span>
            <span className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm text-stone-600">
              No Sponsorship Required
            </span>
            <span className="rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-sm text-stone-600">
              Chicago, IL
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-center text-stone-500 mb-10">
            Open to: <span className="text-red-700 font-medium">SDET · SDE II Automation · QE · QA Lead</span>
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center">
            <p className="text-lg mb-6 text-stone-600">Best ways to reach me:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <a
                href="https://linkedin.com/in/dhanyasridhar02"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto justify-center bg-stone-200 text-stone-700 hover:bg-stone-300 hover:text-red-600"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/dhavig"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto justify-center bg-stone-200 text-stone-700 hover:bg-stone-300 hover:text-red-600"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function baseProps(className?: string) {
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

function Linkedin({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Github({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

