export default function OriginStory() {
  return (
    <section id="story" className="bg-bg-secondary py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-secondary-light to-secondary aspect-[4/5] flex items-center justify-center">
              <span className="text-white/30 text-5xl font-display text-center px-8">
                Drew's Journey
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-eyebrow text-secondary">
              THE ORIGIN STORY
            </p>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              A Healer's Vision
            </h2>

            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                Drew Freedman spent 25 years as The Boston Bodyworker, helping thousands
                find relief through expert hands-on therapy. His practice was built on
                trust, skill, and an unwavering commitment to healing.
              </p>
              <p>
                When he closed his practice to explore new horizons, a moment of clarity
                arrived on the water. Inflating a paddleboard, Drew saw the future of
                therapy tables—professional-grade stability in a portable form.
              </p>
              <p className="font-accent italic text-primary text-xl">
                "Sidekick Air is a continuation of my life's purpose: empowering healers
                to work without limits."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
