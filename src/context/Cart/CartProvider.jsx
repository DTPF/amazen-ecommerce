import React, { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import { getCartItemsByUserId } from '../../api/cart';
import useAuth from '../../hooks/useAuth';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  const { userData } = user;

  useEffect(() => {
    let isMounted = true;
    if (userData) {
      getCartItemsByUserId(userData.id)
        .then(res => {
          isMounted && setCart(res.cartItems)
        });
    }
    return () => { isMounted = false }
  }, [userData]);

  return (
    <CartContext.Provider value={{ cart, setCart }} >
      {children}
    </CartContext.Provider>
  )
}