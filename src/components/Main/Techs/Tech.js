

export default function Tech({ email }) {

  return (
    <section className="tech">
      <h2 className="caption">Технологии</h2>
      <div className="line"></div>
      <h3 className="tech_caption">7 технологий</h3>
      <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="tech__list">
        <div className="tech__block">
          <p className="tech__p">HTML</p>
        </div>
        <div className="tech__block">
          <p className="tech__p">CSS</p>
        </div>
        <div className="tech__block">
          <p className="tech__p">JS</p>
        </div>
        <div className="tech__block">
          <p className="tech__p">React</p>
        </div>
        <div className="tech__block">
          <p className="tech__p">Git</p>
        </div>
        <div className="tech__block">
          <p className="tech__p">Express.js</p>
        </div>
        <div className="tech__block">
          <p className="tech__p">mongoDB</p>
        </div>
      </div>
    </section>
  )
}