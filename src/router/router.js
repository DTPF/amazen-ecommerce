import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, AdminRoute, RejectUserLoggedRoute } from "./RouterMiddlewares";

// LAYOUTS
import BasicLayout from "../views/layouts/MainLayout";
import AdminLayout from "../views/layouts/AdminLayout";
import AuthLayout from "../views/layouts/AuthLayout";

// MAIN PAGES
import Home from "../views/pages/main/Home";
//------- Products ---------
import Products from "../views/pages/main/ProductsPage";
import AllProduct from "../views/pages/main/ProductsPage/AllProductPage";
import Travel from "../views/pages/main/ProductsPage/TravelPage";
import Book from "../views/pages/main/ProductsPage/BookPage";
import Technology from "../views/pages/main/ProductsPage/TechnologyPage";
//--------------------------
import Help from "../views/pages/main/Help";
import Cart from "../views/pages/main/Cart";

// AUTH PAGES
import Login from "../views/pages/auth/LoginPage";
import Register from "../views/pages/auth/RegisterPage";

// ADMIN PAGES
import HomeAdmin from "../views/pages/admin/HomeAdmin";
import ProductsAdmin from "../views/pages/admin/ProductsAdmin";

// MESSAGES PAGES
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
        path: "products",
        element: <Products />,
        children: [
          {
            path: "all",
            element: <AllProduct />,
          },
          {
            path: "travel",
            element: <Travel />,
          },
          {
            path: "book",
            element: <Book />,
          },
          {
            path: "technology",
            element: <Technology />,
          }
        ]
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
        path: "users",
        element: <AdminRoute><CommingSoon /></AdminRoute>,
      },
      {
        path: "*",
        element: <AdminRoute><Error /></AdminRoute>
      }
    ],
  },
]);

export default router;