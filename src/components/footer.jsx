import { Sparkles } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Talent Outsourcing', href: '#services' },
    { label: 'IT Recruitment', href: '#services' },
    { label: 'Staff Augmentation', href: '#services' },
  ],
  Talent: [
    { label: 'AI Engineers', href: '#talent' },
    { label: 'DevOps & Cloud', href: '#talent' },
    { label: 'Full-Stack Engineers', href: '#talent' },
    { label: 'QA & Database', href: '#talent' },
  ],
  Company: [
    { label: 'How It Works', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-raised">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-glow">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">Resilient</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              AI-powered talent outsourcing and recruitment. We place elite AI Engineers,
              DevOps specialists, and software professionals with companies worldwide.
            </p>
            <p className="mt-6 text-xs text-slate-500">
              Mon – Fri, 10:00 – 18:00 IST
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Resilient Business Solutions. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Lucknow, India
          </p>
        </div>
      </div>
    </footer>
  );
}
