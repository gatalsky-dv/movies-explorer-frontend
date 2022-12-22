import React from 'react';

export default function Footer() {

  return (

    <footer className="footer">
      <h4 className="footer__text footer__text_title">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className="line footer__line"></div>
      <nav className="footer__nav">
        <p className="footer__text footer__text_caption">Яндекс.Практикум</p>
        <p className="footer__text footer__text_caption">Github</p>
        <p className="footer__text footer__text_year">©2022</p>
      </nav>
    </footer>

  )
}