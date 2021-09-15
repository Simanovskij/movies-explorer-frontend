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

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchError, setSearchError] = useState(false);

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

  async function onRegister(data) {
    try {
      await mainApi.register(data);
      await onLogin(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function onLogin(data) {
    try {
      await mainApi.login(data);
      setIsLoggedIn(true);
      history.push('/movies');
      localStorage.setItem('checked', 'true');
    } catch (e) {
      console.log(e);
    }
  }

  async function onSignOut() {
    mainApi.signOut().then(() => {
      setIsLoggedIn(false);
      history.push('/');
      localStorage.clear();
    });
  }

  function getMovies() {
    return Promise.all([mainApi.getSavedMovies(), moviesApi.getMovies()])
      .then(([userMovies, allMovies]) => {
        setSavedMovies(userMovies);
        setMovies(allMovies);
      }).catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getMovies();
  }, [isLoggedIn]);

  useEffect(() => {
    const sortedMovies = JSON.parse(localStorage.getItem('filteredMovies'));
    if (sortedMovies) {
      setFilteredMovies(sortedMovies);
    }
  }, []);

  function getFilteredMovies(request, isShort) {
    const sortedMovies = filterMovies(request, movies, isShort);
    setSearchError(false);
    if (sortedMovies.length === 0) {
      setSearchError(true);
    }
    setFilteredMovies(sortedMovies);
    localStorage.setItem('filteredMovies', JSON.stringify(sortedMovies));
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
            component={Movies}
            onGetMovies={getFilteredMovies}
            movies={filteredMovies}
            error={searchError}
          />
          <ProtectedRoute
            path='/saved-movies'
            pathname={pathname}
            isLoggedIn={isLoggedIn}
            component={SavedMovies}
          />
          <Route path='/signup'>
            <Register
              onRegister={onRegister} />
          </Route>
          <Route path='/signin'>
            <Login
              onLogin={onLogin} />
          </Route>
          <Route path='/profile'>
            <Header isLoggedIn={isLoggedIn} />
            <Profile onSignOut={onSignOut} />
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
