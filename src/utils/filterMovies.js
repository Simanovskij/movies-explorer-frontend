export default function filterMovies(request, movies, isShort) {
  const searchRequest = request.toLowerCase().split(' ');
  let filteredMovies = movies.filter((movie) => filterMoviesByName(searchRequest, movie));
  if (isShort) {
    filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
  }
  return filteredMovies;
}

function filterMoviesByName(request, movie) {
  const rusName = movie.nameRU.toLowerCase();

  if (movie.nameEN && movie.nameRU) {
    const engName = movie.nameEN.toLowerCase();
    return request.some((req) => rusName.includes(req) || engName.includes(req));
  }
  return request.some((req) => rusName.includes(req));
}
