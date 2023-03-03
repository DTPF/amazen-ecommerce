import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ValidationMessage from '../layout/ValidationMessage';
import RegisterForm from './RegisterForm/RegisterForm';
import amazenLogo from '../../../../assets/images/amazen-logo-white.png';
import './Register.scss';

export default function Register() {
  const [message, setMessage] = useState('');
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  return (
    <div className={`register ${showValidationMessage ? 'window-height' : ''}`}>
      <img className='register__image' src={amazenLogo} alt='Amazen logo' />
      {showValidationMessage && <ValidationMessage message={message} />}
      <FormContainer setMessage={setMessage} showValidationMessage={showValidationMessage} setShowValidationMessage={setShowValidationMessage} />
    </div>
  );
}

function FormContainer({ setMessage, showValidationMessage, setShowValidationMessage }) {
  return (
    <div className='register__form-container'>
      <p className='register__form-container--title'>Crear cuenta</p>
      <RegisterForm setMessage={setMessage} showValidationMessage={showValidationMessage} setShowValidationMessage={setShowValidationMessage} />
      <Conditions />
      <Help />
    </div>
  )
}

function Conditions() {
  return (
    <p className='register__form-container--conditions'>
      Al identificarte aceptas nuestras <span>Condiciones de uso y
        venta.</span> Consulta nuestro <span>Aviso de privacidad</span> y nuestras
      <span> Aviso de Cookies</span> y <span>Aviso sobre publicidad basada en los
        intereses del usuario.</span>
    </p>
  )
}

function Help() {
  return (
    <div className='register__form-container--help'>
      <div>
        ¿Ya tiene una cuenta?
        <Link to={'/auth'}>Iniciar sesión</Link>
      </div>
      <div>
        ¿Compras para tu empresa?
        <Link to={'/comming-soon'}>
          Crear una cuenta de empresa gratuita
        </Link>
      </div>
    </div>
  )
}