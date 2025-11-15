import React from 'react';
import Container from '../ui/Container';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Sidekick Air has completely transformed my mobile practice. I used to dread carrying my heavy table up apartment stairs. Now I pack it in my backpack and bike to clients. It's incredibly stable—my clients can't believe it's inflatable. This is the innovation our industry has needed for decades.",
      name: 'Sarah Chen, LMT',
      role: 'Mobile Massage Therapist, Seattle',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
    },
    {
      quote:
        "As a sports trainer working with college athletes, I needed something portable for field-side treatments. Sidekick Air is a game-changer. It inflates in under 2 minutes and handles 250+ lb athletes without any give. The fact that I can customize it with our team colors is the cherry on top.",
      name: 'Marcus Johnson, ATC',
      role: 'Athletic Trainer, Division I Program',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    },
    {
      quote:
        "I was skeptical at first—can an inflatable table really match my traditional table? But the drop-stitch technology is incredible. It's absolutely rock-solid, and the 6-inch height is perfect. Plus, I've eliminated the back strain from moving equipment between my clinic and home office.",
      name: 'Dr. Emily Rodriguez, PT, DPT',
      role: 'Physical Therapist & Clinic Owner',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    },
    {
      quote:
        "Traveling internationally for wellness retreats used to mean renting subpar equipment. Now I bring Sidekick Air in my luggage. It's changed everything—consistent quality equipment anywhere in the world, and my clients love the story behind it.",
      name: 'David Nakamura',
      role: 'Bodywork Specialist, International Instructor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section id="testimonials" className="bg-bg-primary py-20 md:py-24">
      <Container>
        <h2 className="text-section-title text-center text-text-primary mb-16">
          Trusted by Professionals Who Demand Excellence
        </h2>

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
      </Container>
    </section>
  );
}
