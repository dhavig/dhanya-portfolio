import { Reveal } from '@/components/Reveal';

const tiles = [
  {
    icon: '⚡',
    name: 'Languages',
    tags: ['Java', 'TypeScript', 'Python', 'SQL', 'Groovy'],
    body:
      'Primary: Java (OOP, Collections, Streams). TypeScript for Playwright. Python for scripting & data tasks. SQL for DB validation.',
  },
  {
    icon: '🤖',
    name: 'Test Automation',
    tags: ['Playwright', 'Selenium', 'REST Assured', 'TestNG', 'JUnit'],
    body:
      'Playwright TypeScript for modern UI. Selenium WebDriver for legacy platforms. REST Assured for microservice API coverage at 90%+.',
  },
  {
    icon: '🥒',
    name: 'BDD & TDD',
    tags: ['Cucumber', 'Gherkin', 'POM', 'TDD', 'Agile'],
    body:
      'Behavior-Driven Development with Cucumber/Gherkin. Page Object Model design patterns. Agile/Scrum sprint-based QA delivery.',
  },
  {
    icon: '🚀',
    name: 'CI/CD & DevOps',
    tags: ['Jenkins', 'GitHub Actions', 'Docker', 'Maven', 'Git'],
    body:
      'Multi-stage GitHub Actions pipelines. Jenkins for enterprise CI. Docker containerized test environments. Maven for build lifecycle.',
  },
  {
    icon: '☁️',
    name: 'Cloud & Data',
    tags: ['AWS S3', 'DB2', 'MySQL', 'Microservices', 'Postman'],
    body:
      'AWS S3 for test reporting storage. DB2 and MySQL for database validation. Postman for manual API exploration. Microservices testing patterns.',
  },
  {
    icon: '📊',
    name: 'Performance & Tools',
    tags: ['JMeter', 'LoadRunner', 'Jira', 'Confluence', 'Allure'],
    body:
      'JMeter load testing validated 10,000+ concurrent users. Allure & ExtentReports for test reporting. Jira for defect management.',
  },
];

export function Skills() {
  return (
    <section id="skills" className="dark-section bg-[#1d1d1f] px-8 py-32">
      <div className="section-inner">
        <Reveal as="p" className="section-eyebrow">
          Skills
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          Built for automation at scale.
        </Reveal>
        <Reveal as="p" className="section-body" delay={0.1}>
          A full-stack of test engineering tools — from UI automation to cloud-native CI/CD,
          built and battle-tested in real production environments across fintech and healthcare.
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] shadow-glassDark md:grid-cols-3">
          {tiles.map((t, i) => (
            <Reveal key={t.name} className="glass-dark p-8" delay={i * 0.05}>
              <span className="mb-4 block text-[1.8rem]">{t.icon}</span>
              <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white/40">
                {t.name}
              </div>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.07] px-2.5 py-0.5 text-sm text-white/75"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-white/55">{t.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
