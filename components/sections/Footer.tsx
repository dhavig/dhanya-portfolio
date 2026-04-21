export function Footer() {
  return (
    <footer className="relative pt-24 pb-12 font-sans bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <div className="text-4xl font-serif mb-6 text-stone-900">
            dhanya<span className="text-red-600 font-medium">.</span>
          </div>
          <p className="text-lg mb-8 text-stone-600">
            Crafting quality with{' '}
            <Heart className="inline-block w-4 h-4 text-red-600" /> and{' '}
            <Coffee className="inline-block w-4 h-4 text-red-600" />
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="mailto:dhanya.sridhar@example.com"
              className="p-3 rounded-full transition-all duration-300 bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-red-600"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/dhavig"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-red-600"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/dhanyasridhar02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-red-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="max-w-xs mx-auto h-px mb-8 bg-stone-200" />
        <div className="text-center text-sm text-stone-500">
          <p>
            © 2026 Dhanya Sridhar · Chicago, IL
          </p>
        </div>
      </div>
    </footer>
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

function Heart({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function Coffee({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </svg>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

function Linkedin({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
