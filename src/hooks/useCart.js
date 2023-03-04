import { useContext } from 'react';
import { CartContext } from '../context/Cart/CartContext';

export default function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}