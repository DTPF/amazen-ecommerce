import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../../../../../../hooks/useCart';
import shoppingCartImage from '../../../../../../../assets/images/chart.png';
import './ShoppingCart.scss';

export default function ShoppingCart() {
  const { cart } = useCartContext();

  return (
    <div className='shopping-cart'>
      <Link to={'/cart'}>
        <span className={`${(cart?.length >= 10) ? 'more-than-ten-items' : ''}`}>{cart ? cart.length : 0}</span>
        <img src={shoppingCartImage} alt={'Shopping Cart'} />
      </Link>
    </div>
  );
}