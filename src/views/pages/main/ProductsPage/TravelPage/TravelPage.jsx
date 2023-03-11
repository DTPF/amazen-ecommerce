import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";
import './TravelPage.scss';

export default function TravelPage() {
  return (
    <HelmetSEO title={'Amazén | Viajes'}>
      <div className='travel-page'>
        <h1>Productos para viajar</h1>
        <Products category={'travel'} />
      </div>
    </HelmetSEO>
  );
}