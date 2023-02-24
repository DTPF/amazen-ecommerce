import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm/RegisterForm';
import amazenLogo from '../../../../assets/images/amazen-logo-white.png';
import validationWarningIcon from '../../../../assets/images/validation-warning-icon.png';
import './Register.scss';

export default function Register() {
  const [showValidationMessage, setShowValidationMessage] = useState(false);

  return (
    <div className={`register ${showValidationMessage ? 'window-height' : ''}`}>
      <img className='register__image' src={amazenLogo} alt='Amazen logo' />
      {showValidationMessage && <ValidationMessage />}
      <FormContainer setShowValidationMessage={setShowValidationMessage} />
    </div>
  );
}

function FormContainer({ setShowValidationMessage }) {
  return (
    <div className='register__form-container'>
      <p className='register__form-container--title'>Crear cuenta</p>
      <RegisterForm setShowValidationMessage={setShowValidationMessage} />
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
        <Link to={'/auth'}>Crear una cuenta de empresa gratuita</Link>
      </div>
    </div>
  )
}

function ValidationMessage() {
  return (
    <div className='register__validation-message'>
      <img className='register__validation-message--image' src={validationWarningIcon} alt='Warning icon' />
      <div className='register__validation-message--message-div'>
        <p className='register__validation-message--message-div--title'>
          Ha surgido un problema
        </p>
        <p className='register__validation-message--message-div--content'>
          No encontramos ninguna cuenta con esa dirección de correo electrónico
        </p>
      </div>
    </div>
  )
}