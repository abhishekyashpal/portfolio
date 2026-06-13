const testimonials = [
  {
    quote:
      'They placed three AI engineers on our payroll within a week. All three are still with us after 8 months — that never happens with agencies.',
    name: 'Rajesh K.',
    role: 'CTO, Series B SaaS Startup',
  },
  {
    quote:
      'We needed DevOps talent urgently for a cloud migration. Resilient delivered two senior engineers who hit the ground running on day one.',
    name: 'Priya M.',
    role: 'VP Engineering, FinTech',
  },
  {
    quote:
      'Their recruitment process is genuinely different. The candidates they sent had already passed technical screens — we only interviewed the best.',
    name: 'Arun S.',
    role: 'Head of Talent, Enterprise IT',
  },
  {
    quote:
      'Best decision we made for scaling our ML team. Payroll managed, compliance handled, and the engineers are exceptional.',
    name: 'Neha G.',
    role: 'Director of AI, HealthTech',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Client Stories</p>
          <h2 className="section-heading mt-4">
            Trusted by teams{' '}
            <span className="gradient-text">building the future</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="glass-card-hover p-8">
              <p className="text-base leading-relaxed text-slate-300">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-white/[0.06] pt-6">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
