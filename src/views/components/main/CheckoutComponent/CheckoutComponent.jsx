import React, { useState } from 'react'
import CartCheckout from './CartCheckout';
import UserCheckout from './UserCheckout';
import PaymentCheckout from './PaymentCheckout';
import useAuthContext from '../../../../hooks/useAuthContext';
import useCartContext from '../../../../hooks/useCartContext';
import OrderResult from './OrderResult';
import './checkoutComponent.scss';

export default function CheckoutComponent() {
  const { user } = useAuthContext();
  const { userData } = user;
  const { cart } = useCartContext();
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [discount, setDiscount] = useState(0);

  return (
    <div className='checkout-component'>
      <div className='checkout-component__row1'>
        <CartCheckout cart={cart} fetchedProducts={fetchedProducts} setFetchedProducts={setFetchedProducts} />
      </div>
      <div className='checkout-component__row2'>
        <UserCheckout userData={userData} />
        <OrderResult cart={cart} setDiscount={setDiscount} />
        <PaymentCheckout cart={cart} userData={userData} discount={discount} />
      </div>
    </div>
  )
}