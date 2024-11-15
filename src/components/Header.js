// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>РАБОТА ВСЕМ</h1>
        <p>работа для девушек</p>
      </div>
      <nav className="header-nav">
        <a href="#offers">Что мы предлагаем</a>
        <a href="#requirements">Кого мы ищем</a>
        <a href="#conditions">Условия работы</a>
        <a href="#reviews">Отзывы</a>
      </nav>
      <button className="header-button">Заполнить анкету</button>
    </header>
  );
};

export default Header;
