import './Profile.css';
import { useContext } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import UseForm from '../../utils/UseForm';
import Header from '../Header/Header';

function Profile({ onSignOut, onUpdate, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = UseForm();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(values);
    resetForm();
  }

  return (
    <>
    <Header isLoggedIn={isLoggedIn}/>
    <section className='profile'>
      <form className='profile-form' name='profile' onSubmit={handleSubmit}>
        <h2 className='profile-form__title'>Привет, {currentUser.name}</h2>
        <label className='profile-form__label'>Имя
          <input
            className='profile-form__input'
            name='name'
            type='text'
            minLength='2'
            maxLength='20'
            value={values.name || ''}
            onChange={handleChange}
          />
          <span className='input__error input__error_name'>{errors.name}</span>
        </label>
        <label className='profile-form__label'>Почта
          <input
            className='profile-form__input'
            name='email'
            type='email'
            value={values.email || ''}
            onChange={handleChange}
          />
          <span className='input__error input__error_email'>{errors.email}</span>
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
    </>
  );
}

export default Profile;
