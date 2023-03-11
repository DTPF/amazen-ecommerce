import React from 'react';
import Products from '../../../../components/main/Products';
import HelmetSEO from "../../../../utils/HelmetSEO/HelmetSEO";

export default function TechnologyPage() {
  return (
    <HelmetSEO title={'Amazén | Tecnología'}>
      <Products category={'technology'} title={'Tecnología'} />
    </HelmetSEO>
  );
}