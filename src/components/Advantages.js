import React from 'react';
import '../styles/Advantages.css';
import { FaMoneyBillAlt, FaCalendarAlt, FaRegSmile, FaLock, FaMapMarkerAlt, FaUserShield } from 'react-icons/fa';
import { GiTeamIdea, GiReceiveMoney, GiHouse, GiCheckMark } from 'react-icons/gi';

const advantages = [
  { icon: <FaMoneyBillAlt />, text: 'Высокий доход' },
  { icon: <FaCalendarAlt />, text: 'Гибкий график' },
  { icon: <GiReceiveMoney />, text: 'Отсутствие вычетов' },
  { icon: <GiTeamIdea />, text: 'Дружный коллектив' },
  { icon: <FaLock />, text: 'Полная конфиденциальность' },
  { icon: <GiCheckMark />, text: 'Собственная база постоянных клиентов' },
  { icon: <GiReceiveMoney />, text: 'Оплата ежедневно' },
  { icon: <GiHouse />, text: 'Возможно проживание' },
  { icon: <FaUserShield />, text: 'Гарантия вашей безопасности' },
  { icon: <GiTeamIdea />, text: 'Адекватное руководство' },
  { icon: <FaMapMarkerAlt />, text: 'Выезд в пределах Москвы' },
  { icon: <FaRegSmile />, text: 'Работа есть всегда' }
];

function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages-title">
        <h2>
          <span>НАШИ</span><br />
          ПРЕИМУЩЕСТВА
        </h2>
      </div>
      <div className="advantages-grid">
        {advantages.map((adv, index) => (
          <div key={index} className="advantage-item">
            <div className="icon">{adv.icon}</div>
            <p>{adv.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;
