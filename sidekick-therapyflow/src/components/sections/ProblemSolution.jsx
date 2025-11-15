import React from 'react';
import { FiX, FiCheck } from 'react-icons/fi';
import Container from '../ui/Container';

export default function ProblemSolution() {
  const problems = [
    'Heavy (35-45 lbs) causing physical strain',
    'Awkward balance through tight spaces',
    'Bulky storage consuming valuable space',
    'Setup fatigue before each session',
    'Durability trade-offs and instability',
    'High shipping costs',
    'No customization or branding',
    'Environmental waste',
  ];

  const solutions = [
    'Lightweight ~12 lbs, packs to yoga mat size',
    'Easy to carry in a backpack',
    'Compact storage, minimal space needed',
    '2-minute inflation, effortless setup',
    '800+ lb capacity, rock-solid stability',
    'Efficient shipping, reduced costs',
    'Custom branding options available',
    'Eco-friendly sustainable materials',
  ];

  return (
    <section className="bg-bg-primary py-20 md:py-24">
      <Container>
        <h2 className="text-section-title text-center text-text-primary mb-16">
          The Sidekick Air Difference
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Tables (Problems) */}
          <div className="bg-white p-8 rounded-lg border-2 border-border-subtle">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Traditional Tables</h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiX className="text-error flex-shrink-0 mt-1" size={20} />
                  <span className="text-text-secondary">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidekick Air (Solutions) */}
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Sidekick Air</h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheck className="text-white flex-shrink-0 mt-1" size={20} />
                  <span className="text-white">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
