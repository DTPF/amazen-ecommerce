import React from 'react';
import { Link } from 'react-router-dom';
import myAccountImage from '../../../../../../../assets/images/my-account.png';
import './MyAccount.scss';

export default function MyAccount() {
  return (
    <div className='my-account'>
      <Link to={'/admin'}>
        <img className='my-account__image' src={myAccountImage} alt='My account' />
      </Link>
    </div>
  );
}