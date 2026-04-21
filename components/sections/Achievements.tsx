import { Reveal } from '@/components/Reveal';

const items = [
  {
    emoji: '🏛️',
    name: 'SCLA Honor Society',
    sub: 'Nominated by faculty at Loyola University Chicago. Nationally accredited · 2026',
    badge: 'NOMINATED',
    tone: 'bg-purple-100 text-purple-700',
  },
  {
    emoji: '🏅',
    name: 'ISTQB Foundation Level',
    sub: 'International Software Testing Qualifications Board · Score: 83% · 2024',
    badge: 'CERTIFIED',
    tone: 'bg-green-100 text-green-700',
  },
  {
    emoji: '🎓',
    name: 'MS Computer Science',
    sub: 'Loyola University Chicago · GPA 3.67 · Cum Laude · May 2026',
    badge: 'IN PROGRESS',
    tone: 'bg-amber-100 text-amber-700',
  },
  {
    emoji: '☁️',
    name: 'AWS Developer Associate',
    sub: 'Amazon Web Services · In active preparation · Expected 2026',
    badge: 'UPCOMING',
    tone: 'bg-stone-100 text-stone-600',
  },
  {
    emoji: '⭐',
    name: 'Exceptional Mover Award',
    sub: 'Humana / Cognizant · Outstanding framework delivery and QA impact · 2022',
    badge: 'AWARDED',
    tone: 'bg-green-100 text-green-700',
  },
  {
    emoji: '🌟',
    name: 'Upcoming Star Award',
    sub: 'Humana / Cognizant · Exceptional professional growth and leadership · 2022',
    badge: 'AWARDED',
    tone: 'bg-green-100 text-green-700',
  },
  {
    emoji: '🎓',
    name: 'BE Computer Science',
    sub: 'Anna University · Tamil Nadu, India · 2019',
    badge: 'COMPLETED',
    tone: 'bg-stone-100 text-stone-600',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-medium text-sm uppercase tracking-wider text-red-600">Recognition</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mt-4 mb-4 text-stone-900">
              Certified. Awarded. Trusted.
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-stone-600">
              Industry certifications, academic honors, and recognition from global healthcare and
              fintech companies.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.05}>
              <div className="group p-6 rounded-3xl transition-all duration-500 transform hover:-translate-y-1 border bg-white/80 border-stone-200 shadow-sm hover:border-red-300 hover:shadow-lg hover:shadow-red-500/5">
                <div className="text-4xl mb-4">{it.emoji}</div>
                <div className="mb-1 text-lg font-medium font-serif text-stone-900">{it.name}</div>
                <p className="text-sm leading-relaxed text-stone-600 mb-4">{it.sub}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${it.tone}`}>
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
