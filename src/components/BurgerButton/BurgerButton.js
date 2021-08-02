import './BurgerButton.css';
import { useState } from 'react';

function BurgerButton({ onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    onClick();
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={clickHandler}
         className={
           isClicked ? 'burger-button burger-button_clicked' : 'burger-button'
         }
    ></div>
  );
}

export default BurgerButton;
