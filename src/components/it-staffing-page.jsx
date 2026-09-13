import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, Layers3, ShieldCheck, Users } from 'lucide-react';
import Contact from './contact';

const staffingRoles = [
  { title: 'Software Developers', description: 'Frontend, backend, full-stack, and enterprise application engineers.' },
  { title: 'Cloud & DevOps', description: 'AWS, Azure, Kubernetes, CI/CD, and infrastructure specialists.' },
  { title: 'QA & Automation', description: 'Manual and automated testing experts for robust delivery pipelines.' },
  { title: 'Data & AI Talent', description: 'Analysts, ML engineers, and AI platform specialists for data-driven teams.' },
  { title: 'Cybersecurity', description: 'Security engineers and analysts to protect critical systems and workflows.' },
  { title: 'Product & Delivery', description: 'Project managers, product owners, and tech leads to bridge strategy and execution.' },
];

const serviceModels = [
  {
    title: 'Contract Staffing',
    description: 'Bring in specialized talent for a defined project or delivery window with quick ramp-up.',
    icon: Clock3,
  },
  {
    title: 'Permanent Hiring',
    description: 'Build long-term teams with vetted technical professionals aligned to your culture.',
    icon: Users,
  },
  {
    title: 'Dedicated Teams',
    description: 'Create a focused team model with engineers fully embedded in your sprint and delivery rhythm.',
    icon: Layers3,
  },
  {
    title: 'Onsite / Remote Flexibility',
    description: 'Choose remote, hybrid, or onsite talent structures based on business priorities and compliance needs.',
    icon: BriefcaseBusiness,
  },
];

const reasons = [
  'Access pre-vetted IT professionals across engineering, cloud, QA, and digital transformation roles.',
  'Reduce time-to-fill with an AI-assisted hiring process built for speed and quality.',
  'Scale up or down without the HR burden, hiring delays, or compliance headaches.',
  'Get talent aligned to your tech stack, release cycles, and business objectives.',
];

export default function ITStaffingPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="mesh-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="section-label">IT Staffing</p>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Flexible <span className="gradient-text">IT staffing</span> for teams that need speed and expertise.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              We help businesses hire the right technology talent quickly — from software developers and QA specialists to cloud architects and cybersecurity experts.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Request staffing support
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#roles" className="btn-secondary">
                Explore roles
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { value: '48hr', label: 'Average shortlist time' },
              { value: '250+', label: 'Candidates aligned' },
              { value: '100%', label: 'Role-fit review' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">Roles We Staff</p>
            <h2 className="section-heading mt-4">
              Technology talent across the full <span className="gradient-text">delivery lifecycle</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {staffingRoles.map((role) => (
              <article key={role.title} className="glass-card-hover p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-glow/10">
                  <ShieldCheck className="h-6 w-6 text-accent-light" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-heading mt-4">
                Hiring support designed for <span className="gradient-text">modern delivery teams</span>
              </h2>
              <ul className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-light" />
                    <span className="text-sm leading-relaxed text-slate-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceModels.map(({ title, description, icon: Icon }) => (
                <article key={title} className="glass-card-hover p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05]">
                    <Icon className="h-5 w-5 text-accent-light" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
                </article>
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
                <p className="section-label">Delivery Advantage</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                  Need a fast, reliable tech hiring partner?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-400">
                  We match the right professionals to your roadmap, whether you need a single specialist or an entire cross-functional team.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <a href="#contact" className="btn-primary">
                  Talk to our staffing team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact variant="staffing" />
    </div>
  );
}
