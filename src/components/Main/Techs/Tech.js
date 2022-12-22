import React from 'react';

export default function Tech() {

  return (
    <section className="tech">
      <h2 className="caption">Технологии</h2>
      <div className="line"></div>
      <h3 className="tech_caption">7 технологий</h3>
      <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="tech__list">
        <div className="tech__block">
          <p className="tech__title">HTML</p>
        </div>
        <div className="tech__block">
          <p className="tech__title">CSS</p>
        </div>
        <div className="tech__block">
          <p className="tech__title">JS</p>
        </div>
        <div className="tech__block">
          <p className="tech__title">React</p>
        </div>
        <div className="tech__block">
          <p className="tech__title">Git</p>
        </div>
        <div className="tech__block">
          <p className="tech__title">Express.js</p>
        </div>
        <div className="tech__block">
          <p className="tech__title">mongoDB</p>
        </div>
      </div>
    </section>
  )
}