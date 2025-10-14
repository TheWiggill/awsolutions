import React from 'react';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Rentals } from './components/Rentals';
import { Contact } from './components/Contact';
import { Referrals } from './components/Referrals';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Products />
      <Features />
      <Rentals />
      <Contact />
      <Referrals />
      <Footer />
    </div>
  );
}

export default App;