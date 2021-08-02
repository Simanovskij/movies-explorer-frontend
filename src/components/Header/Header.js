import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({ isLoggedIn }) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const updateWidth = () => {
    setWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const isMobile = width <= 960;

  const openBurgerHandler = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header className={isLoggedIn ? 'header header_type_logged' : 'header'}>
      <div className='header__logo'>
        <Logo />
      </div>
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
          {isMobile ? (
            <>
              <BurgerButton onClick={openBurgerHandler} /> <BurgerMenu
              isOpen={isBurgerMenuOpen} />{' '}
            </>
          ) : (
            <>
              {' '}
              <Navigation /> <ProfileBtn />
            </>
          )}
        </Route>
      </Switch>
      {console.log(isBurgerMenuOpen)}
    </header>
  );
}

export default Header;
