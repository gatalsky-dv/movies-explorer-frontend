import React from 'react';

export default function AboutProject() {

  return (
    <section className="aboutproject" id='about'>
      <h2 className="caption">О проекте</h2>
      <div className="line"></div>
      <ul className="diplom">
        <li className="diplom__cell">
          <h4 className="diplom__caption">Дипломный проект включал 5 этапов</h4>
          <p className="diplom__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="diplom__cell">
          <h4 className="diplom__caption">На выполнение диплома ушло 5 недель</h4>
          <p className="diplom__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="develop">
        <li className="develop__backend">
          <div className="develop__backend-time">
            <p className="develop__text">1 неделя</p>
          </div>
          <p className="develop__name">Back-end</p>
        </li>
        <li className="develop__frontend">
          <div className="develop__frontend-time">
            <p className="develop__text">4 недели</p>
          </div>
          <p className="develop__name">Front-end</p>
        </li>
      </ul>
    </section>
  )
}