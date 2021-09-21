import './Profile.css';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import Header from '../Header/Header';

function Profile({ onSignOut, onUpdate, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [errors, setErrors] = useState({});
  function handleInputChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (inputName === 'name') {
      setName(inputValue);
    } else {
      setEmail(inputValue);
    }
    setIsValid(e.target.closest('form').checkValidity());
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    customValidity(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate({ name, email });
  }

  function customValidity(e) {
    if ((e.target.value === currentUser.name) || (e.target.value === currentUser.email)) {
      setIsValid(false);
    }
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
            required
            value={name || ''}
            onChange={handleInputChange}
          />
          <span className='input__error input__error_name'>{errors.name}</span>
        </label>
        <label className='profile-form__label'>Почта
          <input
            className='profile-form__input'
            name='email'
            type='email'
            required
            value={email || ''}
            onChange={handleInputChange}
            pattern='(([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)'
          />
          <span className='input__error input__error_email'>{errors.email}</span>
        </label>
        <div className='profile-form__buttons'>
          <button
            type='submit'
            className={isValid ? 'profile-form__btn' : 'profile-form__btn profile-form__btn_disabled'}
            disabled={!isValid}
          >Редактировать</button>
          <button
            type='button'
            className='profile-form__btn profile-form__btn_logout'
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
