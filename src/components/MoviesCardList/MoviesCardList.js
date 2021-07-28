import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MoreButton from '../MoreButton/MoreButton';

function MoviesCardList({ isLoading, pathname }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
  }, []);
  return (
    <section className="movie-list">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="movie-list__wrapper">
            {movies.map((movie) => (
              <MoviesCard key={movie.id} pathname={pathname} movie={movie} />
            ))}
          </div>
          {pathname === '/movies' ? <MoreButton /> : null}
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
