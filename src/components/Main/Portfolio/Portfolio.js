import React from 'react';

export default function Portfolio() {

  return (
    <section className="portfolio">
      <h4 className="portfolio__name">Портфолио</h4>
      <nav className="portfolio__list">
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/how-to-learn" className="portfolio__link" target="_blank">Статичный сайт</a>
          <div className="portfolio__img"></div>
        </div>
        <div className="line portfolio__line"></div>
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/russian-travel" className="portfolio__link" target="_blank">Адаптивный сайт</a>
          <div className="portfolio__img"></div>
        </div>
        <div className="line portfolio__line"></div>
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/react-mesto-api-full" className="portfolio__link" target="_blank">Одностраничное приложение</a>
          <div className="portfolio__img"></div>
        </div>
      </nav>

    </section>
  )
}