import { Link } from 'react-router-dom';
import './ProfileBtn.css';

function ProfileBtn() {
  return (
    <div className='profile-btn'>
      <Link to='/profile' className='profile-btn__link'>
        Аккаунт
      </Link>
      <div className='profile-btn__image' />
    </div>
  );
}

export default ProfileBtn;
