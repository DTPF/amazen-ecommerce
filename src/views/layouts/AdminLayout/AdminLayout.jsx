import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import './AdminLayout.scss';
const HeaderAdmin = lazy(() => import('../../components/admin/layout/HeaderAdmin/HeaderAdmin'));
const FooterAdmin = lazy(() => import('../../components/admin/layout/FooterAdmin'));

export default function AdminLayout() {
  return (
    <div className='admin-layout'>
      <Suspense fallback={<></>}>
        <HeaderAdmin />
        <div className='admin-layout__main'>
          <Outlet />
        </div>
        <FooterAdmin />
      </Suspense>
    </div>
  );
}