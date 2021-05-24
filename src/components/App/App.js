import { Route, Switch } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/movies">
          <Header isLoggedIn={true} />
        </Route>
        <Route exact path="/saved-movies">
          <Header isLoggedIn={true} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
