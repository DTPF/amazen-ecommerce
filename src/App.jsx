import Routes from './routes/Routes';
import indexedDB from './indexedDB';
import { CartProvider } from './providers/CartProvider';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

export default function App() {
  // Create indexedDb and insert first data
  indexedDB();
  // Switch views/layouts
  return (
    <AuthProvider>
      <CartProvider>
        <Toaster />
        <Routes />
      </CartProvider>
    </AuthProvider>
  );
}