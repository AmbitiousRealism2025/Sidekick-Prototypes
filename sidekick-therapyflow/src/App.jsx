import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import OriginStory from './components/sections/OriginStory';
import ProblemSolution from './components/sections/ProblemSolution';
import Features from './components/sections/Features';
import ProductShowcase from './components/sections/ProductShowcase';
import Testimonials from './components/sections/Testimonials';
import SidekickCareApp from './components/sections/SidekickCareApp';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <OriginStory />
        <ProblemSolution />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <SidekickCareApp />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
