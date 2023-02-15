// Layout
import LayoutAdmin from "../views/layouts/adminLayout";
import LayoutBasic from "../views/layouts/mainLayout";

// Web Pages
import Home from "../views/pages/main/home";
import BestSellers from "../views/pages/main/bestSellers";

import Error from '../views/pages/error/Error';


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
      }
    ]
  },
  {
    path: "/admin/*",
    exact: false,
    component: LayoutAdmin,
    routes: [
      {
        path: "*",
        exact: "false",
        component: Error
      }
    ]
  }
];

export default routes;