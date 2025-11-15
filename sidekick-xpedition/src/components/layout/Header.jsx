import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-md'
      } border-b border-border-light`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-text-primary">
          Sidekick Air
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-text-secondary hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-text-secondary hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-text-secondary hover:text-primary transition-colors">
            Reviews
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" size="sm">
            Pre-Order
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-light">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="block text-text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <Button variant="primary" size="md" className="w-full">
              Pre-Order
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
