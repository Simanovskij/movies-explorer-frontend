import './BurgerButton.css';

function BurgerButton({ onClick, isOpen }) {
  const clickHandler = () => {
    onClick();
  };

  return (
    <div onClick={clickHandler}
         className={
           isOpen ? 'burger-button burger-button_clicked' : 'burger-button'
         }
    ></div>
  );
}

export default BurgerButton;
