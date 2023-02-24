import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import ValidationMessage from '../layout/ValidationMessage';
import amazenLogo from '../../../../assets/images/amazen-logo-white.png';
import { RxTriangleRight } from 'react-icons/rx';
import './Login.scss';

export default function Login() {
  const [message, setMessage] = useState('');
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  return (
    <div className={`login ${showValidationMessage ? 'window-height' : ''}`}>
      <img className='login__image' src={amazenLogo} alt='Amazen logo' />
      {showValidationMessage && <ValidationMessage message={message} />}
      <FormContainer setMessage={setMessage} setShowValidationMessage={setShowValidationMessage} />
      <div className='login__register'>
        <p>¿Eres nuevo en Amazén?</p>
        <button><Link to={'/auth/register'}>Crea tu cuenta de Amazén</Link></button>
      </div>
    </div>
  );
}

function FormContainer({ setMessage, setShowValidationMessage }) {
  return (
    <div className='login__form-container'>
      <p className='login__form-container--title'>Iniciar sesión</p>
      <LoginForm setMessage={setMessage} setShowValidationMessage={setShowValidationMessage} />
      <Conditions />
      <Help />
    </div>
  )
}

function Conditions() {
  return (
    <p className='login__form-container--conditions'>
      Al identificarte aceptas nuestras <span>Condiciones de uso y
        venta.</span> Consulta nuestro <span>Aviso de privacidad</span> y nuestras
      <span> Aviso de Cookies</span> y <span>Aviso sobre publicidad basada en los
        intereses del usuario.</span>
    </p>
  )
}

function Help() {
  return (
    <p className='login__form-container--help'>
      <RxTriangleRight />
      <span>¿Necesitas ayuda?</span>
    </p>
  )
}