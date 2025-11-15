export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center font-bold">
                S
              </div>
              <span className="text-xl font-display font-bold">Sidekick Air</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Reimagining recovery through premium portable therapy solutions.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Product</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#app" className="hover:text-white transition-colors">
                  Sidekick Care
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold mb-4 text-base">Support</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-white transition-colors">
                  Warranty
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 Sidekick Air. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
