import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../MoreButton/MoreButton';

function MoviesCardList({ pathname, movies, error }) {
  return (
    <section className='movie-list'>
      {error
        ? <h3>Ничего не найдено</h3>
        : <div className='movie-list__wrapper'>
          {movies && movies.map((movie) => (
            <MoviesCard key={movie.id} pathname={pathname} movie={movie} />
          ))}
        </div>}
      {pathname === '/movies' && <MoreButton />}
    </section>
  );
}

export default MoviesCardList;
