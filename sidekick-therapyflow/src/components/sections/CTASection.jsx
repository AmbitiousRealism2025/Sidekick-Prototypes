import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Button from '../ui/Button';

export default function CTASection() {
  const trustSignals = [
    'Free Shipping',
    '30-Day Money-Back Guarantee',
    '2-Year Warranty',
  ];

  return (
    <section className="bg-gradient-to-r from-primary via-secondary to-primary py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Join the Movement. Transform Your Practice.
        </h2>

        <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
          Pre-order now and be among the first to experience the future of portable therapy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button variant="white" size="lg">
            Reserve Your Sidekick Air
          </Button>
          <Button variant="outline-white" size="lg">
            Download Guide
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/90 text-sm">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2">
              <FiCheck size={18} />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
