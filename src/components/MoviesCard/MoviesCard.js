import './MoviesCard.css';

function MoviesCard({ movie }) {
  const imageURL = 'https://api.nomoreparties.co';

  return (
      <article className="movie">
        <h3 className="movie__title">{movie.nameRU}</h3>
        <img src={imageURL + movie.image.url} alt=""/>
      </article>
  );
}

export default MoviesCard;
