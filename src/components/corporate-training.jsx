import { useRef, useState } from 'react';
import {
  BarChart3,
  Brain,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  IndianRupee,
  Layers3,
  Monitor,
  Server,
  UserRound,
} from 'lucide-react';
import { coursePricing, formatPrice, getDiscountedPrice } from '../data/courses';

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
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const courseRailRef = useRef(null);
  const courseCardRefs = useRef([]);

  const showCourse = (index) => {
    const nextIndex = (index + coursePricing.length) % coursePricing.length;
    setActiveCourseIndex(nextIndex);
    courseCardRefs.current[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const showPreviousCourse = () => {
    showCourse(activeCourseIndex - 1);
  };

  const showNextCourse = () => {
    showCourse(activeCourseIndex + 1);
  };

  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="coding-lab-grid absolute inset-0" />
      <div className="coding-lab-glow absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-sm font-semibold text-orange-100">
            <Code2 className="h-4 w-4 text-yellow-300" />
            Dedicated training vertical by Resilient
          </div>
          <p className="section-label mt-8">Sub Brand For Training</p>
          <h1 className="mt-4 font-display text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            <span className="gradient-text block">Coding Lab</span>
            <span className="mt-4 block text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              hands-on programs for teams, colleges, and career builders
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-300">
            Coding Lab is the dedicated training wing for practical software, cloud, AI, and data
            learning. Every cohort runs on guided labs, real project work, assessments, and a final
            capstone that proves job readiness.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Plan a Coding Lab program
            </a>
            <a href="#programs" className="btn-secondary">
              View categories
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="coding-lab-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-300/10">
                <audience.icon className="h-6 w-6 text-orange-200" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-white">{audience.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{audience.description}</p>
              <ul className="mt-5 space-y-2">
                {audience.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-stone-300">
                    <CheckCircle2 className="h-4 w-4 text-yellow-300" />
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
              <article key={category.title} className="coding-lab-card flex flex-col p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <category.icon className="h-5 w-5 text-orange-200" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-400">
                  {category.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-orange-300/10 bg-orange-300/[0.06] px-3 py-1 text-xs font-medium text-orange-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id="pricing" className="mt-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="section-label">Course Pricing</p>
              <h2 className="section-heading mt-4">
                Pricing for focused{' '}
                <span className="gradient-text">career and team tracks</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 lg:max-w-2xl">
              Each program can be priced for individuals, private corporate cohorts, or campus
              batches. Final fees depend on duration, batch size, delivery format, and capstone
              depth.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <button
                type="button"
                onClick={showPreviousCourse}
                className="hidden h-12 w-12 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/[0.06] text-orange-50 transition hover:border-orange-200/40 hover:bg-orange-300/[0.12] lg:flex"
                aria-label="Show previous course"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="overflow-hidden">
                <div
                  ref={courseRailRef}
                  className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {coursePricing.map((course, index) => {
                    const courseDiscountedPrice = getDiscountedPrice(course);
                    const courseHasDiscount = Boolean(course.discountPercent);

                    return (
                      <article
                        key={course.title}
                        ref={(element) => {
                          courseCardRefs.current[index] = element;
                        }}
                        className={`coding-lab-card min-w-full snap-start p-5 shadow-2xl shadow-black/20 transition-all duration-300 sm:min-w-[calc(50%_-_10px)] lg:min-w-[calc(33.333%_-_14px)] xl:min-w-[calc(25%_-_15px)] ${
                          index === activeCourseIndex
                            ? '-translate-y-2 border-yellow-200/45 shadow-orange-950/40'
                            : 'hover:-translate-y-1 hover:shadow-orange-950/30'
                        }`}
                      >
                        <div className="flex h-full flex-col">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-300/10">
                              <IndianRupee className="h-5 w-5 text-yellow-200" />
                            </div>
                            {courseHasDiscount && (
                              <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold text-[#160b05]">
                                {course.discountPercent}% OFF
                              </span>
                            )}
                          </div>

                          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-orange-100/55">
                            Course {index + 1} of {coursePricing.length}
                          </p>
                          <h3 className="mt-3 min-h-[76px] font-display text-xl font-bold leading-tight text-white">
                            {course.title}
                          </h3>

                          <div className="mt-5 flex-1 rounded-xl border border-orange-300/15 bg-[#120b07]/75 p-4">
                            {courseHasDiscount ? (
                              <p className="text-sm font-semibold text-stone-500 line-through">
                                {formatPrice(course.price)}
                              </p>
                            ) : (
                              <p className="text-sm font-semibold text-orange-100/60">
                                Course price
                              </p>
                            )}
                            <p className="mt-1 font-display text-3xl font-bold text-white">
                              {formatPrice(courseDiscountedPrice)}
                            </p>
                            {courseHasDiscount && (
                              <p className="mt-2 text-xs font-medium text-orange-100/70">
                                Limited discounted price
                              </p>
                            )}
                          </div>

                          <a href={`/courses/${course.slug}`} className="btn-primary mt-5 w-full">
                            Enquire now
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={showNextCourse}
                className="hidden h-12 w-12 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/[0.06] text-orange-50 transition hover:border-orange-200/40 hover:bg-orange-300/[0.12] lg:flex"
                aria-label="Show next course"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={showPreviousCourse}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/[0.06] text-orange-50 transition hover:border-orange-200/40 hover:bg-orange-300/[0.12] lg:hidden"
                aria-label="Show previous course"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex flex-wrap justify-center gap-2">
                {coursePricing.map((course, index) => (
                  <button
                    key={course.title}
                    type="button"
                    onClick={() => showCourse(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeCourseIndex
                        ? 'w-8 bg-yellow-300'
                        : 'w-2.5 bg-orange-100/25 hover:bg-orange-100/45'
                    }`}
                    aria-label={`Show ${course.title}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNextCourse}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300/20 bg-orange-300/[0.06] text-orange-50 transition hover:border-orange-200/40 hover:bg-orange-300/[0.12] lg:hidden"
                aria-label="Show next course"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="coding-lab-card mt-20 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="section-label">Delivery Model</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Lab-first training, internship-style projects, assessment, and certificate.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-400">
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
                <div key={item.label} className="rounded-xl border border-orange-300/10 bg-[#18100a]/70 p-4">
                  <p className="font-display text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-orange-100/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
