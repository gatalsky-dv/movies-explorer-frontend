import React from 'react';

export default function AboutMe() {

  return (
    <section className="aboutme">
      <h2 className="caption">Студент</h2>
      <div className="line"></div>
      <img src={require('../../../images/ava.jpeg')} alt="Аватарка" className="aboutme_img" />
      <h3 className="aboutme_name">Дмитрий</h3>
      <h4 className="aboutme__profession">Фронтенд-разработчик, 36 лет</h4>
      <p className="aboutme__text">Я живу в Екатеринбурге, закончил радиотехнический факультет УрФУ. У меня есть жена и двое детей. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2020 года работал в компании «Reverse Systems». После того, как прошёл курс по веб-разработке, занимаюсь фриланс-заказами и ушёл с постоянной работы.</p>
      <h4 className="aboutme__github">Github</h4>
    </section>
  )
}