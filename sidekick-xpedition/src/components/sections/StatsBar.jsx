import React from 'react';

export default function StatsBar() {
  const stats = [
    { number: '500+', label: 'Professionals' },
    { number: '800+', label: 'lbs capacity' },
    { number: '2min', label: 'Setup time' },
    { number: '12lbs', label: 'Total weight' },
  ];

  return (
    <section className="bg-bg-secondary py-16 border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-bold text-text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-text-tertiary uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
