import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState({
    registerError: null,
  });

  // const checkToken = useCallback(async () => {
  //   if (localStorage.checked === 'true') {
  //     try {
  //       const user = await mainApi.checkToken();
  //       setIsLoggedIn(true);
  //       history.push('/movies');
  //       setCurrentUser(user);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }, [history]);

  useEffect(async () => {
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
  }, []);

  async function saveMovies() {
    try {
      const allMovies = await moviesApi.getMovies();
      const moviesForShow = allMovies.slice(0, 13);
      localStorage.setItem('movies', JSON.stringify(moviesForShow));
    } catch (e) {
      console.log(e);
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

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Main isLoggedIn={false} pathname={pathname} />
        </Route>
        <ProtectedRoute
          path='/movies'
          pathname={pathname}
          isLoggedIn={isLoggedIn}
          component={Movies}
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
  );
}

export default App;
