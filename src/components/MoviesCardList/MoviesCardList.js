import './MoviesCardList.css';
import { lazy, Suspense } from 'react';
import Preloader from '../Preloader/Preloader';

const MoviesCard = lazy(() => import('../MoviesCard/MoviesCard'));

function MoviesCardList({ pathname, movies, error }) {
  return (
    <section className='movie-list'>
      <Suspense fallback={<Preloader />}>
        {error
          ? <h3 className='movie-list__error'>Ничего не найдено</h3>
          : <div className='movie-list__wrapper'>
            {movies && movies.map((movie) => (
              <MoviesCard key={movie.id} pathname={pathname} movie={movie} />
            ))}
          </div>}
      </Suspense>
    </section>
  );
}

export default MoviesCardList;
