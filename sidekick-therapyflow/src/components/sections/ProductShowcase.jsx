import React from 'react';
import Container from '../ui/Container';

export default function ProductShowcase() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=800&fit=crop"
            alt="Sidekick Air therapy table detailed view"
            className="w-full h-auto object-cover aspect-video"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Drop-Stitch Aerospace Technology
              </h3>
              <p className="text-lg md:text-xl text-white/95 leading-relaxed">
                The same material trusted in marine and aerospace industries now supports
                professional therapy sessions. Advanced engineering delivers exceptional strength
                without weight.
              </p>
            </div>
          </div>
        </div>

        {/* Detail Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="bg-bg-primary rounded-lg p-6 mb-3">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop"
                alt="Drop-stitch material detail"
                className="w-full h-auto rounded-md aspect-square object-cover"
              />
            </div>
            <h4 className="font-semibold text-text-primary mb-1">Drop-Stitch Material</h4>
            <p className="text-sm text-text-tertiary">Aerospace-grade strength</p>
          </div>

          <div className="text-center">
            <div className="bg-bg-primary rounded-lg p-6 mb-3">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=300&fit=crop"
                alt="Modular frame detail"
                className="w-full h-auto rounded-md aspect-square object-cover"
              />
            </div>
            <h4 className="font-semibold text-text-primary mb-1">Modular Frame</h4>
            <p className="text-sm text-text-tertiary">Rock-solid stability</p>
          </div>

          <div className="text-center">
            <div className="bg-bg-primary rounded-lg p-6 mb-3">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=300&h=300&fit=crop"
                alt="Branding options"
                className="w-full h-auto rounded-md aspect-square object-cover"
              />
            </div>
            <h4 className="font-semibold text-text-primary mb-1">Custom Branding</h4>
            <p className="text-sm text-text-tertiary">Make it yours</p>
          </div>

          <div className="text-center">
            <div className="bg-bg-primary rounded-lg p-6 mb-3">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=300&h=300&fit=crop"
                alt="Compact packed size"
                className="w-full h-auto rounded-md aspect-square object-cover"
              />
            </div>
            <h4 className="font-semibold text-text-primary mb-1">Compact Size</h4>
            <p className="text-sm text-text-tertiary">Yoga mat dimensions</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
