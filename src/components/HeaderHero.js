import React, { useState } from 'react';
import '../styles/HeaderHero.css';
import crownIcon from '../assets/crown.png'; // Замените путь на ваш реальный путь к изображению короны

const HeaderHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-hero">
      <header className="header">
        <div className="header-logo">
          <div className='Swap'>
           <img src={crownIcon} alt="Корона" className="logo-crown" /> 
          </div>
          <div className='des'>
            <h1>РАБОТА ВСЕМ</h1>
            <p>работа для девушек</p>
          </div>
        </div>
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#offers" onClick={(e) => {
            e.preventDefault();
            document.getElementById('off')?.scrollIntoView({ behavior: 'smooth' });
          }}>Что мы предлагаем</a>
          <a href="#requirements" onClick={(e) => {
            e.preventDefault();
            document.getElementById('req')?.scrollIntoView({ behavior: 'smooth' });
          }}>Кого мы ищем</a>
          <a href="#conditions" onClick={(e) => {
            e.preventDefault();
            document.getElementById('cond')?.scrollIntoView({ behavior: 'smooth' });
          }}>Условия работы</a>
          <a href="#reviews" onClick={(e) => {
            e.preventDefault();
            document.getElementById('rev')?.scrollIntoView({ behavior: 'smooth' });
          }}>Отзывы</a>
        </nav>
        <button className="header-button" onClick={(e) => {
          e.preventDefault();
          document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
        }}>Заполнить анкету</button>
        <div className="burger-menu" onClick={toggleMenu}>
          <span className={`line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`line ${menuOpen ? 'open' : ''}`}></span>
          <span className={`line ${menuOpen ? 'open' : ''}`}></span>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Работа для девушек</h2>
          <p className="description">
            Устройтесь на работу вашей мечты в Москве и получайте{' '}
            <span>от 10 000 ₽/за смену!</span>
          </p>
          <button className="cta-button" onClick={(e) => {
            e.preventDefault();
            document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
          }}>Заполнить анкету</button>
        </div>
      </section>
    </div>
  );
};

export default HeaderHero;
