import './Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../Input/Input';
import UseForm from '../../utils/UseForm';
import Preloader from '../Preloader/Preloader';

function Register({ onRegister, isLoading }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = UseForm();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
    resetForm();
  }

  return (
    <section className='enter-page'>
      {isLoading
        ? <Preloader />
        : <>
          <div className='enter-page__logo'>
            <Logo />
          </div>
          <Form
            name='register'
            title='Добро пожаловать!'
            submitText='Зарегистрироваться'
            inviteText='Уже зарегистрированы?'
            linkText='Войти'
            forwardLink='/signin'
            onSubmit={handleSubmit}
            isValid={isValid}
          >
            <Input
              type='text'
              name='name'
              title='Имя'
              placeholder='Введите имя'
              minLength='2'
              maxLength='20'
              onChange={handleChange}
              value={values.name}
              error={errors.name}
            />
            <Input
              // type='email'
              name='email'
              title='E-mail'
              placeholder='Введите почту'
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'
            />
            <Input
              type='password'
              name='password'
              title='Пароль'
              placeholder='Введите пароль'
              minLength='8'
              maxlength='20'
              onChange={handleChange}
              value={values.password}
              error={errors.password}
            />
          </Form>
        </>
      }
    </section>
  );
}

export default Register;
