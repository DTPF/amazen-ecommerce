import React from 'react';
import ProductAdminComponent from '../../../components/admin/ProductsAdmin/ProductAdminComponent';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";

export default function ProductsAdmin() {
  return (
    <HelmetSEO title={'Amazén | Admin Products'}>
       <ProductAdminComponent />
    </HelmetSEO>
  );
}