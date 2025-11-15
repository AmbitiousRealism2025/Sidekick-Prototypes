import React from 'react';
import Container from '../ui/Container';
import FeatureCard from '../ui/FeatureCard';
import { FiPackage, FiZap, FiShield, FiGrid, FiFeather, FiSmartphone } from 'react-icons/fi';

export default function Features() {
  const features = [
    {
      icon: <FiPackage size={24} />,
      title: 'Ultra-portable',
      description: 'Packs to yoga mat size. Take your practice anywhere.',
    },
    {
      icon: <FiZap size={24} />,
      title: '2-minute setup',
      description: 'Inflates instantly. No assembly required.',
    },
    {
      icon: <FiShield size={24} />,
      title: '800+ lb capacity',
      description: 'Aerospace drop-stitch technology. Professional grade.',
    },
    {
      icon: <FiGrid size={24} />,
      title: 'Custom branding',
      description: 'Make it yours with color and logo options.',
    },
    {
      icon: <FiFeather size={24} />,
      title: 'Eco-friendly',
      description: 'Sustainable materials. Carbon-neutral shipping.',
    },
    {
      icon: <FiSmartphone size={24} />,
      title: 'App integration',
      description: 'Sidekick Care app for setup and protocols.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-bg-primary">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading text-text-primary mb-4">
            Built for professionals
          </h2>
          <p className="text-lg text-text-secondary">
            Every detail engineered for mobility without compromise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
