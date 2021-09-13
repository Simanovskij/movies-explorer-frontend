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

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState({
    registerError: null,
  });

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

  async function saveMovies() {
    if (localStorage.checked === 'true') {
      try {
        const allMovies = await moviesApi.getMovies();
        localStorage.setItem('movies', JSON.stringify(allMovies));
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    saveMovies();
  }, []);

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

  function getMovies(movie) {
    const searchedMovies = movie.split(' ');
    const allmovies = localStorage.getItem('movies');
    console.log(searchedMovies);
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
            onGetMovies={getMovies}
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
            <Header isLoggedIn={true} />
            <Profile />
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
