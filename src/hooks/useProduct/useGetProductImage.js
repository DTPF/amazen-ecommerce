import { useEffect, useState } from 'react';
import { getProductImageApi } from '../../api/products';

export default function useGetProductImage(product) {
  const [image, setImage] = useState(undefined);
  
  useEffect(() => {
    let isMounted = true;
    if (product && product.images[0]) {
      getProductImageApi(product.images[0])
        .then(res => {
          isMounted && setImage(res.url)
        })
    }
    return () => { isMounted = false }
  }, [product])

  return [image];
}