import clsx from 'clsx';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center cursor-pointer';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-primary hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    white: 'bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-primary',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
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
