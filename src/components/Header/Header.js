import './Header.css';
import { Route, Switch } from 'react-router-dom';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import UserAuth from './UserAuth/UserAuth';

function Header() {
  return (
    <Switch>
      <Route exact path='/'>
        <div className='header'>
            <HeaderLogo />
            <UserAuth />
        </div>
      </Route>
    </Switch>
  );
}

export default Header;
