import { Link } from 'react-router-dom';
import './ProfileBtn.css';

function ProfileBtn({ isMain }) {
  return (
    <div className='profile-btn'>
      <Link
        to='/profile'
        className={isMain ? 'profile-btn__link profile-btn__link_type_main' : 'profile-btn__link'}>
        Аккаунт
      </Link>
      <div className='profile-btn__image' />
    </div>
  );
}

export default ProfileBtn;
