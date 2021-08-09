import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='searchform'>
      <div className='searchform__wrapper'>
        <input type='text' className='searchform__input' placeholder='Фильм' required />
        <button type='submit' className='searchform__submit' />
      </div>
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
