import { MessageSquare, Search, Rocket, ShieldCheck } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    description:
      'Tell us your stack, team size, and timeline. We map your requirements to our talent network in a 30-minute session.',
  },
  {
    step: '02',
    icon: Search,
    title: 'AI-Assisted Matching',
    description:
      'Our vetting pipeline evaluates technical depth, communication, and culture fit — surfacing the top 3–5 candidates within 48 hours.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Technical Validation',
    description:
      'Live coding assessments, system design reviews, and reference checks. You interview only candidates who pass our bar.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Deploy & Scale',
    description:
      'Engineers onboard on our payroll or join your team directly. We handle compliance, payroll, and ongoing performance management.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">How It Works</p>
          <h2 className="section-heading mt-4">
            From requirement to{' '}
            <span className="gradient-text">deployed engineer</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            A streamlined, AI-accelerated process that gets the right talent on your team
            in days — not the months traditional recruiting takes.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="relative text-center lg:text-left">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl glass-card lg:mx-0">
                  <item.icon className="h-8 w-8 text-accent-light" />
                </div>
                <span className="mt-6 block font-display text-xs font-bold uppercase tracking-[0.2em] text-accent/60">
                  Step {item.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
