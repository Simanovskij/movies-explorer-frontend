import './Movies.css';
import Searchform from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isLoggedIn, pathname, onSearch, movies, width, onSave, onSearchError }) {
  return (<>
      <Header isLoggedIn={isLoggedIn} width={width} />
      <main className='movies'>
        <Searchform onSubmit={onSearch} />
        <MoviesCardList
          pathname={pathname}
          movies={movies}
          width={width}
          onSearchError={onSearchError}
          onSave={onSave}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
