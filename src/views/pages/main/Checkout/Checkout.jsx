import React from 'react';
import CheckoutComponent from '../../../components/main/CheckoutComponent';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";
import './checkout.scss';

export default function Checkout() {
  return (
    <HelmetSEO title={'Amazén | Realizar pedido'}>
      <div className='checkout'>
        <h1>Confirma los datos</h1>
        <CheckoutComponent />
      </div>
    </HelmetSEO>
  );
}