import React, { useEffect, useState } from 'react';
import { useWishlistContext } from '../../../../providers/WishlistProvider';
import './BottomList.scss';

export default function BottomList() {
  const { wishlist } = useWishlistContext();
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    wishlist && wishlist.forEach(item => {
      if (item.status === 'active') {
        setHasCompleted(false)
      }
    });
  }, [wishlist])

  useEffect(() => {
    wishlist && wishlist.forEach(item => {
      if (item.status === 'completed') {
        setHasCompleted(true)
      }
    });
  }, [wishlist])

  return (
    <div className='bottom-list'>
      {hasCompleted && (
        <p className='bottom-list__delete-completed'>
          Borrar completado
        </p>
      )}
    </div>
  )
}