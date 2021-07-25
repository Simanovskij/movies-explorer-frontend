import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const saveMovies = () => {
    setIsLoading(true);
    moviesApi.getMovies().then((res) => {
      const moviesForShow = res.slice(0, 13);
      localStorage.setItem('movies', JSON.stringify(moviesForShow));
    }).finally(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };

  useEffect(() => {
    saveMovies();
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header/>
          <Main/>
          <Footer/>
        </Route>
        <Route exact path='/movies'>
          <Header isLoggedIn={true}/>
          <Movies isLoading={isLoading}/>
          <Footer/>
        </Route>
        <Route exact path='/saved-movies'>
          <Header isLoggedIn={true}/>
          <Footer/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
