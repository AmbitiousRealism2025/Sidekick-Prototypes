export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Sidekick Air eliminated every obstacle. Now I focus on clients, not equipment.',
      name: 'Sarah Chen',
      role: 'Mobile Therapist',
    },
    {
      quote: 'I was skeptical. This delivers on every promise.',
      name: 'Mike Rodriguez',
      role: 'Physical Therapist',
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-5xl mx-auto px-8 md:px-20 space-y-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`space-y-8 ${index > 0 ? 'border-t border-border pt-20' : ''}`}
          >
            {/* Quote - Large typography */}
            <p className="text-4xl md:text-5xl font-bold text-black leading-snug tracking-tight">
              "{testimonial.quote}"
            </p>

            {/* Attribution */}
            <div className="text-lg text-gray-500">
              <p className="font-normal">{testimonial.name}</p>
              <p>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
