import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarMobile.scss';

export default function NavBarMobile() {
  return (
    <div className='nav-bar-mobile'>
      <Link to={'/products/s?q=travel'}>Viajes</Link>
      <Link to={'/products/s?q=technology'}>Tecnología</Link>
      <Link to={'/products/s?q=book'}>Libros</Link>
      <Link to={'/comming-soon'}>Música</Link>
    </div>
  )
}