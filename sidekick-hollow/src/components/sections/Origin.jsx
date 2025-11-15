export default function Origin() {
  return (
    <section id="origin" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-sm font-bold text-black uppercase tracking-wider">
              THE ORIGIN
            </p>

            <p className="text-2xl md:text-3xl text-black leading-snug max-w-lg">
              Drew Freedman spent 25 years helping people heal. When he closed
              his practice and bought a paddleboard, a realization struck: this
              material could redefine the therapy table.
            </p>

            <p className="text-2xl md:text-3xl text-black leading-snug max-w-lg font-bold">
              Sidekick Air was born.
            </p>
          </div>

          {/* Image - B&W treatment (placeholder) */}
          <div>
            <div className="w-full aspect-[4/5] bg-gray-200 flex items-center justify-center">
              <p className="text-gray-400 text-sm uppercase tracking-wide">Drew Freedman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
