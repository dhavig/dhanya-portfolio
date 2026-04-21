import { Reveal } from '@/components/Reveal';

const tiles = [
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'dhanyasridhar02',
    sub: 'Connect with me',
    href: 'https://linkedin.com/in/dhanyasridhar02',
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/dhavig',
    sub: 'View my frameworks',
    href: 'https://github.com/dhavig',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'Get in touch',
    sub: 'Best way to reach me',
    href: 'mailto:dhanya@example.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '262-755-9206',
    sub: 'Available Mon–Fri',
    href: 'tel:+12627559206',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Chicago, IL',
    sub: 'F-1 OPT · US Authorized',
    href: '#about',
  },
];

export function Contact() {
  return (
    <section id="contact" className="dark-section bg-black px-8 py-32 text-center">
      <div className="section-inner">
        <Reveal as="p" className="section-eyebrow">
          Contact
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Open to great opportunities.
        </Reveal>
        <Reveal as="p" className="section-body mx-auto text-center" delay={0.1}>
          Actively seeking Senior SDET roles. Based in Chicago — available for hybrid, remote,
          or on-site positions across the US. Available immediately on F-1 OPT with no
          sponsorship required.
        </Reveal>

        <Reveal
          className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-3"
          delay={0.15}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-success/35 bg-success/10 px-4 py-2 text-sm font-medium text-success">
            <span className="ping-green-dot inline-block h-2 w-2 rounded-full bg-success" />
            Available Immediately
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/60">
            F-1 OPT · No Sponsorship Required
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/60">
            STEM Extension ~2029
          </span>
        </Reveal>

        <Reveal as="p" className="mx-auto mt-4 text-sm text-white/45" delay={0.2}>
          Open to: SDET · SDE II Automation · QE · QA Lead
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] shadow-glassDark">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.04}>
              <a
                href={t.href}
                target={t.href.startsWith('http') ? '_blank' : undefined}
                rel={t.href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-dark block p-6 text-left"
              >
                <span className="mb-3 block text-[1.4rem]">{t.icon}</span>
                <div className="mb-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-white/30">
                  {t.label}
                </div>
                <div className="text-sm tracking-tight text-white/75">{t.value}</div>
                <div className="mt-0.5 text-xs text-white/40">{t.sub}</div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-20 text-xs tracking-wide text-white/20">
          © 2026 Dhanya Sridhar &nbsp;·&nbsp; Chicago, IL &nbsp;·&nbsp;{' '}
          <a
            href="https://linkedin.com/in/dhanyasridhar02"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white/60"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
