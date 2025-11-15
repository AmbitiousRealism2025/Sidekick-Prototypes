import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-xl font-semibold text-text-primary">
            Sidekick Air
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-text-secondary">
            <a href="#features" className="hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="hover:text-primary transition-colors">
              Reviews
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-tertiary">
            © 2025 Sidekick Air
          </p>
        </div>
      </div>
    </footer>
  );
}
