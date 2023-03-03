import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import amazenLogo from '../../../../assets/images/amazen-logo-white.png';
import { RxTriangleRight } from 'react-icons/rx';
import './Login.scss';

export default function Login() {
  return (
    <div className='login'>
      <img className='login__image' src={amazenLogo} alt='Amazen logo' />
      <FormContainer />
      <div className='login__register'>
        <p>¿Eres nuevo en Amazén?</p>
        <Link to={'/auth/register'}>
          <button>Crea tu cuenta de Amazén</button>
        </Link>
      </div>
    </div>
  );
}

function FormContainer() {
  return (
    <div className='login__form-container'>
      <p className='login__form-container--title'>Iniciar sesión</p>
      <LoginForm />
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