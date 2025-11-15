import React from 'react';
import Container from '../ui/Container';

export default function ProductShowcase() {
  return (
    <section className="py-20 md:py-24 bg-bg-secondary">
      <Container>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Placeholder Image */}
          <div className="w-full aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <p className="text-text-tertiary text-xl">Product Detail Image</p>
              <p className="text-sm text-text-tertiary mt-2">Placeholder - Add product technology detail</p>
            </div>
          </div>

          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-8 sm:p-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Aerospace technology meets therapy
              </h3>
              <p className="text-lg text-white/90">
                Drop-stitch construction delivers unmatched stability and portability.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
