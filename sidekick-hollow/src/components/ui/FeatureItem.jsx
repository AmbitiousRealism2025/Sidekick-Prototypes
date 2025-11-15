export default function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-6 py-10 border-b border-border">
      {/* Icon - Minimal, monochrome */}
      <div className="w-8 h-8 flex-shrink-0 text-black">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
