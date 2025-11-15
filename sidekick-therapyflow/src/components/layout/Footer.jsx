import React from 'react';

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Specifications', href: '#specs' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Pre-Order', href: '#preorder' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Origin Story', href: '#origin' },
      { label: 'Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
    ],
    resources: [
      { label: 'User Guide', href: '#guide' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Support', href: '#support' },
      { label: 'Warranty', href: '#warranty' },
    ],
  };

  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Sidekick Air</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Built for the hands that heal. Reimagining recovery through portable professional
              therapy tables.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Sidekick Air. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-white/80 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white/80 transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="hover:text-white/80 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
