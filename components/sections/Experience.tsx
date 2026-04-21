import { Reveal } from '@/components/Reveal';

type Role = {
  title: string;
  company: string;
  date: string;
  location: string;
  tags: string[];
  badge: { label: string; className: string };
  bullets: string[];
  stack: string[];
};

const roles: Role[] = [
  {
    title: 'SDET Intern',
    company: 'CCC Intelligent Solutions',
    date: 'May 2025 – Nov 2025',
    location: 'Chicago, IL',
    tags: ['Fintech', 'InsureTech'],
    badge: { label: 'Part of MS CS', className: 'bg-purple-100 text-purple-700' },
    bullets: [
      'Architected a Playwright + TypeScript end-to-end automation framework from scratch — reduced regression cycle time by 40%',
      'Built multi-stage GitHub Actions CI/CD pipelines triggering suites on every PR, enabling continuous quality gates',
      'Validated DB2 financial data integrity across payment processing workflows — 99.9% accuracy at production scale',
      'Integrated GitHub Copilot for AI-assisted test generation, improving coverage by 30%',
    ],
    stack: ['Playwright', 'TypeScript', 'GitHub Actions', 'DB2', 'GitHub Copilot', 'REST APIs'],
  },
  {
    title: 'Senior SDET',
    company: 'TCS · MetLife',
    date: 'Jun 2023 – Aug 2024',
    location: 'Chicago, IL',
    tags: ['Insurance', 'Fintech'],
    badge: { label: 'Full-time', className: 'bg-green-100 text-green-700' },
    bullets: [
      'Led API automation strategy using REST Assured — 90%+ coverage across 15+ microservices in production',
      'Designed JMeter performance suites validating stability under 10,000+ concurrent users — zero critical load failures',
      'Built reusable Cucumber/BDD framework components — reduced authoring time by 35% across 3 squads',
      'Mentored 3 junior SDETs on framework best practices and BDD authoring techniques',
    ],
    stack: ['REST Assured', 'JMeter', 'Cucumber', 'Jenkins', 'Java', 'Allure', 'SQL'],
  },
  {
    title: 'SDET',
    company: 'Cognizant · Humana & CarePlus',
    date: 'Aug 2021 – May 2023',
    location: 'Remote / US',
    tags: ['Healthcare', 'HIPAA'],
    badge: { label: 'Full-time', className: 'bg-green-100 text-green-700' },
    bullets: [
      'Built and maintained 200+ automated test cases using Selenium WebDriver and TestNG',
      'Designed Cucumber/Gherkin BDD framework reducing scenario authoring time by 35%',
      'Led HIPAA-regulated healthcare data compliance validation — benefits, claims, member eligibility',
      '🏆 Awarded Humana Exceptional Mover and 🌟 Upcoming Star — 2022',
    ],
    stack: ['Selenium WebDriver', 'TestNG', 'Cucumber', 'HIPAA', 'Java', 'Apache POI', 'Jira'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-600">Experience</span>
            <h2 className="text-5xl sm:text-6xl font-serif mt-4 text-stone-900">My Journey</h2>
            <p className="text-lg mt-4 max-w-2xl text-stone-600">
              From healthcare member portals to fintech insurance platforms — every role has been
              about building test automation that engineering teams actually rely on, at scale, in
              production.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.05}>
              <div className="group p-6 rounded-3xl transition-all duration-700 transform hover:-translate-y-2 border bg-white/80 border-stone-200 shadow-sm hover:border-red-300 hover:shadow-lg hover:shadow-red-500/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-2xl font-medium font-serif text-stone-900">{r.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.badge.className}`}>
                        {r.badge.label}
                      </span>
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-lg font-medium text-stone-600">{r.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-stone-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="font-medium">{r.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{r.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="mb-6 space-y-2">
                  {r.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-red-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-colors bg-stone-100 text-stone-700 hover:bg-red-50 hover:text-red-700"
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

function Calendar({ className }: { className?: string }) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MapPin({ className }: { className?: string }) {
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
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
