// Layout
import LayoutAdmin from "../views/layouts/AdminLayout";
import LayoutBasic from "../views/layouts/MainLayout";
import AuthLayout from "../views/layouts/AuthLayout";

// Main Pages
import Home from "../views/pages/main/Home";
import BestSellers from "../views/pages/main/BestSellers";
import Stores from "../views/pages/main/Stores";
import Help from "../views/pages/main/Help";
import Cart from "../views/pages/main/Cart";

// Auth pages
import Login from "../views/pages/auth/LoginPage";
import Register from "../views/pages/auth/RegisterPage";

// Admin Pages
import HomeAdmin from "../views/pages/admin/HomeAdmin";
import ProductsAdmin from "../views/pages/admin/ProductsAdmin";

// Messages pages
import Error from '../views/pages/messages/Error';
import CommingSoon from "../views/pages/messages/CommingSoon";


const routes = [
  {
    path: "*",
    exact: false,
    component: LayoutBasic,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/bestsellers",
        exact: true,
        component: BestSellers,
      },
      {
        path: "/stores",
        exact: true,
        component: Stores,
      },
      {
        path: "/help",
        exact: true,
        component: Help,
      },
      {
        path: "/cart",
        exact: true,
        component: Cart,
      },
      {
        path: "/comming-soon",
        exact: true,
        component: CommingSoon,
      },
      {
        path: "*",
        exact: "false",
        component: Error
      }
    ]
  },
  {
    path: "/auth/*",
    exact: false,
    component: AuthLayout,
    routes: [
      {
        path: "/",
        exact: true,
        component: Login,
      },
      {
        path: "/register",
        exact: true,
        component: Register,
      },
      {
        path: "*",
        exact: "false",
        component: Error
      }
    ]
  },
  {
    path: "/admin/*",
    exact: false,
    component: LayoutAdmin,
    routes: [
      {
        path: "/",
        exact: true,
        component: HomeAdmin,
      },
      {
        path: "/products",
        exact: true,
        component: ProductsAdmin,
      },
      {
        path: "*",
        exact: "false",
        component: Error
      }
    ]
  }
];

export default routes;