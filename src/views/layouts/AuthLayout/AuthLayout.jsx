import React, { Suspense, lazy } from "react";
import { Outlet } from 'react-router-dom';
const FooterAuth = lazy(() => import('../../components/auth/layout/FooterAuth'));

export default function AuthLayout() {
  return (
    <div className='auth-layout'>
      <Suspense fallback={<></>}>
        <div className='auth-layout__main'>
          <Outlet />
        </div>
        <FooterAuth />
      </Suspense>
    </div>
  );
}