import React from 'react';
import '../styles/FAQ.css';
import { FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

function FAQ() {
  return (
    <section className="faq-section">
      <div className="faq-title">
        <h2>ЧАСТЫЕ<br /><span>ВОПРОСЫ</span></h2>
      </div>
      <div className="faq-container">
        {[
          {
            question: "Устала ходить по собеседованиям?",
            answer: "Заполните заявку и пройдите собеседование онлайн!"
          },
          {
            question: "Живешь от аванса до зарплаты?",
            answer: "У нас ежедневные выплаты!"
          },
          {
            question: "Работаешь в офисе с утра до вечера?",
            answer: "Работа по удобному и гибкому графику!"
          },
          {
            question: "Ехать до работы около часа и более?",
            answer: "Предоставляем и оплачиваем водителя бесплатно"
          },
          {
            question: "Мечтаешь о айфоне в кредит?",
            answer: "Заработать на свою мечту можно буквально за неделю!"
          },
          {
            question: "Хочешь выглядеть и одеваться красиво?",
            answer: "Услуги стилиста оплачиваем мы!"
          },
          {
            question: "Ищешь работу с высокой зарплатой?",
            answer: "Заполните заявку и пройдите собеседование онлайн!"
          },
          {
            question: "Нужно ли нам платить?",
            answer: "Расходы мы берем на себя"
          }
        ].map((faq, index) => (
          <div key={index} className="faq-card">
            <div className="faq-question">
              <div className="icon icon-question">
                <FaQuestionCircle />
              </div>
              <p>{faq.question}</p>
            </div>
            <div className="faq-answer">
              <div className="icon icon-answer">
                <FaCheckCircle />
              </div>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
