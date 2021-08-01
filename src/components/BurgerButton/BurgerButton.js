import './BurgerButton.css';
import { useState } from 'react';

function BurgerButton() {
  const [isClicked, setisClicked] = useState(false);

  const clickHandler = () => {
    setisClicked(!isClicked);
  };
  return (
    <div
      className={
        isClicked ? 'burger-button burger-button_clicked' : 'burger-button'
      }
      onClick={clickHandler}
    ></div>
  );
}

export default BurgerButton;
