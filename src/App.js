import React from 'react';
import './App.css';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import SlabMockup from './components/SlabMockup';
import Lookup from './components/Lookup';
import WhyPCG from './components/WhyPCG';
import SubmitForm from './components/SubmitForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks />
      <SlabMockup />
      <Lookup />
      <WhyPCG />
      <SubmitForm />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
