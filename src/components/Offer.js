// src/components/Offer.js
import React from 'react';
import '../styles/Offer.css';
import { FaCrown, FaShieldAlt, FaChartLine, FaHandHoldingUsd } from 'react-icons/fa';

function Offer() {
  return (
    <section id="off" className="offer-section">

      <div className='firstSection'>
        <h2><span>ЧТО МЫ </span>ПРЕДЛАГАЕМ</h2>
        <p className="offer-description">
          Ни для кого не секрет, что в мире много одиноких людей. Поэтому совсем не удивительно, что и среди богатых и влиятельных мужчин есть такие, которые еще не обзавелись своей второй половинкой.
        </p>
        <p className="offer-description">
          Тем не менее, в светских кругах принято приходить на вечеринки, банкеты и прочие мероприятия, в сопровождении представительницы прекрасного пола, поразившей всех присутствующих своей красотой, элегантностью и манерами.
        </p>
        <a href="#application" className="offer-link" onClick={(e) => {
            e.preventDefault();
            document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
          }}>ЗАПОЛНИТЬ АНКЕТУ</a>
      </div>

      <div className='twoSection'>
          <div className="offer-cards">
          <div className="offer-card">
            <FaCrown className="offer-icon" />
            <h3>ВЫСОКИЙ ПОСТОЯННЫЙ ДОХОД</h3>
            <p>Уже с первого месяца работы вам будет предоставлен высокий и стабильный доход.</p>
          </div>
          <div className="offer-card">
            <FaShieldAlt className="offer-icon" />
            <h3>ГАРАНТИЯ БЕЗОПАСНОСТИ</h3>
            <p>Благодаря собственной службе безопасности мы гарантируем ПОЛНУЮ БЕЗОПАСНОСТЬ.</p>
          </div>
          <div className="offer-card">
            <FaChartLine className="offer-icon" />
            <h3>КАРЬЕРНЫЙ РОСТ</h3>
            <p>Заполнив анкету вы делаете первый шаг к успешной и состоятельной жизни.</p>
          </div>
          <div className="offer-card">
            <FaHandHoldingUsd className="offer-icon" />
            <h3>ЕЖЕДНЕВНЫЕ ВЫПЛАТЫ</h3>
            <p>Устроившись на работу к нам, вы получаете выплату с первого дня!</p>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default Offer;
