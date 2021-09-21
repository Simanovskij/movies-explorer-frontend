import './SubmitButton.css';

export default function SubmitButton({ isValid, isMargin, submitText }) {
  function submitClass() {
    if (isMargin && isValid) {
      return 'form__submit-btn form__submit-btn_margin';
    }
    if (isMargin && !isValid) {
      return 'form__submit-btn form__submit-btn_disabled form__submit-btn_margin';
    }
    if (!isMargin && !isValid) {
      return 'form__submit-btn form__submit-btn_disabled';
    }
    return 'form__submit-btn';
  }

  return (
    <button type='submit' className={submitClass()} disabled={!isValid}>{submitText}</button>
  );
}
