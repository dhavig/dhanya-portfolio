import { Reveal } from '@/components/Reveal';

const stats = [
  { num: '5+', label: 'Years Experience' },
  { num: '4', label: 'Companies' },
  { num: '500+', label: 'Test Cases Built' },
  { num: '2', label: 'Industry Awards' },
];

const cells = [
  {
    icon: '🎓',
    label: 'Education',
    lines: [
      'MS Computer Science',
      'Loyola University Chicago',
      'GPA 3.67 · May 2026',
      'Cum Laude (With Honors)',
      'BE Computer Science',
      'Anna University, India · 2019',
    ],
  },
  {
    icon: '🏅',
    label: 'Certifications',
    lines: [
      'ISTQB Foundation Level',
      'Score: 83% · AT*SQA Registered',
      'AWS Developer Associate',
      'In Progress · 2026',
    ],
  },
  {
    icon: '📍',
    label: 'Location',
    lines: ['Chicago, Illinois', 'Open to Hybrid & Remote US-wide', 'Willing to Relocate'],
  },
  {
    icon: '✅',
    label: 'Work Authorization',
    lines: [
      'F-1 OPT · Active Now',
      'STEM Extension ~2029',
      'No Sponsorship Required',
      'H-4 EAD pathway available',
    ],
  },
  {
    icon: '🏥',
    label: 'Healthcare Domain',
    lines: [
      'Humana · CarePlus',
      'HIPAA Compliance Testing',
      'Member Portal QA',
      'Claims · Benefits · Portals',
    ],
  },
  {
    icon: '💳',
    label: 'Fintech Domain',
    lines: [
      'CCC · MetLife',
      'Payment Processing QA',
      'Financial Data Integrity',
      'Insurance · InsureTech',
    ],
  },
];

export function About() {
  return (
    <section id="about" className="bg-white px-8 py-32">
      <div className="section-inner">
        <Reveal as="p" className="section-eyebrow">
          About
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Automation.
          <br />
          Quality. Scale.
        </Reveal>
        <Reveal as="p" className="section-body" delay={0.1}>
          Senior SDET with 5+ years across fintech and healthcare — building Playwright,
          Selenium, and REST Assured frameworks that engineering teams rely on daily. MS
          Computer Science, Loyola University Chicago (GPA 3.67 · <strong>Cum Laude</strong>,
          May 2026). ISTQB certified. F-1 OPT, no sponsorship required.
        </Reveal>

        <Reveal
          className="my-10 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-white/50 bg-black/5 shadow-glass md:grid-cols-4"
          delay={0.15}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-light p-6 text-center">
              <div className="text-[2.2rem] font-bold tracking-[-0.03em] text-ink">{s.num}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-px overflow-hidden rounded-[22px] border border-white/50 bg-black/5 shadow-glass">
          {cells.map((c, i) => (
            <Reveal key={c.label} className="glass-light p-7" delay={i * 0.04}>
              <div className="mb-3 text-[1.6rem]">{c.icon}</div>
              <div className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-muted">
                {c.label}
              </div>
              <div className="space-y-0.5 text-[0.95rem] font-medium leading-snug tracking-tight text-ink">
                {c.lines.map((line, j) => (
                  <div key={j}>{line}</div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
