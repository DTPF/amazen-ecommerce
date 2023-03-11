import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";

export default function TravelPage() {
  return (
    <HelmetSEO title={'Amazén | Viajes'}>
      <Products category={'travel'} title={'Productos para viajar'} />
    </HelmetSEO>
  );
}