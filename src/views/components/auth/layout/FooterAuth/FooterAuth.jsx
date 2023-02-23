import React from 'react';
import './FooterAuth.scss';

export default function FooterAuth(props) {
  return (
    <div className='footer-auth'>
      <ul>
        <li>Condiciones de uso</li>
        <li>Aviso de privacidad</li>
        <li>Ayuda</li>
        <li>Cookies</li>
        <li>Publicidad basada en intereses</li>
      </ul>

      <p>© 1996-2023, Amazon.com, Inc. o sus afiliados</p>
    </div>
  );
}