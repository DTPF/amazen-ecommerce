import React, { useEffect, useContext, useState } from 'react';
import { CartContext } from '../../../../../../../providers/CartProvider';
import shoppingCartImage from '../../../../../../../assets/images/chart.png';
import './ShoppingCart.scss';

export default function ShoppingCart() {
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (cart) {
      setCartCount(cart.length)
    }
  }, [cart]);

  return (
    <div className='shopping-cart'>
      <span className={`${(cart?.length >= 10) ? 'more-than-ten-items' : ''}`}>{cartCount}</span>
      <img src={shoppingCartImage} alt={'Shopping Cart'} />
    </div>
  );
}