import './Header.css';
import { Link, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import Logo from '../Logo/Logo';

function Header({ isLoggedIn }) {
  return (
    <header className={isLoggedIn ? 'header header_type_logged' : 'header'}>
      <Logo />
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
          <ProfileBtn />
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
