import { FiCheck } from 'react-icons/fi';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-bg-primary flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <p className="text-eyebrow text-primary">
              REIMAGINING RECOVERY
            </p>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-display font-bold text-text-primary leading-tight tracking-tight">
              Where Professional Excellence Meets Natural Innovation
            </h1>

            {/* Subtext */}
            <p className="text-xl text-text-secondary leading-relaxed max-w-xl">
              Crafted for discerning practitioners who demand both portability and uncompromising quality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg">Explore Sidekick Air</Button>
              <Button variant="secondary" size="lg">Schedule Demo</Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-tertiary pt-6 border-t border-border-subtle">
              <div className="flex items-center gap-2">
                <FiCheck className="w-5 h-5 text-primary" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="w-5 h-5 text-primary" />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="w-5 h-5 text-primary" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary aspect-[4/3] flex items-center justify-center">
              <span className="text-white/30 text-6xl font-display">Sidekick Air</span>
            </div>
            {/* Floating element */}
            <div className="absolute -bottom-8 -left-8 bg-bg-secondary p-6 rounded-xl shadow-xl">
              <p className="text-sm text-text-tertiary mb-1">Professional Grade</p>
              <p className="text-3xl font-bold text-primary">800+ lbs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
