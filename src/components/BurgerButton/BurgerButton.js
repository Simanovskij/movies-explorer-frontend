import './BurgerButton.css';

function BurgerButton({ onClick, isOpen, isMain }) {
  function burgerButtonClass() {
    if ((!isMain && isOpen) || (isMain && isOpen)) {
      return 'burger-button burger-button_clicked';
    }
    if (!isMain && !isOpen) {
      return 'burger-button';
    }
    return 'burger-button burger-button_type_main';
  }

  const clickHandler = () => {
    onClick();
  };

  return (
    <div
      onClick={clickHandler}
      className={burgerButtonClass()}
    ></div>
  );
}

export default BurgerButton;
