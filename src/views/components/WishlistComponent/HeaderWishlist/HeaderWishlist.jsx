import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWishlistContext } from '../../../../providers/WishlistProvider';
import './HeaderWishlist.scss';

export default function HeaderWishlist() {
   const { wishlist } = useWishlistContext();

  return (
    <div className='header-wishlist'>
      <div className='header-wishlist__title'>
        <h1>Wishlist</h1>
      </div>

      <div className='header-wishlist__nav'>
        <NavLink to={'/'}>
          <button className='header-wishlist__nav--button'>
            Todo
            <div className='header-wishlist__nav--button__items-count'>{wishlist.length}</div>
          </button>
        </NavLink>
        <NavLink to={'/active'}>
          <button className='header-wishlist__nav--button'>
            Activo
            <div className='header-wishlist__nav--button__items-count'>{wishlist.length}</div>
          </button>
        </NavLink>
        <NavLink to={'/completed'}>
          <button className='header-wishlist__nav--button'>
            Completado
            <div className='header-wishlist__nav--button__items-count'>{wishlist.length}</div>
          </button>
        </NavLink>
      </div>
    </div>
  )
}