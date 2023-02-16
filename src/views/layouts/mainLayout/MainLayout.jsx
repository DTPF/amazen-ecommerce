import React, { Suspense, lazy } from "react";
import { DOMSubRoutes } from '../../../config/DOMRoutes';
import './MainLayout.scss';
const HeaderMain = lazy(() => import('../../components/main/desktop/layout/headerMain'));
const FooterMain = lazy(() => import('../../components/main/desktop/layout/footerMain'));
const MenuMain = lazy(() => import('../../components/main/desktop/layout/menuMain/MenuMain'));

export default function MainLayout({ routes }) {
  return (
    <div className='main-layout'>
      <Suspense fallback={<></>}>
        <HeaderMain />
        <MenuMain />

        <div className='main-layout__main'>
          <DOMSubRoutes routes={routes} /> {/* Switch views/pages/main */}
        </div>

        <FooterMain />
      </Suspense>
    </div>
  );
}