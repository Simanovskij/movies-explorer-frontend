import './MoviesCardList.css';
import { lazy, Suspense, useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../MoreButton/MoreButton';

const MoviesCard = lazy(() => import('../MoviesCard/MoviesCard'));

function MoviesCardList({ pathname, movies, error, width }) {
  const [cardsToShow, setCardsToShow] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState(null);
  const [moreMoviesToShow, setMoreMoviesToShow] = useState(null);

  useEffect(() => {
    if (width > 768) {
      setMoviesToShow(12);
      setMoreMoviesToShow(3);
    } else if (width <= 768 && width > 480) {
      setMoviesToShow(8);
      setMoreMoviesToShow(2);
    } else {
      setMoviesToShow(5);
      setMoreMoviesToShow(2);
    }
  }, [width]);

  useEffect(() => {
    setCardsToShow(movies.slice(0, moviesToShow));
  }, [moviesToShow, movies]);

  console.log();

  function handleMoreButton() {
    setMoviesToShow((prev) => prev + moreMoviesToShow);
  }

  return (
    <section className='movie-list'>
      <Suspense fallback={<Preloader />}>
        {error ? (
          <h3 className='movie-list__error'>Ничего не найдено</h3>
        ) : (
          <div className='movie-list__wrapper'>
            {movies && cardsToShow.map((movie) => (
              <MoviesCard key={movie.id} pathname={pathname} movie={movie} />
            ))}
          </div>
        )}
      </Suspense>
      {(movies.length > moviesToShow) && <MoreButton onClick={handleMoreButton} />}
    </section>
  );
}

export default MoviesCardList;
