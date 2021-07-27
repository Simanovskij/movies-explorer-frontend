import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {
  return (
    <main className='movies'>
      <Searchform/>
      <MoviesCardList isLoading={props.isLoading} pathname={props.pathname}/>
    </main>
  );
}

export default Movies;
