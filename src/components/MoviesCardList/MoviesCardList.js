import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ isLoading }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
  }, []);

  return (
    <section className='movie-list'>
      {isLoading ? <Preloader/> : <>
        <div className='movie-list__wrapper'>{movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}/>))}</div>
        <button type='button' className='movie-list__more-btn'>Ещё</button>
      </>
      }
    </section>
  );
}

export default MoviesCardList;
