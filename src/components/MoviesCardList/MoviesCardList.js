import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import MoreButton from '../MoreButton/MoreButton';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  pathname,
  movies,
  onSearchError,
  onSave,
  onDelete,
  savedMoviesId,
}) {
  const [cardsToShow, setCardsToShow] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState(null);
  const [moreMoviesToShow, setMoreMoviesToShow] = useState(null);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const updateWidth = () => {
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  useEffect(() => {
    if (pathname === '/movies') {
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
    }
  }, [width, pathname]);

  useEffect(() => {
    setCardsToShow(movies.slice(0, moviesToShow));
  }, [moviesToShow, movies]);

  function handleMoreButton() {
    setMoviesToShow((prev) => prev + moreMoviesToShow);
  }
  const isMoviesPath = pathname === '/movies';
  const moviesToMap = isMoviesPath ? cardsToShow : movies;

  return (
    <section className='movie-list'>
        {onSearchError ? (
          <h3 className='movie-list__error'>Ничего не найдено</h3>
        ) : (
          <div className='movie-list__wrapper'>
            {movies && moviesToMap.map((movie) => (
              <MoviesCard
                key={isMoviesPath ? movie.movieId : movie._id}
                pathname={pathname}
                movie={movie}
                onSave={onSave}
                onDelete={onDelete}
                savedMoviesId ={savedMoviesId}/>
            ))}
          </div>
        )}
      {(movies.length > moviesToShow) && isMoviesPath && <MoreButton onClick={handleMoreButton} />}
    </section>
  );
}

export default MoviesCardList;
