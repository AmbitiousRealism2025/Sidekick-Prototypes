import React from 'react';
import Container from '../ui/Container';

export default function OriginStory() {
  return (
    <section id="origin" className="bg-white py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=750&fit=crop"
              alt="Drew inflating paddleboard"
              className="w-full h-auto rounded-xl shadow-lg object-cover aspect-[3/4]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <p className="text-eyebrow text-accent">THE ORIGIN STORY</p>

            <h2 className="text-section-title text-text-primary">
              Born from a Moment of Clarity
            </h2>

            <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
              <p>
                For over 25 years, Drew Freedman built his career around a single mission — to help
                people feel better. As the founder of The Boston Bodyworker, his work was hands-on,
                relational, and deeply rooted in purpose.
              </p>
              <p>
                When he closed his practice and bought a stand-up paddleboard, a revelation struck.
                The strength and structure of the drop-stitch material echoed the support he had
                depended on throughout his entire career.
              </p>
              <p>
                In that moment, Sidekick Air was born — not as a product, but as a continuation of
                purpose. A way to honor the professionals who dedicate their lives to helping others
                heal, and to give them tools that finally return the favor.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
