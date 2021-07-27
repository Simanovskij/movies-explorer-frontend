import './SavedMovies.css';
import Searchform from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <main className='saved-movies'>
      <Searchform/>
      <MoviesCardList props={props}/>
    </main>
  );
}

export default SavedMovies;
