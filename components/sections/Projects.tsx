import { Reveal } from '@/components/Reveal';

type Project = {
  name: string;
  kind: string;
  desc: string;
  tags: string[];
  href: string;
  gradient: string;
  emoji: string;
};

const projects: Project[] = [
  {
    name: 'SDET Automation Framework',
    kind: 'Playwright · TypeScript · CI/CD',
    desc:
      'Enterprise-grade test automation framework. Parallel execution, GitHub Actions CI/CD, REST API testing, Docker containerization, and AWS S3 test reporting integration.',
    tags: ['Playwright', 'TestNG', 'Docker', 'AWS S3', 'GitHub Actions'],
    href: 'https://github.com/dhavig',
    gradient: 'from-red-400 to-orange-400',
    emoji: '🧪',
  },
  {
    name: 'Voice Assistant QA Portfolio',
    kind: 'TypeScript · REST API · BDD · NLP',
    desc:
      'Specialized QA framework for AI-powered voice assistants — intent recognition validation, NLP response testing, and automated regression for conversational AI.',
    tags: ['TypeScript', 'Cucumber', 'REST Assured', 'Gherkin', 'AI Testing'],
    href: 'https://github.com/dhavig',
    gradient: 'from-orange-400 to-yellow-400',
    emoji: '🎙️',
  },
  {
    name: 'SauceDemo E2E Suite',
    kind: 'Java · Selenium · TestNG · POM',
    desc:
      'Production-quality end-to-end suite using Page Object Model — full checkout flow, cross-browser execution, data-driven Excel testing, and CI pipeline integration.',
    tags: ['Selenium', 'TestNG', 'POM', 'Maven', 'Cross-browser'],
    href: 'https://github.com/dhavig',
    gradient: 'from-rose-400 to-pink-400',
    emoji: '🛒',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-600">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mt-4 mb-8 text-stone-900">
              Featured Projects
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-stone-600">
              Open-source automation frameworks built to demonstrate real-world SDET engineering
              patterns — production-ready, cloneable, deployable from day one.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-start">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group relative block">
                <div className="relative rounded-2xl overflow-hidden transition-all duration-500 bg-white shadow-lg hover:shadow-xl hover:shadow-red-500/10 transform hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden flex items-center justify-center">
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-90 ${p.gradient}`} />
                    <div className="relative z-10 text-7xl transition-transform duration-500 group-hover:scale-110">
                      {p.emoji}
                    </div>
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <div className="p-2 rounded-full backdrop-blur-md transition-all duration-300 bg-white/70 text-stone-700 group-hover:bg-white group-hover:text-red-600">
                        <Github className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-medium mb-1 font-serif text-stone-900">{p.name}</h3>
                      <p className="text-sm font-medium text-red-700">{p.kind}</p>
                    </div>
                    <p className="mb-4 text-sm text-stone-600 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl -z-10 opacity-20 from-red-500/10 to-orange-500/10" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 bg-gradient-to-tl rounded-full blur-3xl -z-10 opacity-15 from-purple-500/10 to-pink-500/10" />
    </section>
  );
}

function Github({ className }: { className?: string }) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
