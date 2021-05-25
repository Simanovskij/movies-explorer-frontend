import './Header.css';
import { Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ isLoggedIn }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

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
      setIsBurgerOpen(true);
    } else {
      setIsBurgerOpen(false);
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
          {/* {isMobile ? <Hamburger onToggle={burgerHandler} /> : <ProfileBtn />}
          <BurgerMenu isOpen={isBurgerOpen} /> */}
          <ProfileBtn />
        </Route>
      </Switch>
    </div>
  );
}

export default Header;
