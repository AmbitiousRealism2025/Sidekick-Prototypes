import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Container from '../ui/Container';

export default function SidekickCareApp() {
  const features = [
    'Step-by-step setup guides',
    'Treatment protocols for every condition',
    'Client tracking & progress notes',
    'Professional network integration',
    'Continuing education modules',
    'Wearable device integration',
  ];

  return (
    <section id="app" className="bg-bg-secondary py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* App Mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=600&fit=crop"
                alt="Sidekick Care App Interface"
                className="max-w-sm w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-eyebrow text-primary mb-2">SIDEKICK CARE APP</p>
              <h2 className="text-section-title text-text-primary">
                Technology That Moves With You
              </h2>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">
              The Sidekick Care app extends your table's capabilities, connecting therapists,
              clients, and performance data into one intelligent platform.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheck className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-text-secondary text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#app-details"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn More About the App
              <FiArrowRight size={18} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
