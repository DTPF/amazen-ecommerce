import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useUserContext from '../../../../../../hooks/useUserContext';
import handleSessionLogout from '../../../../../utils/sessionLogout';
import useSetCartCount from '../../../../../../hooks/useSetCartCount';
import useGetUserFromIndexedDB from '../../../../../../hooks/users/useGetUserFromIndexedDB';
import { AiOutlineUser, AiOutlineHome, AiOutlineStar } from 'react-icons/ai';
import { MdExitToApp } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { BiCart } from 'react-icons/bi';
import './FooterMainMobile.scss';


export default function FooterMainMobile() {
  const { userContext } = useUserContext();
  const userIdb = useGetUserFromIndexedDB(userContext?.id);
  const cartCount = useSetCartCount();
  
  return (
    <div className='footer-main-mobile'>
      <NavLink to={'/'}><AiOutlineHome /></NavLink>
      <NavLink to={'/comming-soon'}><AiOutlineStar /></NavLink>
      {userContext && (
        <div className='footer-main-mobile__cart'>
          <span>{cartCount}</span>
          <NavLink to={'/comming-soon'}>
            <BiCart />
          </NavLink>
        </div>
      )}
      {userContext ? (
        <Link>
          <MdExitToApp onClick={() => handleSessionLogout()} />
        </Link>
      ) : (
        <NavLink to={'/auth'}>
          <AiOutlineUser />
        </NavLink>
      )}
      {userIdb.role === 'admin' && (
        <NavLink to={'/admin'}>
          <RiAdminLine />
        </NavLink>
      )}
    </div>
  )
}
