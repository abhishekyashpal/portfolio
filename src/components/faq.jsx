const faqs = [
  {
    q: 'What is the difference between talent outsourcing and recruitment?',
    a: 'Outsourcing means engineers are employed on our payroll and dedicated to your projects — we handle HR, compliance, and payroll. Recruitment means we find and place candidates who join your company directly as permanent or contract-to-hire employees.',
  },
  {
    q: 'How quickly can you provide AI Engineers?',
    a: 'For AI Engineer roles, we typically deliver a curated shortlist within 48 hours. Dedicated engineers can be onboarded within 1–2 weeks depending on notice periods.',
  },
  {
    q: 'What roles do you specialize in?',
    a: 'Our top priorities are AI/ML Engineers and DevOps/Cloud/Infrastructure Engineers. We also place Frontend, Full-Stack, Backend, QA, Database, and other software engineering roles.',
  },
  {
    q: 'Do you support remote and hybrid teams?',
    a: 'Yes. All our talent is remote-ready and experienced in distributed team environments. We align time zones and communication practices to your workflow.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'Monthly outsourcing contracts, project-based staff augmentation, permanent recruitment, and contract-to-hire placements. Flexible terms with 30-day scaling notice.',
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="section-label">FAQ</p>
          <h2 className="section-heading mt-4">Common questions</h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group glass-card overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-semibold text-white transition hover:bg-white/[0.02]">
                {faq.q}
                <span className="ml-4 shrink-0 text-accent-light transition group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-white/[0.06] px-6 py-5 text-sm leading-relaxed text-slate-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
