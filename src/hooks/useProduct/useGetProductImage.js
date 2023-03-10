import { useEffect, useState } from 'react';
import { getProductImageApi } from '../../api/products';

export default function useGetProductImage(imageName) {
  const [image, setImage] = useState(undefined);
  
  useEffect(() => {
    let isMounted = true;
    if (imageName) {
      getProductImageApi(imageName)
        .then(res => {
          isMounted && setImage(res.url)
        })
    }
    return () => { isMounted = false }
  }, [imageName])

  return [image];
}