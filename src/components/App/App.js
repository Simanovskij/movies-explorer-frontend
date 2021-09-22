import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../../context/CurrentUserContext';
import filterMovies from '../../utils/filterMovies';
import formatMovies from '../../utils/formatMovies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import successImage from '../../images/Succes.svg';
import notSuccessImage from '../../images/notSucces.svg';
import parseError from '../../utils/ParseError';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesId, setSavedMoviesId] = useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [infoImage, setInfoImage] = useState(null);

  function onRegister(data) {
    setIsLoading(true);
    mainApi.register(data).then(() => {
      onLogin(data);
    }).catch((err) => {
      showError(parseError(err));
    }).finally(() => {
      setIsLoading(false);
    });
  }

  function onLogin(data) {
    setIsLoading(true);
    mainApi.login(data).then(() => {
      setIsLoggedIn(true);
      getUser();
      history.push('/movies');
      localStorage.setItem('checked', 'true');
    }).catch((err) => {
      showError(parseError(err));
    }).finally(() => {
      setIsLoading(false);
    });
  }

  function onSignOut() {
    mainApi.signOut().then(() => {
      setIsLoggedIn(false);
      history.push('/');
      localStorage.clear();
      setFilteredMovies([]);
    }).catch((err) => {
      showError(parseError(err));
    });
  }

  function updateUser(newUser) {
    mainApi.updateUser(newUser)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        showSuccess('Изменено успешно');
      }).catch((err) => {
        showError(parseError(err));
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
          } else {
            setSavedMoviesId([]);
          }
        }).catch((err) => {
          showError(parseError(err));
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
        }).catch((err) => {
          showError(parseError(err));
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
      }).catch((err) => {
        showError(parseError(err));
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
      }).catch((err) => {
        showError(parseError(err));
      });
  }

  function showSuccess(message) {
    setIsInfoTooltipOpen(true);
    setInfoImage(successImage);
    setInfoMessage(message);
  }

  function showError(message) {
    setIsInfoTooltipOpen(true);
    setInfoImage(notSuccessImage);
    setInfoMessage(message);
  }

  function getFilteredSavedMovies(request, isShort) {
    const sortedMovies = filterMovies(request, savedMovies, isShort);
    checkSearchError(sortedMovies);
    setSearchedSavedMovies(sortedMovies);
  }

  useEffect(() => {
    if (localStorage.checked === 'true') {
      mainApi.getUser()
        .then((user) => {
          setIsLoggedIn(true);
          setCurrentUser(user);
        }).catch(() => {
          localStorage.clear();
          setIsLoggedIn(false);
        });
    }
  }, []);

  function getUser() {
    mainApi.getUser()
      .then((user) => {
        setCurrentUser(user);
      }).catch((err) => {
        showError(parseError(err));
      });
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
          <ProtectedRoute
            path='/profile'
            isLoggedIn={isLoggedIn}
            onSignOut={onSignOut}
            onUpdate={updateUser}
            component={Profile}
          />
          <Route path='/signup'>
            <Register onRegister={onRegister} isLoading={isLoading} />
          </Route>
          <Route path='/signin'>
            <Login onLogin={onLogin} isLoading={isLoading} />
          </Route>
          <Route>
            <NotFound path='*' />
          </Route>
        </Switch>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          setIsOpen={setIsInfoTooltipOpen}
          infoMessage={infoMessage}
          infoImage={infoImage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
