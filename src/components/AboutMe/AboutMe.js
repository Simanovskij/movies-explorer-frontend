import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__content'>
        <div className='about-me__bio'>
          <h3 className='about-me__name'>Андрей Башмаков</h3>
          <p className='about-me__career'>Фронтенд-разработчик, 33 года</p>
          <p className='about-me__description'>
            Живу и работаю в Москве. Учился на журфаке в МГГУ им. М. А. Шолохова, а затем с 2010-го
            года занимался эквайрингом в{' '}
            <a href='https://www.zenit.ru/' className='about-me__link'>
              Банке Зенит
            </a>
          </p>
        </div>
        <img className='about-me__photo' />
      </div>
    </section>
  );
}

export default AboutMe;
