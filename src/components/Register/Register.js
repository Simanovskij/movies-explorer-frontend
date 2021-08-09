import './Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../Input/Input';
import UseForm from '../../utils/UseForm';

function Register() {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = UseForm();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    resetForm();
  }

  return (
    <section className='enter-page'>
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
      >
        <Input
          type='text'
          name='name'
          title='Имя'
          placeholder='Введите имя'
          minLength='2'
          maxLength='20'
          required
          onChange={handleChange}
          value={values.name}
        />
        <Input
          type='email'
          name='email'
          title='E-mail'
          placeholder='Введите почту'
          required
          onChange={handleChange}
          value={values.email}
        />
        <Input
          type='password'
          name='password'
          title='Пароль'
          error='Что-то пошло не так...'
          placeholder='Введите пароль'
          minLength='8'
          maxlength='20'
          required
          onChange={handleChange}
          value={values.password}
        />
      </Form>
    </section>
  );
}

export default Register;
