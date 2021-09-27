import './Header.css';
import { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({ isLoggedIn, pathname }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [width, setWidth] = useState(document.documentElement.clientWidth);

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

  const isMain = pathname === '/';

  return (
    <header className={isMain ? 'header header_type_main' : 'header'}>
      <div className='header__logo'>
        <Logo />
      </div>
      {isMobile && isLoggedIn
        ? <>
          <BurgerButton
            onClick={openBurgerHandler}
            isOpen={isBurgerMenuOpen}
            isMain={isMain}
          />{' '}
          <BurgerMenu isOpen={isBurgerMenuOpen} />{' '}
        </>
        : <Navigation isMain={isMain} isLoggedIn={isLoggedIn} />}
    </header>
  );
}

export default Header;
