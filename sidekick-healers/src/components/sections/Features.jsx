import { FiPackage, FiShield, FiTrendingUp, FiGlobe, FiHeart, FiZap } from 'react-icons/fi';
import FeatureCard from '../ui/FeatureCard';

export default function Features() {
  const features = [
    {
      icon: <FiHeart />,
      title: 'Natural Innovation',
      description: 'Aerospace materials meet organic design philosophy for sustainable excellence.',
    },
    {
      icon: <FiPackage />,
      title: 'Premium Portability',
      description: 'Professional-grade 800+ lbs capacity, yet packs to the size of a yoga mat.',
    },
    {
      icon: <FiZap />,
      title: 'Instant Setup',
      description: 'Inflates in minutes with included pump. Ready when you are, wherever you are.',
    },
    {
      icon: <FiShield />,
      title: 'Uncompromising Quality',
      description: 'Military-grade drop-stitch construction ensures stability and longevity.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Practice Growth',
      description: 'Expand your services with mobile therapy, home visits, and events.',
    },
    {
      icon: <FiGlobe />,
      title: 'Wellness Companion',
      description: 'Integrated Sidekick Care app for treatment protocols and client tracking.',
    },
  ];

  return (
    <section id="features" className="bg-bg-primary py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-eyebrow text-secondary mb-4">
            PREMIUM FEATURES
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            Wellness Meets Innovation
          </h2>
          <p className="text-lg text-text-secondary">
            Every detail crafted for discerning practitioners
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
      </div>
    </section>
  );
}
