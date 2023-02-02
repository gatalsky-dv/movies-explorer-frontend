import React from 'react';
import { Link } from 'react-scroll';

export default function Promo() {
  
  return (
    <section className='promo'>
      <img src={require('../../../images/text__landing_310-304.jpg')} alt='Веб планета' className='promo__img' />
      <h1 className='promo__caption'>Учебный проект студента факультета Веб-разработки.</h1>
      <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <Link to='about' className='promo__more' spy={true} smooth={true} duration={500}>Узнать больше</Link>
    </section>
  )
}