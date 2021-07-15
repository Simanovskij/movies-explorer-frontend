import './AboutMe.css';
import avatar from '../../images/ava.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__content'>
        <div className='about-me__bio'>
          <div>
            <h3 className='about-me__name'>Андрей Башмаков</h3>
            <p className='about-me__career'>Фронтенд-разработчик, 33 года</p>
            <p className='about-me__description'>
              Живу и работаю в Москве. Учился на журфаке в{' '}
              <a
                href='https://mggu-sh.ru/ru'
                className='about-me__link'
                target='_blank'
                rel='noreferrer'
              >
                МГГУ им. М. А. Шолохова
              </a>
              , а затем с 2010-го года занимался эквайрингом в{' '}
              <a
                href='https://www.zenit.ru/'
                className='about-me__link'
                target='_blank'
                rel='noreferrer'
              >
                Банк Зенит.
              </a>{' '}
              Счастливо женат, есть совместный кот. Люблю бегать и коллекционировать
              ретро-видеоигры.
            </p>
          </div>
          <div className='about-me__social-links'>
            <a className='about-me__social-link' href='https://github.com/'>
              Github
            </a>
            <a className='about-me__social-link' href='https://github.com/'>
              Github
            </a>
          </div>
        </div>
        <img className='about-me__photo' alt='Фото автора' src={avatar} />
      </div>
    </section>
  );
}

export default AboutMe;
