import { WishlistProvider } from './providers/WishlistProvider';
import dbIndexed from './indexedDB';
import WishlistPage from './pages/WishlistPage';

export default function App() {
  dbIndexed();
  return (
    <WishlistProvider>
      <WishlistPage />
    </WishlistProvider>
  );
}
