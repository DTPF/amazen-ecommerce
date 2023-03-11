import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";

export default function BookPage() {
  return (
    <HelmetSEO title={'Amazén | Libros'}>
      <Products category={'book'} title={'Libros y revistas'} />
    </HelmetSEO>
  );
}