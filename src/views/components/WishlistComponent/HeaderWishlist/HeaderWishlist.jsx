import React from 'react'
import { Link } from 'react-router-dom';

export default function HeaderWishlist() {
  return (
    <div>
      <Link to={'/'}>
        <button>Todo</button>
      </Link>
      <Link to={'/active'}>
        <button>Activo</button>
      </Link>
      <Link to={'/completed'}>
        <button>Completado</button>
      </Link>
    </div>
  )
}