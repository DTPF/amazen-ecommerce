import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useAuthContext from '../../../../../../hooks/useAuthContext';
import useCartContext from '../../../../../../hooks/useCartContext';
import { logout } from '../../../../../../api/auth';
import toaster from '../../../../UI/toast/toast';
import { AiOutlineUser, AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { MdExitToApp } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { BiCart } from 'react-icons/bi';
import './footerMainMobile.scss';

export default function FooterMainMobile() {
  const { user, setUser } = useAuthContext();
  const { userData } = user;
  const { cart, setCart } = useCartContext();

  const handleLogout = () => {
    logout(setUser, setCart);
    toaster('¡Hasta pronto!');
  }
  
  return (
    <div className='footer-main-mobile'>
      <NavLink to={'/'}><AiOutlineHome /></NavLink>
      <NavLink to={'/comming-soon'}><AiOutlineStar /></NavLink>
      {userData && (
        <div className='footer-main-mobile__cart'>
          <span>{cart?.length}</span>
          <NavLink to={'/cart'}>
            <BiCart />
          </NavLink>
        </div>
      )}
      {userData ? (
        <Link>
          <MdExitToApp onClick={() => handleLogout()} />
        </Link>
      ) : (
        <NavLink to={'/auth/login'}>
          <AiOutlineUser />
        </NavLink>
      )}
      {userData?.role === 'admin' && (
        <NavLink to={'/admin/home'}>
          <RiAdminLine />
        </NavLink>
      )}
    </div>
  )
}
