import { useEffect, useContext, useState } from 'react';
import { CartContext } from '../providers/CartProvider';  

export default function useSetCartCount() {
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    let isMounted = true;
    if (cart) {
      isMounted && setCartCount(cart.length);
    }
    return () => { isMounted = false }
  }, [cart]);

  return cartCount;
}