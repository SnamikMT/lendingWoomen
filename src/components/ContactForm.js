import React, { useState } from 'react';
import '../styles/ContactForm.css';
import { FaWhatsapp } from 'react-icons/fa'; // Пакет react-icons для иконки WhatsApp

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Заявка отправлена:\nИмя: ${name}\nТелефон: ${phone}`);
  };

  return (
    <section id="form" className="contact-section">
      <div className="contact-info">
        <h2>Свяжитесь с нами</h2>
        <p>Остались вопросы? Мы с радостью ответим!</p>

        <div className="contact-links">
        <a href="tel:+79258255380" className="contact-link">
          +7 (925) 825-53-80
        </a>
        <a href="https://wa.me/79258255380" className="contact-link whatsapp-icon">
          <FaWhatsapp size={32} /> {/* Иконка WhatsApp */}
        </a>
      </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Оставить заявку</h3>
        <label htmlFor="name">
          Ваше имя
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Введите ваше имя"
          />
        </label>
        <label htmlFor="phone">
          Ваш телефон
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="+7XXXYYYYYYY"
          />
        </label>
        <button type="submit" className="submit-button">
          Отправить заявку
        </button>
        <p className="disclaimer">
          Вы ничем не рискуете! Если наша вакансия вас устроит, вы будете приглашены на собеседование.
        </p>
      </form>
    </section>
  );
}

export default ContactForm;
