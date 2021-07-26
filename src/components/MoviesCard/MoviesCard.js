import './MoviesCard.css';

function MoviesCard({ movie, pathname }) {
  const imageURL = 'https://api.nomoreparties.co';
  const isLiked = getRandom(1, 10) < 5;
  const buttonForMoviesPath = isLiked ? <button className='movie__like-btn_liked movie__like-btn'/>
    : <button className='movie__like-btn'> Сохранить </button>;
  const buttonForSavedMoviesPath = '';
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <article className='movie'>
      <div className='movie__header'>
        <h3 className='movie__title'>{movie.nameRU}</h3>
        <span className='movie__duration'>{movie.duration} минут</span>
      </div>
      <img className='movie__image' src={imageURL + movie.image.url} alt={movie.nameRU}/>
      {pathname === '/movies' ? buttonForMoviesPath : buttonForSavedMoviesPath}
    </article>
  );
}

export default MoviesCard;
