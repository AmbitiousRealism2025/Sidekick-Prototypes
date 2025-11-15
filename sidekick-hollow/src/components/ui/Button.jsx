export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-black text-white hover:bg-accent',
    secondary: 'border-2 border-black text-black hover:bg-black hover:text-white',
    white: 'bg-white text-black hover:bg-accent hover:text-white',
  };

  return (
    <button
      className={`px-8 py-4 font-bold transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
