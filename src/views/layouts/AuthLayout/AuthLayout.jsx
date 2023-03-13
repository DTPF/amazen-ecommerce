import React, { Suspense, lazy } from "react";
import { Outlet } from 'react-router-dom';
const FooterAuth = lazy(() => import('../../components/auth/layout/FooterAuth'));

export default function AuthLayout() {
  return (
    <Suspense fallback={<></>}>
      <Outlet />
      <FooterAuth />
    </Suspense>
  );
}