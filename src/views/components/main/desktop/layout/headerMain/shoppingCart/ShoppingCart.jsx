import React from 'react';
import shoppingCartImage from '../../../../../../../assets/images/chart.png';
import './ShoppingCart.scss';

export default function ShoppingCart(props) {
  return (
    <div className='shopping-cart'>
      <span>0</span>
      <img src={shoppingCartImage} alt={'Shopping Cart'} />
    </div>
  );
}