import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm/RegisterForm';
import ValidationMessage from '../layout/ValidationMessage';
import amazenLogo from '../../../../assets/images/amazen-logo-white.png';
import './Register.scss';

export default function Register() {
  const [valtidationMsg, setValtidationMsg] = useState(undefined);

  return (
    <div className={`register ${valtidationMsg ? 'register-window-height' : ''}`}>
      <Link className='login__image' to={'/'}>
        <img src={amazenLogo} alt='Amazen logo' />
      </Link>
      {valtidationMsg && <ValidationMessage valtidationMsg={valtidationMsg} />}
      <FormContainer setValtidationMsg={setValtidationMsg} />
    </div>
  );
}

function FormContainer({ setValtidationMsg }) {
  return (
    <div className='register__form-container'>
      <p className='register__form-container--title'>Crear cuenta</p>
      <RegisterForm setValtidationMsg={setValtidationMsg} />
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
        <Link to={'/auth/login'}>Iniciar sesión</Link>
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