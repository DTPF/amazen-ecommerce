import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavAdmin.scss';

export default function NavAdmin() {
  return (
    <div className='nav-admin'>
      <NavLink to={'/admin/products'}>Products</NavLink>
      <NavLink to={'/admin/users'}>Users</NavLink>
    </div>
  )
}