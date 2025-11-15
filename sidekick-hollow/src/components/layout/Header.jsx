import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo - Text only, no graphic - Brutalist aesthetic */}
        <div className="text-xl font-bold text-black uppercase tracking-wide">
          Sidekick Air
        </div>

        {/* Desktop Nav - Minimal */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#features"
            className="text-black hover:text-gray-500 transition-colors uppercase text-sm tracking-wide"
          >
            Features
          </a>
          <a
            href="#origin"
            className="text-black hover:text-gray-500 transition-colors uppercase text-sm tracking-wide"
          >
            Origin
          </a>
        </div>

        {/* CTA - ONLY color moment in entire design */}
        <button className="hidden md:block bg-black text-white px-6 py-3 hover:bg-accent transition-colors duration-300">
          Reserve
        </button>

        {/* Mobile Menu Button - Minimal, just text "MENU" */}
        <button
          className="md:hidden text-black uppercase text-sm tracking-wide"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile Menu - Minimal dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-8 py-6 space-y-4">
            <a
              href="#features"
              className="block text-black uppercase text-sm tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#origin"
              className="block text-black uppercase text-sm tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Origin
            </a>
            <button className="w-full bg-black text-white px-6 py-3 hover:bg-accent transition-colors duration-300">
              Reserve
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
