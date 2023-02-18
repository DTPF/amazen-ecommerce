import React, { Suspense, lazy } from "react";
import './MainLayout.scss';
const HeaderMain = lazy(() => import('../../components/main/desktop/layout/headerMain'));
const FooterMain = lazy(() => import('../../components/main/desktop/layout/footerMain'));
const MenuMain = lazy(() => import('../../components/main/desktop/layout/menuMain/MenuMain'));
const SubRoutes = lazy(() => import('../../../config/SubRoutes'));

export default function MainLayout({ routes }) {
  return (
    <div className='main-layout'>
      <Suspense fallback={<></>}>
        <HeaderMain />
        <MenuMain />

        <div className='main-layout__main'>
          <SubRoutes routes={routes} /> {/* Switch views/pages/main */}
        </div>

        <FooterMain />
      </Suspense>
    </div>
  );
}