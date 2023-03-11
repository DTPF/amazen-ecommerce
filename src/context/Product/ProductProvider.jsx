import React, { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';
import { getProductsApi } from '../../api/products';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState(undefined);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchData = async function () {
      await getProductsApi(category).then(data => {
        setProducts(data?.products)
      })
    }
    fetchData();
  }, [category]);

  return (
    <ProductContext.Provider value={{ products, setCategory, setProducts }} >
      {children}
    </ProductContext.Provider>
  )
}