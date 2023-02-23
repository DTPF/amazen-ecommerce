import React from 'react';
import logoAdmin from '../../../../../assets/images/amazen-logo-admin.png'
import './HeaderAdmin.scss';

export default function HeaderAdmin(props) {
  return (
    <div className='header-admin'>
      <img className='header-admin__logo' src={logoAdmin} alt='Admin logo' />
    </div>
  );
}