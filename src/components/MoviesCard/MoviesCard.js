import './MoviesCard.css';

function MoviesCard({ movie }) {
  const imageURL = 'https://api.nomoreparties.co';

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const isLiked = getRandom(1, 10) < 5;

  return (
    <article className='movie'>
      <div className='movie__header'>
        <h3 className='movie__title'>{movie.nameRU}</h3>
        <span className='movie__duration'>{movie.duration} минут</span>
      </div>
      <img className='movie__image' src={imageURL + movie.image.url} alt={movie.nameRU}/>
      <button className={isLiked ? 'movie__like-btn_liked movie__like-btn' : 'movie__like-btn'} />
    </article>
  );
}

export default MoviesCard;
