import './Profile.css';
import { useContext } from 'react';
import CurrentUserContext from '../../utils/context/CurrentUserContext';

function Profile({ onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <section className='profile'>
      <form className='profile-form' name='profile'>
        <h2 className='profile-form__title'>Привет, {currentUser.name}</h2>
        <label className='profile-form__label'>Имя
          <input className='profile-form__input' name='name' type='text' />
        </label>
        <label className='profile-form__label'>Почта
          <input className='profile-form__input' name='email' type='email' />
        </label>
        <div className='profile-form__buttons'>
          <button type='submit' className='profile-form__btn'>Редактировать</button>
          <button type='button' className='profile-form__btn profile-form__btn_logout'
                  onClick={onSignOut}>Выйти из
            аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
