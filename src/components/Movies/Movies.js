import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoading, pathname }) {
  return (
    <main className='movies'>
      <Searchform/>
      <MoviesCardList isLoading={isLoading} pathname={pathname}/>
    </main>
  );
}

export default Movies;
