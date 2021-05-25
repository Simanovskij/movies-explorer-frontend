import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu({ isOpen }) {
  return (
    <div className="burger-menu">
      <div
        className={
          isOpen ? 'burger-menu__wrapper burger-menu__wrapper_open' : 'burger-menu__wrapper'
        }
      >
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <NavLink to="/">Главная</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
