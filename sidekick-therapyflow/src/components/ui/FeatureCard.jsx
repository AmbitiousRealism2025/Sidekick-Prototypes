import React from 'react';
import Card from './Card';

export default function FeatureCard({ icon, title, description }) {
  return (
    <Card hover className="p-8">
      {/* Icon */}
      <div className="w-14 h-14 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-lg flex items-center justify-center text-white text-3xl mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-display font-semibold text-text-primary mb-4">{title}</h3>

      {/* Description */}
      <p className="text-base text-text-secondary leading-relaxed">{description}</p>
    </Card>
  );
}
