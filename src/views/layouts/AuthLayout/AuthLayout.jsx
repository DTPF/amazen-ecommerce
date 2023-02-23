import React, { useEffect, Suspense, lazy } from "react";
import { useNavigate } from 'react-router-dom';
import useUserContext from "../../../hooks/useUserContext";
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));
const FooterAuth = lazy(() => import('../../components/auth/layout/FooterAuth'));

export default function AuthLayout({ routes }) {
  const { userContext } = useUserContext();
  let navigate = useNavigate();

  useEffect(() => {
    userContext && navigate('/');
  }, [userContext, navigate]);

  return (
    <div className='auth-layout'>
      {!userContext && (
        <Suspense fallback={<></>}>
          <div className='auth-layout__main'>
            <SubRoutes routes={routes} /> {/* Switch views/pages/main */}
          </div>

          <FooterAuth />
        </Suspense>
      )}
    </div>
  );
}