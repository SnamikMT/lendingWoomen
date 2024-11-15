// src/components/FAQ.js
import React from 'react';
import '../styles/FAQ.css';

function FAQ() {
  return (
    <section className="faq-section">
      <h2>ЧАСТЫЕ <span>ВОПРОСЫ</span></h2>
      <div className="faq-container">
        <div className="faq-card">
          <p className="question">Устала ходить по собеседованиям?</p>
          <p className="answer">Заполните заявку и пройдите собеседование онлайн!</p>
        </div>
        <div className="faq-card">
          <p className="question">Живешь от аванса до зарплаты?</p>
          <p className="answer">У нас ежедневные выплаты!</p>
        </div>
        <div className="faq-card">
          <p className="question">Работаешь в офисе с утра до вечера?</p>
          <p className="answer">Работа по удобному и гибкому графику!</p>
        </div>
        <div className="faq-card">
          <p className="question">Ехать до работы около часа и более?</p>
          <p className="answer">Предоставляем и оплачиваем водителя бесплатно</p>
        </div>
        <div className="faq-card">
          <p className="question">Мечтаешь о айфоне в кредит?</p>
          <p className="answer">Заработать на свою мечту можно буквально за неделю!</p>
        </div>
        <div className="faq-card">
          <p className="question">Хочешь выглядеть и одеваться красиво?</p>
          <p className="answer">Услуги стилиста оплачиваем мы!</p>
        </div>
        <div className="faq-card">
          <p className="question">Ищешь работу с высокой зарплатой?</p>
          <p className="answer">Заполните заявку и пройдите собеседование онлайн!</p>
        </div>
        <div className="faq-card">
          <p className="question">Нужно ли нам платить?</p>
          <p className="answer">Расходы мы берем на себя</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
