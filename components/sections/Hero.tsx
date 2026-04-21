'use client';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <BackgroundBlobs />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div className="order-2 lg:order-1 relative">
          <div className="animate-float absolute -top-8 -left-8" style={{ animationDelay: '2s', animationDuration: '6s' }}>
            <Star className="h-4 w-4 opacity-40 text-orange-500" />
          </div>
          <div className="animate-float absolute top-20 -right-12" style={{ animationDelay: '4s', animationDuration: '6s' }}>
            <Zap className="h-5 w-5 opacity-30 text-red-500" />
          </div>

          {/* Hello, I'm */}
          <div className="transition-all duration-700 ease-in-out" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-8 group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 animate-pulseOrganic relative overflow-hidden bg-gradient-to-br from-red-600 to-orange-500 shadow-lg shadow-red-600/30">
                <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 bg-white/20" />
                <Lotus className="relative z-10 h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <div>
                <p className="font-medium text-lg transition-colors duration-300 text-red-700">Hello, I&apos;m</p>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-red-400 to-orange-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="transition-all duration-700 ease-in-out" style={{ transitionDelay: '200ms' }}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif leading-[0.9] mb-6 relative text-slate-900">
              <span className="relative inline-block">Dhanya</span>
              <br />
              <span className="font-medium relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Sridhar
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="transition-all duration-700 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <p className="text-xl sm:text-2xl mb-8 font-light italic relative text-slate-600">
              AI Quality Engineer — building reliability harnesses for agentic LLM systems
            </p>
          </div>

          {/* Currently at */}
          <div className="transition-all duration-700 ease-in-out" style={{ transitionDelay: '400ms' }}>
            <p className="text-lg mb-12 leading-relaxed text-slate-500">
              I build{' '}
              <span className="font-medium relative group cursor-pointer text-red-700">
                <span className="relative z-10">LLM-as-judge graders, tool-use eval suites, and red-team harnesses</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-400 to-orange-400" />
              </span>{' '}
              that catch agent drift before production — backed by 5+ years shipping Playwright, Selenium, and REST Assured automation in fintech and healthcare. MS Computer Science · Loyola University Chicago ·{' '}
              <em className="not-italic font-medium text-red-700">Cum Laude</em>, 2026.
            </p>
          </div>

          {/* Buttons */}
          <div className="transition-all duration-700 ease-in-out" style={{ transitionDelay: '500ms' }}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden bg-gradient-to-br from-red-600 to-orange-500 text-white shadow-lg shadow-red-600/30 hover:shadow-red-500/40"
              >
                <div className="absolute inset-0 -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 bg-white/20" />
                <span className="relative z-10">View my work</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-3 px-8 py-3 rounded-full text-lg font-medium border-2 transition-all duration-300 transform hover:scale-105 relative overflow-hidden border-red-600 text-red-700 hover:bg-red-600/10 hover:text-red-600 shadow-sm hover:shadow-red-600/20"
              >
                <span className="relative z-10">Get in touch</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — orbital graphic */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center h-full">
          <div className="transition-all duration-700 ease-in-out" style={{ transitionDelay: '300ms' }}>
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 group cursor-pointer">
              <div className="absolute -inset-12 blur-3xl transition-all duration-1000 opacity-70 group-hover:opacity-100 group-hover:scale-110 bg-gradient-to-br from-red-400/40 to-orange-300/40" />

              <div className="relative w-full h-full rounded-full p-2 transform transition-all duration-700 group-hover:scale-105 backdrop-blur-sm border-2 bg-amber-100/60 shadow-2xl shadow-red-300/50 border-red-300/40 group-hover:border-red-400/60">
                <div className="w-full h-full rounded-full p-2 transform transition-all duration-700 group-hover:rotate-[5deg] relative border border-orange-400/50">
                  <div className="w-full h-full rounded-full flex flex-col items-center justify-center text-center p-6 transform transition-all duration-700 group-hover:-rotate-[5deg] relative overflow-hidden bg-amber-100/80 shadow-inner shadow-red-200/50 border border-red-400/60">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <div className="relative mb-4">
                      <Sun className="h-12 w-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10 text-orange-500" />
                    </div>
                    <p className="text-sm font-light transition-all duration-300 group-hover:opacity-100 opacity-80 relative z-10 text-slate-600">
                      Crafted with Care
                    </p>
                  </div>
                </div>
              </div>

              {/* Glow blobs */}
              <div
                className="animate-float absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl transition-all duration-500 group-hover:scale-125 bg-red-300/30"
                style={{ animationDelay: '0s', animationDuration: '6s' }}
              />
              <div
                className="animate-float absolute -bottom-16 -left-16 w-32 h-32 rounded-full blur-2xl transition-all duration-500 group-hover:scale-125 bg-orange-300/30"
                style={{ animationDelay: '1.5s', animationDuration: '6s' }}
              />

              {/* Floating icons */}
              <div
                className="animate-float absolute top-1/4 -left-12 group/icon"
                style={{ animationDelay: '0.5s', animationDuration: '6s' }}
              >
                <Droplets
                  className="h-7 w-7 transition-all duration-500 opacity-50 group-hover/icon:opacity-100 group-hover/icon:scale-125 text-red-400"
                  style={{ transform: 'rotate(-30deg)' }}
                />
              </div>
              <div
                className="animate-float absolute bottom-1/4 -right-12 group/icon"
                style={{ animationDelay: '2s', animationDuration: '6s' }}
              >
                <Wind
                  className="h-6 w-6 transition-all duration-500 opacity-50 group-hover/icon:opacity-100 group-hover/icon:scale-125 text-orange-400"
                  style={{ transform: 'rotate(20deg)' }}
                />
              </div>
              <div
                className="animate-float absolute top-1/2 -right-20 group/icon"
                style={{ animationDelay: '3s', animationDuration: '6s' }}
              >
                <Coffee className="h-5 w-5 transition-all duration-500 opacity-40 group-hover/icon:opacity-80 group-hover/icon:scale-125 text-amber-600" />
              </div>
              <div
                className="animate-float absolute top-1/2 -left-20 group/icon"
                style={{ animationDelay: '4s', animationDuration: '6s' }}
              >
                <Sparkles className="h-5 w-5 transition-all duration-500 opacity-40 group-hover/icon:opacity-80 group-hover/icon:scale-125 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-20 bg-gradient-to-br from-red-400 to-orange-300" />
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-15 bg-gradient-to-bl from-orange-400 to-yellow-300"
        style={{ animationDelay: '2s' }}
      />
      <div className="w-3 h-3 bg-red-500 rounded-full blur-sm opacity-60 absolute top-1/4 left-1/4" />
      <div className="w-2 h-2 bg-orange-500 rounded-full blur-sm opacity-60 absolute top-1/3 right-1/3" />
      <div className="w-4 h-4 bg-yellow-500 rounded-full blur-sm opacity-60 absolute bottom-1/3 left-1/5" />
      <div className="w-3 h-3 bg-red-400 rounded-full blur-sm opacity-60 absolute bottom-1/4 right-1/4" />
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <path d="M100,200 Q400,100 700,300 T1200,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
        <path
          d="M200,500 Q600,400 900,600 T1400,500"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
}

