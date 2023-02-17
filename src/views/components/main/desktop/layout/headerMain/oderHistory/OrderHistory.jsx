import React from 'react';
import orderHistoryImage from '../../../../../../../assets/images/order-history.png';
import './OrderHistory.scss';

export default function OrderHistory() {
  return (
    <div className='order-history'>
      <img className='order-history__image' src={orderHistoryImage} alt='Order and history' />
    </div>
  );
}