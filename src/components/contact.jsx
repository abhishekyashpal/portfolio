import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface-raised to-surface-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <p className="section-label">Get Started</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to hire{' '}
                <span className="gradient-text">AI & engineering talent?</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Book a free discovery call. Tell us what you need — AI Engineers, DevOps,
                full-stack developers, or recruitment support — and we&apos;ll show you
                matched profiles within 48 hours.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:recruitmentbharat9708@gmail.com"
                  className="flex items-center gap-4 text-sm text-slate-300 transition hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Mail className="h-4 w-4 text-accent-light" />
                  </div>
                 resilientbizsolutions@gmail.com
                </a>
                <a
                  href="tel:+91-5364354272"
                  className="flex items-center gap-4 text-sm text-slate-300 transition hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Phone className="h-4 w-4 text-accent-light" />
                  </div>
                  +91-5364354272
                </a>
                <div className="flex items-start gap-4 text-sm text-slate-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06]">
                    <MapPin className="h-4 w-4 text-accent-light" />
                  </div>
                  <span>
                    Gomti Nagar, Lucknow, Uttar Pradesh 226022
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/[0.06] bg-white/[0.02] p-10 lg:border-l lg:border-t-0 lg:p-14">
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  const name = form.name.value;
                  const email = form.email.value;
                  const company = form.company.value;
                  const role = form.role.value;
                  const message = form.message.value;
                  window.location.href = `mailto:resilientbizsolutions@gmail.com?subject=Discovery Call Request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nRole Needed: ${role}\n\n${message}`)}`;
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-400">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-400">
                      Work Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Talent Needed
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  >
                    <option value="AI Engineers">AI Engineers</option>
                    <option value="DevOps / Cloud Engineers">DevOps / Cloud Engineers</option>
                    <option value="Full-Stack / Frontend">Full-Stack / Frontend</option>
                    <option value="Backend Engineers">Backend Engineers</option>
                    <option value="QA Engineers">QA Engineers</option>
                    <option value="Database Engineers">Database Engineers</option>
                    <option value="IT Recruitment (Permanent Hire)">IT Recruitment (Permanent Hire)</option>
                    <option value="Multiple Roles">Multiple Roles</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="Team size, timeline, tech stack..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
