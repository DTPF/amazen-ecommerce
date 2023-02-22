import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

export function CartProvider( { children }) {
  const [cart, setCart] = useState([]);
  const cartLS = localStorage.getItem('cart');

  useEffect(() => {
    setCart(JSON.parse(cartLS));
  }, [cartLS]);

  return (
    <CartContext.Provider value={{cart, setCart}} >
      {children}
    </CartContext.Provider>
  )
}