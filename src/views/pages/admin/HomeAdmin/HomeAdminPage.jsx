import React from 'react';
import HomeAdminComponent from '../../../components/admin/HomeAdmin/HomeAdminComponent';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";

export default function HomeAdminPage() {
  return (
    <HelmetSEO title={'Amazén | Admin Home'}>
      <HomeAdminComponent />
    </HelmetSEO>
  );
}