import '../Register/Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../Input/Input';
import UseForm from '../../utils/UseForm';
import Preloader from '../Preloader/Preloader';

function Login({ onLogin, isLoading }) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = UseForm();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
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
            name='login'
            title='Рады видеть!'
            submitText='Войти'
            inviteText='Ещё не зарегистрированы?'
            linkText='Регистрация'
            forwardLink='/signup'
            isMargin={true}
            isValid={isValid}
            onSubmit={handleSubmit}
          >
            <Input
              type='email'
              name='email'
              title='E-mail'
              placeholder='Введите почту'
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              pattern='^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,6}$'
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

export default Login;
