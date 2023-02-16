import React from 'react';
import { Link } from 'react-router-dom';
import './MenuMain.scss';

export default function MenuMain(props) {
  return (
    <div className='menu-main'>
      <Link to={'/bestsellers'}>Los más vendidos</Link>
      <Link to={'/stores'}>Amazon Basics</Link>
      <Link to={'/help'}>Atención al Cliente</Link>
    </div>
  );
}