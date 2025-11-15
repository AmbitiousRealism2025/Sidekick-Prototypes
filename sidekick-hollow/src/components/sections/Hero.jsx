export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center px-8 md:px-20 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-10">
            {/* MASSIVE Headline - 120px desktop, 60px mobile */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-none tracking-tighter">
              Professional
              <br />
              Strength.
              <br />
              Limitless
              <br />
              Mobility.
            </h1>

            {/* Subtext - Minimal, condensed format */}
            <p className="text-xl md:text-2xl text-gray-500 max-w-md leading-relaxed">
              800+ lb capacity.
              <br />
              Yoga mat size.
              <br />
              2-minute setup.
            </p>

            {/* Single CTA - ONLY blue accent hover */}
            <button className="bg-black text-white px-10 py-5 text-lg font-bold hover:bg-accent transition-colors duration-300">
              Reserve Table
            </button>
          </div>

          {/* Image - 5 columns (B&W treatment) */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm uppercase tracking-wide">Product Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
