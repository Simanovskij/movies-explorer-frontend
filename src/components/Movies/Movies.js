import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <main className='movies'>
      <Searchform/>
      <MoviesCardList isLoading={props.isLoading}/>
    </main>
  );
}

export default Movies;
