import './MoviesCard.css';
import { useState, useEffect } from 'react';
import convertDuration from '../../utils/convertDuration';

function MoviesCard({ movie, pathname, onSave, onDelete, savedMoviesId }) {
  const [isSaved, setIsSaved] = useState(false);
  const isMoviesPath = pathname === '/movies';

  useEffect(() => {
    if (savedMoviesId && savedMoviesId.includes(movie.id)) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedMoviesId, movie]);

  function handleSave() {
    onSave({
      country: movie.country || 'Нет',
      director: movie.director || 'Нет',
      duration: movie.duration || 'Нет',
      year: movie.year || 0,
      description: movie.description || 'Нет',
      image: movie.image,
      trailer: movie.trailer,
      thumbnail: movie.thumbnail,
      nameRU: movie.nameRU || 'Нет',
      nameEN: movie.nameEN || 'Нет',
      movieId: movie.movieId,
    });
  }

  function handleDelete() {
    onDelete(movie.movieId);
  }

  function handleImageClick() {
    window.open(movie.trailer);
  }

  return (
    <article className='movie'>
      <div className='movie__header'>
        <h3 className='movie__title'>{movie.nameRU}</h3>
        <span className='movie__duration'>{convertDuration(movie.duration)}</span>
      </div>
      <img
        className='movie__image'
        src={movie.image}
        alt={movie.nameRU}
        onClick={handleImageClick}
      />
      {isMoviesPath
        && <button
          type='button' onClick={isSaved ? handleDelete : handleSave}
          className={isSaved ? 'movie__like-btn movie__like-btn_liked' : 'movie__like-btn'}
        >
          {!isSaved && 'Сохранить'}
        </button>
      }
      {!isMoviesPath
      && <button
        type='button' onClick={handleDelete}
        className='movie__like-btn movie__like-btn_disliked'
      >
      </button>
      }
    </article>
  );
}

export default MoviesCard;
