import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter-chekbox'>
      <p className='filter-checkbox__title'>Короткометражки</p>
      <label className='filter-chekbox__label' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' className='filter-chekbox__input' />
        <span className='filter-chekbox__slider'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
