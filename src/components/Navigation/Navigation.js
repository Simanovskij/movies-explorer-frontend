import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import ProfileBtn from '../ProfileBtn/ProfileBtn';

function Navigation({ isMain, isLoggedIn }) {
  const { pathname } = useLocation();

  return (
    <nav className='navigation'>
      {isMain && !isLoggedIn && <>
        <ul>
          <li><Link to='/signup' className='header__btn'>
            Регистрация
          </Link></li>
          <li><Link to='/signin' className='header__btn header__btn_type_signin'>
            Войти
          </Link></li>
        </ul>
      </>}
      {isLoggedIn
      && <>
        <ul className='navigation__links'>
          <li><NavLink
            to='/movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Фильмы
          </NavLink></li>
          <li><NavLink
            to='/saved-movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Сохраненные фильмы
          </NavLink></li>
        </ul>
        <ProfileBtn />
      </>
      }
    </nav>
  );
}

export default Navigation;
