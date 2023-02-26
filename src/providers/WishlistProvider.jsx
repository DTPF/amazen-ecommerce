import React, { useEffect, createContext, useContext, useState } from 'react';
import useGetWishlistByUserId from '../indexedDB/api/wishlist/useGetWishlistByUserId';

export const WishlistContext = createContext(null);

export function WishlistProvider( { children }) {
  const [wishlist, setWishlist] = useState([]);
  const wishlistIdb = useGetWishlistByUserId('d@mail.com');

  useEffect(() => {
    let isMounted = true;
    isMounted && setWishlist(wishlistIdb.wishlistIndexed);
    return () => { isMounted = false }
  }, [wishlistIdb]);

  return (
    <WishlistContext.Provider value={{wishlist, setWishlist}} >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlistContext() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlistContext must be used within a WishlistContextProvider');
  }
  return context;
}