import React from 'react';
import Container from '../ui/Container';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Unroll',
      description: 'Remove from compact yoga mat case and unroll on any flat surface.',
    },
    {
      number: '2',
      title: 'Inflate',
      description: 'Attach pump and inflate to full rigidity in under 2 minutes.',
    },
    {
      number: '3',
      title: 'Ready',
      description: 'Attach modular frame and begin professional therapy sessions.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-bg-primary">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading text-text-primary mb-4">
            Setup in 2 minutes
          </h2>
          <p className="text-lg text-text-secondary">
            Simple, fast, professional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
