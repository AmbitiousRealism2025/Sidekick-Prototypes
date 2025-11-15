import React from 'react';
import { FiPackage, FiZap, FiClock, FiEdit3, FiHeart, FiTool } from 'react-icons/fi';
import Container from '../ui/Container';
import FeatureCard from '../ui/FeatureCard';

export default function Features() {
  const features = [
    {
      icon: <FiPackage />,
      title: 'Lightweight & Portable',
      description:
        'Packs down to the size of a yoga mat. Take your practice anywhere—gyms, homes, sports fields, or international travel.',
    },
    {
      icon: <FiZap />,
      title: 'Professional-Grade Strength',
      description:
        '800+ lb capacity with rock-solid stability. Advanced drop-stitch technology delivers the strength of traditional tables without the weight.',
    },
    {
      icon: <FiClock />,
      title: '2-Minute Setup',
      description:
        'Inflates in minutes, not hours. Spend your energy on clients, not equipment. Simple, fast, effortless.',
    },
    {
      icon: <FiEdit3 />,
      title: 'Customizable Branding',
      description:
        'Make it yours. Optional color customization and professional branding turn your table into an extension of your identity.',
    },
    {
      icon: <FiHeart />,
      title: 'Eco-Friendly Design',
      description:
        'Sustainable materials and efficient shipping reduce environmental impact. High performance with lower carbon footprint.',
    },
    {
      icon: <FiTool />,
      title: 'Modular & Adaptable',
      description:
        'Collapsible stand and advanced fasteners provide unmatched stability and flexibility for any environment.',
    },
  ];

  return (
    <section id="features" className="bg-bg-secondary py-20 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-eyebrow text-secondary mb-3">THE DIFFERENCE</p>
          <h2 className="text-section-title text-text-primary mb-4">
            Engineered for Movement. Built for Excellence.
          </h2>
          <p className="text-xl text-text-secondary">
            Every detail designed to eliminate obstacles and empower the modern therapist.
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
