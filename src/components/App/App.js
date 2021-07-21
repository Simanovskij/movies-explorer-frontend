import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route exact path='/movies'>
          <Header isLoggedIn={true} />
          <Movies />
          <Footer />
        </Route>
        <Route exact path='/saved-movies'>
          <Header isLoggedIn={true} />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
