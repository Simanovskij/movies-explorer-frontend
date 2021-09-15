import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [request, setRequest] = useState('');
  const [error, setError] = useState(null);
  const [isShort, setIsShort] = useState(false);

  function handleChange(e) {
    setRequest(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!request) {
      setError('Нужно ввести ключевое слово');
    } else {
      props.onSubmit(request, isShort);
      setError('');
    }
  }

  function handleShortCheckbox() {
    setIsShort(!isShort);
    props.onSubmit(request, isShort);
  }

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <div className='searchform__wrapper'>
        <input type='text' className='searchform__input' placeholder={error || 'Фильм'}
               onChange={handleChange}
               value={request} />
        <button type='submit' className='searchform__submit' />
      </div>
      <FilterCheckbox onChange={handleShortCheckbox} />
    </form>
  );
}

export default SearchForm;
