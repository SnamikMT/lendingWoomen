// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Работа для девушек</h2>
        <p className='description'>Устройтесь на работу вашей мечты в Москве и получайте <span>от 10 000 ₽/за смену!</span></p>
        <button className="cta-button" onClick={(e) => {
            e.preventDefault();
            document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
          }}>Заполнить анкету</button>
      </div>
    </section>
  );
};

export default Hero;
