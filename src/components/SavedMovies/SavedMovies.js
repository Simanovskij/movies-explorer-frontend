import './SavedMovies.css';
import { lazy, Suspense } from 'react';
import Searchform from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  const MoviesCardList = lazy(
    () => new Promise((resolve) => setTimeout(() => resolve(import('../MoviesCardList/MoviesCardList')), 1000)),
  );
  return (
    <main className='saved-movies'>
      <Searchform />
      <Suspense fallback={<Preloader />}>
        <MoviesCardList pathname={props.pathname} />
      < /Suspense>
    </main>
  );
}

export default SavedMovies;
