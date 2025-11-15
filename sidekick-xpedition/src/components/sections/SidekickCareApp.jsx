import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

export default function SidekickCareApp() {
  const features = [
    'Step-by-step setup guides',
    'Treatment protocols library',
    'Client tracking tools',
    'Professional network integration',
  ];

  return (
    <section className="py-20 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sidekick Care App
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Extend your practice with intelligent digital tools. Setup guides, treatment protocols, and client tracking in one seamless platform.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FiCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <a
              href="#app"
              className="inline-flex items-center text-primary hover:text-primary-400 font-semibold transition-colors"
            >
              Explore the App
              <FiArrowRight className="ml-2" />
            </a>
          </div>

          {/* App Mockup Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-white/70 text-xl">App Interface</p>
                <p className="text-sm text-white/50 mt-2">Placeholder - Add app mockup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
