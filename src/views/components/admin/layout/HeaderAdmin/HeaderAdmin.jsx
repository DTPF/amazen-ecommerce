import React from 'react';
import { Link } from 'react-router-dom';
import logoAdmin from '../../../../../assets/images/amazen-logo-admin.png';
import primeImage from '../../../../../assets/images/prime.png';
import './HeaderAdmin.scss';

export default function HeaderAdmin(props) {
  return (
    <div className='header-admin'>
      <Link to={'/admin/home'}>
        <img className='header-admin__logo' src={logoAdmin} alt='Admin logo' />
      </Link>
      <Link to={'/'}>
        <img className='header-admin__prime' src={primeImage} alt='Admin prime' />
      </Link>
    </div>
  );
}