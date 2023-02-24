import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useUserContext from '../../../../../../../hooks/useUserContext';
import deleteUserIDB from '../../../../../../../indexedDB/api/auth/deleteUserIDB';
import Popover from '../../../../UI/Popover';
import myAccountImageLogged from '../../../../../../../assets/images/my-account-logged.png';
import myAccountImageNotLogged from '../../../../../../../assets/images/my-account-not-logged.png';
import './MyAccount.scss';

export default function MyAccount() {
  const [isVisible, setIsVisible] = useState(false);
  const { userContext } = useUserContext();

  const handleLogout = async () => {
    await deleteUserIDB().then(() => {
      localStorage.clear();
      window.location.reload();
    });
  }
  return (
    <div className='my-account'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <img
        className='my-account__image'
        src={userContext ? myAccountImageLogged : myAccountImageNotLogged} alt='My account'
      />
      <p className='my-account__name'>{userContext?.name}</p>
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
                {userContext && <li className='my-account__popover--lists__my-account--logout' onClick={() => handleLogout()}>Cerrar sesión</li>}
              </ul>
            </div>
          </div>
          {!userContext && <LoginButton />}
          <LinkToAdmin userContext={userContext} />
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

function LinkToAdmin({ userContext }) {
  return (
    <div className='my-account__popover--admin-button'>
      {userContext?.role === 'admin' && (
        <Link to={'./admin'}>
          <button>Admin</button>
        </Link>
      )}
    </div>
  )
}