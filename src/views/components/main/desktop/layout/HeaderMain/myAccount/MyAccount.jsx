import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../../../../../../hooks/useAuthContext';
import useCartContext from '../../../../../../../hooks/useCartContext';
import { logout } from '../../../../../../../api/auth';
import Popover from '../../../../../UI/Popover';
import toaster from '../../../../../UI/toast/toast';
import myAccountImageLogged from '../../../../../../../assets/images/my-account-logged.png';
import myAccountImageNotLogged from '../../../../../../../assets/images/my-account-not-logged.png';
import './myAccount.scss';

export default function MyAccount() {
  const [isVisible, setIsVisible] = useState(false);
  const { user, setUser } = useAuthContext();
  const { userData } = user;
  const { setCart } = useCartContext();

  const handleLogout = () => {
    logout(setUser, setCart);
    toaster('¡Hasta pronto!');
    setIsVisible(false);
  }

  return (
    <div className='my-account'
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className='my-account__container'>
        <img
          className='my-account__container--image'
          src={userData ? myAccountImageLogged : myAccountImageNotLogged} alt='My account'
        />
        <div className='my-account__container--name'>{userData?.name}</div>
      </div>
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
                {userData && (
                  <li className='my-account__popover--lists__my-account--logout' onClick={() => handleLogout()}>
                    Cerrar sesión
                  </li>
                )}
              </ul>
            </div>
          </div>
          {!userData && <LoginButton />}
          <LinkToAdmin userData={userData} />
        </Popover>
      )}
    </div>
  );
}

function LoginButton() {
  return (
    <div className='my-account__popover--login-button'>
      <Link to={'./auth/login'}>
        <button>
          Identificarse
        </button>
      </Link>
    </div>
  )
}

function LinkToAdmin({ userData }) {
  return (
    <div className='my-account__popover--admin-button'>
      {userData?.role === 'admin' && (
        <Link to={'./admin/home'}>
          <button>Admin</button>
        </Link>
      )}
    </div>
  )
}