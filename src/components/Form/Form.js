import './Form.css';
import { Link } from 'react-router-dom';
import SubmitButton from '../../SubmitButton/SubmitButton';

function Form(props) {
  return (
    <form className='form' name={props.name} onSubmit={props.onSubmit}>
      <h2 className='form__title'>{props.title}</h2>
      {props.children}
      <SubmitButton isMargin={props.isMargin} isValid={props.isValid}
                    submitText={props.submitText} />
      <p className='form__invite'>
        {props.inviteText}
        <Link className='form__link' to={props.forwardLink}>
          {props.linkText}
        </Link>
      </p>
    </form>
  );
}

export default Form;
