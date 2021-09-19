import './SavedMovies.css';
import Searchform from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn, pathname, movies, width, onSearchError, onSearch, onDelete }) {
  return (<>
      <Header isLoggedIn={isLoggedIn} width={width} />
      <main className='saved-movies'>
        <Searchform onSubmit={onSearch}/>
          <MoviesCardList
            pathname={pathname}
            movies={movies}
            width={width}
            onSearchError={onSearchError}
            onDelete={onDelete}
          />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
