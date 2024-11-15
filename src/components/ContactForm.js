// src/components/ContactForm.js
import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно добавить обработчик для отправки данных
    alert(`Заявка отправлена:\nИмя: ${name}\nТелефон: ${phone}`);
  };

  return (
    <section className="contact-section">
      <div className="contact-info">
        <h2>ЗАДАТЬ ВОПРОС</h2>
        <p>Остались вопросы? Ответим на все!</p>
        <a href="tel:+79258255380" className="contact-phone">+7(925)825-53-80</a>
        <a href="https://wa.me/79258255380" className="contact-whatsapp">WhatsApp</a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Заполните анкету</h3>
        <label>
          Ваше имя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Введите ваше имя"
          />
        </label>
        <label>
          Ваш телефон
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="+7XXXYYYYYYY"
          />
        </label>
        <button type="submit">Отправить заявку</button>
      </form>
    </section>
  );
}

export default ContactForm;
