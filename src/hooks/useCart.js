import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';

export default function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}