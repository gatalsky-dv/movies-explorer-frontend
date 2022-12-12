import React from 'react';

export default function Portfolio({ email }) {

  return (
    <section className="portfolio">
      <h4 className="portfolio__name">Портфолио</h4>
      <nav className="portfolio__list">
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/movies-explorer-frontend/tree/level-2" className="portfolio__link">Статичный сайт</a>
          <a href="https://github.com/gatalsky-dv/movies-explorer-frontend/tree/level-2" className="portfolio__img" />
        </div>
        <div className="line portfolio__line"></div>
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/movies-explorer-frontend/tree/level-2" className="portfolio__link">Адаптивный сайт</a>
          <a href="https://github.com/gatalsky-dv/movies-explorer-frontend/tree/level-2" className="portfolio__img" />
        </div>
        <div className="line portfolio__line"></div>
        <div className="portfolio__block">
          <a href="https://github.com/gatalsky-dv/movies-explorer-frontend/tree/level-2" className="portfolio__link">Одностраничное приложение</a>
          <a href="https://github.com/gatalsky-dv/movies-explorer-frontend/tree/level-2" className="portfolio__img" />
        </div>
      </nav>

    </section>
  )
}