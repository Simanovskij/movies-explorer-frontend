import './Promo.css';
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__text'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <div className='promo__image'></div>
      </div>
      <Link className='promo__link'>Узнать больше</Link>
    </section>
  );
}

export default Promo;
