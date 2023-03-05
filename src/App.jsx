import Routes from './routes/Routes';
import indexedDB from './indexedDB';
import AuthProvider from './context/Auth/AuthProvider';
import ProductProvider from './context/Product/ProductProvider';
import CartProvider from './context/Cart/CartProvider';
import { Toaster } from 'react-hot-toast';

export default function App() {
  indexedDB();
  // Switch views/layouts
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Toaster />
          <Routes />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}