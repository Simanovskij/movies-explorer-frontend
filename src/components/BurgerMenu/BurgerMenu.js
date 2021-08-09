import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';
import ProfileBtn from '../ProfileBtn/ProfileBtn';

function BurgerMenu({ isOpen }) {
  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'}>
      <div className={isOpen ? 'burger-menu burger-menu_open' : 'burger-menu'}>
        <nav className='burger-menu__list'>
          <NavLink className='burger-menu__item' to='/'>
            Главная
          </NavLink>
          <NavLink
            className='burger-menu__item'
            activeClassName='burger-menu__item_active'
            to='/movies'
          >
            Фильмы
          </NavLink>
          <NavLink
            className='burger-menu__item'
            activeClassName='burger-menu__item_active'
            to='/saved-movies'
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <ProfileBtn />
      </div>
    </div>
  );
}

export default BurgerMenu;
