'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';

type Role = {
  title: string;
  company: string;
  subtitle?: string;
  date: string;
  location: string;
  tags: string[];
  badge: { label: string; className: string };
  bullets: string[];
  stack: string[];
  aria: string;
};

const roles: Role[] = [
  {
    title: 'SDET Intern',
    company: 'CCC Intelligent Solutions',
    subtitle: 'Part of MS CS Program',
    date: 'May 2025 – Nov 2025',
    location: 'Chicago, IL',
    tags: ['Fintech', 'InsureTech'],
    badge: { label: 'Internship', className: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' },
    bullets: [
      'Architected a Playwright + TypeScript end-to-end automation framework from scratch — reduced regression cycle time by 40%',
      'Built multi-stage GitHub Actions CI/CD pipelines triggering suites on every PR, enabling continuous quality gates',
      'Validated DB2 financial data integrity across payment processing workflows — 99.9% accuracy at production scale',
      'Integrated GitHub Copilot for AI-assisted test generation, improving coverage by 30%',
    ],
    stack: ['Playwright', 'TypeScript', 'GitHub Actions', 'DB2', 'GitHub Copilot', 'REST APIs'],
    aria: 'SDET Intern at CCC Intelligent Solutions',
  },
  {
    title: 'Senior SDET',
    company: 'TCS · MetLife',
    date: 'Jun 2023 – Aug 2024',
    location: 'Chicago, IL',
    tags: ['Insurance', 'Fintech'],
    badge: { label: 'Full-time', className: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
    bullets: [
      'Led API automation strategy using REST Assured — 90%+ coverage across 15+ microservices in production',
      'Designed JMeter performance suites validating stability under 10,000+ concurrent users — zero critical load failures',
      'Built reusable Cucumber/BDD framework components — reduced authoring time by 35% across 3 squads',
      'Mentored 3 junior SDETs on framework best practices and BDD authoring techniques',
    ],
    stack: ['REST Assured', 'JMeter', 'Cucumber', 'Jenkins', 'Java', 'Allure', 'SQL'],
    aria: 'Senior SDET at TCS · MetLife',
  },
  {
    title: 'SDET',
    company: 'Cognizant · Humana & CarePlus',
    date: 'Aug 2021 – May 2023',
    location: 'Remote / US',
    tags: ['Healthcare', 'HIPAA'],
    badge: { label: 'Full-time', className: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
    bullets: [
      'Built and maintained 200+ automated test cases using Selenium WebDriver and TestNG',
      'Designed Cucumber/Gherkin BDD framework reducing scenario authoring time by 35%',
      'Led HIPAA-regulated healthcare data compliance validation — benefits, claims, member eligibility',
      'Awarded Humana Exceptional Mover and Upcoming Star — 2022',
    ],
    stack: ['Selenium WebDriver', 'TestNG', 'Cucumber', 'HIPAA', 'Java', 'Apache POI', 'Jira'],
    aria: 'SDET at Cognizant · Humana & CarePlus',
  },
];

export function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="experience"
      className="py-32 relative font-sans"
      role="region"
      aria-label="Work Experience"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-600 dark:text-red-400">
              Experience
            </span>
            <h2 className="text-5xl sm:text-6xl font-serif mt-4 text-stone-900 dark:text-stone-100">
              My Journey
            </h2>
            <p className="text-lg mt-4 max-w-2xl text-stone-600 dark:text-stone-400">
              From healthcare member portals to fintech insurance platforms — every role has been
              about building test automation that engineering teams actually rely on, at scale, in
              production.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-center gap-3 mb-12">
            {roles.map((r, i) => (
              <button
                key={r.company}
                onClick={() => {
                  setActiveDot(i);
                  setOpenIdx(i);
                  document
                    .getElementById(`exp-${i}`)
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 ${
                  activeDot === i
                    ? 'bg-red-600 w-8'
                    : 'bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600'
                }`}
                aria-label={`Jump to ${r.company}`}
              />
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          {roles.map((r, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={r.company} delay={i * 0.05}>
                <div
                  id={`exp-${i}`}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  aria-label={`${r.aria}. Click to expand details.`}
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(i);
                    }
                  }}
                  className="group cursor-pointer p-6 rounded-3xl transition-all duration-700 transform hover:-translate-y-2 border focus:outline-none focus:ring-2 focus:ring-red-500/50 bg-white/80 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 shadow-sm hover:border-red-300 dark:hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="text-2xl font-medium font-serif text-stone-900 dark:text-stone-100">
                          {r.title}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.badge.className}`}>
                          {r.badge.label}
                        </span>
                        {r.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {r.subtitle && (
                        <p className="text-sm font-medium mb-2 text-stone-600 dark:text-stone-400">
                          {r.subtitle}
                        </p>
                      )}
                      <p className="text-lg font-medium text-stone-600 dark:text-stone-300">
                        {r.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-stone-500 dark:text-stone-400">
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

                  <div className="flex flex-wrap gap-2 mb-6">
                    {r.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full text-xs font-medium transition-colors bg-stone-100 text-stone-700 dark:bg-stone-700 dark:text-stone-300 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/30 dark:hover:text-red-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`grid transition-all duration-700 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 rounded-xl mb-4 bg-red-50 dark:bg-red-900/20">
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-red-600 dark:text-red-400">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {r.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300"
                            >
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-red-500 shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t transition-all border-stone-200/50 dark:border-stone-700/50">
                    <div className="text-sm font-medium flex items-center gap-2 transition-all text-stone-600 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200">
                      <Briefcase className="h-4 w-4" />
                      <span>{isOpen ? 'Hide details' : 'View details'}</span>
                    </div>
                    <div
                      className={`p-2 rounded-full transition-all transform text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function svg(className?: string) {
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

function Calendar({ className }: { className?: string }) {
  return (
    <svg {...svg(className)}>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MapPin({ className }: { className?: string }) {
  return (
    <svg {...svg(className)}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Briefcase({ className }: { className?: string }) {
  return (
    <svg {...svg(className)}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg {...svg(className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
