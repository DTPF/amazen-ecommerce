import React, { useEffect, useState } from 'react';
import { ProductContext } from './ProductContext';
import { getProductsApi } from '../../api/products';

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async function () {
      await getProductsApi().then(data => {
        isMounted && setProducts(data.products)
      })
    }
    fetchData();
    return () => { isMounted = false }
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }} >
      {children}
    </ProductContext.Provider>
  )
}