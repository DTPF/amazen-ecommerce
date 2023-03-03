import React, { useEffect, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './AdminLayout.scss';
const HeaderAdmin = lazy(() => import('../../components/admin/layout/HeaderAdmin/HeaderAdmin'));
const FooterAdmin = lazy(() => import('../../components/admin/layout/FooterAdmin'));
const SubRoutes = lazy(() => import('../../../routes/SubRoutes'));

export default function AdminLayout({ routes }) {
  const { user } = useAuth();
  const { userData, isLoading } = user;
  const navigate = useNavigate();

  useEffect(() => {
    !userData && !isLoading && navigate('/');
  }, [userData, isLoading, navigate]);

  useEffect(() => {
    (userData?.role !== 'admin') && !isLoading && navigate('/');
  }, [userData, isLoading, navigate]);

  if (userData?.role === 'admin') {
    return (
      <div className='admin-layout'>
        <Suspense fallback={<></>}>
          <HeaderAdmin />
          <div className='admin-layout__main'>
            <SubRoutes routes={routes} /> {/* Switch views/pages/admin */}
          </div>
          <FooterAdmin />
        </Suspense>
      </div>
    );
  }
}