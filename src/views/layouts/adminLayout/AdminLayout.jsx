import React from 'react';
import { DOMSubRoutes } from '../../../config/DOMRoutes';

export default function AdminLayout({ routes }) {
  return (
    <div className='main-layout'>
      header admin

      <div className='main-layout__main'>
        <DOMSubRoutes routes={routes} /> {/* Switch views/pages/admin */}
      </div>

      footer admin
    </div>
  );
}
