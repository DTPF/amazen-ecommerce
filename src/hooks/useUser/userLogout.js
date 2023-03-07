import { logout } from '../../api/auth';
import toaster from '../../views/components/UI/toast/toast';

export default function userLogout(setUser, setCart) {
  logout().then(() => {
    setUser({
      isLoading: false,
      userData: null,
    });
    setCart(0)
    toaster('¡Hasta pronto!');
  })
  .catch(err => {
    toaster(err.message, 'error');
  });
}