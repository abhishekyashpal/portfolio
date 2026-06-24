import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  IndianRupee,
  Layers3,
  Mail,
  Send,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { coursePricing, formatPrice, getCourseBySlug, getDiscountedPrice } from '../data/courses';

const commonTools = ['Live labs', 'GitHub', 'Capstone', 'Assessments', 'Interview prep', 'Certificate'];

const getCourseContent = (course) => {
  const title = course.title.toLowerCase();

  if (title.includes('devops')) {
    return {
      category: 'Cloud & Operations',
      summary:
        'Master CI/CD, containers, cloud deployment, monitoring, and automation through hands-on DevOps workflows.',
      skills: ['Linux', 'Git', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud deployment'],
      curriculum: [
        'DevOps foundations, Linux, Git, and collaborative workflows',
        'Docker containers, image design, registries, and compose-based labs',
        'CI/CD pipelines with automated build, test, and deployment stages',
        'Kubernetes fundamentals, services, deployments, scaling, and rollout strategy',
        'Monitoring, logging, release practices, and production readiness',
      ],
      projects: ['Containerized application deployment', 'CI/CD pipeline for a real app', 'Kubernetes rollout with monitoring'],
    };
  }

  if (title.includes('cloud')) {
    return {
      category: 'Cloud Engineering',
      summary:
        'Build job-ready cloud skills across compute, networking, storage, deployment, and operational practices.',
      skills: ['Cloud basics', 'Networking', 'IAM', 'Docker', 'Deployment', 'Monitoring'],
      curriculum: [
        'Cloud architecture basics, regions, networking, and access management',
        'Compute, storage, database, and managed service fundamentals',
        'Application deployment patterns and environment configuration',
        'Automation, cost awareness, logging, and monitoring workflows',
        'Capstone cloud deployment with documentation and review',
      ],
      projects: ['Cloud-hosted web application', 'Secure deployment setup', 'Monitoring dashboard'],
    };
  }

  if (title.includes('ui')) {
    return {
      category: 'Frontend Development',
      summary:
        'Learn modern UI development with component design, responsive layouts, API integration, and production polish.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React/Angular/Vue', 'Responsive UI', 'API integration'],
      curriculum: [
        'Modern HTML, CSS, JavaScript, browser fundamentals, and responsive layout',
        'Component architecture using React, Angular, or Vue based on batch focus',
        'Forms, routing, state, API integration, and frontend validation',
        'Performance, accessibility, reusable UI patterns, and deployment basics',
        'Portfolio-grade frontend capstone with code review',
      ],
      projects: ['Responsive dashboard UI', 'API-connected web app', 'Frontend portfolio project'],
    };
  }

  if (title.includes('backend')) {
    return {
      category: 'Backend Development',
      summary:
        'Build APIs, services, authentication, database workflows, and backend deployment habits using Python, NodeJS, or Go.',
      skills: ['REST APIs', 'Auth', 'SQL/NoSQL', 'NodeJS', 'Python', 'Go basics'],
      curriculum: [
        'Backend fundamentals, API design, HTTP, routing, and service structure',
        'Database integration, schema design, ORM/query patterns, and validation',
        'Authentication, authorization, error handling, and secure coding practices',
        'Testing, documentation, deployment, and operational basics',
        'Backend capstone with production-style review',
      ],
      projects: ['Auth-enabled REST API', 'Database-backed service', 'Production-ready backend capstone'],
    };
  }

  if (title.includes('fullstack')) {
    return {
      category: 'Full Stack Development',
      summary:
        'Ship complete applications across UI, backend APIs, databases, deployment, and maintenance workflows.',
      skills: ['React', 'Node/Python', 'REST APIs', 'SQL/NoSQL', 'Auth', 'Deployment'],
      curriculum: [
        'Frontend foundations, components, routing, forms, and responsive UI',
        'Backend APIs, validation, authentication, and service architecture',
        'Database design, query patterns, relationships, and migrations',
        'Integration testing, deployment, environment setup, and debugging',
        'Full-stack capstone with UI, API, DB, and deployment',
      ],
      projects: ['End-to-end SaaS-style app', 'Admin dashboard with APIs', 'Full-stack capstone deployment'],
    };
  }

  if (title.includes('database')) {
    return {
      category: 'Database Engineering',
      summary:
        'Develop practical database skills for SQL, NoSQL, schema design, query tuning, backup, and reliable data access.',
      skills: ['SQL', 'NoSQL', 'Schema design', 'Indexes', 'Query tuning', 'Backup basics'],
      curriculum: [
        'Relational database concepts, schema design, keys, joins, and normalization',
        'Advanced SQL, indexing, transactions, and query optimization',
        'NoSQL concepts, document modeling, and practical MongoDB-style workflows',
        'Backup, restore, access control, and production database habits',
        'Database design capstone with review and optimization',
      ],
      projects: ['Normalized SQL schema', 'Optimized reporting queries', 'NoSQL data model'],
    };
  }

  if (title.includes('system')) {
    return {
      category: 'Architecture & Interviews',
      summary:
        'Prepare for real system design interviews with scalable architecture, tradeoffs, caching, queues, databases, and reliability.',
      skills: ['Scalability', 'Caching', 'Load balancing', 'Databases', 'Queues', 'Design tradeoffs'],
      curriculum: [
        'System design fundamentals, requirements, constraints, and estimation',
        'APIs, data modeling, caching, queues, load balancing, and scaling patterns',
        'Reliability, observability, consistency, availability, and failure handling',
        'Design walkthroughs for common interview systems',
        'Mock system design interviews with feedback',
      ],
      projects: ['Design a URL shortener', 'Design a chat system', 'Design a scalable feed'],
    };
  }

  if (title.includes('dsa')) {
    return {
      category: 'Interview Preparation',
      summary:
        'Build strong DSA foundations with structured practice, problem-solving patterns, and interview-style assessments.',
      skills: ['Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic programming', 'Interview patterns'],
      curriculum: [
        'Complexity analysis, arrays, strings, hashing, stacks, and queues',
        'Linked lists, recursion, trees, binary search trees, and heaps',
        'Graphs, greedy methods, backtracking, and dynamic programming',
        'Timed problem-solving drills and interview communication',
        'Mock interviews, review sessions, and revision plan',
      ],
      projects: ['Pattern-based problem sets', 'Timed coding assessments', 'Mock interview review'],
    };
  }

  if (title.includes('python')) {
    return {
      category: 'Python Engineering',
      summary:
        'Learn Python through practical programming, automation, APIs, data handling, testing, and production workflows.',
      skills: ['Python basics', 'OOP', 'APIs', 'Automation', 'Testing', 'MLOps basics'],
      curriculum: [
        'Python foundations, data structures, functions, modules, and error handling',
        'Object-oriented programming, files, APIs, packages, and virtual environments',
        'Automation, data handling, testing, and clean coding practices',
        title.includes('mlops')
          ? 'MLOps basics, model packaging, deployment workflow, and experiment tracking'
          : 'Mini projects, debugging, packaging, and interview preparation',
        'Final Python project with review and certificate readiness',
      ],
      projects: ['Automation utility', 'API/data project', title.includes('mlops') ? 'Model deployment workflow' : 'Python capstone'],
    };
  }

  return {
    category: 'AI & Data',
    summary:
      'Build applied AI and data skills through Python, machine learning workflows, GenAI systems, projects, and interview preparation.',
    skills: ['Python', 'Data analysis', 'ML workflows', 'Deep learning', 'RAG', 'AI agents'],
    curriculum: [
      'Python, data handling, notebooks, statistics, and analytics foundations',
      'Machine learning workflow, feature engineering, training, validation, and evaluation',
      'Deep learning and modern AI application patterns based on the selected track',
      'Generative AI, prompt workflows, RAG, agents, and API-based application building',
      'Capstone project, interview preparation, and portfolio review',
    ],
    projects: ['Data analysis portfolio case', 'ML model project', 'GenAI/RAG application'],
  };
};

