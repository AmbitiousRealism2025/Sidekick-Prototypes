import { FiCheck } from 'react-icons/fi';
import Button from '../ui/Button';

export default function PremiumCTA() {
  return (
    <section className="bg-gradient-cta py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Elevate Your Practice with Sidekick Air
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join discerning practitioners who've discovered the harmony of
          portability and premium quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="white" size="lg">Reserve Your Table</Button>
          <Button variant="outline-white" size="lg">Schedule Consultation</Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
          <span className="flex items-center gap-2">
            <FiCheck className="w-4 h-4" />
            Premium Quality
          </span>
          <span className="flex items-center gap-2">
            <FiCheck className="w-4 h-4" />
            30-Day Guarantee
          </span>
          <span className="flex items-center gap-2">
            <FiCheck className="w-4 h-4" />
            Expert Support
          </span>
        </div>
      </div>
    </section>
  );
}
