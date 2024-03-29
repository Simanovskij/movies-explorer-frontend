import './Tech.css';

function Techs() {
  return (
    <section className='tech'>
      <h2 className='tech__title'>Технологии</h2>
      <div className='tech__description'>
        <h3 className='tech__description-title'>7 технологий</h3>
        <p className='tech__description-details'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className='tech__list'>
        <li className='tech__list-item'>HTML</li>
        <li className='tech__list-item'>CSS</li>
        <li className='tech__list-item'>JS</li>
        <li className='tech__list-item'>React</li>
        <li className='tech__list-item'>Git</li>
        <li className='tech__list-item'>Express.js</li>
        <li className='tech__list-item'>mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
