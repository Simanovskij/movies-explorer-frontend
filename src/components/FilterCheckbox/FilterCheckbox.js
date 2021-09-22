import './FilterCheckbox.css';

function FilterCheckbox(props) {
  function handleCheckBox(e) {
    if (e.target.checked) {
      props.onCheck(true);
      localStorage.setItem('shortCheckBox', 'true');
    } else {
      props.onCheck(false);
      localStorage.setItem('shortCheckBox', 'false');
    }
    const isAlreadySearched = localStorage.getItem('filteredMovies');
    if (isAlreadySearched) {
      props.onSearch();
    }
  }

  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__title'>Короткометражки</p>
      <label className='filter-checkbox__label' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          className='filter-checkbox__input'
          onChange={handleCheckBox}
          checked={props.checked}
        />
        <span className='filter-checkbox__slider'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
