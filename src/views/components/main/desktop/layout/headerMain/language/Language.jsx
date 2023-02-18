import React from 'react';
import languageImage from '../../../../../../../assets/images/lang.png';
import './Language.scss';

export default function Language() {
  return (
    <div className='language'>
      <img className='language__image' src={languageImage} alt='My account' />
    </div>
  );
}