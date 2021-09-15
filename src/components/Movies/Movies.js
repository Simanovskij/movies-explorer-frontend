import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies({ isLoggedIn, pathname, onGetMovies, movies, isLoading, error }) {
  return (<>
      <Header isLoggedIn={isLoggedIn} />
      <main className='movies'>
        <Searchform onSubmit={onGetMovies} />
        <MoviesCardList pathname={pathname} movies={movies} error={error} />
        <MoreButton />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
