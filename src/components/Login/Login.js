import '../Register/Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../Input/Input';

function Login() {
  return (
    <section className='enter-page'>
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
        submitMargin={true}
      >
        <Input type='email' name='email' title='E-mail' />
        <Input
          type='password'
          name='password'
          title='Пароль'
          error='Что-то пошло не так...'
        />
      </Form>
    </section>
  );
}

export default Login;
