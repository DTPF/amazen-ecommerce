import React, { Suspense, lazy } from "react";
import useWindowSizeReport from "../../../hooks/useWindowSizeReport";
import HeaderMainMobile from "../../components/main/mobile/layout/HeaderMainMobile";
import NavBarMobile from "../../components/main/mobile/layout/NavBarMobile";
import { responsiveBreak } from "../../utils/componentsConstants";
import './MainLayout.scss';
const HeaderMainDesktop = lazy(() => import('../../components/main/desktop/layout/HeaderMain'));
const FooterMainDesktop = lazy(() => import('../../components/main/desktop/layout/FooterMain'));
const MenuMain = lazy(() => import('../../components/main/desktop/layout/MenuMain'));
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));

const FooterMainMobile = lazy(() => import('../../components/main/mobile/layout/FooterMainMobile'));

export default function MainLayout({ routes }) {
  const innerWidth = useWindowSizeReport();

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
          <SubRoutes routes={routes} /> {/* Switch views/pages/main */}
        </div>

        {(innerWidth > responsiveBreak) ? <FooterMainDesktop /> : <FooterMainMobile />}
      </Suspense>
    </div>
  );
}