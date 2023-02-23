import React from 'react';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";
import './HomeAdmin.scss';

export default function HomeAdmin() {
  return (
    <HelmetSEO title={'Amazén | Admin Home'}>
      <div className='home-admin'>
        <h1 className='home-admin__title'>Estadísticas</h1>
      </div>
    </HelmetSEO>
  );
}