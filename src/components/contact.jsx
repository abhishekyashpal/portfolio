import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { coursePricing } from '../data/courses';

const contactContent = {
  talent: {
    eyebrow: 'Talent Outsourcing Query',
    heading: (
      <>
        Ready to hire <span className="gradient-text">dedicated engineering talent?</span>
      </>
    ),
    description:
      'Send us your Talent Outsourcing requirement. Tell us the roles, team size, timeline, and tech stack, and we will respond with the right engagement plan.',
    subjectPrefix: 'Talent Outsourcing Query',
    fieldLabel: 'Talent Needed',
    bodyLabel: 'Talent Needed',
    companyLabel: 'Company',
    companyPlaceholder: 'Company name',
    messageLabel: 'Tell us about your talent needs',
    messagePlaceholder: 'Team size, timeline, tech stack...',
    button: 'Send Talent Outsourcing Query',
    options: [
      'AI Engineers',
      'DevOps / Cloud Engineers',
      'Full-Stack / Frontend',
      'Backend Engineers',
      'QA Engineers',
      'Database Engineers',
      'Multiple Roles',
    ],
  },
  training: {
    eyebrow: 'Coding Lab Inquiry',
    heading: (
      <>
        Plan a <span className="gradient-text">Coding Lab program</span>
      </>
    ),
    description:
      'Send us your training requirement for corporate teams, colleges, or individual cohorts. Share the audience, track, batch size, and preferred duration.',
    subjectPrefix: 'Coding Lab Training Inquiry',
    fieldLabel: 'Training Category',
    bodyLabel: 'Training Category',
    companyLabel: 'Organization / College',
    companyPlaceholder: 'Organization, college, or your name',
    messageLabel: 'Tell us about your training needs',
    messagePlaceholder: 'Audience type, batch size, duration, preferred track...',
    button: 'Send Training Inquiry',
    options: [
      'Corporate Team Training',
      'College Training Program',
      'Individual Training',
      ...coursePricing.map((course) => course.title),
    ],
  },
};

export default function Contact({ variant = 'talent' }) {
  const content = contactContent[variant] || contactContent.talent;

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-surface-raised to-surface-card">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <p className="section-label">{content.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {content.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                {content.description}
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:resilientbizsolutions@gmail.com"
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
                  <span>Gomti Nagar, Lucknow, Uttar Pradesh 226022</span>
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
                  const mobile = form.mobile.value;
                  const company = form.company.value;
                  const role = form.role.value;
                  const message = form.message.value;
                  const subject = `${content.subjectPrefix} from ${name}`;
                  const body = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n${content.companyLabel}: ${company}\n${content.bodyLabel}: ${role}\n\n${message}`;
                  window.location.href = `mailto:resilientbizsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                  <label htmlFor="mobile" className="mb-1.5 block text-xs font-medium text-slate-400">
                    Mobile Number
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-slate-400">
                    {content.companyLabel}
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder={content.companyPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="mb-1.5 block text-xs font-medium text-slate-400">
                    {content.fieldLabel}
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                  >
                    {content.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-400">
                    {content.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                    placeholder={content.messagePlaceholder}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  {content.button}
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
