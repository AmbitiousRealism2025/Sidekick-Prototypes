import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import OriginStory from './components/sections/OriginStory';
import Features from './components/sections/Features';
import ProductShowcase from './components/sections/ProductShowcase';
import Testimonials from './components/sections/Testimonials';
import SidekickCareApp from './components/sections/SidekickCareApp';
import PremiumCTA from './components/sections/PremiumCTA';

function App() {
  return (
    <div className="smooth-scroll">
      <Header />
      <main>
        <Hero />
        <OriginStory />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <SidekickCareApp />
        <PremiumCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
