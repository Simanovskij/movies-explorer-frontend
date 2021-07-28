import './SavedMovies.css';
import Searchform from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <Searchform />
      <MoviesCardList isLoading={props.isLoading} pathname={props.pathname} />
    </main>
  );
}

export default SavedMovies;
