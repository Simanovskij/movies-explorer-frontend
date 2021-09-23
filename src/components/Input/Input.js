import './Input.css';

function Input(props) {
  function handleChange(e) {
    props.onChange(e);
  }

  return (
    <label className='input'>
      {props.title}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className='input__field'
        value={props.value || ''}
        onChange={handleChange}
        minLength={props.minLength}
        maxLength={props.maxLength}
        pattern={props.pattern}
        required
      />
      <span className='input__error'>{props.error}</span>
    </label>
  );
}

export default Input;
