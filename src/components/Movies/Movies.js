import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
      <main className='movies'>
        <Searchform/>
        <MoviesCardList/>
      </main>
  );
}

export default Movies;
