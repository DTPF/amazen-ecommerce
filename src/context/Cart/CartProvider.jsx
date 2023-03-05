import React, { useEffect, useState } from 'react';
import { CartContext } from './CartContext';
import useAuth from '../../hooks/useAuth';
import { useGetAccessTokenApi } from '../../api/auth';
import { getCartItemsByUserId } from '../../api/cart';
import toaster from '../../views/components/UI/toast/toast';

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { user } = useAuth();
  const { userData } = user;
  const token = useGetAccessTokenApi();

  useEffect(() => {
    let isMounted = true;
    if (userData) {
      getCartItemsByUserId(token, userData.id)
        .then(res => {
          isMounted && setCart(res.cartItems)
        })
        .catch(err => {
          toaster('Error al obtener el carrito', 'error');
        });
    }
    return () => { isMounted = false }
  }, [userData, token]);

  return (
    <CartContext.Provider value={{ cart, setCart }} >
      {children}
    </CartContext.Provider>
  )
}