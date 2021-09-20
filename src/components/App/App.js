import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../../utils/context/CurrentUserContext';
import filterMovies from '../../utils/filterMovies';
import formatMovies from '../../utils/formatMovies';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkToken = useCallback(async () => {
    if (localStorage.checked === 'true') {
      try {
        const user = await mainApi.checkToken();
        setIsLoggedIn(true);
        history.push('/movies');
        setCurrentUser(user);
      } catch (e) {
        console.log(e);
      }
    }
  }, [history]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  function onRegister(data) {
    mainApi.register(data).then(() => {
      onLogin(data);
    }).catch((e) => {
      console.log(e);
    });
  }

  function onLogin(data) {
    mainApi.login(data).then(() => {
      setIsLoggedIn(true);
      history.push('/movies');
      localStorage.setItem('checked', 'true');
    }).catch((e) => {
      console.log(e);
    });
  }

  function onSignOut() {
    mainApi.signOut().then(() => {
      setIsLoggedIn(false);
      history.push('/');
      localStorage.clear();
      setFilteredMovies([]);
    }).catch((e) => {
      console.log(e);
    });
  }

  function updateUser(newUser) {
    mainApi.updateUser(newUser)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      }).catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getSavedMovies()
        .then((userMovies) => {
          setSavedMovies(userMovies);
          setSearchedSavedMovies(userMovies);
          if (userMovies.length) {
            const userMoviesId = userMovies.map((movie) => movie.movieId);
            setSavedMoviesId(userMoviesId);
          }
        });
    }
  }, [isLoggedIn]);

  function checkSearchError(arr) {
    setSearchError(false);
    if (!arr.length) {
      setSearchError(true);
    }
  }

  function getFilteredMovies(request, isShort) {
    const localMovies = JSON.parse(localStorage.getItem('localMovies'));
    if (!localMovies) {
      setIsLoading(true);
      moviesApi.getMovies()
        .then((movies) => {
          const formattedMovies = formatMovies(movies);
          const sortedMovies = filterMovies(request, formattedMovies, isShort);
          checkSearchError(sortedMovies);
          setFilteredMovies(sortedMovies);
          localStorage.setItem('filteredMovies', JSON.stringify(sortedMovies));
          localStorage.setItem('localMovies', JSON.stringify(formattedMovies));
        }).catch((e) => {
          console.log(e);
        }).finally(() => {
          setIsLoading(false);
        });
    } else {
      const sortedMovies = filterMovies(request, localMovies, isShort);
      checkSearchError(sortedMovies);
      setFilteredMovies(sortedMovies);
      localStorage.setItem('filteredMovies', JSON.stringify(sortedMovies));
    }
  }

  useEffect(() => {
    const searchedMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    if (searchedMovies && isLoggedIn) {
      setFilteredMovies(searchedMovies);
    }
  }, [isLoggedIn]);

  function saveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([...savedMovies, savedMovie]);
        setSavedMoviesId([...savedMoviesId, savedMovie.movieId]);
        setSearchedSavedMovies([...searchedSavedMovies, savedMovie]);
      }).catch((e) => {
        console.log(e);
      });
  }

  function deleteMovie(id) {
    const deletedMovie = savedMovies.find((item) => item.movieId === id);
    mainApi.deleteMovie(deletedMovie._id)
      .then(() => {
        const filteredSavedMovie = savedMovies.filter((movie) => movie.movieId !== id);
        const filteredSavedMoviesId = savedMoviesId.filter((movieId) => movieId !== id);
        setSavedMovies(filteredSavedMovie);
        setSavedMoviesId(filteredSavedMoviesId);
        setSearchedSavedMovies(filteredSavedMovie);
      }).catch((e) => {
        console.log(e);
      });
  }

  function getFilteredSavedMovies(request, isShort) {
    const sortedMovies = filterMovies(request, savedMovies, isShort);
    checkSearchError(sortedMovies);
    setSearchedSavedMovies(sortedMovies);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Main isLoggedIn={isLoggedIn} pathname={pathname} />
          </Route>
          <ProtectedRoute
            path='/movies'
            pathname={pathname}
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            component={Movies}
            onSearch={getFilteredMovies}
            onSearchError={searchError}
            movies={filteredMovies}
            onSave={saveMovie}
            onDelete={deleteMovie}
            savedMoviesId={savedMoviesId}
          />
          <ProtectedRoute
            path='/saved-movies'
            pathname={pathname}
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
            movies={searchedSavedMovies}
            onSearch={getFilteredSavedMovies}
            onSearchError={searchError}
            onDelete={deleteMovie}
          />
          <Route path='/signup'>
            <Register onRegister={onRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLogin={onLogin} />
          </Route>
          <Route path='/profile'>
            <Header isLoggedIn={isLoggedIn} />
            <Profile onSignOut={onSignOut} onUpdate={updateUser}/>
            <Footer />
          </Route>
          <Route>
            <NotFound path='*' />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
