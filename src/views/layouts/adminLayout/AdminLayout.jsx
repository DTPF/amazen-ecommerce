import React, { useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '../../../providers/authProvider';
import './AdminLayout.scss';
const HeaderAdmin = lazy(() => import('../../components/admin/layout/headerAdmin/HeaderAdmin'));
const FooterAdmin = lazy(() => import('../../components/admin/layout/footerAdmin/FooterAdmin'));
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));

export default function AdminLayout({ routes }) {
  const getUser = useGetUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (getUser && (getUser.role !== 'admin')) {
      navigate('/');
    }
  }, [getUser, navigate]);

  return (
    <div className='admin-layout'>
      {getUser.role === 'admin' && (
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
