import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            target='_blank'
            rel='noreferrer'
            href='https://simanovskij.github.io/how-to-learn/'
          >
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            target='_blank'
            rel='noreferrer'
            href='https://simanovskij.github.io/russian-travel/'
          >
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__list-link'
            target='_blank'
            rel='noreferrer'
            href='https://simanovskij.github.io/how-to-learn/'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
