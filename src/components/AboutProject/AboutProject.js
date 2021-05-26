import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__arcticle-container'>
        <article className='about-project__article'>
          <h3 className='about-project__article-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__article-text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </article>
        <article className='about-project__article'>
          <h3 className='about-project__article-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__article-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </article>
      </div>
      <div className='about-project__duration'>
        <div className='about-project__backend'>1 неделя</div>
        <div className='about-project__frontend'>4 недели</div>
        <span className='about-project__duration-title'>Back-end</span>
        <span className='about-project__duration-title'>Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
