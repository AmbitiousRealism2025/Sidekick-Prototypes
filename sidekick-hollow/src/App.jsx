import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Origin from './components/sections/Origin';
import Features from './components/sections/Features';
import ProductShowcase from './components/sections/ProductShowcase';
import Testimonials from './components/sections/Testimonials';
import FinalCTA from './components/sections/FinalCTA';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Stats />
      <Origin />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
