import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PricingSection />
    </div>
  );
}

export default App;
