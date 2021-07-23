import './MoviesCardList.css';
import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const tempRequest = () => {
    setIsLoading(true);
    fetch('https://api.nomoreparties.co/beatfilm-movies').then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('res.status'));
    }).then((res) => {
      setmovies(res);
    }).finally(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    tempRequest();
  }, []);

  return (
      <section className="movie-list">
        {isLoading ? <Preloader/> : movies.map((movie) => (
            <MoviesCard key={movie.id} movie={movie}/>))}
      </section>
  );
}

export default MoviesCardList;
