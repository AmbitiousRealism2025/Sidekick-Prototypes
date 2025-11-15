import React from 'react';
import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-md transition-all duration-200 inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-600 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary',
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
