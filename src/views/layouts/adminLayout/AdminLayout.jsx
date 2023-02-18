import React, { Suspense, lazy } from 'react';
import './AdminLayout.scss';
const HeaderAdmin = lazy(() => import('../../components/admin/layout/headerAdmin/HeaderAdmin'));
const FooterAdmin = lazy(() => import('../../components/admin/layout/footerAdmin/FooterAdmin'));
const SubRoutes = lazy(() => import('../../../config/SubRoutes'));

export default function AdminLayout({ routes }) {
  return (
    <div className='admin-layout'>
      <Suspense fallback={<></>}>
        <HeaderAdmin />

        <div className='admin-layout__main'>
          <SubRoutes routes={routes} /> {/* Switch views/pages/admin */}
        </div>

        <FooterAdmin />
      </Suspense>
    </div>
  );
}
