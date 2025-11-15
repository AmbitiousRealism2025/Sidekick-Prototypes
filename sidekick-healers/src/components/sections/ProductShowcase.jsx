export default function ProductShowcase() {
  return (
    <section className="bg-bg-tertiary py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
          {/* Image placeholder */}
          <div className="w-full h-[500px] bg-gradient-to-br from-primary via-primary-light to-secondary flex items-center justify-center">
            <span className="text-white/20 text-6xl font-display">Premium Wellness Setting</span>
          </div>

          {/* Overlay content */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/95 to-transparent p-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Elevated Wellness Experience
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Premium craftsmanship meets thoughtful design. Every session becomes
                an expression of your commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
