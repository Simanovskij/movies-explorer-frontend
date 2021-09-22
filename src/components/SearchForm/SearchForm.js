import { useRef, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  const [request, setRequest] = useState(localStorage.getItem('request') || '');
  const [error, setError] = useState(null);
  const checkBox = useRef();

  function handleChange(e) {
    setRequest(e.target.value);
    localStorage.setItem('request', e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!request) {
      setError('Нужно ввести ключевое слово');
    } else {
      props.onSubmit(request, checkBox.current.checked);
      setError('');
    }
  }

  function handleCheckBox() {
    props.onSubmit(request, checkBox.current.checked);
  }

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <div className='searchform__wrapper'>
        <input type='text' className='searchform__input' placeholder={error || 'Фильм'}
               onChange={handleChange}
               value={request} />
        <button type='submit' className='searchform__submit' />
      </div>
      <FilterCheckbox checkBox={checkBox} onChange={handleCheckBox} />
    </form>
  );
}

export default SearchForm;
