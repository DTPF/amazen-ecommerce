// Layout
import LayoutAdmin from "../views/layouts/adminLayout";
import LayoutBasic from "../views/layouts/mainLayout";

// Main Pages
import Home from "../views/pages/main/home";
import BestSellers from "../views/pages/main/bestSellers";
import Stores from "../views/pages/main/stores";
import Help from "../views/pages/main/help";

// Admin Pages
import HomeAdmin from "../views/pages/admin/homeAdmin";
import ProductsAdmin from "../views/pages/admin/productsAdmin";

// Messages pages
import Error from '../views/pages/messages/error';
import CommingSoon from "../views/pages/messages/commingSoon";


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