import { Reveal } from '@/components/Reveal';

const drivers = [
  'Building Playwright & REST Assured frameworks that cut regression time by 40%',
  'Validating HIPAA-regulated healthcare data and fintech payment integrity',
  'Mentoring junior SDETs on BDD, POM, and CI/CD best practices',
  'Shipping quality that product and engineering teams actually rely on',
];

const skills = [
  'Playwright', 'Selenium', 'REST Assured', 'Cucumber', 'TestNG', 'JUnit', 'Java',
  'TypeScript', 'Python', 'SQL', 'Jenkins', 'GitHub Actions', 'Docker', 'JMeter',
  'AWS S3',
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-700">About</span>
            <h2 className="text-5xl sm:text-6xl font-serif mt-4 text-stone-900">
              Crafting Quality Through Code
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed mb-6 text-stone-600">
                Hi, I&apos;m Dhanya — a Senior SDET with 5+ years across fintech and healthcare.
                I build Playwright, Selenium, and REST Assured frameworks that engineering teams
                rely on daily, and I care deeply about reliability, accessibility, and the quiet
                craftsmanship that separates a good test from a great one.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed mb-6 text-stone-600">
                I&apos;m pursuing MS Computer Science at Loyola University Chicago (GPA 3.67 ·{' '}
                <strong>Cum Laude</strong>, May 2026) while interning as an SDET at CCC. Previously
                I led API automation at MetLife via TCS, and HIPAA compliance testing at Humana
                &amp; CarePlus via Cognizant.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed mb-8 text-stone-600">
                ISTQB certified. Work-authorized with no sponsorship required. Available
                immediately for Senior SDET, SDE II Automation, QE, or QA Lead roles — hybrid,
                remote, or on-site across the US.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.3}>
              <div className="sticky top-24 p-8 rounded-3xl bg-white/70 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-6 w-6 text-red-700" />
                  <h3 className="text-xl font-medium text-stone-800">What drives me</h3>
                </div>
                <ul className="space-y-4">
                  {drivers.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-stone-600">
                      <span className="mt-1 text-red-700">•</span>
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
            <Sparkles className="h-6 w-6 text-red-700" />
            <h3 className="text-2xl font-medium text-stone-800">Skills &amp; Technologies</h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 pt-8 pb-4">
            {skills.map((s) => (
              <div
                key={s}
                className="px-4 py-3 rounded-2xl text-center font-medium transition-all duration-300 hover:-translate-y-1 bg-white/70 text-stone-700 hover:bg-white border border-stone-200 hover:shadow-sm hover:shadow-red-500/20"
              >
                {s}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Heart({ className }: { className?: string }) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function Sparkles({ className }: { className?: string }) {
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
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}
