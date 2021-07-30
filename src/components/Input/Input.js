import './Input.css';

function Input(props) {
  return (
    <label className='input'>
      {props.title}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className='input__field'
      />
      <span className='input__error'>{props.error}</span>
    </label>
  );
}

export default Input;
