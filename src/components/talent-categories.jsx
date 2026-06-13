import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layers,
  Monitor,
  Server,
  TestTube2,
} from 'lucide-react';

const tiers = [
  {
    tier: 1,
    priority: 'Top Priority',
    title: 'AI Engineers',
    description:
      'The talent every company needs right now. LLM fine-tuning, RAG pipelines, agent frameworks, MLOps, and production AI systems.',
    icon: Brain,
    gradient: 'from-violet-500/20 to-indigo-500/20',
    border: 'border-violet-500/30',
    badge: 'bg-violet-500/20 text-violet-300',
    skills: ['LLM & GenAI', 'PyTorch / TensorFlow', 'RAG & Agents', 'MLOps', 'Computer Vision', 'NLP'],
    featured: true,
  },
  {
    tier: 2,
    priority: 'High Priority',
    title: 'DevOps · Infra · Cloud',
    description:
      'Infrastructure engineers who keep AI workloads running at scale. Cloud-native, CI/CD, observability, and platform engineering.',
    icon: Cloud,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-500/30',
    badge: 'bg-cyan-500/20 text-cyan-300',
    skills: ['AWS / GCP / Azure', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD', 'SRE'],
    featured: true,
  },
  {
    tier: 3,
    priority: 'Full Spectrum',
    title: 'Software Engineering',
    description:
      'Complete engineering coverage — from pixel-perfect frontends to robust backends and everything in between.',
    icon: Code2,
    gradient: 'from-slate-500/10 to-slate-600/10',
    border: 'border-white/10',
    badge: 'bg-white/10 text-slate-300',
    skills: ['React / Next.js', 'Node / Python / Go', 'Full-Stack', 'Mobile', 'API Design', 'Microservices'],
    featured: false,
  },
];

const additionalRoles = [
  { icon: Monitor, label: 'Frontend Engineers', skills: 'React, Angular, Vue' },
  { icon: Layers, label: 'Full-Stack Engineers', skills: 'MERN, Python, Java' },
  { icon: Server, label: 'Backend Engineers', skills: 'Node, Go, Java, .NET' },
  { icon: TestTube2, label: 'QA Engineers', skills: 'Automation, Selenium, Cypress' },
  { icon: Database, label: 'Database Engineers', skills: 'PostgreSQL, MongoDB, Redis' },
];

export default function TalentCategories() {
  return (
    <section id="talent" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading mt-4">
            AI-first talent,{' '}
            <span className="gradient-text">prioritized for impact</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            We source, vet, and deploy engineers across every discipline — with AI Engineers
            and Cloud/DevOps specialists at the center of everything we do.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.title}
              className={`glass-card-hover relative overflow-hidden p-8 ${
                tier.featured ? tier.border : ''
              } ${tier.featured ? 'lg:-mt-2 lg:mb-2' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-50`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${tier.badge}`}>
                    {tier.priority}
                  </span>
                  <span className="font-display text-sm font-bold text-slate-500">Tier {tier.tier}</span>
                </div>

                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06]">
                  <tier.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-white">{tier.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{tier.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tier.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light transition hover:text-white"
                >
                  Hire {tier.title.split(' ')[0]} talent →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-6 text-center text-sm font-medium text-slate-500">
            Also available across your full engineering stack
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {additionalRoles.map((role) => (
              <div key={role.label} className="glass-card-hover p-5 text-center">
                <role.icon className="mx-auto h-5 w-5 text-slate-400" />
                <p className="mt-3 text-sm font-semibold text-white">{role.label}</p>
                <p className="mt-1 text-xs text-slate-500">{role.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
