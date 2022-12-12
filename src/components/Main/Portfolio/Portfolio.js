import React from 'react';

export default function Portfolio({ email }) {

  return (
    <section className="portfolio">
      <h4 className="portfolio__name">Портфолио</h4>
      <nav className="portfolio__list">
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/how-to-learn" className="portfolio__link">Статичный сайт</a>
          <a href="https://github.com/gatalsky-dv/how-to-learn" className="portfolio__img" />
        </div>
        <div className="line portfolio__line"></div>
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/russian-travel" className="portfolio__link">Адаптивный сайт</a>
          <a href="https://github.com/gatalsky-dv/russian-travel" className="portfolio__img" />
        </div>
        <div className="line portfolio__line"></div>
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/react-mesto-api-full" className="portfolio__link">Одностраничное приложение</a>
          <a href="https://github.com/gatalsky-dv/react-mesto-api-full" className="portfolio__img" />
        </div>
      </nav>

    </section>
  )
}