import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoggedIn, pathname, onGetMovies, movies, error, width }) {
  return (<>
      <Header isLoggedIn={isLoggedIn} width={width} />
      <main className='movies'>
        <Searchform onSubmit={onGetMovies} />
        <MoviesCardList pathname={pathname} movies={movies} error={error} width={width} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
