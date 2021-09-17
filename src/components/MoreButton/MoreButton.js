import './MoreButton.css';

function MoreButton(props) {
  return (
    <>
      <button onClick={props.onClick} type='button' className='more-btn'>
        Ещё
      </button>
    </>
  );
}

export default MoreButton;
