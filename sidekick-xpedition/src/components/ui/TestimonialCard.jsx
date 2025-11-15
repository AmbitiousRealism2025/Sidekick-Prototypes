import React from 'react';

export default function TestimonialCard({ quote, name, role }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-border-light hover:border-primary transition-colors duration-300">
      <p className="text-lg text-text-primary mb-6 leading-relaxed">
        "{quote}"
      </p>
      <div className="border-t border-border-light pt-4">
        <p className="font-semibold text-text-primary">{name}</p>
        <p className="text-sm text-text-tertiary">{role}</p>
      </div>
    </div>
  );
}
