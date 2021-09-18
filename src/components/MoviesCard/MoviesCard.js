import './MoviesCard.css';
import convertDuration from '../../utils/convertDuration';

function MoviesCard({ movie, pathname, onSave }) {
  const imageURL = `https://api.nomoreparties.co${movie.image.url}`;
  const isLiked = false;
  const buttonMoviesClass = isLiked
    ? 'movie__like-btn movie__like-btn_liked '
    : 'movie__like-btn';
  const buttonSavedMoviesClass = 'movie__like-btn movie__like-btn_disliked ';
  const isMoviesPath = pathname === '/movies';

  function handleSaveClick() {
    onSave({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: imageURL,
      trailer: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id,
    });
  }

  return (
    <article className='movie'>
      <div className='movie__header'>
        <h3 className='movie__title'>{movie.nameRU}</h3>
        <span className='movie__duration'>{convertDuration(movie.duration)}</span>
      </div>
      <img
        className='movie__image'
        src={pathname == '/movies' ? imageURL : movie.image}
        alt={movie.nameRU}
      />
      <button
        type='button' onClick={handleSaveClick}
        className={isMoviesPath ? buttonMoviesClass : buttonSavedMoviesClass}
      >
        {!isLiked && isMoviesPath && 'Сохранить'}
      </button>
    </article>
  );
}

export default MoviesCard;
