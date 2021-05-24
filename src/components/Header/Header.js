import './Header.css';
import { Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import ProfileBtn from '../ProfileBtn/ProfileBtn';

function Header({ isLoggedIn }) {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 768;

  const burgerHandler = (toggled) => {
    if (toggled) {
    } else {
      console.log(3);
    }
  };

  return (
    <div className={isLoggedIn ? 'header header_type_logged' : 'header'}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Лого" />
      </Link>
      <Switch>
        <Route exact path="/">
          <div>
            <Link to="/signup" className="header__btn">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn_type_signin">
              Войти
            </Link>
          </div>
        </Route>
        <Route path={['/movies', '/saved-movies', '/profile']}>
          <Navigation />
          {isMobile ? <Hamburger onToggle={burgerHandler} /> : <ProfileBtn />}
        </Route>
      </Switch>
    </div>
  );
}

export default Header;
