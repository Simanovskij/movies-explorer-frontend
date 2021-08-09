import './SavedMovies.css';
import { lazy, Suspense } from 'react';
import Searchform from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({ isLoggedIn, pathname }) {
  const MoviesCardList = lazy(
    () => new Promise((resolve) => setTimeout(() => resolve(import('../MoviesCardList/MoviesCardList')), 1000)),
  );
  return (<>
      <Header isLoggedIn={isLoggedIn} />
      <main className='saved-movies'>
        <Searchform />
        <Suspense fallback={<Preloader />}>
          <MoviesCardList pathname={pathname} />
        < /Suspense>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