export default function CourseDetail({ slug }) {
  const course = getCourseBySlug(slug) || coursePricing[0];
  const content = getCourseContent(course);
  const discountedPrice = getDiscountedPrice(course);
  const hasDiscount = Boolean(course.discountPercent);

  return (
    <div className="coding-lab-page">
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="coding-lab-grid absolute inset-0" />
        <div className="coding-lab-glow absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-6">
          <a href="/corporate-training#pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-100/80 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to courses
          </a>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-sm font-semibold text-orange-100">
                <Sparkles className="h-4 w-4 text-yellow-300" />
                Coding Lab {content.category}
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {course.title} Course
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-300">
                {content.summary}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Clock3, value: '4-8 weeks', label: 'Flexible duration' },
                  { icon: CalendarDays, value: 'Live + labs', label: 'Learning format' },
                  { icon: Trophy, value: 'Certificate', label: 'After assessment' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-orange-300/10 bg-[#18100a]/80 p-4">
                    <item.icon className="h-5 w-5 text-yellow-200" />
                    <p className="mt-3 font-display text-xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-xs text-orange-100/60">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="coding-lab-card p-6 shadow-2xl shadow-orange-950/30">
              {hasDiscount && (
                <span className="inline-flex rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold text-[#160b05]">
                  {course.discountPercent}% OFF
                </span>
              )}
              <div className="mt-5 rounded-2xl border border-orange-300/15 bg-[#120b07]/75 p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-orange-100/70">
                  <IndianRupee className="h-4 w-4" />
                  Program fee
                </div>
                {hasDiscount && (
                  <p className="mt-4 text-sm font-semibold text-stone-500 line-through">
                    {formatPrice(course.price)}
                  </p>
                )}
                <p className="mt-1 font-display text-4xl font-bold text-white">
                  {formatPrice(discountedPrice)}
                </p>
                {hasDiscount && (
                  <p className="mt-2 text-sm text-orange-100/70">
                    Discounted enrollment price
                  </p>
                )}
              </div>
              <a href="#course-enquiry" className="btn-primary mt-6 w-full">
                Enquire for this course
              </a>
              <a href="tel:+91-5364354272" className="btn-secondary mt-3 w-full">
                Talk to advisor
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: Layers3, title: 'Hands-on Curriculum', text: 'Structured modules, live practice, assignments, and mentor review.' },
              { icon: BriefcaseBusiness, title: 'Career Focused', text: 'Portfolio projects, interview readiness, and real workflow exposure.' },
              { icon: CheckCircle2, title: 'Outcome Driven', text: 'Capstone evaluation, certificate support, and practical skill validation.' },
            ].map((item) => (
              <article key={item.title} className="coding-lab-card p-6">
                <item.icon className="h-7 w-7 text-yellow-200" />
                <h2 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label">What You Will Learn</p>
            <h2 className="section-heading mt-4">Skills, tools, projects, and guided practice.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {[...content.skills, ...commonTools].map((skill) => (
                <span key={skill} className="rounded-full border border-orange-300/10 bg-orange-300/[0.06] px-3 py-1 text-xs font-medium text-orange-50">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="coding-lab-card p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-white">Curriculum</h3>
            <div className="mt-6 space-y-4">
              {content.curriculum.map((module, index) => (
                <div key={module} className="flex gap-4 rounded-xl border border-orange-300/10 bg-[#120b07]/70 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-300 text-sm font-bold text-[#160b05]">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-stone-300">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="section-label">Projects & Outcomes</p>
            <h2 className="section-heading mt-4">Build work you can discuss in interviews.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.projects.map((project) => (
              <article key={project} className="coding-lab-card p-6">
                <CheckCircle2 className="h-6 w-6 text-yellow-200" />
                <h3 className="mt-5 font-display text-lg font-bold text-white">{project}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">
                  Practice real implementation decisions, document your work, and receive review
                  feedback before completion.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="course-enquiry" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="coding-lab-card overflow-hidden">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 sm:p-10">
                <p className="section-label">Course Enquiry</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">
                  Speak with an advisor for {course.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-400">
                  Share your background, preferred schedule, and enrollment type. We will respond
                  with batch options, fee details, and the next steps.
                </p>
                <a href="mailto:resilientbizsolutions@gmail.com" className="mt-8 flex items-center gap-3 text-sm text-stone-300 transition hover:text-white">
                  <Mail className="h-4 w-4 text-yellow-200" />
                  resilientbizsolutions@gmail.com
                </a>
              </div>

              <form
                className="space-y-5 border-t border-orange-300/10 bg-[#120b07]/45 p-8 sm:p-10 lg:border-l lg:border-t-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const subject = `${course.title} Course Enquiry from ${form.name.value}`;
                  const body = `Course: ${course.title}\nName: ${form.name.value}\nEmail: ${form.email.value}\nMobile: ${form.mobile.value}\nEnrollment Type: ${form.enrollment.value}\n\n${form.message.value}`;
                  window.location.href = `mailto:resilientbizsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <input name="name" required className="w-full rounded-xl border border-orange-300/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none" placeholder="Full name" />
                  <input name="email" type="email" required className="w-full rounded-xl border border-orange-300/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
                </div>
                <input name="mobile" type="tel" required className="w-full rounded-xl border border-orange-300/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none" placeholder="Mobile number" />
                <select name="enrollment" className="w-full rounded-xl border border-orange-300/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none">
                  <option>Individual enrollment</option>
                  <option>Corporate team batch</option>
                  <option>College cohort</option>
                </select>
                <textarea name="message" rows={4} className="w-full resize-none rounded-xl border border-orange-300/15 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none" placeholder="Preferred schedule, experience level, and questions..." />
                <button type="submit" className="btn-primary w-full">
                  Send course enquiry
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

