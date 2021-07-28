import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import moviesApi from '../../utils/MoviesApi';
import Register from '../Register/Register';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();
  const saveMovies = () => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((res) => {
        const moviesForShow = res.slice(0, 13);
        localStorage.setItem('movies', JSON.stringify(moviesForShow));
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  useEffect(() => {
    saveMovies();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header isLoggedIn={true} />
          <Movies isLoading={isLoading} pathname={pathname} />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header isLoggedIn={true} />
          <SavedMovies isLoading={isLoading} pathname={pathname} />
          <Footer />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
