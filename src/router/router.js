import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, AdminRoute, RejectUserLoggedRoute } from "./RouterMiddlewares";

// LAYOUTS
const BasicLayout = lazy(() => import('../views/layouts/MainLayout'));
const AdminLayout = lazy(() => import('../views/layouts/AdminLayout'));
const AuthLayout = lazy(() => import('../views/layouts/AuthLayout'));

// MAIN PAGES
const Home = lazy(() => import('../views/pages/main/Home'));
const Products = lazy(() => import('../views/pages/main/ProductsPage'));
const ProductPageFiltered = lazy(() => import('../views/pages/main/ProductsPage/ProductPageFiltered'));
const Help = lazy(() => import('../views/pages/main/Help'));
const Cart = lazy(() => import('../views/pages/main/Cart'));
const Checkout = lazy(() => import('../views/pages/main/Checkout'));

// AUTH PAGES
const Login = lazy(() => import('../views/pages/auth/LoginPage'));
const Register = lazy(() => import('../views/pages/auth/RegisterPage'));

// ADMIN PAGES
const HomeAdmin = lazy(() => import('../views/pages/admin/HomeAdmin'));
const ProductsAdmin = lazy(() => import('../views/pages/admin/ProductsAdmin'));

// MESSAGES PAGES
const Error = lazy(() => import('../views/pages/messages/Error'));
const CommingSoon = lazy(() => import('../views/pages/messages/CommingSoon'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<></>}><BasicLayout /></Suspense>,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<></>}><Home /></Suspense>,
      },
      {
        path: "products",
        element: <Suspense fallback={<></>}><Products /></Suspense>,
        children: [
          {
            path: ":query",
            element: <Suspense fallback={<></>}><ProductPageFiltered /></Suspense>,
          },
        ]
      },
      {
        path: "help",
        element: <Suspense fallback={<></>}><Help /></Suspense>,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<></>}>
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          </Suspense>
        ),
      },
      {
        path: "comming-soon",
        element: <Suspense fallback={<></>}><CommingSoon /></Suspense>,
      },
      {
        path: "*",
        element: <Suspense fallback={<></>}><Error /></Suspense>
      }
    ],
  },
  {
    path: "auth",
    element: (
      <Suspense fallback={<></>}>
        <RejectUserLoggedRoute>
          <AuthLayout />
        </RejectUserLoggedRoute>
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<></>}>
            <RejectUserLoggedRoute>
              <Login />
            </RejectUserLoggedRoute>
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<></>}>
            <RejectUserLoggedRoute>
              <Register />
            </RejectUserLoggedRoute>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <RejectUserLoggedRoute>
              <Error />
            </RejectUserLoggedRoute>
          </Suspense>
        )
      }
    ],
  },
  {
    path: "admin",
    element: (
      <Suspense fallback={<></>}>
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      </Suspense>
    ),
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<></>}>
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<></>}>
            <AdminRoute>
              <ProductsAdmin />
            </AdminRoute>
          </Suspense>
        ),
      },
      {
        path: "users",
        element: (
          <Suspense fallback={<></>}>
            <AdminRoute>
              <CommingSoon />
            </AdminRoute>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<></>}>
            <AdminRoute>
              <Error />
            </AdminRoute>
          </Suspense>
        )
      }
    ],
  },
]);

export default router;