import './SavedMovies.css';
import Searchform from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isLoggedIn, pathname, movies, onSearchError, onSearch, onDelete }) {
  return (<>
      <Header isLoggedIn={isLoggedIn} />
      <main className='saved-movies'>
        <Searchform onSubmit={onSearch}/>
          <MoviesCardList
            pathname={pathname}
            movies={movies}
            onSearchError={onSearchError}
            onDelete={onDelete}
          />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
