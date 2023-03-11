import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";
import './TechnologyPage.scss';

export default function TechnologyPage() {
  return (
    <HelmetSEO title={'Amazén | Tecnología'}>
      <div className='technology-page'>
        <h1>Tecnología</h1>
        <Products category={'technology'} />
      </div>
    </HelmetSEO>
  );
}