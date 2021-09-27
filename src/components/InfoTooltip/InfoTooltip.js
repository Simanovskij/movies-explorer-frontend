import { useEffect } from 'react';
import './Infotooltip.css';

function InfoTooltip({ isOpen, setIsOpen, infoMessage, infoImage }) {
  const closePopup = () => {
    setIsOpen(false);
  };
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
      closePopup();
    }
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });

  return (
    <div className={isOpen ? 'popup popup_opened' : 'popup'} onClick={handleOverlayClose}>
      <div className="popup__container" onClick={closePopup}>
        <img
          className="popup__image"
          src={infoImage}
          alt="Результат"
        />
        <h2 className="popup__caption">
          {infoMessage}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
