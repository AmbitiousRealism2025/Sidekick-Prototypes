import { FiCheck } from 'react-icons/fi';

export default function SidekickCareApp() {
  const features = [
    {
      title: 'Treatment Protocols',
      description: 'Condition-specific guidance and session planning',
    },
    {
      title: 'Client Progress Tracking',
      description: 'Document outcomes and visualize healing journeys',
    },
    {
      title: 'Professional Network',
      description: 'Connect with certified practitioners and share insights',
    },
    {
      title: 'Continuing Education',
      description: 'Access curated learning modules and skill development',
    },
  ];

  return (
    <section id="wellness" className="bg-bg-secondary py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* App Mockup */}
          <div className="flex justify-center">
            <div className="max-w-md w-full h-[600px] bg-gradient-to-br from-primary to-primary-light rounded-3xl shadow-2xl flex items-center justify-center border-8 border-gray-800">
              <span className="text-white/30 text-4xl font-display text-center px-8">
                Sidekick Care<br />App Interface
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <p className="text-eyebrow text-primary mb-2">
                DIGITAL WELLNESS COMPANION
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-4">
                Sidekick Care
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Your professional assistant for elevated client experiences
              </p>
            </div>

            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <FiCheck className="text-xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary mb-1">{feature.title}</p>
                    <p className="text-text-secondary">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
