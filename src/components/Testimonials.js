// src/components/Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import '../styles/Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Импорт изображений
import girl1 from '../assets/girl1.png';
import girl2 from '../assets/girl2.png';
import girl3 from '../assets/girl3.png';
import girl4 from '../assets/girl4.png';
import olgaImage from '../assets/girl4.png';
import elenaImage from '../assets/girl4.png';

const testimonials = [
  {
    name: 'Марина',
    city: 'Москва',
    text: 'Пыталась устроиться в подобные агентства, везде надо платить то за водителя, то за рекламу, вечно пытаются нажиться, тут предоставили всё! Нет штрафов, менеджеры молодцы, спасибо вам огромное',
    image: girl1,
  },
  {
    name: 'Катя',
    city: 'Москва',
    text: 'Когда тебя оставляют у разбитого корыта приходится надеяться только на себя! Устроилась на работу в сфере эскорта и начинала жить, именно жить, а не выживать.',
    image: girl2,
  },
  {
    name: 'Светлана',
    city: 'Москва',
    text: 'Выплатила все кредиты за короткий срок. Благодарна администраторам, что смогла быстро снять квартиру, до этого с подругой скидывались на комнату, сейчас живу одна в своё удовольствие',
    image: girl3,
  },
  {
    name: 'Анастасия',
    city: 'Санкт-Петербург',
    text: 'Получила возможность путешествовать и наслаждаться жизнью благодаря этой работе. Спасибо за поддержку!',
    image: girl4,
  },
  {
    name: 'Ольга',
    city: 'Казань',
    text: 'В агентстве меня встретили как родную, все условия для работы и жизни. Наконец-то нашла место, где могу чувствовать себя комфортно.',
    image: olgaImage,
  },
  {
    name: 'Елена',
    city: 'Новосибирск',
    text: 'Решила начать новую жизнь и ни разу не пожалела. Отличная команда и поддержка во всем.',
    image: elenaImage,
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials">
      <h2>ОТЗЫВЫ НАШИХ СОТРУДНИЦ</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">
              {testimonial.name}, {testimonial.city}
            </p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
