import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";

export default function AllProductPage() {
  return (
    <HelmetSEO title={'Amazén | Todos los productos'}>
      <Products category={'all'} title={'Todos los productos'} />
    </HelmetSEO>
  );
}