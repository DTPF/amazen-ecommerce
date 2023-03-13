import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import NavAdmin from '../../components/admin/layout/NavAdmin';
import './adminLayout.scss';
const HeaderAdmin = lazy(() => import('../../components/admin/layout/HeaderAdmin/HeaderAdmin'));
const FooterAdmin = lazy(() => import('../../components/admin/layout/FooterAdmin'));

export default function AdminLayout() {
  return (
    <div className='admin-layout'>
      <Suspense fallback={<></>}>
        <HeaderAdmin />
        <NavAdmin />
        <div className='admin-layout__main'>
          <Outlet />
        </div>
        <div className='admin-layout__footer'>
          <FooterAdmin />
        </div>
      </Suspense>
    </div>
  );
}