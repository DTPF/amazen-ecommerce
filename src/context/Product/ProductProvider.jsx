import React, { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';
import { getProducts } from '../../api/products';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const fetchData = async function () {
      await getProducts().then(data => {
        setProducts(data.products)
      })
    }
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }} >
      {children}
    </ProductContext.Provider>
  )
}