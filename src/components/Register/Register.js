import './Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../Input/Input';

function Register() {
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
      >
        <Input
          type='text'
          name='name'
          title='Имя'
          placeholder='Иванов Иван'
          minLength='2'
          maxLength='20'
          required />
        <Input
          type='email'
          name='email'
          title='E-mail'
          placeholder='ivanov.i@yandex.ru'
          required />
        <Input
          type='password'
          name='password'
          title='Пароль'
          error='Что-то пошло не так...'
          placeholder='Введите пароль'
          minLength='8'
          maxlength='20'
          required />
      </Form>
    </section>
  );
}

export default Register;
