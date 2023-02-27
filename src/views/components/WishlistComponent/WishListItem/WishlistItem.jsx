import React, { useRef } from 'react';
import { useWishlistContext } from '../../../../providers/WishlistProvider';
import deleteWishItemById from '../../../../indexedDB/api/wishlist/deleteItemByIdIDB';

export default function WishlistItem({ wishlistItem }) {
  const { wishlist, setWishlist } = useWishlistContext();
  const divElement = useRef(null);

  const handleDeleteItem = (id) => {
    deleteWishItemById(id).then(() => {
      let list = [...wishlist];
      list.forEach((item, key) => {
        if (item.id === Math.round(divElement.current.id)) {
          list.splice(key, 1);
        }
      })
      setWishlist(list);
    });
  }

  return (
    <div ref={divElement} id={wishlistItem.id}>
      {wishlistItem.link && <a href={wishlistItem.link}>Enlace</a>}
      {wishlistItem.title}
      <button onClick={(e) => handleDeleteItem(wishlistItem.id)}>Borrar</button>
    </div>
  )
}