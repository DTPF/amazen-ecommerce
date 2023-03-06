import React, { useEffect, Suspense, lazy } from "react";
import { useNavigate } from 'react-router-dom';
import useAuthContext from "../../../hooks/useAuthContext";
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));
const FooterAuth = lazy(() => import('../../components/auth/layout/FooterAuth'));

export default function AuthLayout({ routes }) {
  const { user, setUser } = useAuthContext();
  const { userData, isLoading } = user;
  let navigate = useNavigate();

  useEffect(() => {
    setUser({
      isLoading: false,
      userData: null
    })
  }, [setUser]);

  useEffect(() => {
    userData && !isLoading && navigate('/');
  }, [userData, isLoading, navigate]);

  return (
    <div className='auth-layout'>
      {(!userData && !isLoading) && (
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