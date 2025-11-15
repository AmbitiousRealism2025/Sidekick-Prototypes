import React from 'react';
import clsx from 'clsx';

export default function Card({ children, className = '', hover = false }) {
  const baseClasses = 'bg-white rounded-lg border border-border-subtle';
  const hoverClasses = hover
    ? 'hover:border-secondary-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div className={clsx(baseClasses, hoverClasses, className)}>
      {children}
    </div>
  );
}
