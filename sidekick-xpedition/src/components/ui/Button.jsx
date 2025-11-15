import React from 'react';
import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-600 shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5',
    secondary: 'bg-white text-text-primary border-2 border-border-medium hover:border-primary hover:text-primary',
    ghost: 'text-text-primary hover:bg-bg-tertiary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
