import React, { useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
// import useGetUserFromIndexedDB from '../../../hooks/users/useGetUserFromIndexedDB';
import useUserContext from '../../../hooks/users/useUserContext';
import './AdminLayout.scss';
const HeaderAdmin = lazy(() => import('../../components/admin/layout/headerAdmin/HeaderAdmin'));
const FooterAdmin = lazy(() => import('../../components/admin/layout/footerAdmin/FooterAdmin'));
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));

export default function AdminLayout({ routes }) {
  const { userContext } = useUserContext();
  // const userIDB = useGetUserFromIndexedDB(userContext.id);
  const navigate = useNavigate();

  useEffect(() => {
    userContext?.role !== 'admin' && navigate('/');
  }, [userContext, navigate]);

  return (
    <div className='admin-layout'>
      {userContext?.role === 'admin' && (
        <Suspense fallback={<></>}>
          <HeaderAdmin />

          <div className='admin-layout__main'>
            <SubRoutes routes={routes} /> {/* Switch views/pages/admin */}
          </div>

          <FooterAdmin />
        </Suspense>
      )}
    </div>
  );
}
