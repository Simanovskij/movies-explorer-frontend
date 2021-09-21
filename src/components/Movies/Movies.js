import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({
  isLoggedIn,
  pathname,
  onSearch,
  movies,
  onSave,
  onDelete,
  onSearchError,
  savedMoviesId,
  isLoading,
}) {
  return (<>
      <Header isLoggedIn={isLoggedIn}/>
      <main className='movies'>
        <SearchForm onSubmit={onSearch} />
        {isLoading
          ? <Preloader/>
          : <MoviesCardList
              pathname={pathname}
              movies={movies}
              onSearchError={onSearchError}
              onSave={onSave}
              onDelete={onDelete}
              savedMoviesId={savedMoviesId}
            />
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
