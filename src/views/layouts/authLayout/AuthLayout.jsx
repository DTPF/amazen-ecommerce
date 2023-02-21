import React, { useEffect, Suspense, lazy } from "react";
import { useNavigate } from 'react-router-dom';
import { useCheckIfUserIsLogged } from "../../../providers/authProvider";
const SubRoutes = lazy(() => import('../../../config/SubRoutes'));
const FooterAuth = lazy(() => import('../../components/auth/layout/footerAuth'));

export default function AuthLayout({ routes }) {
  const isUserLogged = useCheckIfUserIsLogged();
  let navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    isUserLogged && isMounted && navigate('/');
    return () => { isMounted = false }
  }, [isUserLogged, navigate]);

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