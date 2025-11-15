export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          {/* Copyright */}
          <p>© 2025 Sidekick Air</p>

          {/* Links - Minimal */}
          <div className="flex gap-8 uppercase tracking-wide">
            <a href="#privacy" className="hover:text-black transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-black transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
