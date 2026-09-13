import { ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2, FileSearch, RefreshCcw, SearchCheck } from 'lucide-react';
import Contact from './contact';

const rpoServices = [
  { title: 'End-to-End Recruitment', description: 'We manage sourcing, screening, interviews, candidate communication, and offer coordination.', icon: SearchCheck },
  { title: 'Talent Pipeline Build', description: 'Create a continuous pipeline of qualified tech candidates for critical and recurring hiring needs.', icon: FileSearch },
  { title: 'Employer Branding Support', description: 'Improve your candidate experience and strengthen your brand in competitive hiring markets.', icon: BriefcaseBusiness },
  { title: 'Process Analytics', description: 'Track time-to-fill, funnel conversion, cost-per-hire, and talent quality with live reporting.', icon: BarChart3 },
];

const processSteps = [
  'We align with your hiring goals, team structure, and technical requirements.',
  'Our recruitment specialists source and qualify candidates through targeted outreach and screening.',
  'We coordinate interviews, manage candidate feedback, and support decision-making across stakeholders.',
  'You get a faster, more predictable hiring engine with measurable outcomes and reporting.',
];

const outcomes = [
  { label: 'Faster hiring cycles', value: '30-50%' },
  { label: 'Stronger candidate quality', value: 'Higher-fit' },
  { label: 'Lower recruitment burden', value: 'Shared team' },
  { label: 'Better reporting', value: 'Full visibility' },
];

export default function RPOPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="mesh-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="section-label">Recruitment Process Outsourcing</p>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Outsource hiring, <span className="gradient-text">not your standards</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              We act as an extension of your recruitment function — managing the sourcing, screening, and selection process so your hiring teams can focus on final decisions and growth.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Discuss RPO needs
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#solutions" className="btn-secondary">
                See our approach
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.label} className="glass-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">What We Deliver</p>
            <h2 className="section-heading mt-4">
              Full-spectrum RPO for <span className="gradient-text">high-growth teams</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {rpoServices.map(({ title, description, icon: Icon }) => (
              <article key={title} className="glass-card-hover p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-glow/10">
                  <Icon className="h-6 w-6 text-accent-light" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-label">Our Process</p>
              <h2 className="section-heading mt-4">
                A recruitment engine built for <span className="gradient-text">consistency and scale</span>
              </h2>
            </div>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent-light">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface-raised to-surface-card p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="section-label">Why RPO Works</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                  Turn hiring from a bottleneck into a competitive advantage.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  Whether you’re filling a single urgent role or building a multi-team hiring roadmap, we bring structure, speed, and measurable outcomes.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <a href="#contact" className="btn-primary">
                  Book a recruitment consult
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact variant="rpo" />
    </div>
  );
}
