import { Clock, Globe, Shield, Sparkles, TrendingUp, Zap } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: 'AI-First Vetting',
    description:
      'Multi-signal assessment across coding, system design, and AI-specific skills — not just resume keyword matching.',
  },
  {
    icon: Zap,
    title: '48-Hour Shortlists',
    description:
      'Our pipeline delivers curated candidate profiles within two business days of your discovery call.',
  },
  {
    icon: Globe,
    title: 'Global Talent Pool',
    description:
      'Access vetted engineers across India and beyond — remote-ready, timezone-aligned, and English-fluent.',
  },
  {
    icon: Shield,
    title: 'Payroll & Compliance',
    description:
      'For outsourcing engagements, we handle employment, taxes, benefits, and legal compliance end-to-end.',
  },
  {
    icon: TrendingUp,
    title: 'Scale Without Friction',
    description:
      'Add or reduce team size with 30-day notice. No long-term lock-in, no recruitment overhead.',
  },
  {
    icon: Clock,
    title: 'Long-Term Partnership',
    description:
      '98% client retention because we invest in engineer growth, performance reviews, and team continuity.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <p className="section-label">Why Resilient</p>
            <h2 className="section-heading mt-4">
              Built for companies that{' '}
              <span className="gradient-text">move at AI speed</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Traditional staffing agencies weren&apos;t designed for the AI era. We combine
              deep technical vetting with payroll-managed outsourcing — so you get talent
              that ships, not talent that sits in a pipeline.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { value: '35+', label: 'Companies served' },
                { value: '250+', label: 'Engineers placed' },
                { value: '25+', label: 'Strategic partners' },
                { value: '25+', label: 'Enterprise programs' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="glass-card-hover p-6">
                <reason.icon className="h-5 w-5 text-accent-light" />
                <h3 className="mt-4 text-sm font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
