import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button className='not-found__button' onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
