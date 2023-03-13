import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import { responsiveBreak } from "../../utils/componentsConstants";
import './MainLayout.scss';
// Desktop
const HeaderMainDesktop = lazy(() => import('../../components/main/desktop/layout/HeaderMain'));
const FooterMainDesktop = lazy(() => import('../../components/main/desktop/layout/FooterMain'));
const MenuMain = lazy(() => import('../../components/main/desktop/layout/MenuMain'));
//Mobile
const HeaderMainMobile = lazy(() => import('../../components/main/mobile/layout/HeaderMainMobile'))
const FooterMainMobile = lazy(() => import('../../components/main/mobile/layout/FooterMainMobile'))
const NavBarMobile = lazy(() => import('../../components/main/mobile/layout/NavBarMobile'))

export default function MainLayout() {
  const [innerWidth] = useWindowSizeReport();

  return (
    <div className='main-layout'>
      <Suspense fallback={<></>}>
        {(innerWidth > responsiveBreak) ? (
          <>
            <HeaderMainDesktop />
            <MenuMain />
          </>
        ) : (
          <>
            <HeaderMainMobile />
            <NavBarMobile />
          </>
        )}

        <div className='main-layout__main'>
          <Outlet />
        </div>

        {(innerWidth > responsiveBreak) ? <FooterMainDesktop /> : <FooterMainMobile />}
      </Suspense>
    </div>
  );
}