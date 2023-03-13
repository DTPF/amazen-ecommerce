import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import './MenuMain.scss';

export default function MenuMain() {
  return (
    <div className='menu-main'>
      <Link className='menu-main__all' to={'/products/s'}>
        <span className='menu-main__all--icon'>
          <BiMenu />
        </span>
        Todos los productos
      </Link>
      <Link to={'/products/s?q=travel'}>Viajes</Link>
      <Link to={'/products/s?q=book'}>Libros</Link>
      <Link to={'/products/s?q=travel'}>Tecnología</Link>
      <Link to={'/help'}>Atención al Cliente</Link>
      <div className='menu-main__kindle'>eBooks Kindle</div>
      <div className='menu-main__computing'>Informática</div>
      <div className='menu-main__prime'>Prime</div>
      <div className='menu-main__audible'>Audible</div>
      <div className='menu-main__books'>Libros</div>
      <div className='menu-main__home'>Hogar y Cocina</div>
      <div className='menu-main__gifts'>Cheques regalo</div>
      <div className='menu-main__electronics'>Electrónica y Fotografía</div>
    </div>
  );
}