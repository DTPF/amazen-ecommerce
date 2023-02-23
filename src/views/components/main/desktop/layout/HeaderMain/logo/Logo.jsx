import React from 'react';
import { Link } from "react-router-dom";
import logoImage from '../../../../../../../assets/images/amazon_logo.png';
import './Logo.scss';

export default function Logo() {
  return (
    <div className='logo'>
      <Link to={'/'}>
        <img className='logo__image' src={logoImage} alt='Logo' />
      </Link>
    </div>
  );
}