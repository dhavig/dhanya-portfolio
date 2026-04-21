'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';

const drivers = [
  'Building Playwright & REST Assured frameworks that cut regression time by 40%',
  'Validating HIPAA-regulated healthcare data and fintech payment integrity',
  'Probing AI agents for drift, prompt injection, and silent model regressions',
  'Mentoring junior SDETs on BDD, POM, CI/CD, and LLM-as-judge patterns',
];

const skills = [
  'Playwright', 'Selenium', 'REST Assured', 'Cucumber', 'TestNG', 'JUnit', 'Java',
  'TypeScript', 'Python', 'Pytest', 'SQL', 'DuckDB', 'Jenkins', 'GitHub Actions',
  'Docker', 'JMeter', 'AWS S3', 'LLM-as-Judge', 'Streamlit',
];

const COLLAPSED_HEIGHT = 92; // one row visible

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-700 dark:text-red-400">
              About
            </span>
            <h2 className="text-5xl sm:text-6xl font-serif mt-4 text-stone-900 dark:text-stone-100">
              Crafting Quality Through Code
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed mb-6 text-stone-600 dark:text-stone-400">
                Hi, I&apos;m Dhanya — a Senior SDET with 5+ years across fintech and healthcare.
                I build Playwright, Selenium, and REST Assured frameworks that engineering teams
                rely on daily — and increasingly, reliability harnesses for agentic LLM systems
                (see{' '}
                <a
                  href="https://github.com/dhavig/agent-eval-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-red-700 dark:text-red-400 underline decoration-red-300 dark:decoration-red-700 underline-offset-4 hover:decoration-red-500"
                >
                  AgentEvalHub
                </a>
                ). I care deeply about reliability and the quiet craftsmanship that separates a
                good test from a great one.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed mb-6 text-stone-600 dark:text-stone-400">
                I&apos;m pursuing MS Computer Science at Loyola University Chicago (GPA 3.67 ·{' '}
                <strong>Cum Laude</strong>, May 2026) while interning as an SDET at CCC. Previously
                I led API automation at MetLife via TCS, and HIPAA compliance testing at Humana
                &amp; CarePlus via Cognizant.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed mb-8 text-stone-600 dark:text-stone-400">
                ISTQB certified. Work-authorized with no sponsorship required. Available
                immediately for Senior SDET, SDE II Automation, QE, or QA Lead roles — hybrid,
                remote, or on-site across the US.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.3}>
              <div className="sticky top-24 p-8 rounded-3xl bg-white/70 dark:bg-stone-800/70 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-6 w-6 text-red-700 dark:text-red-400" />
                  <h3 className="text-xl font-medium text-stone-800 dark:text-stone-200">
                    What drives me
                  </h3>
                </div>
                <ul className="space-y-4">
                  {drivers.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-stone-600 dark:text-stone-400"
                    >
                      <span className="mt-1 text-red-700 dark:text-red-400">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="flex items-center gap-4 mt-12">
            <Sparkles className="h-6 w-6 text-red-700 dark:text-red-400" />
            <h3 className="text-2xl font-medium text-stone-800 dark:text-stone-200">
              Skills &amp; Technologies
            </h3>
          </div>
          <div
            className="overflow-hidden transition-all duration-1000"
            style={{ maxHeight: expanded ? `${skills.length * 80}px` : `${COLLAPSED_HEIGHT}px` }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-8 pb-4">
              {skills.map((s) => (
                <div
                  key={s}
                  className="px-4 py-3 rounded-2xl text-center font-medium transition-all duration-300 hover:-translate-y-1 bg-white/70 dark:bg-stone-800/60 text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:shadow-sm hover:shadow-red-500/20"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 flex items-center gap-2 py-2 rounded-full text-sm font-medium transition-all duration-500 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            {expanded ? 'Show Less' : 'Show More'}
            <span
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

function svgProps(className?: string) {
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
    <svg {...svgProps(className)}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg {...svgProps(className)}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg {...svgProps(className)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
