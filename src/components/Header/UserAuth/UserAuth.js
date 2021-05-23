import { Link } from 'react-router-dom';
import './UserAuth.css';

function UserAuth() {
  return (
    <div className='header__user-auth'>
      <Link to='/signup' className='button'>
        Регистрация
      </Link>
      <Link to='/signin' className='button button_type_signin'>
        Войти
      </Link>
    </div>
  );
}
export default UserAuth;
