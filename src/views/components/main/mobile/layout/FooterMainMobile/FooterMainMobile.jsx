import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useAuthContext from '../../../../../../hooks/useAuthContext';
import useCartContext from '../../../../../../hooks/useCartContext';
import { AiOutlineUser, AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { MdExitToApp } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { BiCart } from 'react-icons/bi';
import './FooterMainMobile.scss';

export default function FooterMainMobile() {
  const { user } = useAuthContext();
  const { userData } = user;
  const { cart } = useCartContext();
  
  return (
    <div className='footer-main-mobile'>
      <NavLink to={'/'}><AiOutlineHome /></NavLink>
      <NavLink to={'/comming-soon'}><AiOutlineStar /></NavLink>
      {userData && (
        <div className='footer-main-mobile__cart'>
          <span>{cart?.length}</span>
          <NavLink to={'/comming-soon'}>
            <BiCart />
          </NavLink>
        </div>
      )}
      {userData ? (
        <Link>
          <MdExitToApp onClick={() => console.log('logout')} />
        </Link>
      ) : (
        <NavLink to={'/auth'}>
          <AiOutlineUser />
        </NavLink>
      )}
      {userData?.role === 'admin' && (
        <NavLink to={'/admin'}>
          <RiAdminLine />
        </NavLink>
      )}
    </div>
  )
}
