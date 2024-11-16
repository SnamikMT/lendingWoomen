import React from 'react';
import { Link } from 'react-scroll'; // Импортируем библиотеку
import '../styles/Requirements.css';
import requirementsImage from '../assets/requirements.jpg'; // Путь к картинке

function Requirements() {
  return (
    <section id="req" className="requirements">
      <div className="requirements-image"></div> {/* Картинка с градиентом */}
      <div className="requirements-content">
        <h2>
          ТРЕБОВАНИЯ <span>К</span><br />
          <span>СОИСКАТЕЛЬНИЦЕ</span>
        </h2>
        <p>
          Работа в сфере эскорта является весьма престижной, поэтому агентства выставляют определенные требования к эскорт-моделям, в большей части касающиеся их внешних данных и манер.
        </p>
        <p>
          Также имеет значение степень раскрепощенности, общительности и уверенности в себе. Девушка не должна быть скромной или закомплексованной. И если она будет соответствовать этим минимальным требованиям, то сможет зарабатывать просто за счет своей красоты и обаяния.
        </p>
        <h3>Вот перечень требований, которым должна соответствовать девушка, желающая получить работу в эскорте:</h3>
        <ul>
          <li>Девушка должна быть старше 18 лет.</li>
          <li>Быть гражданкой РФ или СНГ, иметь соответствующие документы, позволяющие пребывание в стране.</li>
          <li>Девушка должна иметь приятную внешность.</li>
          <li>Не иметь лишнего веса.</li>
          <li>Должна быть ответственной и пунктуальной. Не должна опаздывать.</li>
          <li>Дополнительным преимуществом будет знание иностранного языка.</li>
        </ul>
        <a
          href="#form"
          className="requirements-link"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          ЗАПОЛНИТЬ АНКЕТУ
        </a>

      </div>
    </section>
  );
}

export default Requirements;
