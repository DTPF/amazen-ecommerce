import { WishlistProvider } from './providers/WishlistProvider';
import dbIndexed from './indexedDB';
import WishlistPage from './views/pages/WishlistPage';

export default function App() {
  dbIndexed();
  return (
    <WishlistProvider>
      <WishlistPage />
    </WishlistProvider>
  );
}
