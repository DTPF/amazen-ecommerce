import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCheckIfUserIsLogged, useGetUser } from '../../../../../../../providers/authProvider';
import Popover from '../../../../UI/popover';
import myAccountImage from '../../../../../../../assets/images/my-account.png';
import './MyAccount.scss';

export default function MyAccount() {
  const [isVisible, setIsVisible] = useState(false);
  const userExist = useCheckIfUserIsLogged();
  const getUser = useGetUser();

  const handleLogout = () => {
    localStorage.removeItem('userLogged');
    window.location.reload();
  }

  return (
    <div className='my-account'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <img
        className='my-account__image'
        src={myAccountImage} alt='My account'
      />
      {isVisible && (
        <Popover
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          className='my-account__popover'
        >
          <div className='my-account__popover--lists'>
            <div className='my-account__popover--lists__my-lists'>
              <ul>
                <p>Mis listas</p>
                <li>Lista de la compra con Alexa</li>
                <li>Guardar y comparar</li>
                <li>Lista de Compras</li>
                <li>Crear una lista de deseos</li>
                <li>Lista de deseos universal</li>
                <li>Lista de bodas</li>
                <li>Lista de Nacimiento</li>
                <li>Descubre tu estilo</li>
                <li>Explorar Showroom</li>
              </ul>
            </div>
            <div className='my-account__popover--lists__my-account'>
              <ul>
                <p>Mi cuenta</p>
                <li>Mi cuenta</li>
                <li>Mis pedidos</li>
                <li>Mi Lista de desos</li>
                <li>Mis recomendaciones</li>
                <li>Mis mascotas</li>
                <li>Pertenencia a programas y suscripciones</li>
                <li>Mi suscripción a Amazén Prime</li>
                <li>Mis suscripciones a productos</li>
                <li>Crea una cuenta Business gratis</li>
                <li>Gestionar contenido y dispositivos</li>
                <li>Mi Kindle Unlimited</li>
                <li>Mi Biblioteca musical</li>
                <li>Mi Prime Video</li>
                <li>Mi Amazén Drive</li>
                <li>Mis Apps y dispositivos</li>
                <li>Cambiar de cuenta</li>
                {userExist && <li className='my-account__popover--lists__my-account--logout' onClick={() => handleLogout()}>Cerrar sesión</li>}
              </ul>
            </div>
          </div>
          {!userExist && <LoginButton />}
          <LinkToAdmin getUser={getUser} />
        </Popover>
      )}
    </div>
  );
}

function LoginButton() {
  return (
    <div className='my-account__popover--login-button'>
      <Link to={'./auth'}>
        <button>
          Identificarse
        </button>
      </Link>
    </div>
  )
}

function LinkToAdmin({ getUser }) {
  return (
    <div className='my-account__popover--admin-button'>
      {getUser.role === 'admin' && (
        <Link to={'./admin'}>
          <button>Admin</button>
        </Link>
      )}
    </div>
  )
}