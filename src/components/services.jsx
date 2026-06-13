import { ArrowRightLeft, Briefcase, Users } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Talent Outsourcing',
    tagline: 'Engineers on our payroll, dedicated to you',
    description:
      'Scale your team instantly with pre-vetted engineers employed on our payroll. Full compliance, HR, and payroll handled — you get focused talent embedded in your workflows from day one.',
    highlights: [
      'Dedicated AI & engineering pods',
      'Monthly or long-term contracts',
      'Full payroll & compliance managed',
      'Seamless team integration',
    ],
    cta: 'Build your team',
    primary: true,
  },
  {
    icon: Briefcase,
    title: 'IT Recruitment',
    tagline: 'Permanent hires, placed with precision',
    description:
      'End-to-end recruitment for permanent and contract-to-hire roles. We source, screen, and deliver candidates who match your technical bar and culture — not just keywords on a resume.',
    highlights: [
      'Permanent & contract-to-hire',
      'Technical screening included',
      'Executive & mid-level roles',
      'Global & remote placements',
    ],
    cta: 'Start recruiting',
    primary: false,
  },
  {
    icon: ArrowRightLeft,
    title: 'Staff Augmentation',
    tagline: 'Flexible capacity, zero overhead',
    description:
      'Need 2 engineers for a sprint or 20 for a product launch? Scale up or down without the hiring friction. Our AI-assisted matching cuts time-to-productivity in half.',
    highlights: [
      'Scale teams in days, not months',
      'Project-based or ongoing',
      'Mix of AI, DevOps & software roles',
      'Managed performance reviews',
    ],
    cta: 'Augment your team',
    primary: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">What We Do</p>
          <h2 className="section-heading mt-4">
            Two core services,{' '}
            <span className="gradient-text">one talent network</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Whether you need engineers on our payroll or permanent hires for your team,
            we deliver vetted talent through the same AI-powered pipeline.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={`glass-card-hover flex flex-col p-8 ${
                service.primary ? 'border-accent/25 ring-1 ring-accent/10' : ''
              }`}
            >
              {service.primary && (
                <span className="mb-4 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-light">
                  Most Popular
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-glow/10">
                <service.icon className="h-6 w-6 text-accent-light" />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent-light">{service.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{service.description}</p>

              <ul className="mt-6 space-y-2.5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition ${
                  service.primary ? 'text-accent-light hover:text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {service.cta} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
