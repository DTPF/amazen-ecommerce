import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, AdminRoute, RejectUserLoggedRoute } from "./routerMiddlewares";

// Layout
import BasicLayout from "../views/layouts/MainLayout";
import AdminLayout from "../views/layouts/AdminLayout";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "bestsellers",
        element: <BestSellers />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "cart",
        element: <ProtectedRoute><Cart /></ProtectedRoute>,
      },
      {
        path: "comming-soon",
        element: <CommingSoon />,
      },
      {
        path: "*",
        element: <Error />
      }
    ],
  },
  {
    path: "auth",
    element: <RejectUserLoggedRoute><AuthLayout /></RejectUserLoggedRoute>,
    children: [
      {
        path: "login",
        element: <RejectUserLoggedRoute><Login /></RejectUserLoggedRoute>,
      },
      {
        path: "register",
        element: <RejectUserLoggedRoute><Register /></RejectUserLoggedRoute>,
      },
      {
        path: "*",
        element: <RejectUserLoggedRoute><Error /></RejectUserLoggedRoute>
      }
    ],
  },
  {
    path: "admin",
    element: <AdminRoute><AdminLayout /></AdminRoute>,
    children: [
      {
        path: "home",
        element: <AdminRoute><HomeAdmin /></AdminRoute>,
      },
      {
        path: "products",
        element: <AdminRoute><ProductsAdmin /></AdminRoute>,
      },
      {
        path: "*",
        element: <AdminRoute><Error /></AdminRoute>
      }
    ],
  },
]);

export default router;