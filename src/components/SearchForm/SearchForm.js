import { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  const [request, setRequest] = useState(localStorage.getItem('request') || '');
  const [isShort, setIsShort] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setRequest(e.target.value);
    localStorage.setItem('request', e.target.value);
  }

  function handleSubmit(e) {
    let checkedShort;
    if (e) {
      e.preventDefault();
      checkedShort = isShort;
    } else {
      checkedShort = !isShort;
    }
    if (!request) {
      setError('Нужно ввести ключевое слово');
      return;
    }
    props.onSubmit(request, checkedShort);
    setError('');
  }

  useEffect(() => {
    if (localStorage.getItem('shortCheckBox') === 'true') {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }, []);

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <div className='searchform__wrapper'>
        <input type='text' className='searchform__input' placeholder={error || 'Фильм'}
               onChange={handleChange}
               value={request} />
        <button type='submit' className='searchform__submit' />
      </div>
      <FilterCheckbox onSearch={handleSubmit} checked={isShort} onCheck={setIsShort} />
    </form>
  );
}

export default SearchForm;
