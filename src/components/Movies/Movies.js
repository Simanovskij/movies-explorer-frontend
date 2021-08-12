import './Movies.css';
import { lazy, Suspense } from 'react';
import Searchform from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({ isLoggedIn, pathname, isMain }) {
  const MoviesCardList = lazy(
    () => new Promise((resolve) => setTimeout(() => resolve(import('../MoviesCardList/MoviesCardList')), 1000)),
  );

  return (<>
      <Header isLoggedIn={isLoggedIn} />
      <main className='movies'>
        <Searchform />
        <Suspense fallback={<Preloader />}>
          <MoviesCardList pathname={pathname} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