/* ========= Lucide-style icons ========= */

function Lotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" className={className}>
      <path d="M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.51,73.51,0,0,0-22.17-2.22c4-19.85,1-35.55-2.06-44.86a16.15,16.15,0,0,0-18.79-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.48,94.48,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.15,16.15,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.51,73.51,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.27c3.39,12.57,13.8,36.48,45.33,55.32S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.32A16,16,0,0,0,245.83,121.63ZM59.14,72.14a.2.2,0,0,1,.23-.15A70.43,70.43,0,0,1,85.18,83.66,118.65,118.65,0,0,0,80,119.17c0,18.74,3.77,34,9.11,46.28A123.59,123.59,0,0,1,69.57,140C51.55,108.62,55.3,84,59.14,72.14Zm3,103.35C35.47,159.57,26.82,140.05,24,129.7a59.82,59.82,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4ZM170.82,83.66A70.43,70.43,0,0,1,196.63,72a.2.2,0,0,1,.23.15C200.7,84,204.45,108.62,186.43,140a123.32,123.32,0,0,1-19.54,25.48c5.34-12.26,9.11-27.54,9.11-46.28A118.65,118.65,0,0,0,170.82,83.66ZM232,129.72c-2.77,10.25-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z" />
    </svg>
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

function Sun({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
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
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

function Zap({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Droplets({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg {...baseProps(className)} style={style}>
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  );
}

function Wind({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg {...baseProps(className)} style={style}>
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
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

function Sparkles({ className }: { className?: string }) {
  return (
    <svg {...baseProps(className)}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}
