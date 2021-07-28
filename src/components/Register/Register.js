import './Register.css';
import Logo from '../Logo/Logo';
import Form from '../Form/Form';
import Input from '../AboutMe/Input/Input';

function Register() {
  return (
    <section className="enter-page">
      <div className="enter-page__logo">
        <Logo />
      </div>
      <Form
        name="register"
        title="Добро пожаловать!"
        submitText="Зарегистрироваться"
        inviteText="Уже зарегистрированы?"
        linkText="Войти"
      >
        <Input type="text" id="name" title="Имя" />
        <Input type="email" id="email" title="E-mail" />
        <Input
          type="password"
          id="password"
          title="Пароль"
          error="Что-то пошло не так..."
        />
      </Form>
    </section>
  );
}

export default Register;
