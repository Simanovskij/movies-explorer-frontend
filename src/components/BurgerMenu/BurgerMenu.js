import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ isOpen }) {
  return (
    <div className={isOpen ? 'burger-menu burger-menu_open' : 'burger-menu'}>
      <ul className="burger-menu__list">
        <li className="burger-menu_item">
          <NavLink to="/">Главная</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenu;
