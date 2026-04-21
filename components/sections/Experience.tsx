import { Reveal } from '@/components/Reveal';

type Role = {
  date: string;
  location: string;
  tags: string[];
  role: string;
  company: string;
  blurb: string;
  bullets: string[];
  stack: string[];
};

const roles: Role[] = [
  {
    date: 'May 2025 – Nov 2025',
    location: 'Chicago, IL',
    tags: ['Fintech', 'InsureTech'],
    role: 'SDET Intern — Part of MS CS Program',
    company: 'CCC Intelligent Solutions',
    blurb:
      'Leading automotive claims and insurance technology platform · Internship concurrent with full-time MS Computer Science at Loyola University Chicago (GPA 3.67 · Cum Laude)',
    bullets: [
      'Architected a Playwright + TypeScript end-to-end automation framework from scratch — reduced regression cycle time by 40%',
      'Built multi-stage GitHub Actions CI/CD pipelines triggering automated suites on every pull request, enabling continuous quality gates',
      'Validated DB2 financial data integrity across payment processing workflows — achieved 99.9% accuracy at production scale',
      'Integrated GitHub Copilot for AI-assisted test generation, improving test coverage by 30% and accelerating authoring speed',
      'Executed end-to-end testing of payment processing and insurance claims financial compliance across regulatory environments',
      'Collaborated with senior engineers to define test strategy for microservices-based architecture and API contract testing',
    ],
    stack: ['Playwright', 'TypeScript', 'GitHub Actions', 'DB2', 'GitHub Copilot', 'REST APIs'],
  },
  {
    date: 'Jun 2023 – Aug 2024',
    location: 'Chicago, IL',
    tags: ['Insurance', 'Fintech'],
    role: 'Senior SDET',
    company: 'TCS · MetLife',
    blurb:
      'Global life insurance and financial services platform via Tata Consultancy Services',
    bullets: [
      'Led API automation strategy using REST Assured — achieved 90%+ test coverage across 15+ microservices in production',
      'Designed and executed JMeter performance test suites validating system stability under 10,000+ concurrent users — zero critical failures in load testing',
      'Built reusable Cucumber/BDD framework components — reduced test case authoring time by 35% across 3 squads',
      'Mentored 3 junior SDETs on framework best practices, code review standards, and BDD authoring techniques',
      'Integrated Jenkins CI/CD pipelines enabling nightly regression runs and on-demand smoke test execution',
      'Produced Allure test reports consumed by product and engineering stakeholders for sprint quality metrics',
      'Performed SQL database validation against MetLife policy and claims data for financial accuracy compliance',
    ],
    stack: ['REST Assured', 'JMeter', 'Cucumber', 'Jenkins', 'Java', 'Allure', 'SQL'],
  },
  {
    date: 'Aug 2021 – May 2023',
    location: 'Remote / US',
    tags: ['Healthcare', 'HIPAA'],
    role: 'SDET',
    company: 'Cognizant · Humana & CarePlus',
    blurb:
      'Healthcare insurance member portal testing — Humana and CarePlus platforms via Cognizant',
    bullets: [
      'Built and maintained 200+ automated test cases using Selenium WebDriver and TestNG across Humana and CarePlus member portals',
      'Designed Cucumber/Gherkin BDD framework reducing test scenario authoring time by 35% for cross-functional QA teams',
      'Led HIPAA-regulated healthcare data compliance validation — benefits, claims, and member eligibility workflows',
      'Developed data-driven test suites using Apache POI for Excel-based test data management',
      'Performed cross-browser testing across Chrome, Firefox, and Edge — maintained compatibility matrix',
      'Coordinated with product owners and developers during sprint ceremonies for shift-left testing strategy',
      '🏆 Awarded Humana Exceptional Mover for outstanding framework delivery — 2022',
      '🌟 Awarded Humana Upcoming Star for exceptional growth and team impact — 2022',
    ],
    stack: ['Selenium WebDriver', 'TestNG', 'Cucumber', 'HIPAA', 'Java', 'Apache POI', 'Jira'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-white px-8 py-32">
      <div className="section-inner">
        <Reveal as="p" className="section-eyebrow">
          Experience
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Five years. Real impact.
        </Reveal>
        <Reveal as="p" className="section-body" delay={0.1}>
          From healthcare member portals to fintech insurance platforms — every role has been
          about building test automation that engineering teams actually rely on, at scale, in
          production.
        </Reveal>

        <div className="mt-12 border-t border-black/5">
          {roles.map((r, i) => (
            <Reveal
              key={r.company}
              className="grid grid-cols-1 gap-3 rounded-[18px] border-b border-black/5 p-10 transition-all hover:bg-white/70 hover:shadow-glass sm:grid-cols-[200px_1fr] sm:gap-12"
              delay={i * 0.04}
            >
              <div>
                <div className="text-[0.72rem] leading-relaxed text-muted">{r.date}</div>
                <div className="text-[0.72rem] leading-relaxed text-muted">{r.location}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-brand"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold tracking-[-0.02em] text-ink">{r.role}</div>
                <div className="mb-3 text-sm text-brand">{r.company}</div>
                <p className="mb-4 text-sm leading-relaxed text-muted">{r.blurb}</p>
                <ul className="mb-5 space-y-1">
                  {r.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65rem] before:h-1 before:w-1 before:rounded-full before:bg-muted"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-ink/5 px-2.5 py-0.5 text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
