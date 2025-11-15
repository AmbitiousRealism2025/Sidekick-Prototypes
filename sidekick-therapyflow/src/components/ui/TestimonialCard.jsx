import React from 'react';

export default function TestimonialCard({ quote, name, role, image }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md relative">
      {/* Quote Mark */}
      <div className="absolute top-6 left-6 text-6xl font-accent text-secondary-300 opacity-30 leading-none">
        "
      </div>

      {/* Quote Text */}
      <p className="text-lg text-text-secondary leading-relaxed mb-6 relative z-10 font-accent italic">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-3 border-secondary-300"
        />
        <div>
          <p className="font-semibold text-text-primary">{name}</p>
          <p className="text-sm text-text-tertiary">{role}</p>
        </div>
      </div>
    </div>
  );
}
