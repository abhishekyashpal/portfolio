import {
  BarChart3,
  Brain,
  Building2,
  Cloud,
  Database,
  GraduationCap,
  Layers3,
  Monitor,
  Server,
  UserRound,
} from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Corporate Teams',
    description:
      'Upskill engineering and business teams with focused cohorts, role-based labs, and project workshops.',
    points: ['Employee upskilling', 'Private cohorts', 'Team dashboards'],
  },
  {
    icon: GraduationCap,
    title: 'Colleges',
    description:
      'Industry-ready programs for placement cells, departments, and final-year student batches.',
    points: ['MoU-based delivery', 'Internship model', 'Capstone projects'],
  },
  {
    icon: UserRound,
    title: 'Individuals',
    description:
      'Career-focused training for graduates, working professionals, and freshers preparing for modern tech roles.',
    points: ['Weekend batches', 'Portfolio projects', 'Interview preparation'],
  },
];

const categories = [
  {
    icon: Brain,
    title: 'Gen AI Engineer',
    description: 'Build practical GenAI applications with prompts, RAG, agents, and AI APIs.',
    skills: ['Prompt workflows', 'OpenAI APIs', 'RAG systems', 'AI agents'],
  },
  {
    icon: Brain,
    title: 'ML Engineer',
    description: 'Learn machine learning workflows from data preparation to model evaluation.',
    skills: ['Python ML', 'Feature engineering', 'Model training', 'Evaluation'],
  },
  {
    icon: Cloud,
    title: 'Cloud / DevOps',
    description: 'Train on cloud, automation, containers, CI/CD, and infrastructure workflows.',
    skills: ['Linux & Docker', 'AWS basics', 'GitHub Actions', 'Kubernetes intro'],
  },
  {
    icon: Monitor,
    title: 'UI Development',
    description: 'Build polished, responsive interfaces using modern frontend workflows.',
    skills: ['HTML, CSS, JavaScript', 'React components', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Create secure APIs, services, authentication flows, and production-ready backends.',
    skills: ['Node.js APIs', 'Databases', 'Auth & security', 'System design basics'],
  },
  {
    icon: Layers3,
    title: 'Full Stack Development',
    description: 'Ship complete applications from UI to API, database, deployment, and maintenance.',
    skills: ['React + Node', 'REST APIs', 'PostgreSQL/MongoDB', 'Deployment'],
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Prepare learners for data pipelines, warehouses, ETL, and reliable data workflows.',
    skills: ['SQL', 'ETL pipelines', 'Python for data', 'Data warehousing'],
  },
  {
    icon: BarChart3,
    title: 'Data Analyst',
    description: 'Turn raw data into decisions with analytics, dashboards, reporting, and storytelling.',
    skills: ['Excel & SQL', 'Power BI', 'Python analytics', 'Business dashboards'],
  },
  {
    icon: Database,
    title: 'Database Engineer',
    description: 'Build strong database foundations for design, optimization, backup, and operations.',
    skills: ['SQL design', 'PostgreSQL', 'Query tuning', 'Backup & recovery'],
  },
];

export default function CorporateTraining() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <p className="section-label">Corporate Training</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Industry-ready programs for{' '}
            <span className="gradient-text">corporates, colleges, and individuals</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Resilient delivers practical cohorts across software, cloud, AI, and data roles.
            Every program is built around hands-on labs, real project work, assessments, and a
            final capstone that proves job readiness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Plan a training program
            </a>
            <a href="#programs" className="btn-secondary">
              View categories
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="glass-card-hover p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                <audience.icon className="h-6 w-6 text-accent-light" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-white">{audience.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{audience.description}</p>
              <ul className="mt-5 space-y-2">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div id="programs" className="mt-24">
          <div className="max-w-3xl">
            <p className="section-label">Training Categories</p>
            <h2 className="section-heading mt-4">
              Choose the track that matches your{' '}
              <span className="gradient-text">team or career goal</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <article key={category.title} className="glass-card-hover flex flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.05]">
                    <category.icon className="h-5 w-5 text-accent-light" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {category.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 glass-card p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-label">Delivery Model</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Training, internship-style projects, assessment, and certificate.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400">
                Programs can run as weekend batches, weekday corporate cohorts, campus bootcamps,
                or custom modules based on your hiring and upskilling goals.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[440px]">
              {[
                { value: '4-8 weeks', label: 'Flexible duration' },
                { value: 'Live + labs', label: 'Practical format' },
                { value: 'Capstone', label: 'Final evaluation' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/[0.08] bg-surface/50 p-4">
                  <p className="font-display text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
