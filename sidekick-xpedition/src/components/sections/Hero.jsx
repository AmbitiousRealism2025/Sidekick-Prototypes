import React from 'react';
import Button from '../ui/Button';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-primary px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-tertiary rounded-full text-sm text-text-tertiary mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          500+ professionals already using Sidekick Air
        </div>

        {/* Massive Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight animate-slide-up">
          Professional therapy.
          <br />
          <span className="text-primary">Anywhere.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up">
          The world's most portable professional therapy table. 800+ lb capacity, packs to yoga mat size.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
          <Button variant="primary" size="lg">
            Pre-Order Now
            <FiArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="secondary" size="lg">
            Watch Demo
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="w-full aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-text-tertiary">Sidekick Air Hero Image</p>
              <p className="text-sm text-text-tertiary mt-2">Placeholder - Add product image</p>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 sm:px-8 py-4 rounded-full shadow-xl flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <span className="font-semibold text-text-primary">800+ lbs</span>
            <span className="text-border-dark">|</span>
            <span className="font-semibold text-text-primary">2 min setup</span>
            <span className="text-border-dark">|</span>
            <span className="font-semibold text-text-primary">12 lbs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
