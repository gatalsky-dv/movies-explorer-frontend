import React from 'react';
import { Link } from 'react-router-dom';

export default function Promo() {
  
  return (
    <section className="promo">
      <img src={require('../../../images/text__landing_310-304.jpg')} alt="Веб планета" className="promo__img" />
      <h1 className="promo__caption">Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <Link to='/' className="promo__more" >Узнать больше</Link>
    </section>
  )
}