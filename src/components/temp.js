import './Header.css';
import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
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
    <header className={isLoggedIn ? 'header header_type_main' : 'header'}>
      <div className='header__logo'>
        <Logo />
      </div>
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route path={['/movies', '/saved-movies', '/profile']}>
          {isMobile ? (
            <>
              <BurgerButton
                onClick={openBurgerHandler}
                isOpen={isBurgerMenuOpen}
              />{' '}
              <BurgerMenu isOpen={isBurgerMenuOpen} />{' '}
            </>
          ) : (
            <>
              {' '}
              <Navigation />
            </>
          )}
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
