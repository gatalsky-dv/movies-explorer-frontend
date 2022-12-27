import React from 'react';

export default function Portfolio() {

  return (
    <section className="portfolio">
      <h4 className="portfolio__name">Портфолио</h4>
      <nav className="portfolio__list">
        <a href="https://github.com/gatalsky-dv/how-to-learn" className="portfolio__block" target="_blank">
          <p className="portfolio__link" >Статичный сайт</p>
          <div className="portfolio__img"></div>
        </a>
        <div className="line portfolio__line"></div>
        <a href="https://github.com/gatalsky-dv/russian-travel" className="portfolio__block" target="_blank">
          <p className="portfolio__link">Адаптивный сайт</p>
          <div className="portfolio__img"></div>
        </a>
        <div className="line portfolio__line"></div>
        <a className="portfolio__block" href="https://github.com/gatalsky-dv/react-mesto-api-full" target="_blank">
          <p className="portfolio__link">Одностраничное приложение</p>
          <div className="portfolio__img"></div>
        </a>
      </nav>

    </section>
  )
}