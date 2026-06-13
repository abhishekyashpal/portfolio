import { ArrowRight, Brain, Cloud, Users } from 'lucide-react';

const floatingCards = [
  { icon: Brain, label: 'AI Engineers', sub: 'LLM · RAG · MLOps', top: '12%', left: '58%', delay: '0s' },
  { icon: Cloud, label: 'DevOps & Cloud', sub: 'AWS · K8s · Terraform', top: '42%', left: '68%', delay: '1s' },
  { icon: Users, label: 'Full Teams', sub: 'Outsourced on payroll', top: '68%', left: '52%', delay: '2s' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="mesh-bg absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="animate-fade-up opacity-0-start inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent-light">
                AI-Powered Talent Network
              </span>
            </div>

            <h1 className="animate-fade-up animate-delay-100 opacity-0-start font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hire the world&apos;s best{' '}
              <span className="gradient-text">AI & engineering</span>{' '}
              talent — vetted, matched, deployed.
            </h1>

            <p className="animate-fade-up animate-delay-200 opacity-0-start max-w-xl text-lg leading-relaxed text-slate-400">
              We outsource elite AI Engineers, DevOps specialists, and full-stack developers
              to companies worldwide. AI-first vetting. Payroll-managed teams. Recruitment
              that moves at startup speed.
            </p>

            <div className="animate-fade-up animate-delay-300 opacity-0-start flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Hire AI Engineers
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>

            <div className="animate-fade-up animate-delay-400 opacity-0-start flex flex-wrap gap-8 pt-4">
              {[
                { value: '250+', label: 'Engineers placed' },
                { value: '48hr', label: 'Avg. shortlist time' },
                { value: '98%', label: 'Client retention' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[480px] lg:block">
            <div className="absolute inset-0 rounded-3xl border border-white/[0.06] bg-surface-raised/60 backdrop-blur-sm">
              <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[80px] animate-pulse-glow" />

              {floatingCards.map(({ icon: Icon, label, sub, top, left, delay }) => (
                <div
                  key={label}
                  className="absolute animate-float glass-card px-5 py-4 shadow-xl shadow-black/30"
                  style={{ top, left, animationDelay: delay }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-glow/20">
                      <Icon className="h-5 w-5 text-accent-light" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="text-xs text-slate-400">{sub}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-8 left-8 right-8 glass-card p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">AI Match Score</p>
                    <p className="mt-1 font-display text-3xl font-bold gradient-text">97.4%</p>
                  </div>
                  <div className="space-y-1.5 text-right">
                    <p className="text-xs text-slate-500">Skills verified</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-1.5 w-6 rounded-full bg-gradient-to-r from-accent to-accent-cyan" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
