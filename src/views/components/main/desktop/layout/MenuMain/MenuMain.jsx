import React from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import './MenuMain.scss';

export default function MenuMain(props) {
  return (
    <div className='menu-main'>
      <Link className='menu-main__all' to={'/comming-soon'}>
        <span className='menu-main__all--icon'>
          <BiMenu />
        </span>
        Todo
      </Link>
      <Link to={'/bestsellers'}>Los más vendidos</Link>
      <Link to={'/stores'}>Amazon Basics</Link>
      <Link to={'/help'}>Atención al Cliente</Link>
      <Link to={'/comming-soon'}>Últimas Novedades</Link>
      <Link to={'/comming-soon'}>Música</Link>
      <Link to={'/comming-soonnnnnnnnnnn'}>Ofertas</Link>
      <Link className='menu-main__kindle' to={'/comming-soon'}>eBooks Kindle</Link>
      <Link className='menu-main__computing' to={'/comming-soon'}>Informática</Link>
      <Link className='menu-main__prime' to={'/comming-soon'}>Prime</Link>
      <Link className='menu-main__audible' to={'/comming-soon'}>Audible</Link>
      <Link className='menu-main__books' to={'/comming-soon'}>Libros</Link>
      <Link className='menu-main__home' to={'/comming-soon'}>Hogar y Cocina</Link>
      <Link className='menu-main__gifts' to={'/comming-soon'}>Cheques regalo</Link>
      <Link className='menu-main__electronics' to={'/comming-soon'}>Electrónica y Fotografía</Link>
    </div>
  );
}