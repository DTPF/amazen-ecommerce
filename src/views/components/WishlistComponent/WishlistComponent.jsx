import React, { useEffect } from 'react';
import { useWishlistContext } from '../../../providers/WishlistProvider';
import useGetWishlistByUserId from '../../../indexedDB/api/wishlist/useGetWishlistByUserId';
import HeaderWishlist from './HeaderWishlist';
import WishlistItem from './WishListItem';

export default function WishlistComponent({ status }) {
  const { wishlist, setWishlist } = useWishlistContext();
  const wishlistIdb = useGetWishlistByUserId('d@mail.com', status);

  useEffect(() => {
    setWishlist(wishlistIdb)
  }, [setWishlist, wishlistIdb]);

  return (
    <div>
      <HeaderWishlist />
      {wishlist.length === 0 && <div>Lista vacía</div>}
      {wishlist && wishlist.map((wishlistItem, index) => (
        <WishlistItem
          key={index}
          wishlistItem={wishlistItem}
        />
      ))}
    </div>
  )
}