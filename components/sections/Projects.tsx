import { Reveal } from '@/components/Reveal';

type Project = {
  badge: string;
  stack: string;
  icon: string;
  name: string;
  desc: string;
  meta: string[];
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    badge: '⚡ ACTIVE',
    stack: 'Java · Playwright · TypeScript · CI/CD',
    icon: '🧪',
    name: 'SDET Automation Framework',
    desc: 'Enterprise-grade test automation framework targeting OCC and institutional-grade engineering standards. Parallel test execution, GitHub Actions CI/CD, REST API testing, Docker containerization, and AWS S3 test reporting integration.',
    meta: ['3 Modules Built', 'CI/CD GitHub Actions'],
    tags: ['Playwright', 'TestNG', 'Docker', 'AWS S3', 'GitHub Actions', 'REST Assured'],
    href: 'https://github.com/dhavig',
  },
  {
    badge: '🎙️ AI / NLP QA',
    stack: 'TypeScript · REST API · BDD · NLP',
    icon: '🎙️',
    name: 'Voice Assistant QA Portfolio',
    desc: 'Specialized QA framework for AI-powered voice assistants — intent recognition validation, NLP response testing, edge case coverage, and automated regression for conversational AI features. Targeted toward Apple Siri-class quality engineering.',
    meta: ['NLP Intent Testing', 'BDD Gherkin Scenarios'],
    tags: ['TypeScript', 'Cucumber', 'REST Assured', 'Gherkin', 'AI Testing'],
    href: 'https://github.com/dhavig',
  },
  {
    badge: '🛒 COMPLETE',
    stack: 'Java · Selenium · TestNG · POM',
    icon: '🛒',
    name: 'SauceDemo E2E Suite',
    desc: 'Production-quality end-to-end automation suite using Page Object Model design pattern — full checkout flow, cross-browser execution, data-driven testing with Excel, BDD scenarios, Maven build lifecycle, and full CI pipeline integration.',
    meta: ['100% Pass Rate', 'POM Design Pattern'],
    tags: ['Selenium', 'TestNG', 'POM', 'Maven', 'JUnit', 'Cross-browser'],
    href: 'https://github.com/dhavig',
  },
];

export function Projects() {
  return (
    <section id="projects" className="dark-section bg-[#1d1d1f] px-8 py-32">
      <div className="section-inner">
        <Reveal as="p" className="section-eyebrow">
          Projects
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Code that ships quality.
        </Reveal>
        <Reveal as="p" className="section-body" delay={0.1}>
          Open-source automation frameworks built to demonstrate real-world SDET engineering
          patterns — designed to be production-ready, cloneable, and deployable from day one.
        </Reveal>

        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4">
          {projects.map((p, i) => (
            <Reveal
              key={p.name}
              className="group relative flex flex-col rounded-[22px] border border-white/10 bg-white/[0.05] p-8 shadow-glassDark backdrop-blur-xl backdrop-saturate-[180%] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.09]"
              delay={i * 0.05}
            >
              <div className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-brandLight">
                {p.badge}
              </div>
              <span className="mb-4 block text-[2rem]">{p.icon}</span>
              <div className="mb-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/35">
                {p.stack}
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-[-0.02em] text-light">
                {p.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-white/50">{p.desc}</p>
              <div className="mb-3 flex flex-wrap gap-2 text-xs text-white/60">
                {p.meta.map((m) => (
                  <span key={m} className="rounded-full bg-white/5 px-2.5 py-0.5">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-sm text-brandLight transition-all hover:gap-2"
              >
                View on GitHub →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
