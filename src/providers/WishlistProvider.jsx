import React, {
  useEffect,
  createContext,
  useContext,
  useState
} from 'react';
import useGetWishlistByUserId from '../indexedDB/api/wishlist/useGetWishlistByUserId';

export let EMAIL = 'd@mail.com';

export const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const wishlistIdb = useGetWishlistByUserId(EMAIL, window.location.pathname.substring(1));
  let newWishlist = [...wishlist];

  useEffect(() => {
    setWishlist(newWishlist.sort((a,b) => a.createdAt - b.createdAt))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlistIdb]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }} >
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