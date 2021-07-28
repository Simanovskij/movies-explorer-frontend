import './Form.css';
import { Link } from 'react-router-dom';

function Form(props) {
  return (
    <form className="form" name={props.name}>
      <h2 className="form__title">{props.title}</h2>
      {props.children}
      <button type="submit" className="form__submit-btn">
        {props.submitText}
      </button>
      <p className="form__invite">
        {props.inviteText}
        <Link className="form__link" to="/signin">
          {props.linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;
