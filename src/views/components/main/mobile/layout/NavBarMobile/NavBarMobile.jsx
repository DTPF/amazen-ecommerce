import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarMobile.scss';

export default function NavBarMobile() {
  return (
    <div className='nav-bar-mobile'>
      <Link to={'/comming-soon'}>Listas de Alexa</Link>
      <Link to={'/comming-soon'}>Prime</Link>
      <Link to={'/comming-soon'}>Video</Link>
      <Link to={'/comming-soon'}>Música</Link>
    </div>
  )
}