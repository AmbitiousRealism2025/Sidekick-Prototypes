import React from 'react';
import Container from '../ui/Container';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Sidekick Air transformed my mobile practice. Game changer.',
      name: 'Sarah Chen',
      role: 'Sports Therapist',
    },
    {
      quote: 'I was skeptical about portability vs. stability. This delivers both.',
      name: 'Mike Rodriguez',
      role: 'Physical Therapist',
    },
    {
      quote: 'Setup is genuinely 2 minutes. Clients are always impressed.',
      name: 'Jessica Park',
      role: 'Massage Therapist',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-bg-secondary">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading text-text-primary mb-4">
            Trusted by professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
