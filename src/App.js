// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
      <Header />
      <Hero />
      <FAQ /> 
      <Offer /> 
      <Requirements />
      <Advantages />
      <WorkingConditions />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;
