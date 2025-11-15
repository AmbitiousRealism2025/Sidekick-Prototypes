import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero() {
  return (
    <section className="bg-bg-primary min-h-screen flex items-center py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Eyebrow */}
            <p className="text-eyebrow text-secondary">REIMAGINING RECOVERY</p>

            {/* Headline */}
            <h1 className="text-hero text-text-primary">
              Built for the hands that heal
            </h1>

            {/* Subtext */}
            <p className="text-body-lg text-text-secondary max-w-xl">
              The first portable therapy table engineered for professionals in motion. Professional
              strength meets limitless mobility.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="primary" size="lg">
                Pre-Order Now
              </Button>
              <Button variant="secondary" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-tertiary pt-4">
              <div className="flex items-center gap-2">
                <FiCheck className="text-secondary" size={18} />
                <span>Trusted by 500+ therapists</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="text-secondary" size={18} />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheck className="text-secondary" size={18} />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
                alt="Therapist using Sidekick Air portable therapy table"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden sm:block">
              <p className="text-4xl font-bold text-primary">800+</p>
              <p className="text-sm text-text-tertiary">lb capacity</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
