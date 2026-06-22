import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Talent', href: '/#talent' },
  { label: 'How It Works', href: '/#process' },
  { label: 'Why Us', href: '/#why-us' },
];

const talentDropdown = [
  { label: 'AI Engineers', desc: 'LLM, ML, GenAI specialists', href: '/#talent', badge: 'Top Priority' },
  { label: 'DevOps & Cloud', desc: 'AWS, K8s, Terraform, SRE', href: '/#talent', badge: 'High Demand' },
  { label: 'Full-Stack & Frontend', desc: 'React, Node, Python', href: '/#talent' },
  { label: 'QA & Database', desc: 'Automation, PostgreSQL, MongoDB', href: '/#talent' },
];

const servicesDropdown = [
  { label: 'Talent Outsourcing', desc: 'Dedicated engineers on our payroll', href: '/#services', badge: 'Core' },
  { label: 'Staff Augmentation', desc: 'Flexible capacity for projects and sprints', href: '/#services' },
  { label: 'Corporate Training', desc: 'Programs for companies, colleges, and individuals', href: '/corporate-training', badge: 'New' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [talentOpen, setTalentOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileTalentOpen, setMobileTalentOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const isInnerPage = window.location.pathname !== '/';
  const contactHref = isInnerPage ? '#contact' : '/#contact';
  const solidHeader = scrolled || isInnerPage || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dropdownPanelClass =
    'overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-raised p-2 shadow-2xl shadow-black/50';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solidHeader
          ? 'border-b border-white/[0.06] bg-surface/95 backdrop-blur-xl lg:bg-surface/80'
          : 'border-b border-white/[0.06] bg-surface/95 backdrop-blur-xl lg:border-transparent lg:bg-transparent lg:backdrop-blur-0'
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:py-4">
        <a href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-glow sm:h-9 sm:w-9">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">Resilient</span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Home
          </a>

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
                <div className={dropdownPanelClass}>
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

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-80 pt-2">
                <div className={dropdownPanelClass}>
                  {servicesDropdown.map((item) => (
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

        <div className="flex shrink-0 items-center gap-3">
          <a href={contactHref} className="btn-primary hidden text-sm xl:inline-flex">
            Book a Discovery Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/[0.06] bg-surface/[0.98] shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Home
            </a>

            <div>
              <button
                type="button"
                onClick={() => setMobileTalentOpen(!mobileTalentOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                aria-expanded={mobileTalentOpen}
              >
                Hire Talent
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileTalentOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileTalentOpen && (
                <div className="space-y-1 py-1 pl-3">
                  {talentDropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="space-y-1 py-1 pl-3">
                  {servicesDropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#process"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              How It Works
            </a>
            <a
              href="/#why-us"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Why Us
            </a>
            <a
              href={contactHref}
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
