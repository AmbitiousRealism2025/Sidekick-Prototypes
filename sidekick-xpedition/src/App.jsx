import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import StatsBar from './components/sections/StatsBar';
import Features from './components/sections/Features';
import ProductShowcase from './components/sections/ProductShowcase';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import SidekickCareApp from './components/sections/SidekickCareApp';
import PricingCTA from './components/sections/PricingCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Testimonials />
        <SidekickCareApp />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
