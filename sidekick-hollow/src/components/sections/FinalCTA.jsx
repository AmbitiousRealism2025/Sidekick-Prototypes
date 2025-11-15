export default function FinalCTA() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
        {/* Headline - White on Black */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          Ready?
        </h2>

        {/* Subtext */}
        <p className="text-2xl md:text-3xl text-white/80">
          Reserve your table.
        </p>

        {/* CTA - White button (inverted) with blue hover */}
        <button className="bg-white text-black px-12 py-6 text-lg font-bold hover:bg-accent hover:text-white transition-colors duration-300">
          Pre-Order
        </button>
      </div>
    </section>
  );
}
