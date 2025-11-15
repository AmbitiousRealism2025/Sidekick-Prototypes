import FeatureItem from '../ui/FeatureItem';

// Minimal SVG Icons - Monochrome only
const PackageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="8" width="18" height="12" />
    <path d="M12 3L3 8M12 3L21 8M12 3V8" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const PaletteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <path d="M12 16a4 4 0 01-4-4" />
  </svg>
);

export default function Features() {
  const features = [
    {
      icon: <PackageIcon />,
      title: 'Lightweight & Portable',
      description: 'Packs to yoga mat size, weighs just 12 lbs.',
    },
    {
      icon: <ShieldIcon />,
      title: '800+ lb Capacity',
      description: 'Professional-grade strength. Aerospace drop-stitch.',
    },
    {
      icon: <ZapIcon />,
      title: '2-Minute Setup',
      description: 'Inflates instantly. No assembly.',
    },
    {
      icon: <PaletteIcon />,
      title: 'Custom Branding',
      description: 'Make it yours with color options.',
    },
  ];

  return (
    <section id="features" className="bg-white py-32">
      <div className="max-w-5xl mx-auto px-8 md:px-20">
        {/* Section Header */}
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-20 tracking-tight">
          Features
        </h2>

        {/* Features - Single Column */}
        <div className="space-y-0">
          {features.map((feature, index) => (
            <FeatureItem
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
