import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group p-6 hover:bg-bg-tertiary rounded-xl transition-all duration-300">
      <div className="w-12 h-12 bg-bg-tertiary group-hover:bg-primary group-hover:text-white rounded-lg flex items-center justify-center text-primary mb-4 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
