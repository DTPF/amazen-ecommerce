import React from 'react';
import { NavLink } from 'react-router-dom';
import './navAdmin.scss';

export default function NavAdmin() {
  return (
    <div className='nav-admin'>
      <NavLink to={'/admin/home'}>Estadísticas</NavLink>
      <NavLink to={'/admin/products'}>Productos</NavLink>
      <NavLink to={'/admin/users'}>Usuarios</NavLink>
    </div>
  )
}