import Routes from './routes/Routes';
import indexedDB from './indexedDB';
import { CartProvider } from './providers/CartProvider';
import { UserProvider } from './providers/UserProvider';

export default function App() {
  // Create indexedDb and insert first data
  indexedDB();
  // Switch views/layouts
  return (
    <UserProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </UserProvider>
  );
}