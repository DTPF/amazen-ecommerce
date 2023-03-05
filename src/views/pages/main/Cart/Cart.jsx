import React from 'react';
import CartComponent from '../../../components/main/CartComponent';
import HelmetSEO from "../../../utils/HelmetSEO/HelmetSEO";

export default function Cart() {
  return (
    <HelmetSEO title={'Amazén | Cart'}>
      <CartComponent />
    </HelmetSEO>
  )
}