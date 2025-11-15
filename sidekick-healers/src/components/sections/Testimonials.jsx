import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Sidekick Air elevated our mobile spa services. Clients notice the quality immediately—it signals our commitment to premium care.',
      name: 'Elena Martinez',
      role: 'Wellness Center Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      quote: 'As a boutique practitioner, portability without compromising quality was essential. Sidekick Air delivers on both fronts beautifully.',
      name: 'James Chen',
      role: 'Sports Massage Therapist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      quote: 'The natural aesthetic and professional feel align perfectly with our holistic philosophy. Our clients appreciate the sophistication.',
      name: 'Sarah Williams',
      role: 'Holistic Health Practitioner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      quote: 'Expanding our practice to corporate wellness programs became effortless. The Sidekick Air\'s premium appearance opens doors.',
      name: 'Michael Torres',
      role: 'Physical Therapist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="bg-bg-primary py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-eyebrow text-secondary mb-4">
            PROFESSIONAL VALIDATION
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            Trusted by Excellence
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
