export default function Stats() {
  const stats = [
    { number: '800+', label: 'weight capacity' },
    { number: '2min', label: 'setup time' },
    { number: '500+', label: 'professionals' },
  ];

  return (
    <section className="bg-gray-100 py-20 border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-4 tracking-tight">
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-gray-500 lowercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
