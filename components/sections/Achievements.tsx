import { Reveal } from '@/components/Reveal';

type Item = {
  icon: string;
  name: string;
  sub: string;
  badge: string;
  badgeClass: string;
};

const items: Item[] = [
  {
    icon: '🏛️',
    name: 'SCLA Honor Society',
    sub: 'Society for Collegiate Leadership & Achievement · Nominated by faculty at Loyola University Chicago · Nationally accredited · Extended to a small percentage of students · 2026',
    badge: 'NOMINATED',
    badgeClass: 'bg-brand/10 text-brand',
  },
  {
    icon: '🏅',
    name: 'ISTQB Foundation Level',
    sub: 'International Software Testing Qualifications Board · Score: 83% (threshold: 65%) · Registered on AT*SQA Successful Candidate Register · 2024',
    badge: 'CERTIFIED',
    badgeClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: '🎓',
    name: 'MS Computer Science',
    sub: 'Loyola University Chicago · GPA 3.67 / 4.0 · Cum Laude (With Honors) · Graduate Reference Assistant at Lakeshore Campus · May 2026',
    badge: 'IN PROGRESS',
    badgeClass: 'bg-amber-100 text-amber-700',
  },
  {
    icon: '☁️',
    name: 'AWS Developer Associate',
    sub: 'Amazon Web Services · Developer Associate Certification · In active preparation · Expected 2026',
    badge: 'UPCOMING',
    badgeClass: 'bg-ink/5 text-muted',
  },
  {
    icon: '⭐',
    name: 'Exceptional Mover Award',
    sub: 'Humana / Cognizant · Awarded for outstanding framework delivery, measurable QA impact, and cross-team collaboration · 2022',
    badge: 'AWARDED',
    badgeClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: '🌟',
    name: 'Upcoming Star Award',
    sub: 'Humana / Cognizant · Recognized for exceptional professional growth, initiative, and leadership potential within the QA team · 2022',
    badge: 'AWARDED',
    badgeClass: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: '🎓',
    name: 'BE Computer Science',
    sub: 'Anna University · Tamil Nadu, India · Bachelor of Engineering in Computer Science & Engineering · 2019',
    badge: 'COMPLETED',
    badgeClass: 'bg-ink/5 text-muted',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="bg-light px-8 py-32">
      <div className="section-inner">
        <Reveal as="p" className="section-eyebrow">
          Recognition
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Certified. Awarded. Trusted.
        </Reveal>
        <Reveal as="p" className="section-body" delay={0.1}>
          Industry certifications, academic excellence, and recognition from global healthcare
          and fintech companies — a track record of consistent delivery and growth.
        </Reveal>

        <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {items.map((it, i) => (
            <Reveal
              key={it.name}
              className="rounded-[22px] border border-white/75 bg-white/60 p-7 backdrop-blur-xl backdrop-saturate-[200%] shadow-glass transition-all hover:-translate-y-1 hover:bg-white/80"
              delay={i * 0.04}
            >
              <span className="mb-4 block text-[2rem]">{it.icon}</span>
              <div className="mb-1 text-[0.95rem] font-semibold tracking-[-0.01em] text-ink">
                {it.name}
              </div>
              <div className="text-[0.82rem] leading-relaxed text-muted">{it.sub}</div>
              <div className="mt-4">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[0.68rem] font-semibold tracking-wider ${it.badgeClass}`}
                >
                  {it.badge}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
