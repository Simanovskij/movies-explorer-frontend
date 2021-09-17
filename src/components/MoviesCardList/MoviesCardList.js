import './MoviesCardList.css';
import { lazy, Suspense, useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../MoreButton/MoreButton';

const MoviesCard = lazy(() => import('../MoviesCard/MoviesCard'));

function MoviesCardList({ pathname, movies, error, width }) {
  const [cardsToShow, setCardsToShow] = useState([]);
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    if (width > 768) {
      setCounter(12);
    } else if (width <= 768 && width > 480) {
      setCounter(8);
    } else {
      setCounter(5);
    }
  }, [width]);

  const cardsToRender = movies.slice(0, counter);

  function getMore() {
  }

  useEffect(() => {
    console.log(movies.length);
  }, [movies]);

  const displayMoreButton = cardsToShow.length > counter;

  console.log(displayMoreButton, counter, cardsToShow);

  return (
    <section className='movie-list'>
      <Suspense fallback={<Preloader />}>
        {error
          ? <h3 className='movie-list__error'>Ничего не найдено</h3>
          : <div className='movie-list__wrapper'>
            {movies && cardsToRender.map((movie) => (
              <MoviesCard key={movie.id} pathname={pathname} movie={movie} />
            ))}
          </div>}
      </Suspense>
      {movies.length > counter && <MoreButton onClick={getMore} />}
    </section>
  );
}

export default MoviesCardList;
