import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";
import './AllProductPage.scss';

export default function AllProductPage() {
  return (
    <HelmetSEO title={'Amazén | Todos los productos'}>
      <div className='all-products-page'>
        <h1>Todos los productos</h1>
        <Products category={'all'} />
      </div>
    </HelmetSEO>
  );
}