import React from 'react';
import { BsSearch, BsCamera } from 'react-icons/bs';
import './headerMainMobile.scss';

export default function HeaderMainMobile() {
  return (
    <div className='header-main-mobile'>
      <div className='header-main-mobile__input-div'>
        <BsSearch />
        <input type='search' placeholder='Buscar en Amazén.es' />
        <div className='header-main-mobile__input-div--camera-icon'>
          <BsCamera />
        </div>
      </div>
    </div>
  )
}