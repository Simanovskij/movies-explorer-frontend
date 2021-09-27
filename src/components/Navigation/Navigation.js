import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import ProfileBtn from '../ProfileBtn/ProfileBtn';

function Navigation({ isMain, isLoggedIn }) {
  const linkClassName = isMain
    ? 'navigation__link navigation__link_type_main'
    : 'navigation__link';

  return (
    <nav className='navigation'>
      {isMain && !isLoggedIn && <>
        <ul className='navigation__links'>
          <li><Link to='/signup' className='navigation__link-main'>
            Регистрация
          </Link></li>
          <li><Link to='/signin'
                    className='navigation__link-main navigation__link-main_type_signin'>
            Войти
          </Link></li>
        </ul>
      </>}
      {isLoggedIn
      && <>
        <ul className='navigation__links'>
          <li><NavLink
            to='/movies'
            className={linkClassName}
            activeClassName='navigation__link_active'
          >
            Фильмы
          </NavLink></li>
          <li><NavLink
            to='/saved-movies'
            className={linkClassName}
            activeClassName='navigation__link_active'
          >
            Сохраненные фильмы
          </NavLink></li>
        </ul>
        <ProfileBtn isMain={isMain} />
      </>
      }
    </nav>
  );
}

export default Navigation;
