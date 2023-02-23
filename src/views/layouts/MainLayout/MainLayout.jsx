import React, { Suspense, lazy } from "react";
import './MainLayout.scss';
const HeaderMain = lazy(() => import('../../components/main/desktop/layout/HeaderMain'));
const FooterMain = lazy(() => import('../../components/main/desktop/layout/FooterMain'));
const MenuMain = lazy(() => import('../../components/main/desktop/layout/MenuMain'));
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));

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