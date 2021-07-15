import './Header.css';
import { Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import ProfileBtn from '../ProfileBtn/ProfileBtn';

function Header({ isLoggedIn }) {
  return (
    <header className={isLoggedIn ? 'header header_type_logged' : 'header'}>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Лого' />
      </Link>
      <Switch>
        <Route exact path='/'>
          <div>
            <Link to='/signup' className='header__btn'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__btn header__btn_type_signin'>
              Войти
            </Link>
          </div>
        </Route>
        <Route path={['/movies', '/saved-movies', '/profile']}>
          <Navigation />
          <ProfileBtn />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
