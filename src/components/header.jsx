import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Talent', href: '#talent' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
];

const talentDropdown = [
  { label: 'AI Engineers', desc: 'LLM, ML, GenAI specialists', href: '#talent', badge: 'Top Priority' },
  { label: 'DevOps & Cloud', desc: 'AWS, K8s, Terraform, SRE', href: '#talent', badge: 'High Demand' },
  { label: 'Full-Stack & Frontend', desc: 'React, Node, Python', href: '#talent' },
  { label: 'QA & Database', desc: 'Automation, PostgreSQL, MongoDB', href: '#talent' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [talentOpen, setTalentOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-surface/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-glow">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <span className="font-display text-lg font-bold tracking-tight text-white">Resilient</span>
            {/* <span className="ml-1.5 hidden text-xs font-medium text-slate-400 sm:inline">Talent Cloud</span> */}
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setTalentOpen(true)}
            onMouseLeave={() => setTalentOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white">
              Hire Talent
              <ChevronDown className={`h-4 w-4 transition-transform ${talentOpen ? 'rotate-180' : ''}`} />
            </button>
            {talentOpen && (
              <div className="absolute left-0 top-full w-72 pt-2">
                <div className="glass-card overflow-hidden p-2 shadow-2xl shadow-black/40">
                  {talentDropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start justify-between rounded-xl px-4 py-3 transition hover:bg-white/[0.05]"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="mt-0.5 text-xs text-slate-400">{item.desc}</p>
                      </div>
                      {item.badge && (
                        <span className="shrink-0 rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-light">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden text-sm md:inline-flex">
            Book a Discovery Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-surface/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 w-full text-sm"
            >
              Book a Discovery Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
