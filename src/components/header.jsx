import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div data-animation="default" className="navbar w-nav relative bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="nav-container flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="brand-logo w-nav-brand flex items-center gap-2">
            <img src="/assets/rbs-logo.png" alt="Logo" className="h-20 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Clients Dropdown */}
            <div className="relative group">
              <button className="nav-dropdown-toggle px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1">
                Hire AI Engineers
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-t-lg">
                  Builder
                </a>
                <a target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-t border-gray-100">
                  Integrators
                </a>
                <a target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-t border-gray-100">
                  Scalers
                </a>
              </div>
            </div>

            {/* Talent Dropdown */}
            <div className="relative group">
              <button className="nav-dropdown-toggle px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1">
                Talent
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="https://talent.example.com" target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-t-lg">
                  Login
                </a>
                <a href="https://talent.example.com/signup" target="_blank" rel="noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-t border-gray-100">
                  Sign Up
                </a>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="nav-dropdown-toggle px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1">
                Services
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="#services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-t-lg border-b border-gray-100">
                  <div className="font-semibold">Cloud Engineers</div>
                  <div className="text-xs text-gray-500">Enterprise data readiness</div>
                </a>
                <a href="#services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-b border-gray-100">
                  <div className="font-semibold">DevOps Engineers</div>
                  <div className="text-xs text-gray-500">Unlock enterprise knowledge</div>
                </a>
                <a href="#services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-b-lg">
                  <div className="font-semibold">Data Engineers</div>
                  <div className="text-xs text-gray-500">Deploy AI systems</div>
                </a>
                 <a href="#services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-b-lg">
                  <div className="font-semibold">Software Professionals</div>
                  <div className="text-xs text-gray-500">Deploy AI systems</div>
                </a>
                  <a href="#services" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-b-lg">
                  <div className="font-semibold">IT Recruitment</div>
                  <div className="text-xs text-gray-500">Deploy AI systems</div>
                </a>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group">
              <button className="nav-dropdown-toggle px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1">
                About
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-t-lg">
                  About Us
                </a>
                <a href="#why" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-t border-gray-100">
                  Why Us?
                </a>
                <a href="#news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-t border-gray-100 rounded-b-lg">
                  News & Media
                </a>
              </div>
            </div>
          </nav>

          {/* Right Side - CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Book a Call
              <span>→</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2 pb-4 border-t border-gray-200 pt-4">
            <button onClick={() => toggleDropdown('clients')} className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded flex items-center justify-between">
              Clients
              <ChevronDown size={16} className={activeDropdown === 'clients' ? 'rotate-180' : ''} />
            </button>
            {activeDropdown === 'clients' && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Login</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Sign In</a>
              </div>
            )}

            <button onClick={() => toggleDropdown('talent')} className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded flex items-center justify-between">
              Talent
              <ChevronDown size={16} className={activeDropdown === 'talent' ? 'rotate-180' : ''} />
            </button>
            {activeDropdown === 'talent' && (
              <div className="pl-4 space-y-1">
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Login</a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Sign Up</a>
              </div>
            )}

            <a href="#contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded">
              Book a Call
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
