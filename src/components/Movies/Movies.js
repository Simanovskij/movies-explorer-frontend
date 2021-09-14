import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoggedIn, pathname, onGetMovies, movies, isLoading, error }) {
  return (<>
      <Header isLoggedIn={isLoggedIn} />
      <main className='movies'>
        <Searchform onSubmit={onGetMovies} />
        {isLoading
          ? <Preloader />
          : <MoviesCardList pathname={pathname} movies={movies} error={error} />}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
