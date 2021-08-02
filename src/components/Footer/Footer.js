import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className='footer__wrapper'>
        <p className='footer__copyright'>&copy; 2021</p>
        <ul className='footer__links'>
          <li className='footer__link-item'>
            <a
              href='https://praktikum.yandex.ru'
              className='footer__link'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__link-item'>
            <a
              className='footer__link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Simanovskij'
            >
              Github
            </a>
          </li>
          <li className='footer__link-item'>
            <a
              className='footer__link'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Simanovskij'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
