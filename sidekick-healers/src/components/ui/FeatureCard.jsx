export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-bg-secondary p-8 rounded-xl border border-border-subtle hover:border-primary-light hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-3xl mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-semibold text-text-primary mb-4">
        {title}
      </h3>
      <p className="text-base text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
