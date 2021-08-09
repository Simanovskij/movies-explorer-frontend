import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  const { pathname } = useLocation();
  const history = useHistory();
  const [error, setError] = useState({
    registerError: null,
  });

  // запрос фильмов для этапа верстки
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
      const user = mainApi.register(data);
    } catch (e) {
      setError({
        registerError: 'При регистрации пользователя произошла ошибка',
      });
    }
  }

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies pathname={pathname} isLoggedIn={true} />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies pathname={pathname} isLoggedIn={true} />
        </Route>
        <Route path='/signup'>
          <Register onRegister={onRegister} />
        </Route>
        <Route path='/signin'>
          <Login />
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
