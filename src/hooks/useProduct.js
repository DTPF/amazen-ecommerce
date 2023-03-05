import { useContext } from 'react';
import { ProductContext } from '../context/Product/ProductContext.jsx';

export default function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductContextProvider');
  }
  return context;
}