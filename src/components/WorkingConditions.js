import React from 'react';
import '../styles/WorkingConditions.css';
import incomeIcon from '../assets/income-icon.png'; // Иконка для Высокий Доход
import scheduleIcon from '../assets/schedule-icon.png'; // Иконка для Гибкий График
import comfortIcon from '../assets/comfort-icon.png'; // Иконка для Комфортные Условия

function WorkingConditions() {
  return (
    <section id="cond" className="working-conditions">
      <div className="working-conditions-content">
        <h2>
          <span>УСЛОВИЯ </span>
          РАБОТЫ
        </h2>
        <p>Все еще не можете поверить, что кто-то может вам предоставить работу с доходом от 10 000 рублей за смену? + Чай</p>
        <p>Откиньте все сомнения, ведь это ваш шанс навсегда попрощаться с серой и привычной жизнью.</p>
        <p>Для этого нужно лишь заполнить заявку на нашем сайте, в которой вы укажете свой телефон и имя, будьте готовы к тому, что менеджер перезвонит вам для заполнения более подробной анкеты, также вам понадобятся 2-3 фото, и уже в течение этого же дня вы можете выйти и начать зарабатывать.</p>
        <p>Мы поможем вам отбросить все сомнения, и сделаем все, чтобы вы стали независимой и успешной девушкой уже сейчас.</p>
        <button className="apply-button" onClick={(e) => {
            e.preventDefault();
            document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
          }}>ЗАПОЛНИТЬ АНКЕТУ</button>
      </div>
      <div className="working-conditions-benefits">
        <div className="benefit">
          <img src={incomeIcon} alt="Высокий доход" className="benefit-icon" />
          <div>
            <h3>ВЫСОКИЙ ДОХОД</h3>
            <p>Все наши девушки имеют стабильный высокий доход: от 325 000 рублей в месяц и более (очень высокий % от заказов).</p>
          </div>
        </div>
        <div className="benefit">
          <img src={scheduleIcon} alt="Гибкий график" className="benefit-icon" />
          <div>
            <h3>ГИБКИЙ ГРАФИК</h3>
            <p>Вы можете совмещать работу с учебой в Московском ВУЗе.</p>
          </div>
        </div>
        <div className="benefit">
          <img src={comfortIcon} alt="Комфортные условия" className="benefit-icon" />
          <div>
            <h3>КОМФОРТНЫЕ УСЛОВИЯ</h3>
            <p>Наше агентство ориентировано на разный сегмент и имеет все необходимое для комфортной работы.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkingConditions;
