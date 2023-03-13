import React from 'react';
import languageImage from '../../../../../../../assets/images/lang.png';
import './language.scss';

export default function Language() {
  return (
    <div className='language'>
      <img className='language__image' src={languageImage} alt='My account' />
    </div>
  );
}