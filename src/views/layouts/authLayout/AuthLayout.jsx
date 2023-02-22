import React, { useEffect, Suspense, lazy } from "react";
import { useNavigate } from 'react-router-dom';
import { useUserContext } from "../../../providers/UserProvider";
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));
const FooterAuth = lazy(() => import('../../components/auth/layout/footerAuth'));

export default function AuthLayout({ routes }) {
  const { user } = useUserContext();
  let navigate = useNavigate();

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate]);

  return (
    <div className='auth-layout'>
      <Suspense fallback={<></>}>
        <div className='auth-layout__main'>
          <SubRoutes routes={routes} /> {/* Switch views/pages/main */}
        </div>

        <FooterAuth />
      </Suspense>
    </div>
  );
}