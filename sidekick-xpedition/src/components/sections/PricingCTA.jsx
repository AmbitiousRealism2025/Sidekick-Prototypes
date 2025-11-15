import React from 'react';
import Button from '../ui/Button';
import { FiCheck } from 'react-icons/fi';

export default function PricingCTA() {
  const benefits = [
    '30-day money-back guarantee',
    'Free shipping',
    '2-year warranty included',
  ];

  return (
    <section className="py-20 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pre-order Sidekick Air
        </h2>
        <p className="text-xl text-white/90 mb-10">
          Limited first production run. Reserve yours today.
        </p>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-md mx-auto">
          <div className="mb-8">
            <p className="text-sm text-text-tertiary uppercase tracking-wider mb-2">
              Early Bird Price
            </p>
            <p className="text-5xl font-bold text-text-primary mb-2">
              $1,299
            </p>
            <p className="text-text-tertiary line-through">
              $1,599 MSRP
            </p>
          </div>

          <Button variant="primary" size="lg" className="w-full mb-6">
            Pre-Order Now
          </Button>

          <div className="space-y-3 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <FiCheck className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-text-secondary">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
