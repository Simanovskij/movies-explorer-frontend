export default function formatMovies(movies) {
  return movies.map((movie) => {
    const formattedMovie = {
      ...movie,
      movieId: movie.id,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      trailer: movie.trailerLink && movie.trailerLink.startsWith('http') ? movie.trailerLink : 'https://www.kinopoisk.ru/',
    };
    return formattedMovie;
  });
}
