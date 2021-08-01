import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ isOpen }) {
  return (
    <div className={isOpen ? 'burger-menu burger-menu_open' : 'burger-menu'}>
      <nav className='burger-menu__list'>
        <NavLink
          className='burger-menu__item'
          activeClassName='burger-menu__item_active'
          to='/'
        >
          Главная
        </NavLink>
        <NavLink
          className='burger-menu__item'
          activeClassName='burger-menu__item_active'
          to='/'
        >
          Фильмы
        </NavLink>
        <NavLink
          className='burger-menu__item'
          activeClassName='burger-menu__item_active'
          to='/'
        >
          Сохраненные фильмы
        </NavLink>
      </nav>
    </div>
  );
}

export default BurgerMenu;
