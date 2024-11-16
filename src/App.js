// src/App.js
import React from 'react';
import HeaderHero from './components/HeaderHero';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import Requirements from './components/Requirements';
import Advantages from './components/Advantages';
import WorkingConditions from './components/WorkingConditions';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <HeaderHero />
      <Offer /> 
      <Requirements />
      <WorkingConditions />
      <Testimonials />
      <Advantages />
      <FAQ /> 
      <ContactForm />
    </div>
  );
}

export default App;
