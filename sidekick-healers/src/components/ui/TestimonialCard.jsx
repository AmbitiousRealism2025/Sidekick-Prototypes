export default function TestimonialCard({ quote, name, role, image }) {
  return (
    <div className="bg-bg-tertiary p-8 md:p-10 rounded-xl shadow-md relative">
      {/* Large decorative quote mark */}
      <div className="absolute top-10 left-10 text-7xl font-accent text-primary-light opacity-20 leading-none select-none">
        "
      </div>

      {/* Quote text with serif font */}
      <p className="text-lg font-accent italic text-text-secondary leading-loose mb-8 relative z-10">
        {quote}
      </p>

      {/* Author info */}
      <div className="flex items-center gap-4 relative z-10">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-3 border-primary-light"
        />
        <div>
          <p className="font-semibold text-text-primary text-base">{name}</p>
          <p className="text-sm text-text-tertiary">{role}</p>
        </div>
      </div>
    </div>
  );
}
