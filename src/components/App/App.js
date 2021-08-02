import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesApi from '../../utils/MoviesApi';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {
  const { pathname } = useLocation();
  const saveMovies = () => {
    moviesApi
      .getMovies()
      .then((res) => {
        const moviesForShow = res.slice(0, 13);
        localStorage.setItem('movies', JSON.stringify(moviesForShow));
      })
      .finally(() => {
        setTimeout(() => {}, 1000);
      });
  };

  useEffect(() => {
    saveMovies();
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
        </Route>
        <Route path='/movies'>
          <Header isLoggedIn={true} />
          <Movies pathname={pathname} />
        </Route>
        <Route path='/saved-movies'>
          <Header isLoggedIn={true} />
          <SavedMovies pathname={pathname} />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/profile'>
          <Header isLoggedIn={true} />
          <Profile />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      <Route path={['/', 'movies', 'saved-movies']}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
