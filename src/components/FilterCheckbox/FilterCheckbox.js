import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className='filter-checkbox'>
      <p className='filter-checkbox__title'>Короткометражки</p>
      <label className='filter-checkbox__label' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          className='filter-checkbox__input'
          onChange={props.onChange}
        />
        <span className='filter-checkbox__slider'></span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
