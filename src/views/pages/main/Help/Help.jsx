import React from 'react';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";
import CommingSoon from '../../messages/CommingSoon';
import './help.scss';

export default function Help() {
  return (
    <HelmetSEO title={'Amazén | Servicio de atención al cliente'}>
      <div className='help'>
        <h1>Atención al cliente</h1>
        <CommingSoon />
      </div>
    </HelmetSEO>
  );
}